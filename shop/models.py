from django.db import models

# Create your models here.
class Product(models.Model):
    def __str__(self):
        return self.title
    title = models.CharField(max_length=200)
    price = models.FloatField()
    #discount_price = models.FloatField(null=True, blank=True, default=None)
    category = models.CharField(max_length=200)
    description =models.TextField()
    image =models.CharField(max_length=300)


class Order(models.Model):
      def __str__(self):
       return f"Order by {self.name} - Total: {self.total}"
      items =models.CharField(max_length=1000)
      name =models.CharField(max_length=200)
      email =models.EmailField(max_length=200)
     
      address=models.CharField(max_length=1000)
    
      city=models.CharField(max_length=200)
      state=models.CharField(max_length=200)
      zipcode=models.CharField(max_length=6)
      total =models.CharField(max_length=200)
    
    
    
    
