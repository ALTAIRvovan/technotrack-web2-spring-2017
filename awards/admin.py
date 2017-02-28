from django.contrib import admin
from .models import BaseAward


@admin.register(BaseAward)
class AwardAdmin(admin.ModelAdmin):
    list_display = ("name", "award_name")
