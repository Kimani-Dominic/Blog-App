# api/urls.py
from django.urls import path
from .views import hello

urlpatterns = [
    path('', hello, name='hello'),
    
    # Add more URL patterns as needed
]
