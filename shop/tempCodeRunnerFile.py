"""from django.shortcuts import render
from .models import Product
# from ecomsite.shop.models import Product
from django.core.paginator import Paginator


def index(request):
    product_objects=Product.objects.all()

    #search code
    item_name =request.GET.get('item_name')
    if item_name!='' and item_name is not None:
        product_objects=product_objects.filter(title__icontains=item_name)
   


    #paginator code
    paginator= Paginator(product_objects,4)
    page=request.GET.get('page')
    product_objects =paginator.get_page(page)
    return render(request,'shop/index.html', {'product_objects': product_objects})

def detail(request,id):
    product_object = Product.objects.get(id=id)
    return render (request,'shop/detail.html', {'product_object': product_object})
"""


from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from .models import Product


def index(request):
    product_objects = Product.objects.all()

    # Search code
    item_name = request.GET.get('item_name')
    if item_name != '' and item_name is not None:
        product_objects = product_objects.filter(title__icontains=item_name)

    # Paginator code
    paginator = Paginator(product_objects, 4)
    page = request.GET.get('page')
    product_objects = paginator.get_page(page)

    return render(request, 'shop/index.html', {'product_objects': product_objects})

def detail(request, id):
    product_object = Product.objects.get(id=id)
    return render(request, 'shop/detail.html', {'product_object': product_object})

def add_to_cart(request, product_id):
    if 'cart' not in request.session:
        request.session['cart'] = {}

    cart = request.session['cart']

    if product_id in cart:
        cart[product_id] += 1
    else:
        cart[product_id] = 1

    request.session.modified = True

    return redirect('index')  # Replace 'index' with the actual name of your product list view

def fetch_cart(request):
    cart = request.session.get('cart', {})
    return JsonResponse(cart)

   
