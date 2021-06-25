import click
import uvicorn
from fastapi import FastAPI

from config import config
from controllers.healthcheck import healthcheck_router
from controllers.operation import operation_router
from database import Base, engine
from utils.import_test_data import import_test_data

prefix = "/api"
app = FastAPI(title="Forcast of Response API")
app.include_router(healthcheck_router, prefix=prefix)
app.include_router(operation_router, prefix=prefix)


@click.group()
def cli():
    pass


@cli.command()
def load_data():
    Base.metadata.create_all(engine)
    import_test_data()


@cli.command()
def run():
    uvicorn.run(
        "main:app",
        host="0.0.0.0",  # nosec
        port=5000,
        reload=config.ENVIRONMENT == "development",
        log_level=config.LOGGER_LEVEL.lower(),
    )


if __name__ == "__main__":
    cli()
