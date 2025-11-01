from rest_framework import generics
from .models import Post
from .serializer import BlogSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class BlogListCreateView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = BlogSerializer

class BlogDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = BlogSerializer

class BlogListView(APIView):
    def get(self, request):
        blogs = Post.objects.all()
        serializer = BlogSerializer(blogs, many=True, context={'request': request})
        return Response(serializer.data)