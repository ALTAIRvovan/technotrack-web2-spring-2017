from django.db.models.signals import post_save
from .models import Chat, ChatMembership


def on_chat_create_add_author_to_members(instance, created, *args, **kwargs):
    if created:
        ChatMembership.objects.create(chat=instance, user=instance.author, inviter=instance.author)


post_save.connect(on_chat_create_add_author_to_members, sender=Chat)
