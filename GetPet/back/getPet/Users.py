import base64
import json

from datetime import datetime
from flask import make_response, jsonify

from helpers.Database import Database
from helpers.Encoder import AlchemyEncoder

from getPet.Entities.Users import Users as UserEntity

from getPet.functions.Strings import Strings


class Users():
    def __init__(self):
        self.database = Database(__file__)

    def get(self):
        connection = self.database.ConnectSession()
        result = connection.query(UserEntity).filter_by(
            deletion_date=None).all()

        connection.expire_all()
        return json.dumps(result, cls=AlchemyEncoder)

    def getPermissions(self, data):
        user = data['user']

        connection = self.database.ConnectSession()
        result = connection.query(UserEntity.permission).filter_by(
            deletion_date=None).where(UserEntity.user_code == user).first()

        connection.expire_all()
        return json.dumps(result, cls=AlchemyEncoder)

    def insert(self, data):
        userCode = data['user_code']
        name = data['name']
        permissions = data['permissions']
        modificationDate = datetime.today().strftime('%Y-%m-%d')
        creationDate = datetime.today().strftime('%Y-%m-%d')
        deletionDate = None

        connection = self.database.ConnectSession()
        result = connection.query(UserEntity).filter_by(deletion_date=None).where((UserEntity.user_code == userCode) & (
            UserEntity.name == name)).all()
        if len(result) == 1:
            return make_response(jsonify({'message': 'User already created'}), 409)

        userData = UserEntity(user_code=userCode, name=name, permission=permissions,
                             modification_date=modificationDate, creation_date=creationDate, deletion_date=deletionDate)

        try:
            connection.add(userData)
            connection.commit()
            message = 'User created successfully!'
            status = 201
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)

    def update(self, data):
        id = int(data['id'])
        userCode = data['user_code']
        name = data['name']
        permission = data['permission']
        breed = data['breed']
        modificationDate = datetime.today().strftime('%Y-%m-%d')

        connection = self.database.ConnectSession()

        result = connection.query(UserEntity).filter_by(
            deletion_date=None).where(UserEntity.user_id == id).all()
        if len(result) == 0:
            return make_response(jsonify({'message': 'User not found to update'}), 404)

        connection.query(UserEntity).where(UserEntity.user_id == id).update(
            {
                UserEntity.user_code: userCode,
                UserEntity.name: name,
                UserEntity.permission: permission,
                UserEntity.breed: breed,
                UserEntity.modification_date: modificationDate
            }, synchronize_session=False)

        try:
            connection.commit()
            message = 'User updated successfully!'
            status = 200
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)


    def deactivate(self, data):
        id = int(data['id'])
        deletionDate = datetime.today().strftime('%Y-%m-%d')

        connection = self.database.ConnectSession()

        result = connection.query(UserEntity).filter_by(
            deletion_date=None).where(UserEntity.user_id == id).all()
        if len(result) == 0:
            return make_response(jsonify({'message': 'User not found to deactivate'}), 404)

        connection.query(UserEntity).where(UserEntity.user_id == id).update(
            {
                UserEntity.deletion_date: deletionDate
            }, synchronize_session=False)

        try:
            connection.commit()
            message = 'User deactivated successfully!'
            status = 200
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)
