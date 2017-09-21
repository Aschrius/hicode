Ext.define('Tool.box.IndexPan', {
    extend: 'Ext.panel.Panel',
    id: 'box-index-pan',
    title: '@box',
    alias: 'widget.box-index-pan',
    layout: 'vbox',
    border: false,
    bodyBorder: false,
    defaults: {
        padding: '0 50 0 50'
    },
    initComponent: function () {


        let data = {
            code: {
                text: '工作相关',
                buttons: [
                    {
                        "icon": __dirname + '/box/code/res/pack.png',
                        "text": '项目补丁',
                        "toModule": "box-code_pack-pan",
                        "dto": {
                            controller: 'Tool.box.code.controller.PackController',
                            "useCache": false,
                            "record": null
                        }
                    }
                ]

            }
        };
        ExtUtil.initIndexView(this, data, 3);
        this.callParent(arguments);
    }
});
