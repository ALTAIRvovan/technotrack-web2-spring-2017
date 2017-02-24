from django.db import models

from core.models import User
from ugc.abstract_models import Authored, Dated
from feed.abstract_models import FeedAble


class FriendShip(Authored, Dated, models.Model):
    recipient = models.ForeignKey(User, related_name="friend_applications", verbose_name="user responded request")
    approved = models.BooleanField(verbose_name="is approved")


# TODO: Тут что-то надо делать =(
# TODO: Добавить класс Meta и verbose_name в нем
class Friends(FeedAble, models.Model):
    friendShip = models.ForeignKey(FriendShip, verbose_name="friendship")
    user = models.ForeignKey(User, related_name="friends", verbose_name="user")
    friend = models.ForeignKey(User, related_name="+", verbose_name="friend")

    def feed_author(self):
        return self.user
