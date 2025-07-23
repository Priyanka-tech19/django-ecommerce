# 🛒 Django E-Commerce Web Application

A fully functional e-commerce web application built using Django. This platform allows users to browse products, search items, add them to a cart, and place orders through a simple checkout process.

---

## 🚀 Features

- 🏠 Home page with product listing  
- 🔍 Search functionality by product title  
- 📄 Pagination (4 products per page)  
- 🛍️ Product detail page  
- 🛒 Session-based cart (add/remove items)  
- 📦 Checkout form with order submission  
- 🔐 Admin panel (Django's default admin)  

---

## 🧱 Tech Stack

- **Backend**: Python, Django  
- **Frontend**: HTML, CSS (Bootstrap), JavaScript  
- **Database**: SQLite (for development)  
- **Others**: Django Templates, Sessions  

---

## 🚀 Setup Instructions

### 1. Clone the Repository

git clone https://github.com/Priyanka-tech19/django-ecommerce.git
cd ecom

### 2. Create and Activate a Virtual Environment

python -m venv venv

### 3.Activate the virtual environment:
On Windows:
venv\Scripts\activate

### On Mac/Linux:
source venv/bin/activate

### 4. Install Required Packages
pip install -r requirements.txt

### 5. Apply Migrations
python manage.py makemigrations
python manage.py migrate

### 6. Create Superuser
python manage.py createsuperuser

### 7. Start the Development Server
python manage.py runserver

✅ You're all set! Visit http://127.0.0.1:8000 to explore the app locally.