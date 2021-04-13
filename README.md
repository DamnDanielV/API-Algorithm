# API-algorithm

API service for an algorithm which finds the index number at which the left and right side of the array gives the same result.

## Usage

Use the nexts command:


```bash
git clone https://github.com/DamnDanielV/API-Algorithm
cd API-algorithm/
docker-compose up
```

## Unit test

```bash
docker-compose run --publish 8080:80 -p 2022:22 -p 127.0.0.1:2021:21 web python manage.py test
```
