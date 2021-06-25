from datetime import datetime
from typing import Optional

from pydantic import BaseModel
from sqlalchemy import Column, DateTime, Integer, String

from database import Base
from enums import OperationStatus


class OperationModel(Base):
    __tablename__ = "operations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    location = Column(String)
    creator = Column(String)
    status = Column(String)
    start = Column(DateTime)
    end = Column(DateTime)


class Operation(BaseModel):
    id: Optional[int] = None
    name: str
    location: str
    creator: str
    status: OperationStatus
    start: datetime
    end: datetime

    class Config:
        orm_mode = True
