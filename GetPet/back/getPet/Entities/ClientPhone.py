from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime

Base = declarative_base()

class ClientPhone(Base):
    __tablename__ = "clients_phone"
    phone_id = Column(Integer, primary_key=True, nullable=False)
    client_id = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    modification_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    creation_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deletion_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)


    def __repr__(self):
        return "<ClientPhone(phone_id='%s', client_id='%s', phone='%s', modification_date='%s', creation_date='%s', deletion_date='%s')>" % (
            self.phone_id,
            self.client_id,
            self.phone,
            self.modification_date,
            self.creation_date,
            self.deletion_date,
        )