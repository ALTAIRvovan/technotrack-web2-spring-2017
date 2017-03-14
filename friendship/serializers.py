from rest_framework import serializers
from .models import Friends, FriendShip


class FriendShipSerializer(serializers.ModelSerializer):

    class Meta:
        model = FriendShip
        fields = '__all__'