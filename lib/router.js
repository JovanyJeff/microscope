Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() {
		return Meteor.subscribe('posts');
	}
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
	name: 'postPage',
	data: function() {
		return Posts.findOne(this.params._id);
	}
});

//if data not found
Router.onBeforeAction('dataNotFound', {only: 'postPage'});