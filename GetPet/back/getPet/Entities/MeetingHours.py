from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()

class MeetingHours(Base):
    __tablename__ = "meeting_hours_available"
    meeting_hour_id = Column(Integer, primary_key=True, nullable=False)
    meeting_hour = Column(String, nullable=False)
    modification_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    creation_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deletion_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)
    meeting_day = Column(String, nullable=False)


    def __repr__(self):
        return "<MeetingHours(meeting_hour='%s', modification_date='%s', creation_date='%s', deletion_date='%s', meeting_day='%s')>" % (
            self.meeting_hour,
            self.modification_date,
            self.creation_date,
            self.deletion_date,
            self.meeting_day
        )