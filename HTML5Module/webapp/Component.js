

sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
    "use strict";

    return UIComponent.extend("HTML5Module.Component", {
        metadata: {
            manifest: "json",
        },
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();

        },
    });
});
