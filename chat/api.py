from rest_framework import viewsets, permissions, decorators, status
from rest_framework.response import Response

from .serializers import ChatListSerializer, ChatMembershipReadOnlySerializer, ChatMembershipWriteOnlySerializer, \
    ChatMessageSerializer
from .models import Chat, ChatMembership, Message
from core.serializers import ShortUserSerializer, User

from api.routes import router


class ChatViewSet(viewsets.ModelViewSet):
    serializer_class = ChatListSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Chat.objects.filter(chatmembership__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


router.register('chats', ChatViewSet, 'chats')


class ChatMemberShipViewSet(viewsets.ModelViewSet):
    # serializer_class = ChatMembershipReadOnlySerializer

    def get_queryset(self):
        return ChatMembership.objects.filter(chat_id=self.kwargs["chat_id"]) \
            .filter(chat__members=self.request.user)

    def get_serializer_class(self):
        if self.action == 'create':
            return ChatMembershipWriteOnlySerializer
        return ChatMembershipReadOnlySerializer

    def perform_create(self, serializer):
        serializer.save(chat_id=self.kwargs["chat_id"], inviter=self.request.user)


router.register('chats/(?P<chat_id>[^/.]+)/members', ChatMemberShipViewSet, 'chat-members')


class ChatMessagesViewSet(viewsets.ModelViewSet):
    serializer_class = ChatMessageSerializer

    def get_queryset(self):
        return Message.objects.filter(chat_id=self.kwargs["chat_id"]) \
            .filter(chat__members=self.request.user)

    def perform_create(self, serializer):
        serializer.save(chat_id=self.kwargs["chat_id"], author=self.request.user)

router.register('chats/(?P<chat_id>[^/.]+)/messages', ChatMessagesViewSet, 'chat-messages')
