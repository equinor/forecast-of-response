from enum import Enum


class OperationStatus(str, Enum):
    UPCOMING = ("Upcoming",)
    IN_PROGRESS = ("In progress",)
    CONCLUDED = "Concluded"
