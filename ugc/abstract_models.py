from django.db import models

# Create your models here.
from django.utils import timezone

from core.models import User


class Authored(models.Model):
    author = models.ForeignKey(User, verbose_name="author")

    class Meta:
        abstract = True


class CreatedAt(models.Model):
    created_at = models.DateTimeField(default=timezone.now, verbose_name="creating time", blank=True)

    class Meta:
        abstract = True


class UpdatedAt(models.Model):
    updated_at = models.DateTimeField(auto_now=True, verbose_name="last updating time", blank=True)

    class Meta:
        abstract = True


class Dated(CreatedAt, UpdatedAt):
    class Meta:
        abstract = True
