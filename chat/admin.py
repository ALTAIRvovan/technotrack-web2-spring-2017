from django.contrib import admin

from chat.models import Message, Chat, ChatMembership


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('author', 'chat', 'subject')
    list_display_links = ('chat',)


@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    list_display = ('name', 'author')


@admin.register(ChatMembership)
class ChatMembershipAdmin(admin.ModelAdmin):
    pass
