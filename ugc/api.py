from rest_framework import viewsets
from rest_framework import permissions
from api.routes import router
from .serializers import PostSerializer
from .models import Post


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        return Post.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        serializer.validated_data["author_id"] = self.request.user.id
        return super().perform_create(serializer)


router.register("posts", PostViewSet, "posts")
