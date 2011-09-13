function MainAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

MainAssistant.prototype.setup = function() {
	var d = new Date((new Date()).getTime())
		var params = {
		"wakeup": true,
		"key": 'test',
		"uri": "palm://com.palm.applicationManager/open",
		"params": '{"id":"com.awesomeapps.virtualkeyboard","params":{"message": "notification"}}',
	}
		params["at"] = (d.getUTCMonth()+1)+'/'+d.getUTCDate()+'/'+d.getUTCFullYear()
						+" "+d.getUTCHours()+":"+d.getUTCMinutes()+":"+d.getUTCSeconds()
	
  
	
this.controller.serviceRequest('palm://com.palm.power/timeout', { 
		method: "set",
		parameters: params,
		onSuccess:  this.update.bind(this),
		onFailure:  this.update.bind(this)
	});	
		
};
MainAssistant.prototype.aboutToActivate = function(){
 
};
MainAssistant.prototype.activate = function(event) {
window.close();
};

MainAssistant.prototype.popup = function(event) {
var appController = Mojo.Controller.getAppController(); 
appController.closeStage("open");
 	
};
MainAssistant.prototype.update = function(event) {
	event = Object.toJSON(event)
	console.log(event);
};




MainAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

MainAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};
