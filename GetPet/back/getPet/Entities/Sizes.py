from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()


class Sizes(Base):
    __tablename__ = "size"
    size_id = Column(Integer, primary_key=True, nullable=False)
    size_name = Column(String, nullable=False)
    modification_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    creation_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    deletion_date = Column(DateTime(timezone=True), server_default=func.now(), nullable=True)


    def __repr__(self):
        return "<Size(size_name='%s', modification_date='%s', creation_date='%s', deletion_date='%s')>" % (
            self.size_name,
            self.modification_date,
            self.creation_date,
            self.deletion_date,
        )