from django.contrib import admin

# Register your models here.

from ugc.models import Post

class PostAdmin(admin.ModelAdmin):
    pass

admin.site.register(Post, PostAdmin)
