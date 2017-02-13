from django.db import models

from core.models import User
from ugc.abstract_models import Authored, Dated


class FriendShip(models.Model, Authored, Dated):
    recipient = models.ForeignKey(User, verbose_name="user responded request")
    approved = models.BooleanField(verbose_name="is approved")


class Friends(models.Model, Authored):
    friendShip = models.ForeignKey(FriendShip, verbose_name="friendship")
    friend = models.ForeignKey(User, verbose_name="friend")
