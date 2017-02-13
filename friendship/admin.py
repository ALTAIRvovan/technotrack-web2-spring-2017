from django.contrib import admin

from friendship.models import *


@admin.register(FriendShip)
class FriendShipAdmin(admin.ModelAdmin):
    pass


@admin.register(Friends)
class FriendsAdmin(admin.ModelAdmin):
    pass
