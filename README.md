🛍️ Django E-Commerce Web App
This is a basic e-commerce website built using Django. It includes features like product listing, product detail page, search, cart, checkout, and order submission.

🚀 Features
Home page with product listing

Search functionality (by product title)

Pagination (4 products per page)

Product detail view

Add to Cart (session-based)

Checkout form with order saving

Admin dashboard (default Django admin)

🧱 Tech Stack
Backend: Python, Django

Frontend: HTML, CSS (Bootstrap or custom), JS

Database: SQLite (default for development)

Others: Django templates, session-based cart

⚙️ Setup Instructions
1.Clone the repository
https://github.com/Priyanka-tech19/ecomsite.git
cd ecomsite

2.Create and activate a virtual environment
On macOS/Linux:
python3 -m venv venv
source venv/bin/activate

On Windows:
python -m venv venv
venv\Scripts\activate

3.Install the project dependencies
pip install -r requirements.txt

4.Apply database migrations
python manage.py makemigrations
python manage.py migrate

5.Create a superuser (optional, for admin access)
python manage.py createsuperuser

6.Run the development server
python manage.py runserver

7.Visit the site
Open your browser and go to:
http://127.0.0.1:8000









