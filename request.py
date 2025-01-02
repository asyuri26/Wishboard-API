import requests

url = "http://localhost:8000/send-data/"
payload = {
    "name": "barang A",
    "description": "A great item",
    "price": 12.99,
    "tax": 1.99
}

response = requests.post(url, json=payload)
print(response.json())
