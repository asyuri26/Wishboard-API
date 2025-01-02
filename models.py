from pydantic import BaseModel
from typing import Optional, Dict

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None
