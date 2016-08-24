require("./style.scss");
const widget = require('./widget');

function Popup() {
    widget.Widget.apply(this);
    this.config = {
        content: "",
        hasMask: true
    };
}

Popup.prototype = $.extend({}, widget.Widget.prototype, {

    alert: function (config) {
        var _this = this,
            mask = null,
            CFG = $.extend(this.config, config);

        const popupWindow = $("<div class='popup_window'></div>");
        CFG.skinClassName && popupWindow.addClass(CFG.skinClassName);
        const info = $("<p></p>");
        info.text(CFG.content);
        info.appendTo(popupWindow);

        const btn = $("<input type='button' value='确定'/>");
        btn.click(function () {
            popupWindow.remove();
            mask && mask.remove();
            _this.fire("close");
        });
        btn.appendTo(popupWindow);

        if(CFG.hasMask) {
            mask = $("<div class='popup_mask'></div>");
            mask.appendTo('body');
        }
        popupWindow.appendTo('body');

        return this;
    }
});


window.Popup = Popup;