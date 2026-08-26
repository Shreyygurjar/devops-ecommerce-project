from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///store.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(255), nullable=False)


with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return "DevOps Store Backend is running!"


@app.route("/api/health")
def health():
    return "Backend API is healthy!"


@app.route("/api/products")
def get_products():
    products = Product.query.all()

    return [
        {
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description
        }
        for product in products
    ]


if __name__ == "__main__":
    app.run(debug=True)