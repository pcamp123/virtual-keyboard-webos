function DashboardAssistant() {
}

DashboardAssistant.prototype.setup = function() {
this.controller.get('keyboard').addEventListener(Mojo.Event.tap, this.keyboard.bindAsEventListener(this));
			
	
};
DashboardAssistant.prototype.keyboard = function(event) {
 this.controller.serviceRequest(
	'palm://com.palm.applicationManager',
		{method: 'open',
		parameters: {
		id: 'com.awesomeapps.virtualkeyboard',
		"params":{"message": "keyboard"}
		}
		}) 
};
DashboardAssistant.prototype.activate = function(event) {
 
};

DashboardAssistant.prototype.deactivate = function(event) {
	
};

DashboardAssistant.prototype.cleanup = function(event) {
	
};
