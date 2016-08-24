function Widget() {
    this.handlers = {};
}

Widget.prototype = {
    on: function(type, handler) {
        if(typeof handler !== 'function')
            return;
        if(this.handlers[type] === undefined) {
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    },

    fire: function(type, data) {
        var i = 0;
        if(this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for(; i < handlers.length; i++) {
                handlers[i](data);
            }
        }
    }
};

module.exports = {
    Widget: Widget
};