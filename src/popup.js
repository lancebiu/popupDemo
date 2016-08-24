require("./style.scss");

function Popup() {

}

Popup.prototype = {
    alert: function (content) {
        const popupBox = $("<div class='popup_window'></div>");
        popupBox.appendTo('body');
        popupBox.html(content);
    },
    confirm: function () {

    },
    prompt: function () {

    }
};

window.Popup = Popup;