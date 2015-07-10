AutoForm.setDefaultTemplateForType('afCheckbox', 'mCheckbox');

Template.afCheckbox_mCheckbox.onRendered(function() {
	function makeid() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 5; i++ ) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}
	var uniqid = makeid();
	Template.instance().$(".mat-check input").attr("id", uniqid)
	Template.instance().$(".mat-check label").attr("for", uniqid)
})

Template.afCheckbox_materialiseCheckbox.onRendered(function() {
	function makeid() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 5; i++ ) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}
	var uniqid = makeid();
	Template.instance().$(".mat-check input").attr("id", uniqid)
	Template.instance().$(".mat-check label").attr("for", uniqid)
})