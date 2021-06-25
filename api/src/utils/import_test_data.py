import csv
from datetime import datetime

from database import SessionLocal
from models.operation import OperationModel


def import_test_data():
    database = SessionLocal()
    with open("./tests/test_data/operations.csv") as csvfile:
        operations_reader = csv.DictReader(csvfile)
        for row in operations_reader:
            print(row)
            database.add(
                OperationModel(
                    name=row["name"],
                    location=row["location"],
                    creator=row["creator"],
                    status=row["status"],
                    start=datetime.fromisoformat(row["start"]),
                    end=datetime.fromisoformat(row["end"]),
                )
            )

        database.commit()


if __name__ == "__main__":
    import_test_data()
