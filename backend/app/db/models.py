from sqlalchemy import Column, Boolean, Integer, String
from .session import Base


class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=True)
    username = Column(String)
    create_time = Column(String,nullable=False)
    loginTime = Column(String,nullable=False)
    hashed_password = Column(String, nullable=True)
    is_active = Column(Boolean, nullable=True)
    is_superuser = Column(Boolean, nullable=True)
