from fastapi import APIRouter

healthcheck_router = APIRouter()


@healthcheck_router.get("/healthcheck")
def healthcheck():
    return {"status": "ok"}
