// ==UserScript==
// @name         WhatsApp Tamper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       yogeesh.srkvs@gmail.com
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

        // request permission on page load
                  document.addEventListener('DOMContentLoaded', function () {
                    if (!Notification) {
                      alert("bad");
                      return;
                    }

                    if (Notification.permission !== "granted")
                      Notification.requestPermission();
                  });

        setInterval(function() {
          for (var i=0; i<allSpans.length; i++) {

            if (allSpans[i].dir=="auto") {
                var name = allSpans[i].title;
            }

            if (allSpans[i].title=="online") {
                console.log(new Date()+" , "+name+ " , " + allSpans[i].title);



                    if (Notification.permission !== "granted")
                      Notification.requestPermission();
                    else {
                      var notification = new Notification(name + " is online", {
                        body: new Date(),
                      });

                      notification.onclick = function () {
                        window.open("https://web.whatsapp.com/");
                      };

                    }

            }

        }
      }, 5000); // 5000 milliseconds
    }

})();