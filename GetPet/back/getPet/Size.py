from helpers.Database import Database
from helpers.Encoder import AlchemyEncoder
from getPet.Entities.Sizes import Sizes

from datetime import datetime

from flask import make_response, jsonify

import json

class AnimalSizes():
    def __init__(self): 
        self.database = Database(__file__)

    def getSizes(self):
        connection = self.database.ConnectSession()
        result = connection.query(Sizes).all()

        return json.dumps(result, cls=AlchemyEncoder)

    def insert(self, data):
        sizeName = data['sizeName']
        modificationDate = datetime.today().strftime('%Y-%m-%d')
        creationDate = datetime.today().strftime('%Y-%m-%d')
        deletionDate = None

        connection = self.database.ConnectSession()
        sizeData = Sizes( 
                    size_name=sizeName, 
                    modification_date=modificationDate, 
                    creation_date=creationDate, 
                    deletion_date=deletionDate,
                    )

        try:
            connection.add(sizeData)
            connection.commit()
            message = 'Size inserted successfully!'
            status = 200
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return {'responseType': status, 'message': message}
        
    def update(self, data):
        id = int(data['id'])
        age = data['age']
        name = data['name']
        surname = data['surname']
        breed = data['breed']
        modificationDate = datetime.today().strftime('%Y-%m-%d')

        connection = self.database.ConnectSession()

        result = connection.query(Sizes).filter_by(
            deletion_date=None).where(Sizes.id == id).all()
        if len(result) == 0:
            return make_response(jsonify({'message': 'Sizes not found to update'}), 404)

        connection.query(Sizes).where(Sizes.id == id).update(
            {
                Sizes.age: age,
                Sizes.name: name,
                Sizes.surname: surname,
                Sizes.breed: breed,
                Sizes.modification_date: modificationDate
            }, synchronize_session=False)

        try:
            connection.commit()
            message = 'Sizes updated successfully!'
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

        result = connection.query(Sizes).filter_by(
            deletion_date=None).where(Sizes.id == id).all()
        if len(result) == 0:
            return make_response(jsonify({'message': 'Sizes not found to deactivate'}), 404)

        connection.query(Sizes).where(Sizes.id == id).update(
            {
                Sizes.deletion_date: deletionDate
            }, synchronize_session=False)

        try:
            connection.commit()
            message = 'Sizes deactivated successfully!'
            status = 200
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)