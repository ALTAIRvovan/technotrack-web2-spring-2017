from django.apps import apps as global_apps
from django.db import DEFAULT_DB_ALIAS, migrations, router, transaction
#from .models import BaseAward


def inject_new_awards_in_db(plan=None, apps=global_apps, using=DEFAULT_DB_ALIAS, **kwargs):
    if plan is None:
        return

    available = True

    for migration, backward in plan:
        if migration.app_label != kwargs.get("sender").label:
            continue
        if backward:
            continue
        inserts = []
        for index, operation in enumerate(migration.operations):
            if isinstance(operation, migrations.CreateModel):
                model = apps.get_model(app_label=migration.app_label, model_name=operation.name)
                BaseAward = apps.get_model(app_label="awards", model_name="BaseAward")
                if "awards.baseaward" in operation.bases:
                    print(model)
                    BaseAward.objects.create(kwargs=model.get_award())
