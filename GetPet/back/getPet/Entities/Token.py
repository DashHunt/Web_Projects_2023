from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base
from sqlalchemy.sql import func
import datetime


Base = declarative_base()

class Token(Base):
    __tablename__ = "token"
    token_id = Column(Integer, primary_key=True, nullable=False)
    token = Column(String, nullable=False)
    user_id = Column(Integer, nullable=False)
    expiration_time = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


    def __repr__(self):
        return "<Token(token='%s', user_id='%s', expiration_time='%s')>" % (
            self.token,
            self.user_id,
            self.expiration_time
        )