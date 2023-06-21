from helpers.Database import Database
from helpers.Encoder import AlchemyEncoder
from getPet.Entities.Pets import Pet
from getPet.Entities.PetImages import PetImages
from getPet.functions.Strings import Strings

import base64

from datetime import datetime

from flask import make_response, jsonify

import json


class Images():
    def __init__(self):
        self.database = Database(__file__)

    def getAllImages(self):
        connection = self.database.ConnectSession()
        result = connection.query(PetImages).filter_by(
            deletion_date=None).all()
        connection.expire_all()
        return json.dumps(result, cls=AlchemyEncoder)

    def getImageByID(self, data):
        petId = data['petId']

        connection = self.database.ConnectSession()
        petImagePath = connection.query(PetImages.image_path).filter_by(
            deletion_date=None).where(PetImages.pet_id == petId).all()

        if len(petImagePath) != 1:
            message = 'Pet image not found'
            status = 404
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)

        try:
            with open(r'{0}'.format(Strings.NormalizePathStrings(str(petImagePath[0]))), "rb") as image_file:
                encodedImage = base64.b64encode(image_file.read())

            encodedImage = encodedImage.decode('utf-8')
            message = str(encodedImage)
            status = 200
        except Exception as e:
            message = str(e)
            status = 500
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)

    def insertImage(self, data):
        try:
            petId = data['petId']
            imagePath = data['imagePath']
            modificationDate = datetime.today().strftime('%Y-%m-%d')
            creationDate = datetime.today().strftime('%Y-%m-%d')
            deletionDate = None

            connection = self.database.ConnectSession()

            # Check if pet exists in database
            foundPet = connection.query(Pet).filter_by(
                deletion_date=None).where(Pet.id == petId).all()
            if len(foundPet) != 1:
                message = 'Pet not found'
                status = 404
                return False

            # Check if record already exists in database
            result = connection.query(PetImages).filter_by(deletion_date=None).where(
                (PetImages.pet_id == petId) & (PetImages.image_path == imagePath)).all()
            if len(result) == 1:
                message = 'Pet image already created'
                status = 409
                return False

            petImageData = PetImages(pet_id=petId, image_path=imagePath,
                                     modification_date=modificationDate, creation_date=creationDate, deletion_date=deletionDate)

            connection.add(petImageData)
            connection.commit()
            message = 'Pet image created successfully!'
            status = 201
        except Exception as e:
            status = 500
            message = str(e)
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)
