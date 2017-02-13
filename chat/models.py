from django.db import models

# Create your models here.
from ugc.models import Authored, CreatedAt
from core.models import User


class Chat(models.Model, Authored, CreatedAt):
    members = models.ManyToManyField(
        User,
        related_name="chats",
        related_query_name="chat",
        through=ChatMembership,
        through_fields=('chat', 'user')
    )
    name = models.CharField(max_length=255)


class ChatMembership(models.Model, CreatedAt):
    chat = models.ForeignKey(Chat)
    user = models.ForeignKey(User)
    inviter = models.ForeignKey(
        User
        # Todo: RelatedName
    )


class Message(models.Model, Authored, CreatedAt):
    chat = models.ForeignKey(Chat)
    theme = models.CharField(max_length=255)
    text = models.CharField(max_length=1024)
