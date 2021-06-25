from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models.operation import Operation, OperationModel

operation_router = APIRouter()


@operation_router.get("/operation", response_model=List[Operation])
def get_all_operations(db: Session = Depends(get_db)):
    result = db.query(OperationModel).all()
    return result
