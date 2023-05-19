import base64
import json

from datetime import datetime
from flask import make_response, jsonify

from helpers.Database import Database
from helpers.Encoder import AlchemyEncoder

from getPet.Entities.Client import Client as ClientEntity

class Client():
    def __init__(self):
        self.database = Database(__file__)
    
    def login(self, data):
        userCode = data['client_code']
        password = data['password']

        connection = self.database.ConnectSession()
        result = connection.query(ClientEntity).filter_by(deletion_date=None).where((ClientEntity.client_user_code == userCode) & (
            ClientEntity.password == password)).all()
        if len(result) == 0:
            return make_response(jsonify({'message': 'Client not found'}), 409)

        connection.expire_all()
        return make_response(jsonify({'message': 'Client authenticated'}), 200)
    
    def register(self, data):
        clientCode = data['client_code']
        name = data['name']
        email = data['email']
        password = data['password']
        modificationDate = datetime.today().strftime('%Y-%m-%d')
        creationDate = datetime.today().strftime('%Y-%m-%d')
        deletionDate = None

        connection = self.database.ConnectSession()
        result = connection.query(ClientEntity).filter_by(deletion_date=None).where((ClientEntity.client_user_code == clientCode) & (
            ClientEntity.name == name) & (ClientEntity.email == email)).all()
        if len(result) == 1:
            return make_response(jsonify({'message': 'Client already created'}), 409)

        userData = ClientEntity(client_user_code=clientCode, name=name, email=email, password=password,
                             modification_date=modificationDate, creation_date=creationDate, deletion_date=deletionDate)

        try:
            connection.add(userData)
            connection.commit()
            message = 'Client created successfully!'
            status = 201
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)

    def update(self, data):
        id = int(data['id'])
        clientCode = data['client_code']
        name = data['name']
        email = data['email']
        password = data['password']
        modificationDate = datetime.today().strftime('%Y-%m-%d')

        connection = self.database.ConnectSession()

        result = connection.query(ClientEntity).filter_by(
            deletion_date=None).where(ClientEntity.client_id == id).all()
        if len(result) == 0:
            return make_response(jsonify({'message': 'Client not found to update'}), 404)

        connection.query(ClientEntity).where(ClientEntity.client_id == id).update(
            {
                ClientEntity.client_user_code: clientCode,
                ClientEntity.name: name,
                ClientEntity.email: email,
                ClientEntity.password: password,
                ClientEntity.modification_date: modificationDate
            }, synchronize_session=False)

        try:
            connection.commit()
            message = 'Client updated successfully!'
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

        result = connection.query(ClientEntity).filter_by(
            deletion_date=None).where(ClientEntity.client_id == id).all()
        if len(result) == 0:
            return make_response(jsonify({'message': 'User not found to deactivate'}), 404)

        connection.query(ClientEntity).where(ClientEntity.client_id == id).update(
            {
                ClientEntity.deletion_date: deletionDate
            }, synchronize_session=False)

        try:
            connection.commit()
            message = 'Client deactivated successfully!'
            status = 200
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)
