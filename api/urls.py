#urls.py
from django.urls import path
from .views import UserRegistrationView, UserLoginView, BlogPostListView, AddCommentView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('posts/', BlogPostListView.as_view(), name='blog-post-list'),
    path('posts/<int:post_id>/comment/', AddCommentView.as_view(), name='add-comment'),
    # Add other URLs as needed
]
