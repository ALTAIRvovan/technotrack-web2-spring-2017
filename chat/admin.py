from django.contrib import admin

from chat.models import Message, Chat, ChatMembership


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('author', 'chat', 'subject')
    list_display_links = ('chat',)
    list_filter = (
        ('author', admin.RelatedOnlyFieldListFilter),
        ('chat', admin.RelatedOnlyFieldListFilter)
    )


@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    list_display = ('name', 'author')
    list_filter = (
        ('author', admin.RelatedFieldListFilter),
    )


@admin.register(ChatMembership)
class ChatMembershipAdmin(admin.ModelAdmin):
    pass
