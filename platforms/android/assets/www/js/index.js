/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
		
		var pushNotification = window.plugins.pushNotification;
		plugin.mixpanel.init('96b098912286e1195553849c334875b6');
		plugin.mixpanel.identify('12345');
        plugin.mixpanel.track("Mixpanel Device");
        plugin.mixpanel.people.set({
            "$email": "idk1@cdc.gov",           // only special properties need the $
            "$created": "2015-06-30 16:53:54",
            "$last_login": new Date(),         
            "credits": 150,                    
            "cool": "Hank"                    
        });

		if (device.platform == 'android' || device.platform == 'Android' || device.platform == 'amazon-fireos' ) {
			pushNotification.register(successHandler,errorHandler,{"senderID":"replace_with_sender_id","ecb":"onNotification","messageKey": "mp_message"});
		}
	},
	successHandler: function(){},
	errorHandler: function(){},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};

window.onNotification = function(){

}

app.initialize();