FROM python:3.9-slim as base
ENV PYTHONUNBUFFERED=1 PYTHONPATH=/src
ARG UID=1000
WORKDIR /src
ENTRYPOINT ["./init.sh"]
CMD ["start"]

RUN addgroup -g $UID for && \
    adduser --uid $UID -G for --system for
RUN apt-get update -y && apt-get full-upgrade -y
RUN pip install --upgrade pip && \
    pip install poetry && \
    poetry config virtualenvs.create false

COPY pyproject.toml poetry.lock ./

FROM base as development
RUN poetry install
COPY ./src .
COPY .flake8 .bandit ./

FROM base as prod
RUN poetry install --no-dev
COPY ./src .
USER for
