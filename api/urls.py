#urls.py
from django.urls import path, re_path
from django.views.generic import TemplateView
from .views import UserRegistrationView, UserLoginView, BlogPostListView, AddCommentView
# from rest_framework import routers, views


# router = routers.DefaultRouter()
# router.register(r'Post',views., 'comment')


urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    #Default Landing Page url
    path('', BlogPostListView.as_view(), name='blog-post-list'),  
    path('posts/<int:post_id>/comment/', AddCommentView.as_view(), name='add-comment'),
    # Add other URLs as needed
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),  # Serve React app for all other URLs

]
