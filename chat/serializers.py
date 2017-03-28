from rest_framework import serializers, relations
from core.serializers import AuthoredSerializerMixin, ShortUserSerializer

from .models import Chat, ChatMembership, Message
from core.models import User


class ChatListSerializer(AuthoredSerializerMixin, serializers.ModelSerializer):
    members = ShortUserSerializer(many=True, read_only=True)

    class Meta:
        model = Chat
        fields = ('id', 'name', 'members', 'author')


class ChatMembershipReadOnlySerializer(serializers.ModelSerializer):
    user = ShortUserSerializer(many=False, read_only=True)
    created = serializers.ReadOnlyField(source='created_at', read_only=True)
    inviter = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = ChatMembership
        fields = ('user', 'inviter', 'created')


class ChatMembershipWriteOnlySerializer(serializers.ModelSerializer):
    inviter = serializers.PrimaryKeyRelatedField(read_only=True)
    chat_id = serializers.PrimaryKeyRelatedField(read_only=True, source='chat.id')

    class Meta:
        model = ChatMembership
        fields = ('user', 'inviter', 'chat_id')


class ChatMessageSerializer(serializers.ModelSerializer):

    chat_id = serializers.PrimaryKeyRelatedField(read_only=True, source='chat.id')

    class Meta:
        model = Message
        fields = ('id', 'subject', 'text', 'author', 'created_at', 'chat_id')
        read_only_fields = ('author', 'created_at',)
