from django.db import models
from django.utils import timezone
from api.models import *

class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    pub_date = models.DateTimeField(default=timezone.now)
    # author = models.ForeignKey(User, on_delete=models.CASCADE)
    categories = models.ManyToManyField(Category)
    author = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='api_posts'
    )
    categories = models.ManyToManyField(
        Category, 
        related_name='api_posts' 
    )

    def __str__(self):
        return self.title
    
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class Comment(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='comments')
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    author = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='api_comments'
    )
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user} - {self.created_at}"
    
    