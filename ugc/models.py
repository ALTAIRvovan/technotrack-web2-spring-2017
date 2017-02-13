from django.db import models

from abstract_models import Authored, Dated


class Post(models.Model, Authored, Dated):
    text = models.CharField(max_length=1024, verbose_name="post text")
