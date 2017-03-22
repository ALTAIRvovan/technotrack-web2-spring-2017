from rest_framework import serializers
from .models import Friends, FriendShip


class FriendShipSerializer(serializers.ModelSerializer):

    class Meta:
        model = FriendShip
        fields = ('id', 'author', 'recipient', 'approved',)
        read_only_field = ('author', 'recipient',)

    def is_valid(self, raise_exception=False):
        return super().is_valid(raise_exception)
