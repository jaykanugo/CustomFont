//Form JS File
function addWidgetsfrmHome() {
    var label104465448957861 = new kony.ui.Label({
        "id": "label104465448957861",
        "isVisible": true,
        "text": "The application showcases the below custom fonts imported to the app",
        "skin": "sknLblKonyThemeNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [10, 10, 1, 1],
        "padding": [3, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 17
    }, {});
    var label104465448957832 = new kony.ui.Label({
        "id": "label104465448957832",
        "isVisible": true,
        "text": "Font Name : Quartz Regular",
        "skin": "lblQuart"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [20, 4, 1, 1],
        "padding": [3, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 21
    }, {});
    var label104465448957853 = new kony.ui.Label({
        "id": "label104465448957853",
        "isVisible": true,
        "text": "Font Name : Sarsaparilla NF",
        "skin": "lblSars"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [20, 4, 1, 1],
        "padding": [3, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 21
    }, {});
    frmHome.add(
    label104465448957861, label104465448957832, label104465448957853);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "sknFrmKonyThemeNormal",
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "showMiniAppMenu": false,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["label104465448957861", "label104465448957832", "label104465448957853", "lblTitle"]
    });
};