Template.Feed.onCreated(function() {
	Meteor.subscribe("posts");
});

Meteor.subscribe("usuarios");

Template.Feed.helpers({
	posts: function() {
		var postsDoCollection = Posts.find().fetch().reverse();
		return postsDoCollection;
	}
});