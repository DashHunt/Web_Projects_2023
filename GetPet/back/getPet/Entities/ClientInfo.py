from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()


class ClientsInfo(Base):
    __tablename__ = "clients_info"
    client_id = Column(Integer, primary_key=True, nullable=False)
    client_user_code = Column(String, nullable=False)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    street = Column(String, nullable=False)
    number = Column(String, nullable=False)
    address_complement = Column(String, nullable=False)
    neighborhood = Column(String, nullable=False)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    zip_code = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    deletion_date = Column(DateTime(timezone=True),
                           server_default=func.now(), nullable=True)

    def __repr__(self):
        return '''<Client(client_user_code='%s', name='%s', email='%s', password='%s', 
                            street='%s', number='%s', address_complement='%s, neighborhood='%s , 
                            city='%s , state='%s , zip_code='%s, deletion_date='%s')>''' % (
            self.client_user_code,
            self.name,
            self.email,
            self.password,
            self.street,
            self.number,
            self.address_complement,
            self.neighborhood,
            self.city,
            self.state,
            self.zip_code,
            self.deletion_date,
        )
