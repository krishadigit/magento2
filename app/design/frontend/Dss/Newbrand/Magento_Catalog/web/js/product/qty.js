define([
    'uiComponent',
    'ko'
], function (Component, ko) {
    'use strict';

    return Component.extend({
        defaults: {
            qty: ko.observable(1),
            defaultQty: 1
        },

        initialize() {
            this._super();
            this.qty(this.defaultQty);
            return this;
        },

        increaseQty: function () {
            let current = parseInt(this.qty());
            if (isNaN(current) || current < 1) {
                current = this.defaultQty;
            }
            this.qty(current + 1);
        },

        decreaseQty: function () {
            let current = parseInt(this.qty());
            if (isNaN(current) || current <= 1) {
                this.qty(1);
                return;
            }
            this.qty(current - 1);
        }
    });
});
