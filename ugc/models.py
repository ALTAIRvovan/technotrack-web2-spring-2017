from django.db import models

from ugc.abstract_models import Authored, Dated


class Post(Authored, Dated, models.Model):
    text = models.CharField(max_length=1024, verbose_name="post text")

    class Meta:
        abstract = False
