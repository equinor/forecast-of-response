import click
import uvicorn
from fastapi import FastAPI

from config import config
from controllers.healthcheck import healthcheck_router

prefix = "/api"
app = FastAPI(title="Forcast of Response API")
app.include_router(healthcheck_router, prefix=prefix)


@click.group()
def cli():
    pass


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
