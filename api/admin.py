from django.contrib import admin

# Register your models here.
from .models import *

#post admin 
class PostAdmin(admin.ModelAdmin):
    list_display = ("title","content","pub_date", "author")
admin.site.register(Post,PostAdmin)


#comment
class CommentAdmin(admin.ModelAdmin):
    list_display = ("post","user","content","created_at","updated_at")
admin.site.register(Comment,CommentAdmin)