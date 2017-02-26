from django.apps import AppConfig
from django.db.models.signals import post_migrate, post_save

from .management import inject_new_awards_in_db


class AwardsConfig(AppConfig):
    name = 'awards'

    def ready(self):
        from .models import BaseAward
        # self.module.autodiscover()
        post_migrate.connect(inject_new_awards_in_db, dispatch_uid="post_migrate_inject_new_awards_in_db")
        for model in BaseAward.__subclasses__():
            post_save.connect(model.handle_post_save, dispatch_uid="post_save_" + str(model) + "_baseAward")
