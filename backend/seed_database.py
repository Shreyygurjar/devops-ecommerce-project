from app import app, db, Product


products = [
    Product(
        name="Wireless Headphones",
        price=1999,
        description="High-quality wireless headphones with clear sound."
    ),
    Product(
        name="Mechanical Keyboard",
        price=3499,
        description="Mechanical keyboard designed for gaming and work."
    ),
    Product(
        name="Gaming Mouse",
        price=1299,
        description="Fast and precise mouse for gaming and everyday use."
    )
]


with app.app_context():
    db.session.add_all(products)
    db.session.commit()

    print("Products added successfully!")