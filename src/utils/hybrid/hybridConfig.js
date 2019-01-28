// 导航信息
let hybridConfig = {
    my: {
        student: {
            profile: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "个人信息",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },
            classList: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "我的班级",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                    "btnmore": [{
                        "name": "搜索班级",
                        "data": `${window.proServer}/my/student/addClass`,
                        "newpage": "true"
                    }, {
                        "name": "扫一扫",
                        "data": "scanQrCode",
                        "newpage": "false"
                    }, ]
                }
            },
            addClass: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "添加班级",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },
            classDetail: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "班级详情",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },
            qCode: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "二维码名片",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },

        },
        teacher: {
            profile: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "个人信息",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },
            classList: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "我的班级",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                    "btnmore": [{
                        "name": "搜索班级",
                        "data": `${window.proServer}/my/teacher/addClass`,
                        "newpage": "true"
                    }, {
                        "name": "扫一扫",
                        "data": "scanQrCode",
                        "newpage": "false"
                    }, ]
                }
            },
            addClass: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "添加班级",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },
            classDetail: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "班级详情",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },
            qCode: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "二维码名片",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },

        },
        parent: {
            profile: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "个人信息",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },
            childlist: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "切换孩子",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                    "btnmore": [{
                        "name": "绑定学生号",
                        "data": `${window.proServer}/my/parent/addChild`,
                        "newpage": "true"
                    }, ]
                }
            },
            addChild: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "绑定学生号",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },
            addProperty: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "家长身份",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },
            qCode: {
                toolbar: {
                    visible: "true",
                    bgcolor: "#000000",
                    title: {
                        content: "二维码名片",
                        textsize: "12",
                        textcolor: "#000000"
                    },
                }
            },
        }
    },
    homework: {
        teacher: {
            assign: {
                "toolbar": {
                    "visible": "true",
                    "bgcolor": "#000000",
                    "title": {
                        "content": "布置作业单",
                        "textsize": "12",
                        "textcolor": "#000000"
                    },
                    "btnright": {
                        "name": "布置",
                        "data": "release",
                        "newpage": "false"
                    },
                }
            },
            list: {
                "toolbar": {
                    "visible": "true",
                    "bgcolor": "#000000",
                    "title": {
                        "content": "作业列表",
                        "textsize": "12",
                        "textcolor": "#000000"
                    },
                    "btnmore": [{
                        "name": "作业单",
                        "data": `${window.proServer}/homework/teacher/assign`,
                        "newpage": "true"

                    }]
                }
            },
            'offline-detail': {
                "toolbar": {
                    "visible": "true",
                    "bgcolor": "#000000",
                    "title": {
                        "content": "作业单详情",
                        "textsize": "12",
                        "textcolor": "#000000"
                    },
                }
            },
        }
    }
}

let offlineSheetDetaiToolBar = {
    "toolbar": {
        "visible": "true",
        "bgcolor": "#000000",
        "title": {
            "content": "作业单详情",
            "textsize": "12",
            "textcolor": "#000000"
        },
    }
}

// 仅显示标题
let toolbarJson = {
    "toolbar": {
        "visible": "true",
        "bgcolor": "#000000",
        "title": {
            "content": "作业",
            "textsize": "12",
            "textcolor": "#000000"
        }
    }
}

let toolbarMatchJson = {
    "toolbar": {
        "visible": "true",
        "bgcolor": "#000000",
        "title": {
            "content": "闪测评",
            "textsize": "12",
            "textcolor": "#000000"
        }
    }
}


// 显示配套练习和作业单发布按钮
let btnmoreJson = {
    btnmore: [{
        "name": "作业单",
        "data": `${window.proServer}/homework/teacher/assign`,
        "newpage": "true"
    },{
        "name": "选题组卷",
        "data": `${window.proServer}/pickQuestion/index?fromTag=homework`,
        "newpage": "true"
    }]
}

let alertDialog = {
    "type": "alertdialog",
    "title": "提示",
    "message": "确定删除吗？",
    "buttons": [{
        "name": "确定",
        "data": "confirm",
        "newpage": "false"
    }, {
        "name": "取消",
        "data": "cancel",
        "newpage": "false"
    }]
}

let urgeTips = {
    "data": "催促发送成功，学生会收到提醒"
}

let deleteToast = {
    "data": "删除成功"
}

let offlineSheetDeletedToast = {
    "data": "作业单已删除"
}

let shareListData = [{
    id: 1,
    name: '全站共享',
    isChecked: false
}, {
    id: 2,
    name: '区内共享',
    isChecked: false
}, {
    id: 3,
    name: '校内共享',
    isChecked: false
}, {
    id: 4,
    name: '不共享',
    isChecked: false
}]

let analysisType = [{
    name: "文本",
    tag: "isShowText"
}, {
    name: "拍照",
    tag: "isShowMake"
}, {
    name: "图片",
    tag: "isShowImg"
}, {
    name: "录音",
    tag: "isShowRecord"
}, {
    name: "取消",
    tag: "isShowAll"
}]

const imgList = [{
    id: 1,
    url: "static/img/wrong/yuwen.png"
}, {
    id: 2,
    url: "static/img/wrong/shuxue.png"
}, {
    id: 3,
    url: "static/img/wrong/yingyu.png"
}, {
    id: 4,
    name: "物理",
    url: "static/img/wrong/wuli.png"
}, {
    id: 5,
    url: "static/img/wrong/huaxue.png"
}, {
    id: 6,
    url: "static/img/wrong/shengwu.png"
}, {
    id: 7,
    url: "static/img/wrong/zhengzhi.png"
}, {
    id: 8,
    url: "static/img/wrong/lishi.png"
}, {
    id: 9,
    url: "static/img/wrong/dili.png"
}]

export {
    hybridConfig,
    toolbarJson,
    btnmoreJson,
    alertDialog,
    urgeTips,
    deleteToast,
    offlineSheetDeletedToast,
    offlineSheetDetaiToolBar,
    btnmoreJsonForMatch,
    toolbarMatchJson,
    shareListData,
    analysisType,
    imgList
}