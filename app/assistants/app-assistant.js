function AppAssistant(appController) {
	
}

       
AppAssistant.prototype.handleLaunch = function(params){
	if (!params){
		var f = function(stageController){
				stageController.pushScene('main');
			}
			this.controller.createStageWithCallback({
				name: 'open',
				lightweight: false
			}, f, 'card');
		}
	else if (params.message === 'notification'){
			var params = {
			message: 'Tap here'
		}
		var dashboardStage = this.controller.getStageProxy("dashboard");
		var pushDashboard = function(stageController){stageController.pushScene('dashboard', params);}
			
			this.controller.createStageWithCallback({
				name: "dashboard",
				lightweight: false,
				 
				 }, pushDashboard, 'dashboard');
			
		}
	else if(params.message === 'keyboard'){

	var stageName = "popup"		
	var popupStage = this.controller.getStageProxy(stageName);
	console.log(params)
	if (popupStage) {}
	else {
	
	var f = function(stageController) {
			stageController.pushScene({name: "popup",
					       		   	   sceneTemplate: "popup/popup-scene"});
		}
		this.controller.createStageWithCallback({
			name: 'popup', 
			lightweight: false, 
			"height": 170, 
			sound: "/usr/share/systemsounds/appclose.pcm"

		}, f, 'popupalert');		
	
	}
	}	
	else if(params.message === 'application'){

	var f = function(stageController){
				stageController.pushScene('main');
			}
			this.controller.createStageWithCallback({
				name: 'main',
				lightweight: false
			}, f, 'card');
	}
	else if(params.message === 'numbers'){

	}		
}
