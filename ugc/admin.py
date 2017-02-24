from django.contrib import admin

# Register your models here.

from ugc.models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ('author', 'short_text', 'updated_at')

    def short_text(self, post):
        return post.text[:100]


admin.site.register(Post, PostAdmin)
