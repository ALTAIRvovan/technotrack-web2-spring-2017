from rest_framework import permissions
from .abstract_models import Authored


class IsAuthored(permissions.IsAuthenticatedOrReadOnly):
    def has_object_permission(self, request, view, obj):
        return super(IsAuthored, self).has_object_permission(request, view, obj) and \
               ((view.action == 'retrieve') or
                (isinstance(obj, Authored) and obj.author == request.user))
