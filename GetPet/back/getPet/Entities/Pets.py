from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()


class Pet(Base):
    __tablename__ = "pets"
    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String, nullable=False)
    surname = Column(String, nullable=True)
    age = Column(Integer, nullable=False)
    breed = Column(String, nullable=False)
    modification_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    creation_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deletion_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)
    size_id = Column(Integer, nullable=False)


    def __repr__(self):
        return "<Pet(name='%s', surname='%s', age='%s', breed='%s', modification_date='%s', creation_date='%s', deletion_date='%s', size_id='%s')>" % (
            self.name,
            self.surname,
            self.age,
            self.breed,
            self.modification_date,
            self.creation_date,
            self.deletion_date,
            self.size_id
        )