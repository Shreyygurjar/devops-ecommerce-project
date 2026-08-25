from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "DevOps Store Backend is running!"


@app.route("/api/health")
def health():
    return "Backend API is healthy!"


if __name__ == "__main__":
    app.run(debug=True)