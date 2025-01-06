/* eslint-disable no-console */
sap.ui.define(
    ["./BaseController", "sap/m/MessageBox", "sap/m/MessageToast"],
 
    function (Controller) {
        "use strict";

        return Controller.extend("HTML5Module.controller.MainView", {
            callApi:function(){
                
            fetch("/sap/opu/odata/iwfnd/CATALOGSERVICE;v=0002/").then(async (res) => {
                    if (res.ok) {
                    const data = await res.json();
                    
                }
            });
            }
        });
    },
);
