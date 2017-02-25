from django.db.models import Q
from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import FriendShip, Friends
from feed.models import Feed


class BaseFriendTestCase(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create(username="user")
        self.friend = get_user_model().objects.create(username="friend")

class CreateFriendsTestCase(BaseFriendTestCase, TestCase):

    def testOnCreateFriendShipNotFrineds(self):
        self.assertEqual(Friends.objects.count(), 0)
        self.assertEqual(FriendShip.objects.count(), 0)

        friendShip = FriendShip.objects.create(author=self.user, recipient=self.friend, approved=False)
        self.assertEqual(FriendShip.objects.count(), 1)
        self.assertEqual(Friends.objects.count(), 0)

    def testOnFrinedShipNotBecomeApproved(self):
        self.assertEqual(Friends.objects.count(), 0)
        self.assertEqual(FriendShip.objects.count(), 0)

        friendShip = FriendShip.objects.create(author=self.user, recipient=self.friend, approved=False)
        friendShip.approved = False
        friendShip.save()
        self.assertEqual(FriendShip.objects.count(), 1,
                         msg="Another FriendShip created, but don't")
        self.assertEqual(Friends.objects.count(), 0,
                         msg="create any Friend nodes, but don't")

    def testOnFriendShipBecomeApproved(self):
        self.assertEqual(Friends.objects.count(), 0)
        self.assertEqual(FriendShip.objects.count(), 0)

        friendShip = FriendShip.objects.create(author=self.user, recipient=self.friend, approved=False)
        friendShip.approved = True
        friendShip.save()
        self.assertEqual(FriendShip.objects.count(), 1,
                         msg="Another FriendShip created, but don't")
        self.assertEqual(Friends.objects.count(), 2,
                         msg="Not create all Friend nodes")

        self.assertEqual(Friends.objects.filter(Q(user=self.user) and Q(friend=self.friend)).count(), 1,
                         msg="Not created Frieds node from author to recipient")
        self.assertEqual(Friends.objects.filter(Q(user=self.friend) and Q(friend=self.user)).count(), 1,
                         msg="Not created Frieds node from recipient to author")


class FriendsFeedTestCase(BaseFriendTestCase, TestCase):
    def testOnFriendCreateFeedCreate(self):
        self.assertEqual(Friends.objects.count(), 0)
        self.assertEqual(Feed.objects.count(), 0)
        friendShip = FriendShip.objects.create(author=self.user, recipient=self.friend, approved=False)
        friend = Friends.objects.create(friendShip=friendShip, user=self.user, friend=self.friend)
        self.assertEqual(Friends.objects.count(), 1)
        self.assertEqual(Feed.objects.count(), 1)

        friend2 = get_user_model().objects.create(username="friend2")

        friend.user = friend2
        friend.save()
        self.assertEqual(Friends.objects.count(), 1)
        self.assertEqual(Feed.objects.count(), 1)