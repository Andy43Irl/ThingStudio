Template.Screens.helpers({
	screenlist: function(){
		return Screens.find({ owner: Meteor.userId()})
	},
	publicscreens: function() {
		return Screens.find({public: true})
	},
	allscreens: function() {
		return Screens.find({})
	},
	status: function(){
		if(this.owner == Meteor.userId()) {
			return "Owner" + (this.public==true ? ",Public" : "");
		} else if(this.public == true) {
			return("Public read-only")
		} else {
			u = Meteor.users.findOne(this.owner);
			return u ? u.username : "Unknown";
		}
	}
});

Template.Screens.events({
	"click .screenlink": function(ev) {
		console.log(this);
		Router.go("/screens/" + this._id);
	}
})