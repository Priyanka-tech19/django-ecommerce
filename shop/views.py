


from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from .models import Product,Order


def index(request):
    product_objects = Product.objects.order_by('id')

    # Search code
    item_name = request.GET.get('item_name')
    if item_name != '' and item_name is not None:
        product_objects = product_objects.filter(title__icontains=item_name)

    # Paginator code
    paginator = Paginator(product_objects, 4)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'product_objects': page_obj,
    }

   #return render(request, 'shop/index.html', {'product_objects': product_objects})
    return render(request, 'shop/index.html', context)

def detail(request, id):
    product_object = Product.objects.get(id=id)
    return render(request, 'shop/detail.html', {'product_object': product_object})



def fetch_cart(request):
    cart = request.session.get('cart', {})
    return JsonResponse(cart)

def checkout(request):
    if request.method == 'POST':
        items=request.POST.get('items','')
        name=request.POST.get('name',"")
        email=request.POST.get('email',"")
        address=request.POST.get('address',"")
        state= request.POST.get('state',"")
        city=request.POST.get('city',"")
        zipcode=request.POST.get('zipcode',"")
        total=request.POST.get('total',"")
        order=Order(items=items,name=name, email=email, address=address,city=city, state=state,zipcode=zipcode,total=total)
        order.save()
       
    return render(request, 'shop/checkout.html')


def cart(request):
    cart_data = {}  
    context = {
        'cart_data': cart_data 
    }
    return render(request, 'shop/cart.html',context)



    
