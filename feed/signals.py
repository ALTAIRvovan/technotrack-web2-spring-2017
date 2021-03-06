from .abstract_models import FeedAble
from .models import Feed
from django.db.models.signals import post_save
import logging


logger = logging.getLogger("feed_signals")


def feadable_element_post_save(sender, instance, created, **kwargs):
    assert isinstance(instance, FeedAble)
    if created:
        Feed.objects.create(content_object=instance, author=instance.feed_author())


for subclass in FeedAble.__subclasses__():
    dispatch_uid = str(subclass) + "_feed_post"
    logger.debug("Signal created: " + dispatch_uid)
    post_save.connect(feadable_element_post_save, sender=subclass, dispatch_uid=dispatch_uid)
