from abc import abstractmethod

from django.db import models


class FeedAble(models.Model):
    """
    @abstractmethod
    def content(self):
        pass
    """

    class Meta:
        abstract = True
