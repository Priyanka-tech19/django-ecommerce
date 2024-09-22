from django.contrib import admin
from shop.models import Product,Order

# Register your models here.


admin.site.site_header="E-commerce Site"
admin.site.site_title="Happy Shopping"
admin.site.index_title="Manage Happy Shopping"

class ProductAdmin(admin.ModelAdmin):
    def change_category_to_default(self,request,queryset):
        queryset.update(category="default")

    change_category_to_default.short_description='Default Category' 
    list_display = ['title','price','category','description']
    search_fields =['title','category',]
    actions =('change_category_to_default',)
    fields=('title','price', 'description','image','category')#making field editable
    #list_editable =('price','category')

admin.site.register(Product,ProductAdmin)
admin.site.register(Order)