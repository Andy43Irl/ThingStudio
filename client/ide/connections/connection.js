Template.EditSingleConnectionBody.onRendered(function() {
    $('ul.tabs').tabs();
    $('select').material_select();
});


Template.EditSingleConnectionHeader.helpers({
	connectionName: function() {
		console.log(this);
	}
});

Template.EditSingleConnectionBody.helpers({	
	connection: function() {
		Session.get("ConnectionStatus");
		c = Connections.findOne();
		console.log("CS ", c);
		return c;
	}
});