AppViewerController = RouteController.extend({
	layoutTemplate: "ViewerLayout",
	loadingTemplate: "Loading",
	onBeforeAction: function() {
		$('body').addClass('viewer-body');
		this.next();
	},
	subscriptions: function() {
		console.log("WAITON")
		var appId = Session.get("currentAppId");
		if(appId){
			return [
				Meteor.subscribe('apps', appId, {
					onReady: function(){
						console.log("Apps READY!");
					}
				}),
				Meteor.subscribe('connections', appId, {
					onReady: function(){
						console.log("Connections READY!");
					}
				}),
				Meteor.subscribe('feeds', appId, {
					onReady: function(){
						console.log("Feeds READY!");
					}
				}),
				Meteor.subscribe('screens', appId, {
					onReady: function(){
						console.log("Screens READY!");
					}
				}),
				Meteor.subscribe('widgets', appId, {
					onReady: function(){
						console.log("Screens READY!");
					}
				}),
				Meteor.subscribe('themes', appId, {
					onReady: function(){
						console.log("Themes READY!");
					}
				})
				// Meteor.subscribe('themes', appId),
			];
		} else {
			screenId = Session.get("currentScreenId");
			console.log("Single screen subscription", screenId)
			return Meteor.subscribe("singleScreen", screenId);
		}

	}
});