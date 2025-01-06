//@ui5-bundle HTML5Module/Component-preload.js
sap.ui.require.preload({
	"HTML5Module/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent"],function(t){"use strict";return t.extend("HTML5Module.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments);this.getRouter().initialize()}})});
},
	"HTML5Module/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("HTML5Module.controller.App",{onInit(){}})});
},
	"HTML5Module/controller/BaseController.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("HTML5Module.controller.BaseController",{})});
},
	"HTML5Module/controller/MainView.controller.js":function(){
sap.ui.define(["./BaseController","sap/m/MessageBox","sap/m/MessageToast"],function(e){"use strict";return e.extend("HTML5Module.controller.MainView",{callApi:function(){fetch("/sap/opu/odata/iwfnd/CATALOGSERVICE;v=0002/").then(async e=>{if(e.ok){const a=await e.json()}})}})});
},
	"HTML5Module/manifest.json":'{"_version":"1.42.0","sap.app":{"id":"HTML5Module","type":"application","applicationVersion":{"version":"0.0.1"},"dataSources":{},"title":"1212","description":"311323","sourceTemplate":{"id":"@sap-ux/fiori-freestyle-writer:basic","version":"0.14.9"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.102.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"HTML5Module.i18n.i18n"}}},"resources":{"css":[]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"HTML5Module.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMainView","pattern":":?query:","target":["TargetMainView"]}],"targets":{"TargetMainView":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"MainView","viewName":"MainView"}}},"rootView":{"viewName":"HTML5Module.view.App","type":"XML","async":true,"id":"App"}}}',
	"HTML5Module/view/App.view.xml":'<mvc:View controllerName="HTML5Module.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"HTML5Module/view/MainView.view.xml":'<mvc:View controllerName="HTML5Module.controller.MainView"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns:u="sap.ui.unified"\n\txmlns:core="sap.ui.core" displayBlock="true"\n\txmlns="sap.m"><Page id="page" title="Overview"><Button text="getData" press="callApi"/></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
