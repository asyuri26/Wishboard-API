from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import json
from typing import Optional
import os


app = FastAPI()

# Setup templates directory
templates = Jinja2Templates(directory="templates")

# Mount static files directory
# static_dir = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory="static"), name="static")

# In-memory data storage
data_store = []

class Item(BaseModel):
    Harapan: Optional[str] = None
    Nama: str
    untuk_siapa: Optional[str] = None

# Root endpoint
@app.get("/")
async def read_root():
    return {"message": "Selamat datang diproject dengan FastAPI"}

# Endpoint to send JSON data
@app.post("/send-data/")
async def send_data(item: Item):
    data_store.append(item.dict())
    return item

# Endpoint to receive JSON data
@app.get("/receive-data/")
async def receive_data():
    return {"data": data_store}

# Endpoint to display JSON data on a simple webpage
@app.get("/view-data/")
async def view_data(request: Request):
    return templates.TemplateResponse("view_data.html", {"request": request, "data": data_store})

# Endpoint to save data to a JSON file
@app.post("/save-data/")
async def save_data():
    with open("data.json", "w") as f:
        json.dump(data_store, f)
    return {"message": "Data saved successfully"}
