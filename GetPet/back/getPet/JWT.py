import base64
import json

from datetime           import datetime
from flask              import make_response, jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import create_refresh_token
from flask_jwt_extended import get_jwt_identity

from helpers.Database   import Database
from helpers.Encoder    import AlchemyEncoder

from getPet.Entities.Client import Client
from getPet.Entities.Users import Users

from getPet.functions.Strings import Strings

class JWT():
    def __init__(self):
        self.database = Database(__file__)
    
    def authenticate(self, user, client):
        connection = self.database.ConnectSession()

        if client: 
            result = connection.query(Client).filter_by(deletion_date=None).where(Client.client_user_code == user).all()
        else:
            result = connection.query(Users).filter_by(deletion_date=None).where(Users.user_code == user).all()

        if len(result) == 0:
            connection.expire_all()
            return {'result': False, 'message': 'User not found in database'}
        
        connection.expire_all()
        return {'result': True, 'message': 'User authenticated'}
    
    def getAcessToken(self, data, client=False):
        user = data['user']

        result = self.authenticate(user, client)
        if not result['result']:
            return make_response(jsonify({'message': result['message']}), 404)

        access_token = create_access_token(identity=user)
        refresh_token = create_refresh_token(identity=user)
        return jsonify(access_token=access_token, refresh_token=refresh_token)


    def getRefreshToken(self, data, client=False):
        user = data['user']

        result = self.authenticate(user, client)
        if not result['result']:
            return make_response(jsonify({'message': result['message']}), 404)
        
        identity = get_jwt_identity()
        access_token = create_access_token(identity=identity)
        return jsonify(access_token=access_token)
