from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()

class Client(Base):
    __tablename__ = "clients"
    client_id = Column(Integer, primary_key=True, nullable=False)
    client_user_code = Column(String, nullable=False)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    modification_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    creation_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deletion_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)


    def __repr__(self):
        return "<Client(client_user_code='%s', name='%s', email='%s', password='%s', modification_date='%s', creation_date='%s', deletion_date='%s')>" % (
            self.client_user_code,
            self.name,
            self.email,
            self.password,
            self.modification_date,
            self.creation_date,
            self.deletion_date,
        )