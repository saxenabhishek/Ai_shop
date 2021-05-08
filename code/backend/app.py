from fastapi import FastAPI, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import base64
import random
import uuid
import redis
from pydantic import BaseModel
import json

r = redis.Redis()
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"],
)


@app.get("/")
async def root():
    return "This route is not availible for use"


@app.get("/temp")
async def root(token: str = "0"):
    return "not in use"


class logindeets(BaseModel):
    username: str
    password: str


@app.post("/api/login")
async def login(body: logindeets):
    deets = r.hgetall(body.username)
    if len(deets) != 0:
        if deets[b"pass"].decode("utf-8") == body.password:
            token = str(uuid.uuid4())
            r.set(token, body.username, ex=900)
            return {"token": token}
        else:
            raise HTTPException(status_code=401, detail="Wrong password")
    else:
        raise HTTPException(status_code=404, detail="User not found")


@app.get("/api/prod")
async def root(token: str = "0"):

    user = r.get(token)
    if user == None:
        raise HTTPException(status_code=401, detail="Logged out")
    r.expire(token, 900)
    deets = r.hgetall(user)
    p = r.keys("*:*")
    prods = [json.loads(r.get(random.choice(p).decode("utf-8"))) for i in range(10)]
    # base64_message = base64_bytes.decode("ascii")
    return prods
