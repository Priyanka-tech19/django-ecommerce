from django.conf import settings 
from django.contrib import admin
from django.urls import path
from shop import views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('<int:id>/',views.detail, name='detail'),
    path('checkout.html',views.checkout,name='checkout'),
    path('cart.html', views.cart, name='cart'), 

]

