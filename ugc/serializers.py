from rest_framework import serializers
from .models import Post
from core.serializers import UserAuthorSerializer


class PostSerializer(serializers.ModelSerializer):
    author = UserAuthorSerializer(many=False, read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'text', 'updated_at', 'author')
        read_only_fields = ('updated_id',)



