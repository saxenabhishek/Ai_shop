from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import time
from PIL import Image
import io
import base64
import random

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


@app.get("/temp")
async def root():
    im = Image.open("../../TestImages/2.jpg", mode="r")
    img_byte_arr = io.BytesIO()
    im.save(img_byte_arr, format="png")
    img_byte_arr = img_byte_arr.getvalue()
    return Response(content=img_byte_arr, media_type="image/png")
    # return f"<img src = {img_byte_arr}></img>"


@app.get("/api/prod")
async def root():
    responses = []
    text = ["ONLY", "Zink London", "Kazo", "Twenty Dresses by Nykaa Fashion"]
    for i in range(4):
        im = Image.open("../../TestImages/" + str(i + 1) + ".jpg", mode="r")
        img_byte_arr = io.BytesIO()
        im.save(img_byte_arr, format="png")
        img_byte_arr = img_byte_arr.getvalue()
        base64_bytes = base64.b64encode(img_byte_arr)
        responses.append(
            {
                "title": text[i],
                "rating": random.randint(0, 5),
                "price": random.randint(0, 5000),
                "oldPrice": random.randint(0, 5000),
                "thumbnails": base64_bytes,
            }
        )
    # base64_message = base64_bytes.decode("ascii")
    return responses
