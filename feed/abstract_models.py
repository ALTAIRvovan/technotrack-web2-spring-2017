from abc import abstractmethod

from django.db import models


class FeedAble(models.Model):
    def content(self):
        pass


    @abstractmethod
    def feed_author(self):
        pass

    class Meta:
        abstract = True
