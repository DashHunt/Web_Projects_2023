from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()

class ScheduleMeeting(Base):
    __tablename__ = "schedule_meeting"
    schedule_id = Column(Integer, primary_key=True, nullable=False)
    pet_id = Column(Integer, nullable=False)
    schedule_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    schedule_hour = Column(String, nullable=False)


    def __repr__(self):
        return "<ScheduleMeeting(pet_id='%s', schedule_date='%s', schedule_hour='%s')>" % (
            self.pet_id,
            self.schedule_date,
            self.schedule_hour
        )