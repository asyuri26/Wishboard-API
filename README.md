# Wishboard-API
You can write your wish to hope it will come trueeee !!

This project is a simple web application built with FastAPI, showcasing RESTful API functionality and basic web design using JavaScript, CSS, and HTML. Below are the main features, structure, and usage instructions.

## Features

- **RESTful Endpoints**:
  - Send and receive data through JSON payloads.
  - Save data to a local JSON file.
  - View stored data on a web page.
- **Web Interface**:
  - HTML templates styled with CSS.
  - JavaScript for dynamic interaction.
- **Structured API Design**:
  - Separation of concerns using FastAPI and Pydantic models.

## File Structure

```
.
├── main.py            # Main application script
├── models.py          # Defines the Pydantic models
├── request.py         # Example Python script for making API requests
├── static/            # Contains CSS, JavaScript, and other static assets
├── templates/         # Contains HTML templates
├── data.json          # File to store saved data (created after saving data)
└── README.md          # Documentation
```

## Web Interface
The project includes a simple design with:

- **JavaScript**: For interactive elements.
- **CSS**: For styling the interface.
- **HTML**: For the overall structure.

Static files are served from the `/static` directory, and templates are located in `/templates`.
