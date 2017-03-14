from rest_framework import viewsets
from api.routes import router
from .serializers import FeedSerializer
from .models import Feed


class FeedViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = FeedSerializer

    def get_queryset(self):
        return Feed.objects.filter(author__friends__friend=self.request.user)

router.register("feed", FeedViewSet, "feed")
