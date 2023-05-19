from helpers.Database import Database
from helpers.Encoder import AlchemyEncoder
from getPet.Entities.Pets import Pet
from getPet.Entities.PetImages import PetImages

from PIL import Image
import base64

from datetime import datetime

from flask import make_response, jsonify

import json


class GetPet():
    def __init__(self):
        self.database = Database(__file__)

    def getAllPets(self):
        connection = self.database.ConnectSession()
        result = connection.query(Pet).filter_by(deletion_date=None).all()

        return json.dumps(result, cls=AlchemyEncoder)
    
    def getPetBreeds(self):
        connection = self.database.ConnectSession()
        result = connection.query(Pet.breed).filter_by(deletion_date=None).distinct().all()

        breeds = [row[0] for row in result]

        return json.dumps(breeds, cls=AlchemyEncoder)

    def insert(self, data):
        age = data['age']
        name = data['name']
        surname = data['surname']
        sizeOf = data['size_id']
        breed = data['breed']
        modificationDate = datetime.today().strftime('%Y-%m-%d')
        creationDate = datetime.today().strftime('%Y-%m-%d')
        deletionDate = None

        connection = self.database.ConnectSession()
        result = connection.query(Pet).filter_by(deletion_date=None).where((Pet.name == name) & (
            Pet.age == age) & (Pet.surname == surname) & (Pet.breed == breed)).all()
        if len(result) == 1:
            return make_response(jsonify({'message': 'Pet already created'}), 409)

        petData = Pet(
            name=name,
            surname=surname,
            age=age,
            breed=breed,
            modification_date=modificationDate,
            creation_date=creationDate,
            deletion_date=deletionDate,
            size_id=sizeOf)

        try:
            connection.add(petData)
            connection.commit()
            message = 'Pet created successfully!'
            status = 201
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)

    def update(self, data):
        id = int(data['id'])
        age = data['age']
        name = data['name']
        surname = data['surname']
        breed = data['breed']
        modificationDate = datetime.today().strftime('%Y-%m-%d')

        connection = self.database.ConnectSession()

        result = connection.query(Pet).filter_by(
            deletion_date=None).where(Pet.id == id).all()
        if len(result) == 0:
            return make_response(jsonify({'message': 'Pet not found to update'}), 404)

        connection.query(Pet).where(Pet.id == id).update(
            {
                Pet.age: age,
                Pet.name: name,
                Pet.surname: surname,
                Pet.breed: breed,
                Pet.modification_date: modificationDate
            }, synchronize_session=False)

        try:
            connection.commit()
            message = 'Pet updated successfully!'
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

        result = connection.query(Pet).filter_by(
            deletion_date=None).where(Pet.id == id).all()
        if len(result) == 0:
            return make_response(jsonify({'message': 'Pet not found to deactivate'}), 404)

        connection.query(Pet).where(Pet.id == id).update(
            {
                Pet.deletion_date: deletionDate
            }, synchronize_session=False)

        try:
            connection.commit()
            message = 'Pet deactivated successfully!'
            status = 200
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)
