Template.ViewFeedHeader.helpers({
	thisfeed: function() {
		return this.title;
	},
	feedHeader: function() {
		return this.title + ": " + this.subscription;
	}
});