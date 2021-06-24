import logging

from config import Config

logging.basicConfig(
    level=Config.LOGGER_LEVEL.value, format="%(levelname)s:%(asctime)s %(message)s"
)
logger = logging.getLogger()

flask_log = logging.getLogger("werkzeug")
flask_log.setLevel(Config.LOGGER_LEVEL)
