from rest_framework import serializers

from core.serializers import UserAuthorSerializer
from .models import Feed


class FeededObjectRelatedField(serializers.RelatedField):
    def to_internal_value(self, data):
        pass

    def to_representation(self, value):
        return value.content()


class FeedSerializer(serializers.ModelSerializer):
    author = UserAuthorSerializer(many=False, read_only=True)
    content_object = FeededObjectRelatedField(read_only=True)

    class Meta:
        model = Feed
        fields = ('id', 'content_object', 'author', 'updated_at')
