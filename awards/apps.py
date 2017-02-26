from django.apps import AppConfig
from django.db.models.signals import post_migrate

from .management import inject_new_awards_in_db


class AwardsConfig(AppConfig):
    name = 'awards'

    def ready(self):
        # self.module.autodiscover()
        post_migrate.connect(inject_new_awards_in_db, dispatch_uid="post_migrate_inject_new_awards_in_db")
