from django.db import models

# Create your models here.
from models import User


class Authored(models.Model):
    author = models.ForeignKey(User)

    class Meta:
        abstract = True


class CreatedAt(models.Model):
    created_at = models.DateTimeField()

    class Meta:
        abstract = True


class UpdatedAt(models.Model):
    updated_at = models.DateTimeField()

    class Meta:
        abstract = True


class Dated(CreatedAt, UpdatedAt):
    class Meta:
        abstract = True

