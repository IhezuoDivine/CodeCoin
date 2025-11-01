from django.db import models
from django.utils import timezone

class Post (models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    author = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='blog_images/', blank=True,null=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title 
