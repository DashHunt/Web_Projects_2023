from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()

class PetImages(Base):
    __tablename__ = "pet_images"
    image_id = Column(Integer, primary_key=True, nullable=False)
    pet_id = Column(Integer, nullable=False)
    image_path = Column(String, nullable=True)
    modification_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    creation_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deletion_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)


    def __repr__(self):
        return "<PetImages(pet_id='%s', image_path='%s', modification_date='%s', creation_date='%s', deletion_date='%s')>" % (
            self.pet_id,
            self.image_path,
            self.modification_date,
            self.creation_date,
            self.deletion_date
        )