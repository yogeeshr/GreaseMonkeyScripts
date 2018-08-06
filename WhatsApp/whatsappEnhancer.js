// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.whatsapp.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Grease monkey script by : yogeesh.srkvs@gmail.com");

    // functions to call
    setTimeout(function(){
        logOnlineTime();
    }, 3000);

    // Log Online Time
    function logOnlineTime() {

        var allSpans = document.body.getElementsByTagName("span");

        setInterval(function() {
          for (var i=0; i<allSpans.length; i++) {

        if (allSpans[i].dir=="auto") {
        		var name = allSpans[i].title;
        	}

        	if (allSpans[i].title=="online") {
        		console.log(new Date()+" , "+name+ " , " + allSpans[i].title);
        	}
        }
        }, 5000); // 5000 milliseconds

    }

})();