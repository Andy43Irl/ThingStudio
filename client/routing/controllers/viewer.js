AppViewerController = PreloadController.extend({
	layoutTemplate: "ViewerLayout",
	'preload': {
		'timeOut': 10000,
		'styles': ['/css/viewer.css']
	},
	loadingTemplate: "Loading",
	onBeforeAction: function() {
		$('body').addClass('viewer-body');
		this.next();
	},
	subscriptions: function() {
		// console.log("WAITON")
		var appId = Session.get("currentAppId");
		if(appId){
			return [
				Meteor.subscribe('apps', appId, {
					onReady: function(){
						// console.log("Apps READY!");
						InitialiseApps();
					}
				}),
				Meteor.subscribe('connections', appId, {
					onReady: function(){
						// console.log("Connections READY!");
					}
				}),
				Meteor.subscribe('feeds', appId, {
					onReady: function(){
						// console.log("Feeds READY!");
					}
				}),
				Meteor.subscribe('screens', appId, {
					onReady: function(){
						// console.log("Screens READY!");
					}
				}),
				Meteor.subscribe('widgets', appId, {
					onReady: function(){
						// console.log("Screens READY!");
						InstantiateWidgets();
					}
				}),
				Meteor.subscribe('themes', appId, {
					onReady: function(){
						// console.log("Themes READY!");
					}
				})
				// Meteor.subscribe('themes', appId),
			];
		} else {
			// screenId = Session.get("currentScreenId");
			console.log("You don't have an app ID. Weird.")
			// return Meteor.subscribe("singleScreen", screenId);
		}

	}
});
