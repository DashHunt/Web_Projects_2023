import base64
import json

from datetime import datetime
from flask import make_response, jsonify

from helpers.Database import Database
from helpers.Encoder import AlchemyEncoder

from getPet.Entities.ClientInfo import ClientsInfo 
from getPet.Entities.Client import Client as ClientEntity
from getPet.Entities.ClientPhone import ClientPhone 
from getPet.Entities.ClientAddress import ClientAddress 

class ClientInfo():
    def __init__(self):
        self.database = Database(__file__)

    def getClientInfo():
        print('Getting client info')

    def getClientInfoByID():
        print('Getting client info')
    
    def insertClient(self, data):
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
            message = 'Client updated successfully!'
            status = 201
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)
        
    def insertAddress(self, data):
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
            message = 'Client updated successfully!'
            status = 201
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)
        
    def insertPhone(self, data):
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
            message = 'Client updated successfully!'
            status = 201
        except Exception as e:
            message = e
            status = 400
        finally:
            connection.expire_all()
            return make_response(jsonify({'message': message}), status)
