from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel
import uvicorn


class Item(BaseModel):
    name: str
    description: Optional[str] = None
    print: float
    tax: Optional[float] = None


app = FastAPI()


@app.get('/')
def get_index():
    return {'message': 123132}


@app.get('/user')
def get_user(q: Optional[str] = None):
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results


@app.post('/items')
def get_index(item: Item):
    return item


if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", reload=True, port=8000)
