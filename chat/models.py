from django.db import models

# Create your models here.
from ugc.abstract_models import Authored, CreatedAt
from core.models import User


class Chat(Authored, CreatedAt, models.Model):
    members = models.ManyToManyField(
        User,
        related_name="chats",
        through="ChatMembership",
        through_fields=('chat', 'user'),
        verbose_name="chat members list"
    )
    name = models.CharField(
        max_length=255,
        verbose_name="chat name"
    )

    def __str__(self):
        return self.name


class ChatMembership(CreatedAt, models.Model):
    chat = models.ForeignKey(Chat)
    user = models.ForeignKey(User)
    inviter = models.ForeignKey(
        User,
        related_name="+",
        verbose_name="chat inviter"
    )


class Message(Authored, CreatedAt, models.Model):
    chat = models.ForeignKey(Chat, verbose_name="chat")
    subject = models.CharField(default="", max_length=255, verbose_name="message subject")
    text = models.CharField(max_length=1024, verbose_name="message text")
