from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()

class Users(Base):
    __tablename__ = "users"
    user_id = Column(Integer, primary_key=True, nullable=False)
    user_code = Column(String, nullable=False)
    name = Column(String, nullable=False)
    permission = Column(String, nullable=False)
    modification_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    creation_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deletion_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)


    def __repr__(self):
        return "<Users(user_code='%s', name='%s', permission='%s', modification_date='%s', creation_date='%s', deletion_date='%s')>" % (
            self.user_code,
            self.name,
            self.permission,
            self.modification_date,
            self.creation_date,
            self.deletion_date,
        )