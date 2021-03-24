from sqlalchemy import Column, Boolean, Integer, String
from .session import Base


class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=True)
    first_name = Column(String)
    last_name = Column(String)
    hashed_password = Column(String, nullable=True)
    is_active = Column(Boolean, nullable=True)
    is_superuser = Column(Boolean, nullable=True)
