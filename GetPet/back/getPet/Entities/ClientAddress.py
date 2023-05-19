from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()

class ClientAddress(Base):
    __tablename__ = "clients_address"
    address_id = Column(Integer, primary_key=True, nullable=False)
    client_id = Column(String, nullable=False)
    street = Column(String, nullable=False)
    number = Column(String, nullable=False)
    address_complement = Column(String, nullable=True)
    neighborhood = Column(String, nullable=False)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    country = Column(String, nullable=False)
    zip_code = Column(String, nullable=False)
    modification_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    creation_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deletion_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)


    def __repr__(self):
        return "<ClientAddress(address_id='%s', client_id='%s', street='%s', number='%s', address_complement='%s', neighborhood='%s', city='%s', state='%s', country='%s', zip_code='%s', modification_date='%s', creation_date='%s', deletion_date='%s')>" % (
            self.address_id,
            self.client_id,
            self.street,
            self.number,
            self.address_complement,
            self.neighborhood,
            self.city,
            self.state,
            self.country,
            self.zip_code,
            self.modification_date,
            self.creation_date,
            self.deletion_date,
        )