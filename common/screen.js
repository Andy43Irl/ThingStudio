Screens = new Mongo.Collection("screens");


boilerplate = Screens.findOne({title: "VerySpecialSecretBoilerPlateScreen"});

if(boilerplate) {
	defaultScreenContent = boilerplate.html;
} else {
	defaultScreenContent = "<!-- Screen content here -->";
}
	



Schemas = {};

Schemas.Screen = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	tags: {
		type: [String],
		index: true,
		optional: true
	},
	theme: {
		type: String,
		optional: true,
		autoform: {
			type: "select",
			options: function(){
				themes = Themes.find({}).fetch();
				options = [];
				var i;
				for(i=0; i<themes.length; i++) {
					options[i] = { label: themes[i].title, value: themes[i]._id};
				}
				return(options);
			}
		}
	},
	html: {
		label: " ",
		type: String,
		autoform: {
			rows: 10,
	        afFieldInput: {
	          type: 'ace',
	          class: 'editor' // optional
	          // summernote options goes here
	        }
		},
		defaultValue: defaultScreenContent
	},
	owner: {
		type: String,
		index: true,
		autoform: {
			omit: true
		},
		autoValue: function(){
			if(this.isInsert) {
				return Meteor.userId();
			} else if(this.isUpsert) {
				return {$setOnInsert: Meteor.userId};
			} else {
				this.unset();
			}
		}
	},
	appId: {
		type: String,
		index: true,
		autoform: {
			omit: true
		},
	},
	// updatesHistory: {
// 		type: [Object],
// 		optional: true,
// 		autoValue: function() {
// 			var html = this.field("html");
// 			if (html.isSet) {
// 				if (this.isInsert) {
// 					return [{
// 						date: new Date,
// 						html: html.value
// 					}];
// 				} else {
// 					return {
// 						$push: {
// 							date: new Date,
// 							html: html.value
// 						}
// 					};
// 				}
// 			} else {
// 				this.unset();
// 			}
// 		}
// 	},
// 	'updatesHistory.$.date': {
// 		type: Date,
// 		optional: true
// 	},
// 	'updatesHistory.$.html': {
// 		type: String,
// 		optional: true
// 	},
	public: {
		type: Boolean,
		defaultValue: false
	}
//
	
});

Screens.before.insert(function(userId, doc) {
	if(Meteor.isClient) {
		// console.log("BEFOREHOOK ", userId, doc, Session.get("currentApp"));
		doc.appId = Session.get("currentApp")._id;
	}
});


Screens.attachSchema(Schemas.Screen);

Screens.allow({
	insert: function(userId, doc) {
		return (userId && doc.owner === userId);
	},
	update: function(userId, doc) {
		return (userId && doc.owner === userId);
	},
	remove: function(userId, doc) {
		return (userId && doc.owner === userId);
	}
});


