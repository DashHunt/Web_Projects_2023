from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()

class PetDetails(Base):
    __tablename__ = "pet_details"
    pet_details_id = Column(Integer, primary_key=True, nullable=False)
    pet_id = Column(Integer, nullable=False)
    weight = Column(String, nullable=False)
    story = Column(String, nullable=True)
    color = Column(String, nullable=False)
    breed_type = Column(String, nullable=True)
    breed_history = Column(String, nullable=True)
    modification_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    creation_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deletion_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)


    def __repr__(self):
        return "<PetImages(pet_details_id='%s', pet_id='%s', weight='%s', story='%s', color='%s', breed_type='%s', breed_history='%s', modification_date='%s', creation_date='%s', deletion_date='%s')>" % (
            self.pet_details_id,
            self.pet_id,
            self.weight,
            self.story,
            self.color,
            self.breed_type,
            self.breed_history,
            self.modification_date,
            self.creation_date,
            self.deletion_date
        )