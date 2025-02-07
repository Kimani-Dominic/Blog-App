from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('api/post/add/', views.get_posts , name='post'),
    path('api/posts/', views.get_posts, name='articles'),
]