from rest_framework import viewsets
from api.routes import router
from .serializers import ShortUserSerializer, FullUserSerializer
from .models import User
from friendship.permissions import IsFriends


class UserListViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ShortUserSerializer
    queryset = User.objects.all()

    def get_serializer(self, *args, **kwargs):
        serializer_class = None
        if self.action == 'retrieve' and \
                IsFriends().has_object_permission(request=self.request, view=self, obj=args[0]):
            serializer_class = FullUserSerializer
        else:
            serializer_class = self.get_serializer_class()
        kwargs['context'] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)


router.register("users", UserListViewSet, "users")
