class Twitter {
  constructor() {
    this.tweet = [];
    this.followers = new Map();
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet = function (userId, tweetId) {
    this.tweet.push({ authId: userId, tweetId });
  };

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed = function (userId) {
    if (this.tweet.length === 0) {
      return [];
    }
    const res = [];
    for (let i = this.tweet.length - 1; 0 <= i && res.length < 10; i--) {
      const { authId, tweetId } = this.tweet[i];
      const isAuthor = authId === userId;
      const isFollowing = this.followers.get(userId)?.has(authId);
      if (isFollowing || isAuthor) {
        res.push(tweetId);
      }
    }
    console.log({ res });

    return res;
  };

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow = function (followerId, followeeId) {
    const currFollowers = this.followers.get(followerId);
    if (currFollowers) {
      currFollowers.add(followeeId);

      this.followers.set(followerId, currFollowers);
    } else {
      const newFollowers = new Set();
      newFollowers.add(followeeId);
      this.followers.set(followerId, newFollowers);
    }
  };

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow = function (followerId, followeeId) {
    const currFollowers = this.followers.has(followerId);
    if (!currFollowers) {
      return;
    }

    this.followers.get(followerId).delete(followeeId);
  };
}
const t = new Twitter();

// t.postTweet(1, 5);
// t.getNewsFeed(1);
// t.follow(1, 2);
// t.postTweet(2, 6);
// t.getNewsFeed(1);
// t.unfollow(1, 2);
// t.getNewsFeed(1);

// t.postTweet(1, 4);
// t.postTweet(2, 5);
// t.unfollow(1, 2);
// t.follow(1, 2);
// t.getNewsFeed(1);
/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

/*
Input
["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
Output
[null, null, [5], null, null, [6, 5], null, [5]]

newsFeed = [[1, 5], [2, 6]] 최신으로 넣은거순

follower = Map 
1: [2]

unFollower = Map
1 : [2]

getNewsFeed(userId = 1) -> 5

*/
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
/*
TODO: 아래 케이스 확인
["Twitter","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","postTweet","getNewsFeed"]
[[],[1,5],[1,3],[1,101],[1,13],[1,10],[1,2],[1,94],[1,505],[1,333],[1]]

Output
[null,null,null,null,null,null,null,null,null,null,[333,505,94,5,13,10,3,101,2]]
Expected
[null,null,null,null,null,null,null,null,null,null,[333,505,94,2,10,13,101,3,5]]
 */
