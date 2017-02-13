from django.db import models

from core.models import User
from ugc.abstract_models import Authored, Dated


class FriendShip(models.Model, Authored, Dated):
    recipient = models.ForeignKey(User)
    approved = models.BooleanField()


class Friends(models.Model, Authored):
    friendShip = models.ForeignKey(FriendShip)
    friend = models.ForeignKey(User)
