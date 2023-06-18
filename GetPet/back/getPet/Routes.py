import json
from attr import s
from flask import Flask, Blueprint, request, jsonify
import os

from helpers.Auth import Auth

from getPet.Pet import GetPet
from getPet.Size import AnimalSizes
from getPet.PetImages import Images
from getPet.Users import Users
from getPet.JWT import JWT
from getPet.Clients import Client


base = '/getPet'
baseRoute = __file__

api = Blueprint(base, __name__)

errorMessage = "Acess denied"
    
#GET All pets
@api.route("/pets/get", methods=['GET'])
def getPets():
    if Auth(request.headers, baseRoute):
        return GetPet().getAllPets()
    else:
        return errorMessage
    
#GET All pets
@api.route("/pets/getBreeds", methods=['GET'])
def getPetBreeds():
    if Auth(request.headers, baseRoute):
        return GetPet().getPetBreeds()
    else:
        return errorMessage

#INSERT pet
@api.route("/pets/insertPet", methods=['GET', 'POST'])
def insertPet():
    if Auth(request.headers, baseRoute):
        return GetPet().insert(request.get_json())
    else:
        return errorMessage
    
#UPDATE pet
@api.route("/pets/updatePet", methods=['GET', 'POST'])
def updatePet():
    if Auth(request.headers, baseRoute):
        return GetPet().update(request.get_json())
    else:
        return errorMessage
    
#DELETE pet
@api.route("/pets/deactivatePet", methods=['GET', 'POST'])
def deactivatePet():
    if Auth(request.headers, baseRoute):
        return GetPet().deactivate(request.get_json())
    else:
        return errorMessage
    

#GET pet image
@api.route("/pets/images/getByID", methods=['GET', 'POST'])
def getImageByID():
    if Auth(request.headers, baseRoute):
        return Images().getImageByID(request.get_json())
    else:
        return errorMessage
    
#GET pet image
@api.route("/pets/images/getAll", methods=['GET', 'POST'])
def getAllImages():
    if Auth(request.headers, baseRoute):
        return Images().getAllImages()
    else:
        return errorMessage
    
#GET pet image
@api.route("/pets/images/insert", methods=['GET', 'POST'])
def insertImage():
    if Auth(request.headers, baseRoute):
        return Images().insertImage(request.get_json())
    else:
        return errorMessage
    





#GET All pet sizes
@api.route("/sizes/get", methods=['GET'])
def getSizes():
    if Auth(request.headers, baseRoute):
        return AnimalSizes().getSizes()
    else:
        return errorMessage

#POST pet size
@api.route("/sizes/insert", methods=['GET', 'POST'])
def insertSize():
    if Auth(request.headers, baseRoute):
        return AnimalSizes().insert(request.get_json())
    else:
        return errorMessage
    
#UPDATE pet size
@api.route("/sizes/update", methods=['GET', 'POST'])
def updateSizes():
    if Auth(request.headers, baseRoute):
        return AnimalSizes().update(request.get_json())
    else:
        return errorMessage
    
#DELETE pet size
@api.route("/sizes/deactivate", methods=['GET', 'POST'])
def deactivateSize():
    if Auth(request.headers, baseRoute):
        return AnimalSizes().deactivate(request.get_json())
    else:
        return errorMessage
    



#GET user
@api.route("/users/get", methods=['GET'])
def getUser():
    if Auth(request.headers, baseRoute):
        return Users().get()
    else:
        return errorMessage
    
@api.route("/users/getUser", methods=['GET', 'POST'])
def getByID():
    if Auth(request.headers, baseRoute):
        return Users().getByID(request.get_json())
    else:
        return errorMessage
    
@api.route("/users/getPermissions", methods=['GET','POST'])
def getPermissions():
    if Auth(request.headers, baseRoute):
        return Users().getPermissions(request.get_json())
    else:
        return errorMessage
    
#INSERT user
@api.route("/users/insert", methods=['GET', 'POST'])
def insertUser():
    if Auth(request.headers, baseRoute):
        return Users().insert(request.get_json())
    else:
        return errorMessage
    

#GET user
@api.route("/clients/login", methods=['GET', 'POST'])
def getClients():
    if Auth(request.headers, baseRoute):
        return Client().login(request.get_json())
    else:
        return errorMessage
    
#INSERT user
@api.route("/clients/register", methods=['GET', 'POST'])
def insertClient():
    if Auth(request.headers, baseRoute):
        return Client().register(request.get_json())
    else:
        return errorMessage
    

#TOKEN get
@api.route("/token/get", methods=['GET', 'POST'])
def getToken():
    if Auth(request.headers, baseRoute):
        if 'client' in request.get_json():
            return JWT().getAcessToken(request.get_json(), client=True)
        
        return JWT().getAcessToken(request.get_json())    
    else:
        return errorMessage
