Template.Feed.helpers({
	posts: function() {
		var postsDoCollection = Posts.find().fetch().reverse();
		return postsDoCollection;
	}
});