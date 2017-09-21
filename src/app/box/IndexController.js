"use strict";

Ext.define('Tool.box.IndexController', {
    extend: 'Tool.base.controller.MvcController',
    statics: {},
    controllers: [
    ],
    views: [
        'Tool.box.IndexPan'
    ],
    stores: [],
    models: [],
    requires: [
        'Tool.base.util.ExtUtil'
    ],
    init: function () {
        let me = this;
        this.initEvent();
        this.initCache();
    },
    initCache: function () {

    },
    initEvent: function () {
        let me = this;
        me.control({
            'box-index-pan': {
                afterrender: me.initView
            },
            'box-index-pan component[doAction]': {click: me.doAction},
        });
    },
    initView: function () {
    }


});
