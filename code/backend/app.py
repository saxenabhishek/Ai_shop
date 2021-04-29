from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import time

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"],
)


@app.get("/")
async def root():
    return "Works"


@app.get("/api/prod")
async def root():
    time.sleep(2)
    return [
        {"title": "sun dress", "rating": 3, "price": 80, "oldPrice": 100},
        {"title": "sun dress", "rating": 4},
        {"title": "T-shirt", "rating": 2},
        {"title": "pants", "rating": 4},
    ]

