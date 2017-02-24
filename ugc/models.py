from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models

from ugc.abstract_models import Authored, Dated, LikeAble
from feed.abstract_models import FeedAble


class Post(Authored, Dated, FeedAble, LikeAble, models.Model):
    text = models.CharField(max_length=1024, verbose_name="post text")

    def feed_author(self):
        return self.author

    class Meta:
        abstract = False


class Like(Authored, Dated, models.Model):
    target_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    target_id = models.PositiveIntegerField()
    target_object = GenericForeignKey('target_type', 'target_id')

    class Meta:
        unique_together = ("target_type", "target_id", "author")
