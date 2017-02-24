from django.contrib import admin

from friendship.models import *


@admin.register(FriendShip)
class FriendShipAdmin(admin.ModelAdmin):
    list_display = ('author', 'recipient', 'approved', 'updated_at')
    list_display_links = ('author', 'recipient')


@admin.register(Friends)
class FriendsAdmin(admin.ModelAdmin):
    list_display = ('user', 'friend')

