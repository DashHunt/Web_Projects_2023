from flask import jsonify
from dotenv import load_dotenv
from os.path import dirname, join
import os
import psycopg2

from sqlalchemy import create_engine
from sqlalchemy.orm import Session

class Database(object):
    def __init__(self, path, driver='postgresql+psycopg2://'):
        dotenv_path = join(dirname(path), '.env')
        load_dotenv(dotenv_path)


        host = os.environ.get('DB_Hostname')
        user = os.environ.get('DB_User')
        password = os.environ.get('DB_Password')
        database = os.environ.get('DB_Database')

        self.credentials = f'{driver}{user}:{password}@{host}/{database}'

    def ConnectSession(self):
       engine = create_engine(self.credentials, echo=True, pool_size=10, max_overflow=20)
       return Session(engine)
       


