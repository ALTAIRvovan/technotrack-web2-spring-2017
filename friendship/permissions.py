from rest_framework import permissions


class IsFriends(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        friend_id = int(view.kwargs[view.lookup_field])
        return super().has_object_permission(request, view, obj) and \
               (friend_id == request.user.id or request.user.friends.filter(friend__id=friend_id).exists())
