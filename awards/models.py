from django.conf import settings
from django.db import models
from abc import abstractstaticmethod, abstractclassmethod


class BaseAward(models.Model):
    name = models.CharField(max_length=128, unique=True, null=False, blank=False)
    award_name = models.CharField(max_length=255)
    award_description = models.TextField()
    users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="awards")

    @abstractclassmethod
    def get_award(cls):
        pass

    class Meta:
        db_table = 'awards'


class PopularUser(BaseAward):
    name = "popular_user"
    award_name = "Популярный пользователь"
    award_description = "Дается пользователям , получившим 500 лайков"
    @classmethod
    def get_award(cls):
        return {
            "name": "popular_user",
            "award_name": "Популярный пользователь",
            "award_description": "Дается пользователям , получившим 500 лайков"
        }

    class Meta:
        proxy = True
