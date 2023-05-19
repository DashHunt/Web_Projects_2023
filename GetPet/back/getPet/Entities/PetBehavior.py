from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()

class PetBehavior(Base):
    __tablename__ = "pet_behavior"
    behavior_id = Column(Integer, primary_key=True, nullable=False)
    pet_id = Column(Integer, nullable=False)
    behavior = Column(String, nullable=False)
    behavior_icon = Column(String, nullable=True)
    modification_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    creation_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deletion_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)


    def __repr__(self):
        return "<PetBehavior(behavior_id='%s', pet_id='%s', behavior='%s', behavior_icon='%s', modification_date='%s', creation_date='%s', deletion_date='%s')>" % (
            self.behavior_id,
            self.pet_id,
            self.behavior,
            self.behavior_icon,
            self.modification_date,
            self.creation_date,
            self.deletion_date
        )