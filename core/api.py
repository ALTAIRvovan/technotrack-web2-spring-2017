from rest_framework import viewsets
from rest_framework.decorators import list_route
from rest_framework import permissions
from rest_framework.response import Response

from api.routes import router
from .serializers import ShortUserSerializer, FullUserSerializer
from .models import User
from friendship.permissions import IsFriends


class UserListViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ShortUserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticated, )
    lookup_url_kwarg = 'user_id'

    @list_route(methods=['get', 'put'])
    def setting(self, request):
        serializer = None
        if request.method == 'PUT':
            serializer = self.get_serializer(request.user, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
        else:
            serializer = FullUserSerializer(request.user)
        return Response(serializer.data)

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
