from rest_framework import permissions


class IsFriends(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        friend_id = int(view.kwargs['user_id'])
        return super().has_object_permission(request, view, obj) and \
               (friend_id == request.user.id or request.user.friends.filter(friend__id=friend_id).exists())

    def has_permission(self, request, view):
        user_id = int(view.kwargs['user_id'])
        return super().has_permission(request, view) and \
               (user_id == request.user.id or request.user.friends.filter(friend__id=user_id).exists())

class IsRecipient(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        user_id = int(view.kwargs['user_id'])
        return super().has_object_permission(request, view, obj) and user_id == request.user.id and \
               (view.action == 'create' or obj.recipient == request.user)

