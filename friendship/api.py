from django.db.models import Q

from api.routes import router
from rest_framework import viewsets
from core.serializers import ShortUserSerializer
from core.models import User
from .serializers import FriendShipSerializer
from .models import Friends, FriendShip
from .permissions import IsFriends, IsRecipient


class FriendsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsFriends, IsRecipient,)

    # lookup_url_kwarg = 'author'
    lookup_field = 'author'

    def get_queryset(self):
        self.section = self.request.query_params.get('section', None)
        if self.action == 'list':
            if self.section is None:
                return User.objects.filter(friends__friend_id=self.kwargs["user_id"])
            if self.section == 'input_requests':
                return FriendShip.objects.filter(recipient=self.request.user, approved=False)
            if self.section == 'out_requests':
                return FriendShip.objects.filter(author=self.request.user, approved=False)

        if self.action == 'retrieve' or self.action == 'update' or self.action == 'destroy':
            return FriendShip.objects.filter(Q(recipient=self.request.user) or Q(author=self.request.user))
        return FriendShip.objects.filter(author=self.request.user)

    def get_serializer_class(self):
        if self.action == 'list' and self.section is None:
            return ShortUserSerializer
        return FriendShipSerializer

    def perform_update(self, serializer):
        if self.request.user != serializer.validated_data['recipient']:
            return
        super().perform_update(serializer)

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

    def perform_create(self, serializer):
        serializer.validated_data['author_id'] = self.request.user.id
        serializer.validated_data['approved'] = False
        super().perform_create(serializer)


router.register("users/(?P<user_id>[^/.]+)/friends", FriendsViewSet, "user-friends")
