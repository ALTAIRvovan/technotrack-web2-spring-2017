from rest_framework import viewsets
from api.routes import router
from .serializers import FeedSerializer
from .models import Feed


class FeedViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = FeedSerializer
    lookup_field = 'author'

    def get_queryset(self):
        q = Feed.objects.filter(author__friends__friend=self.request.user)
        friend_id = self.kwargs.get(self.lookup_field, None)
        if friend_id is not None:
            q = q.filter(author_id=int(friend_id))
        return q

    def retrieve(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)


router.register("feed", FeedViewSet, "feed")
