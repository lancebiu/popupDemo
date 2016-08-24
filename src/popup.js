require("./style.scss");

function Popup() {

}

Popup.prototype = {
    alert: function (content, handler) {
        const popupBox = $("<div class='popup_window'></div>");
        const btn = $("<input type='button' value='确定'/>");
        popupBox.html(content);
        btn.click(function () {
            handler && handler();
            popupBox.remove();
        });
        btn.appendTo(popupBox);
        popupBox.appendTo('body');
    },
    confirm: function () {

    },
    prompt: function () {

    }
};

window.Popup = Popup;