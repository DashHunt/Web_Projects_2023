import json
from attr import s
from flask import Flask, Blueprint, request, jsonify
import os

from helpers.Auth import Auth

from getPet.Pet import GetPet
from getPet.Size import AnimalSizes
from getPet.PetImages import Images

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
