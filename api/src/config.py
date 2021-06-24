import os
from enum import Enum

from pydantic import BaseSettings


class LogLevel(str, Enum):
    CRITICAL = "CRITICAL"
    ERROR = "ERROR"
    WARNING = "WARNING"
    INFO = "INFO"
    DEBUG = "DEBUG"


# Pydantic config loading ref: https://fastapi.tiangolo.com/advanced/settings/
# Will use env variables, and set default. Also parses complex data as json-strings
class Config(BaseSettings):
    LOGGER_LEVEL: LogLevel = LogLevel.INFO
    ENVIRONMENT: str = os.environ.get("ENVIRONMENT")

    # This is just for local debugging. Environment variables should be injected via docker-compose/kubernetes
    class Config:
        env_file = "../.env"
        env_file_encoding = "utf-8"


config = Config()
