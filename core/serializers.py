from rest_framework import serializers
from .models import User


class UserAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name')


class AuthoredSerializerMixin(serializers.Serializer):
    author = UserAuthorSerializer(many=False, read_only=True)


class ShortUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class FullUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', "username", "last_name", "first_name", "email")
        # exclude = ('password', )
