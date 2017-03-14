from api.routes import router
from rest_framework import viewsets
from core.serializers import ShortUserSerializer
from core.models import User
from .models import Friends


class FriendsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ShortUserSerializer

    def get_queryset(self):
        return User.objects.filter(friends__friend=self.request.user)


router.register("friends", FriendsViewSet, "friends")