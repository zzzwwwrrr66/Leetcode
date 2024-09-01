class Twitter {
  constructor() {
    this.tweets = [];
    this.following = new Map();
  }

  postTweet(userId, tweetId, { tweets } = this) {
    tweets.push({ authorId: userId, id: tweetId });
  }

  getNewsFeed(userId, newsIDs = [], { tweets, following } = this) {
    for (let i = tweets.length - 1; 0 <= i && newsIDs.length < 10; i--) {
      const tweet = tweets[i];

      const isAuthor = tweet.authorId === userId;
      const isFollowing = following?.get(userId)?.has(tweet.authorId);
      const canAddTweet = isAuthor || isFollowing;
      if (canAddTweet) newsIDs.push(tweet.id);
    }

    return newsIDs;
  }

  follow(followerId, followeeId, { following } = this) {
    if (!following.has(followerId)) following.set(followerId, new Set());

    following.get(followerId).add(followeeId);
  }

  unfollow(followerId, followeeId, { following } = this) {
    if (following.has(followerId)) following.get(followerId).delete(followeeId);
  }
}
const t = new Twitter();
t.postTweet(1, 5);
t.postTweet(1, 3);
t.postTweet(1, 101);
t.postTweet(1, 13);
t.postTweet(1, 10);
t.postTweet(1, 2);
t.postTweet(1, 94);
t.postTweet(1, 505);
t.postTweet(1, 333);
t.getNewsFeed(1);
