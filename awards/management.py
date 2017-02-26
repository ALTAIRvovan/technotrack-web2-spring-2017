from django.apps import apps as global_apps
from django.db import migrations


def inject_new_awards_in_db(app_config, plan=None, apps=global_apps, **kwargs):
    if plan is None:
        return

    for migration, backward in plan:
        if migration.app_label != kwargs.get("sender").label:
            continue
        if backward:
            continue
        for index, operation in enumerate(migration.operations):
            if isinstance(operation, migrations.CreateModel):
                Model = app_config.get_model(operation.name)
                if "awards.baseaward" in operation.bases:
                    m = Model(**Model.get_award())
                    m.save()
