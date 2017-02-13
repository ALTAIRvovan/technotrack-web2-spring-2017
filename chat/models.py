from django.db import models

# Create your models here.
from ugc.abstract_models import Authored, CreatedAt
from core.models import User


class Chat(models.Model, Authored, CreatedAt):
    members = models.ManyToManyField(
        User,
        related_name="chats",
        related_query_name="chat",
        through=ChatMembership,
        through_fields=('chat', 'user'),
        verbose_name="chat members list"
    )
    name = models.CharField(
        max_length=255,
        verbose_name="chat name"
    )


class ChatMembership(models.Model, CreatedAt):
    chat = models.ForeignKey(Chat)
    user = models.ForeignKey(User)
    inviter = models.ForeignKey(
        User,
        # Todo: RelatedName
        verbose_name="chat inviter"
    )


class Message(models.Model, Authored, CreatedAt):
    chat = models.ForeignKey(Chat, verbose_name="chat")
    subject = models.CharField(max_length=255, verbose_name="message subject")
    text = models.CharField(max_length=1024, verbose_name="message text")
