# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-22 13:32
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('friendship', '0003_auto_20170225_2014'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='friendship',
            unique_together=set([('author', 'recipient')]),
        ),
    ]
