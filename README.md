# TOTLE - Topic Retrieval API

## 📌 Problem Statement

Build a Node.js/Express API endpoint to retrieve and filter topics from a JSON file.

## 🚀 How to Run

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Visit: `http://localhost:3000/api/topics?search=node&sort=name`

## ✅ Features

- Filter by topic name (case-insensitive)
- Optional sorting by name
- Error handling for query and file errors

## 📂 API Endpoints

### GET `/api/topics?search=<query>&sort=name`

| Param | Type   | Required | Description                      |
|-------|--------|----------|----------------------------------|
| search | string | optional | Topic name to search (case-insensitive) |
| sort   | string | optional | Use `name` to sort alphabetically |

### Response (200)
```json
[
  { "id": 1, "name": "Node.js", "category": "Backend" }
]



### Vido link


