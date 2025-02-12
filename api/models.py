from django.db import models
# from django.contrib.auth.models import User
from django.utils import timezone
from django.contrib.auth.models import AbstractUser, Group, Permission


class User(AbstractUser):
    ADMIN = 'admin'
    AUTHOR = 'author'
    READER = 'reader'
    
    USER_ROLE_CHOICES =[
        (ADMIN, 'admin'),
        (AUTHOR, 'author'),
        (READER, 'reader'),
    ]
    user_role = models.CharField(
        max_length=10,
        choices=USER_ROLE_CHOICES,
        default=READER,
    )
    
    groups = models.ManyToManyField(
        Group,
        related_name="api_users_groups",
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="api_users_permissions",
        blank=True
    )
    
    def is_admin(self):
        return self.user_role == self.ADMIN
    
    def is_author(self):
        return self.user_role == self.AUTHOR
    
    def is_reader(self):
        return self.user_role == self.READER
    
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    
    def __str__(self):
        return self.name    
#Blogs Category Model
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
#Blog Post details
class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    pub_date = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    categories = models.ManyToManyField(Category)

    def __str__(self):
        return self.title

# User's Comment Model
class Comment(models.Model):
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.created_at}"
    