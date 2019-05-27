require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(27);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_42564a6a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-42564a6a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_42564a6a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mine\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42564a6a", Component.options)
  } else {
    hotAPI.reload("data-v-42564a6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _require = __webpack_require__(30),
    $Toast = _require.$Toast;

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      name: '',
      img: '',
      evalu: ''
    };
  },


  methods: {
    changeName: function changeName(event) {
      this.name = event.mp.detail.detail.value;
    },
    changeImg: function changeImg(event) {
      this.img = event.mp.detail.detail.value;
    },
    changeevalu: function changeevalu(event) {
      this.evalu = event.mp.detail.detail.value;
    },
    handleClick: function handleClick() {
      if (this.name && this.img && this.evalu) {
        var event = {
          name: this.name,
          img: this.img,
          evalu: this.evalu
        };
        wx.cloud.callFunction({ name: 'new_video', data: event }).then(function (res) {
          console.log(res);
        });
        $Toast({
          content: '数据已提交',
          type: 'success'
        });
      } else {
        $Toast({
          content: '数据不完整',
          type: 'warning'
        });
      }
    }
  },

  created: function created() {}
});

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

function getCtx (selector) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];

    const componentCtx = ctx.selectComponent(selector);

    if (!componentCtx) {
        console.error('无法找到对应的组件，请按文档说明使用组件');
        return null;
    }
    return componentCtx;
}

function Toast(options) {
    const { selector = '#toast' } = options;
    const ctx = getCtx(selector);

    ctx.handleShow(options);
}

Toast.hide = function (selector = '#toast') {
    const ctx = getCtx(selector);

    ctx.handleHide();
};

function Message(options) {
    const { selector = '#message' } = options;
    const ctx = getCtx(selector);

    ctx.handleShow(options);
}

module.exports = {
    $Toast: Toast,
    $Message: Message
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('view', {
    staticClass: "userinfo"
  }, [_c('view', {
    staticClass: "userinfo-avatar"
  }, [_c('open-data', {
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('open-data', {
    attrs: {
      "type": "userNickName",
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "分享视频",
      "mpcomid": '5'
    }
  }, [_c('i-input', {
    attrs: {
      "value": _vm.name,
      "title": "名称",
      "autofocus": "",
      "placeholder": "请输入视频名称",
      "maxlength": "20",
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "change": function($event) {
        _vm.changeName($event)
      }
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.score,
      "title": "视频图片",
      "placeholder": "图片：",
      "maxlength": "20",
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "change": function($event) {
        _vm.changeImg($event)
      }
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.evalu,
      "title": "视频评价",
      "placeholder": "评价：",
      "maxlength": "200",
      "eventid": '2',
      "mpcomid": '4'
    },
    on: {
      "change": function($event) {
        _vm.changeevalu($event)
      }
    }
  })], 1), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "warning",
      "size": "default",
      "eventid": '3',
      "mpcomid": '6'
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._v("分享")]), _vm._v(" "), _c('i-toast', {
    attrs: {
      "id": "toast",
      "mpcomid": '7'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42564a6a", esExports)
  }
}

/***/ })

},[26]);