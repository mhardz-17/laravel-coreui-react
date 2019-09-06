(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@coreui/react/es/Aside.js":
/*!************************************************!*\
  !*** ./node_modules/@coreui/react/es/Aside.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared */ "./node_modules/@coreui/react/es/Shared/index.js");
/* harmony import */ var _Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared/toggle-classes */ "./node_modules/@coreui/react/es/Shared/toggle-classes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  offCanvas: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps = {
  tag: 'aside',
  display: '',
  fixed: false,
  isOpen: false,
  offCanvas: true
};

var AppAside = function (_Component) {
  _inherits(AppAside, _Component);

  function AppAside(props) {
    _classCallCheck(this, AppAside);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.isFixed = _this.isFixed.bind(_this);
    _this.isOffCanvas = _this.isOffCanvas.bind(_this);
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_this);
    return _this;
  }

  AppAside.prototype.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
    this.isOffCanvas(this.props.offCanvas);
    this.displayBreakpoint(this.props.display);
  };

  AppAside.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('aside-menu-fixed');
    }
  };

  AppAside.prototype.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('aside-menu-off-canvas');
    }
  };

  AppAside.prototype.displayBreakpoint = function displayBreakpoint(display) {
    if (display && Object(_Shared__WEBPACK_IMPORTED_MODULE_3__["checkBreakpoint"])(display, _Shared__WEBPACK_IMPORTED_MODULE_3__["validBreakpoints"])) {
      var cssClass = 'aside-menu-' + display + '-show';
      Object(_Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__["default"])(cssClass, _Shared__WEBPACK_IMPORTED_MODULE_3__["asideMenuCssClasses"], true);
    }
  };

  AppAside.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.display;
    delete attributes.fixed;
    delete attributes.offCanvas;
    delete attributes.isOpen;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'aside-menu');

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({}, attributes, { className: classes }),
      children
    );
  };

  return AppAside;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppAside.propTypes =  true ? propTypes : undefined;
AppAside.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppAside);

/***/ }),

/***/ "./node_modules/@coreui/react/es/AsideToggler.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/AsideToggler.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/index */ "./node_modules/@coreui/react/es/Shared/index.js");
/* harmony import */ var _Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared/toggle-classes */ "./node_modules/@coreui/react/es/Shared/toggle-classes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  defaultOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps = {
  defaultOpen: false,
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};

var AppAsideToggler = function (_Component) {
  _inherits(AppAsideToggler, _Component);

  function AppAsideToggler(props) {
    _classCallCheck(this, AppAsideToggler);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.asideToggle = _this.asideToggle.bind(_this);

    _this.state = {};
    return _this;
  }

  AppAsideToggler.prototype.componentDidMount = function componentDidMount() {
    this.toggle(this.props.defaultOpen);
  };

  AppAsideToggler.prototype.toggle = function toggle(force) {
    var _ref = [this.props.display, this.props.mobile],
        display = _ref[0],
        mobile = _ref[1];

    var cssClass = _Shared_index__WEBPACK_IMPORTED_MODULE_3__["asideMenuCssClasses"][0];
    if (!mobile && display && Object(_Shared_index__WEBPACK_IMPORTED_MODULE_3__["checkBreakpoint"])(display, _Shared_index__WEBPACK_IMPORTED_MODULE_3__["validBreakpoints"])) {
      cssClass = 'aside-menu-' + display + '-show';
    }
    Object(_Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__["default"])(cssClass, _Shared_index__WEBPACK_IMPORTED_MODULE_3__["asideMenuCssClasses"], force);
  };

  AppAsideToggler.prototype.asideToggle = function asideToggle(e) {
    e.preventDefault();
    this.toggle();
  };

  AppAsideToggler.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        children = _props.children,
        type = _props.type,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'type', 'tag']);

    delete attributes.defaultOpen;
    delete attributes.display;
    delete attributes.mobile;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar-toggler');

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({
        type: type,
        className: classes
      }, attributes, {
        onClick: function onClick(event) {
          return _this2.asideToggle(event);
        }
      }),
      children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: 'navbar-toggler-icon' })
    );
  };

  return AppAsideToggler;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppAsideToggler.propTypes =  true ? propTypes : undefined;
AppAsideToggler.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppAsideToggler);

/***/ }),

/***/ "./node_modules/@coreui/react/es/Breadcrumb.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/react/es/Breadcrumb.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var routes = void 0;

var getPaths = function getPaths(pathname) {
  var paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce(function (prev, curr) {
    var currPath = prev + '/' + curr;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

var findRouteName = function findRouteName(url) {
  var aroute = routes.find(function (route) {
    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["matchPath"])(url, { path: route.path, exact: route.exact });
  });
  return aroute && aroute.name ? aroute.name : null;
};

var BreadcrumbsItem = function BreadcrumbsItem(_ref) {
  var match = _ref.match;

  var routeName = findRouteName(match.url);
  if (routeName) {
    return match.isExact ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"],
      { active: true },
      routeName
    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"],
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
        { to: match.url || '' },
        routeName
      )
    );
  }
  return null;
};

BreadcrumbsItem.propTypes =  true ? {
  match: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
  })
} : undefined;

var Breadcrumbs = function Breadcrumbs(args) {
  var paths = getPaths(args.location.pathname);
  var items = paths.map(function (path, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { key: i.toString(), path: path, component: BreadcrumbsItem });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    reactstrap__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"],
    null,
    items
  );
};

var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  appRoutes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string])
};

var defaultProps = {
  tag: 'div',
  className: '',
  appRoutes: [{ path: '/', exact: true, name: 'Home', component: null }]
};

var AppBreadcrumb = function (_Component) {
  _inherits(AppBreadcrumb, _Component);

  function AppBreadcrumb(props) {
    _classCallCheck(this, AppBreadcrumb);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { routes: props.appRoutes };
    routes = _this.state.routes;
    return _this;
  }

  AppBreadcrumb.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'tag']);

    delete attributes.children;
    delete attributes.appRoutes;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      { className: classes },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({ path: '/:path', component: Breadcrumbs }, attributes))
    );
  };

  return AppBreadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppBreadcrumb.propTypes =  true ? propTypes : undefined;
AppBreadcrumb.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppBreadcrumb);

/***/ }),

/***/ "./node_modules/@coreui/react/es/Breadcrumb2.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/react/es/Breadcrumb2.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var routes = void 0;
var router = void 0;

var getPaths = function getPaths(pathname) {
  var paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce(function (prev, curr) {
    var currPath = prev + '/' + curr;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

var findRouteName2 = function findRouteName2(url) {
  var matchPath = router.matchPath;
  var aroute = routes.find(function (route) {
    return matchPath(url, { path: route.path, exact: route.exact });
  });
  return aroute && aroute.name ? aroute.name : null;
};

var BreadcrumbsItem2 = function BreadcrumbsItem2(_ref) {
  var match = _ref.match;

  var routeName = findRouteName2(match.url);
  var Link = router.Link;
  if (routeName) {
    return match.isExact ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      reactstrap__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"],
      { active: true },
      routeName
    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      reactstrap__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"],
      null,
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Link,
        { to: match.url || '' },
        routeName
      )
    );
  }
  return null;
};

BreadcrumbsItem2.propTypes =  true ? {
  match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })
} : undefined;

var Breadcrumbs2 = function Breadcrumbs2(args) {
  var Route = router.Route;
  var paths = getPaths(args.location.pathname);
  var items = paths.map(function (path, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, { key: i.toString(), path: path, component: BreadcrumbsItem2 });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    reactstrap__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"],
    null,
    items
  );
};

var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  appRoutes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  router: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};

var defaultProps = {
  tag: 'div',
  className: '',
  appRoutes: [{ path: '/', exact: true, name: 'Home', component: null }]
};

var AppBreadcrumb2 = function (_Component) {
  _inherits(AppBreadcrumb2, _Component);

  function AppBreadcrumb2(props) {
    _classCallCheck(this, AppBreadcrumb2);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { routes: props.appRoutes };
    routes = _this.state.routes;
    router = props.router;
    return _this;
  }

  AppBreadcrumb2.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'tag']);

    delete attributes.children;
    delete attributes.appRoutes;
    delete attributes.router;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className);

    var Route = router.Route;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      { className: classes },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Route, _extends({ path: '/:path', component: Breadcrumbs2 }, attributes))
    );
  };

  return AppBreadcrumb2;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppBreadcrumb2.propTypes =  true ? propTypes : undefined;
AppBreadcrumb2.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppBreadcrumb2);

/***/ }),

/***/ "./node_modules/@coreui/react/es/Footer.js":
/*!*************************************************!*\
  !*** ./node_modules/@coreui/react/es/Footer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps = {
  tag: 'footer',
  fixed: false
};

var AppFooter = function (_Component) {
  _inherits(AppFooter, _Component);

  function AppFooter(props) {
    _classCallCheck(this, AppFooter);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.isFixed = _this.isFixed.bind(_this);
    return _this;
  }

  AppFooter.prototype.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
  };

  AppFooter.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('footer-fixed');
    }
  };

  AppFooter.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.fixed;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'app-footer');

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    );
  };

  return AppFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppFooter.propTypes =  true ? propTypes : undefined;
AppFooter.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppFooter);

/***/ }),

/***/ "./node_modules/@coreui/react/es/Header.js":
/*!*************************************************!*\
  !*** ./node_modules/@coreui/react/es/Header.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps = {
  tag: 'header',
  fixed: false
};

var AppHeader = function (_Component) {
  _inherits(AppHeader, _Component);

  function AppHeader() {
    _classCallCheck(this, AppHeader);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppHeader.prototype.componentDidMount = function componentDidMount() {
    this.isFixed(this.props.fixed);
  };

  AppHeader.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('header-fixed');
    }
  };

  // breakpoint(breakpoint) {
  //   return breakpoint || '';
  // }

  AppHeader.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.fixed;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'app-header', 'navbar');

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    );
  };

  return AppHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppHeader.propTypes =  true ? propTypes : undefined;
AppHeader.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppHeader);

/***/ }),

/***/ "./node_modules/@coreui/react/es/HeaderDropdown.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/HeaderDropdown.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = _extends({
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
}, reactstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].propTypes);

var defaultProps = {
  direction: 'down'
};

var AppHeaderDropdown = function (_Component) {
  _inherits(AppHeaderDropdown, _Component);

  function AppHeaderDropdown(props) {
    _classCallCheck(this, AppHeaderDropdown);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  AppHeaderDropdown.prototype.toggle = function toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  AppHeaderDropdown.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        attributes = _objectWithoutProperties(_props, ['children']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      reactstrap__WEBPACK_IMPORTED_MODULE_1__["Dropdown"],
      _extends({ nav: true, isOpen: this.state.dropdownOpen, toggle: this.toggle }, attributes),
      children
    );
  };

  return AppHeaderDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppHeaderDropdown.propTypes =  true ? propTypes : undefined;
AppHeaderDropdown.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppHeaderDropdown);

/***/ }),

/***/ "./node_modules/@coreui/react/es/NavbarBrand.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/react/es/NavbarBrand.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  brand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  full: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  minimized: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

var defaultProps = {
  tag: 'a'
};

var AppNavbarBrand = function (_Component) {
  _inherits(AppNavbarBrand, _Component);

  function AppNavbarBrand() {
    _classCallCheck(this, AppNavbarBrand);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppNavbarBrand.prototype.imgSrc = function imgSrc(brand) {
    return brand.src ? brand.src : '';
  };

  AppNavbarBrand.prototype.imgWidth = function imgWidth(brand) {
    return brand.width ? brand.width : 'auto';
  };

  AppNavbarBrand.prototype.imgHeight = function imgHeight(brand) {
    return brand.height ? brand.height : 'auto';
  };

  AppNavbarBrand.prototype.imgAlt = function imgAlt(brand) {
    return brand.alt ? brand.alt : '';
  };

  AppNavbarBrand.prototype.navbarBrandImg = function navbarBrandImg(props, classBrand, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', {
      src: this.imgSrc(props),
      width: this.imgWidth(props),
      height: this.imgHeight(props),
      alt: this.imgAlt(props),
      className: classBrand,
      key: key.toString()
    });
  };

  AppNavbarBrand.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar-brand');

    var img = [];
    if (this.props.brand) {
      var props = this.props.brand;
      var classBrand = 'navbar-brand';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }
    if (this.props.full) {
      var _props2 = this.props.full;
      var _classBrand = 'navbar-brand-full';
      img.push(this.navbarBrandImg(_props2, _classBrand, img.length + 1));
    }
    if (this.props.minimized) {
      var _props3 = this.props.minimized;
      var _classBrand2 = 'navbar-brand-minimized';
      img.push(this.navbarBrandImg(_props3, _classBrand2, img.length + 1));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({}, attributes, { className: classes }),
      children || img
    );
  };

  return AppNavbarBrand;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppNavbarBrand.propTypes =  true ? propTypes : undefined;
AppNavbarBrand.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppNavbarBrand);

/***/ }),

/***/ "./node_modules/@coreui/react/es/Shared/classes.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/Shared/classes.js ***!
  \*********************************************************/
/*! exports provided: sidebarCssClasses, asideMenuCssClasses, validBreakpoints, checkBreakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarCssClasses", function() { return sidebarCssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asideMenuCssClasses", function() { return asideMenuCssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validBreakpoints", function() { return validBreakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBreakpoint", function() { return checkBreakpoint; });
var sidebarCssClasses = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];

var asideMenuCssClasses = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];

var validBreakpoints = ['sm', 'md', 'lg', 'xl'];

function checkBreakpoint(breakpoint, list) {
  return list.indexOf(breakpoint) > -1;
}

/***/ }),

/***/ "./node_modules/@coreui/react/es/Shared/element-closest.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/Shared/element-closest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (ElementProto) {
  if (!ElementProto) {
    return;
  }
  if (typeof ElementProto.matches !== 'function') {
    ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof ElementProto.closest !== 'function') {
    ElementProto.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
      }

      return null;
    };
  }
})(typeof window !== 'undefined' && window.Element.prototype);

/***/ }),

/***/ "./node_modules/@coreui/react/es/Shared/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/react/es/Shared/index.js ***!
  \*******************************************************/
/*! exports provided: sidebarCssClasses, asideMenuCssClasses, validBreakpoints, checkBreakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./node_modules/@coreui/react/es/Shared/classes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebarCssClasses", function() { return _classes__WEBPACK_IMPORTED_MODULE_0__["sidebarCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asideMenuCssClasses", function() { return _classes__WEBPACK_IMPORTED_MODULE_0__["asideMenuCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validBreakpoints", function() { return _classes__WEBPACK_IMPORTED_MODULE_0__["validBreakpoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkBreakpoint", function() { return _classes__WEBPACK_IMPORTED_MODULE_0__["checkBreakpoint"]; });





/***/ }),

/***/ "./node_modules/@coreui/react/es/Shared/layout/layout.js":
/*!***************************************************************!*\
  !*** ./node_modules/@coreui/react/es/Shared/layout/layout.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutHelper = (_temp = _class = function () {
  function LayoutHelper() {
    _classCallCheck(this, LayoutHelper);
  }

  LayoutHelper.sidebarToggle = function sidebarToggle(toggle) {
    var minimize = arguments.length ? toggle : !this.elClassList.contains('sidebar-minimized');
    this.sidebarMinimize(minimize);
    this.brandMinimize(minimize);
    this.sidebarPSToggle(!minimize); /*remove PS on sidebar minimized*/
  };

  LayoutHelper.sidebarMinimize = function sidebarMinimize(force) {
    // return this.elClassList.toggle('sidebar-minimized', force);
    return this.toggleClass('sidebar-minimized', force);
  };

  LayoutHelper.brandMinimize = function brandMinimize(force) {
    // this.elClassList.toggle('brand-minimized', force);
    this.toggleClass('brand-minimized', force);
  };

  //  sidebar perfect scrollbar


  LayoutHelper.sidebarPSToggle = function sidebarPSToggle(toggle) {
    var sidebar = document.querySelector('.sidebar-nav');
    if (sidebar) {
      if (toggle) {
        sidebar.classList.add('ps');
        sidebar.classList.add('ps-container');
        sidebar.classList.add('ps--active-y');
      } else {
        sidebar.classList.remove('ps');
        sidebar.classList.remove('ps-container');
        sidebar.classList.remove('ps--active-y');
      }
    }
  };

  LayoutHelper.toggleClass = function toggleClass(className, force) {

    if (force === true) {
      this.elClassList.add(className);
    } else if (force === false) {
      this.elClassList.remove(className);
    } else {
      this.elClassList.toggle(className);
    }
    return this.elClassList.contains(className);
  };

  return LayoutHelper;
}(), _class.elClassList = document.body.classList, _temp);


/* harmony default export */ __webpack_exports__["default"] = (LayoutHelper);

/***/ }),

/***/ "./node_modules/@coreui/react/es/Shared/toggle-classes.js":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/react/es/Shared/toggle-classes.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggleClasses; });
function toggleClasses(toggleClass, classList, force) {
  var level = classList.indexOf(toggleClass);
  var removeClassList = classList.slice(0, level);
  removeClassList.map(function (className) {
    return document.body.classList.remove(className);
  });
  if (force === true) {
    document.body.classList.add(toggleClass);
  } else if (force === false) {
    document.body.classList.remove(toggleClass);
  } else {
    document.body.classList.toggle(toggleClass);
  }
  return document.body.classList.contains(toggleClass);
}

/***/ }),

/***/ "./node_modules/@coreui/react/es/Sidebar.js":
/*!**************************************************!*\
  !*** ./node_modules/@coreui/react/es/Sidebar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared */ "./node_modules/@coreui/react/es/Shared/index.js");
/* harmony import */ var react_onclickout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-onclickout */ "./node_modules/react-onclickout/index.js");
/* harmony import */ var react_onclickout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_onclickout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Shared_element_closest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Shared/element-closest */ "./node_modules/@coreui/react/es/Shared/element-closest.js");
/* harmony import */ var _Shared_element_closest__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Shared_element_closest__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Shared/layout/layout */ "./node_modules/@coreui/react/es/Shared/layout/layout.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  compact: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  display: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  minimized: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  offCanvas: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  staticContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])
};

var defaultProps = {
  tag: 'div',
  compact: false,
  display: '',
  fixed: false,
  minimized: false,
  isOpen: false,
  offCanvas: false
};

var AppSidebar = function (_Component) {
  _inherits(AppSidebar, _Component);

  function AppSidebar(props) {
    _classCallCheck(this, AppSidebar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.isCompact = _this.isCompact.bind(_this);
    _this.isFixed = _this.isFixed.bind(_this);
    _this.isMinimized = _this.isMinimized.bind(_this);
    _this.isOffCanvas = _this.isOffCanvas.bind(_this);
    _this.displayBreakpoint = _this.displayBreakpoint.bind(_this);
    _this.hideMobile = _this.hideMobile.bind(_this);
    return _this;
  }

  AppSidebar.prototype.componentDidMount = function componentDidMount() {
    this.displayBreakpoint(this.props.display);
    this.isCompact(this.props.compact);
    this.isFixed(this.props.fixed);
    this.isMinimized(this.props.minimized);
    this.isOffCanvas(this.props.offCanvas);
  };

  AppSidebar.prototype.isCompact = function isCompact(compact) {
    if (compact) {
      document.body.classList.add('sidebar-compact');
    }
  };

  AppSidebar.prototype.isFixed = function isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('sidebar-fixed');
    }
  };

  AppSidebar.prototype.isMinimized = function isMinimized(minimized) {
    _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarToggle(minimized);
  };

  AppSidebar.prototype.isOffCanvas = function isOffCanvas(offCanvas) {
    if (offCanvas) {
      document.body.classList.add('sidebar-off-canvas');
    }
  };

  AppSidebar.prototype.displayBreakpoint = function displayBreakpoint(display) {
    var cssTemplate = 'sidebar-' + display + '-show';
    var _sidebarCssClasses$ = _Shared__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"][0],
        cssClass = _sidebarCssClasses$[0];

    if (display && _Shared__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"].indexOf(cssTemplate) > -1) {
      cssClass = cssTemplate;
    }
    document.body.classList.add(cssClass);
  };

  AppSidebar.prototype.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.remove('sidebar-show');
    }
  };

  AppSidebar.prototype.onClickOut = function onClickOut(e) {
    if (typeof window !== 'undefined' && document.body.classList.contains('sidebar-show')) {
      if (!e.target.closest('[data-sidebar-toggler]')) {
        this.hideMobile();
      }
    }
  };

  AppSidebar.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.compact;
    delete attributes.display;
    delete attributes.fixed;
    delete attributes.minimized;
    delete attributes.offCanvas;
    delete attributes.isOpen;
    delete attributes.staticContext;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'sidebar');

    // sidebar-nav root
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_onclickout__WEBPACK_IMPORTED_MODULE_4___default.a,
      { onClickOut: function onClickOut(e) {
          _this2.onClickOut(e);
        } },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Tag,
        _extends({ className: classes }, attributes),
        children
      )
    );
  };

  return AppSidebar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebar.propTypes =  true ? propTypes : undefined;
AppSidebar.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppSidebar);

/***/ }),

/***/ "./node_modules/@coreui/react/es/SidebarFooter.js":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/react/es/SidebarFooter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps = {
  tag: 'div'
};

var AppSidebarFooter = function (_Component) {
  _inherits(AppSidebarFooter, _Component);

  function AppSidebarFooter() {
    _classCallCheck(this, AppSidebarFooter);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppSidebarFooter.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'sidebar-footer');
    var footer = children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    ) : null;

    return footer;
  };

  return AppSidebarFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarFooter.propTypes =  true ? propTypes : undefined;
AppSidebarFooter.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppSidebarFooter);

/***/ }),

/***/ "./node_modules/@coreui/react/es/SidebarForm.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/react/es/SidebarForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps = {
  tag: 'div'
};

var AppSidebarForm = function (_Component) {
  _inherits(AppSidebarForm, _Component);

  function AppSidebarForm() {
    _classCallCheck(this, AppSidebarForm);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppSidebarForm.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'sidebar-form');
    var form = children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    ) : null;

    return form;
  };

  return AppSidebarForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarForm.propTypes =  true ? propTypes : undefined;
AppSidebarForm.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppSidebarForm);

/***/ }),

/***/ "./node_modules/@coreui/react/es/SidebarHeader.js":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/react/es/SidebarHeader.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

var defaultProps = {
  tag: 'div'
};

var AppSidebarHeader = function (_Component) {
  _inherits(AppSidebarHeader, _Component);

  function AppSidebarHeader() {
    _classCallCheck(this, AppSidebarHeader);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  AppSidebarHeader.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'sidebar-header');
    var header = children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({ className: classes }, attributes),
      children
    ) : null;

    return header;
  };

  return AppSidebarHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarHeader.propTypes =  true ? propTypes : undefined;
AppSidebarHeader.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppSidebarHeader);

/***/ }),

/***/ "./node_modules/@coreui/react/es/SidebarMinimizer.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/react/es/SidebarMinimizer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/layout/layout */ "./node_modules/@coreui/react/es/Shared/layout/layout.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps = {
  tag: 'button',
  type: 'button'
};

var AppSidebarMinimizer = function (_Component) {
  _inherits(AppSidebarMinimizer, _Component);

  function AppSidebarMinimizer(props) {
    _classCallCheck(this, AppSidebarMinimizer);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  AppSidebarMinimizer.prototype.componentDidMount = function componentDidMount() {
    var isMinimized = document.body.classList.contains('sidebar-minimized');
    _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarPSToggle(!isMinimized);
  };

  AppSidebarMinimizer.prototype.handleClick = function handleClick() {
    _Shared_layout_layout__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarToggle();
  };

  AppSidebarMinimizer.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        type = _props.type,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag', 'type']);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'sidebar-minimizer', 'mt-auto');

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({ className: classes, type: type }, attributes, { onClick: function onClick(event) {
          return _this2.handleClick(event);
        } }),
      children
    );
  };

  return AppSidebarMinimizer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarMinimizer.propTypes =  true ? propTypes : undefined;
AppSidebarMinimizer.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppSidebarMinimizer);

/***/ }),

/***/ "./node_modules/@coreui/react/es/SidebarNav.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/react/es/SidebarNav.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ "./node_modules/react-perfect-scrollbar/dist/css/styles.css");
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_6__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  navConfig: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  navFunc: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  staticContext: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string])
};

var defaultProps = {
  tag: 'nav',
  navConfig: {
    items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: { variant: 'info', text: 'NEW' }
    }]
  },
  isOpen: false
};

var AppSidebarNav = function (_Component) {
  _inherits(AppSidebarNav, _Component);

  function AppSidebarNav(props) {
    _classCallCheck(this, AppSidebarNav);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.activeRoute = _this.activeRoute.bind(_this);
    _this.hideMobile = _this.hideMobile.bind(_this);
    return _this;
  }

  AppSidebarNav.prototype.handleClick = function handleClick(e) {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('open');
  };

  AppSidebarNav.prototype.activeRoute = function activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  };

  AppSidebarNav.prototype.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  };

  // nav list


  AppSidebarNav.prototype.navList = function navList(items) {
    var _this2 = this;

    return items.map(function (item, index) {
      return _this2.navType(item, index);
    });
  };

  // nav type


  AppSidebarNav.prototype.navType = function navType(item, idx) {
    return item.title ? this.navTitle(item, idx) : item.divider ? this.navDivider(item, idx) : item.label ? this.navLabel(item, idx) : item.children ? this.navDropdown(item, idx) : this.navItem(item, idx);
  };

  // nav list section title


  AppSidebarNav.prototype.navTitle = function navTitle(title, key) {
    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-title', title.class);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'li',
      { key: key, className: classes },
      this.navWrapper(title),
      ' '
    );
  };

  // simple wrapper for nav-title item


  AppSidebarNav.prototype.navWrapper = function navWrapper(item) {
    return item.wrapper && item.wrapper.element ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
  };

  // nav list divider


  AppSidebarNav.prototype.navDivider = function navDivider(divider, key) {
    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('divider', divider.class);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('li', { key: key, className: classes });
  };

  // nav label with nav link


  AppSidebarNav.prototype.navLabel = function navLabel(item, key) {
    var classes = {
      item: classnames__WEBPACK_IMPORTED_MODULE_3___default()('hidden-cn', item.class),
      link: classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-label', item.class ? item.class : ''),
      icon: classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-icon', !item.icon ? 'fa fa-circle' : item.icon, item.label.variant ? 'text-' + item.label.variant : '', item.label.class ? item.label.class : '')
    };
    return this.navLink(item, key, classes);
  };

  // nav dropdown


  AppSidebarNav.prototype.navDropdown = function navDropdown(item, key) {
    var classIcon = classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-icon', item.icon);
    var attributes = JSON.parse(JSON.stringify(item.attributes || {}));
    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-link', 'nav-dropdown-toggle', item.class, attributes.class);
    delete attributes.class;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'li',
      { key: key, className: this.activeRoute(item.url, this.props) },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'a',
        _extends({ className: classes, href: '#', onClick: this.handleClick }, attributes),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: classIcon }),
        item.name,
        this.navBadge(item.badge)
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'ul',
        { className: 'nav-dropdown-items' },
        this.navList(item.children)
      )
    );
  };

  // nav item with nav link


  AppSidebarNav.prototype.navItem = function navItem(item, key) {
    var classes = {
      item: classnames__WEBPACK_IMPORTED_MODULE_3___default()(item.class),
      link: classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-link', item.variant ? 'nav-link-' + item.variant : ''),
      icon: classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-icon', item.icon)
    };
    return this.navLink(item, key, classes);
  };

  // nav link


  AppSidebarNav.prototype.navLink = function navLink(item, key, classes) {
    var url = item.url || '';
    var itemIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: classes.icon });
    var itemBadge = this.navBadge(item.badge);
    var attributes = item.attributes || {};
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"],
      { key: key, className: classes.item },
      attributes.disabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
        _extends({ href: '', className: classes.link }, attributes),
        itemIcon,
        item.name,
        itemBadge
      ) : this.isExternal(url) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"],
        _extends({ href: url, className: classes.link, active: true }, attributes),
        itemIcon,
        item.name,
        itemBadge
      ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        _extends({ to: url, className: classes.link, activeClassName: 'active', onClick: this.hideMobile }, attributes),
        itemIcon,
        item.name,
        itemBadge
      )
    );
  };

  // badge addon to NavItem


  AppSidebarNav.prototype.navBadge = function navBadge(badge) {
    if (badge) {
      var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(badge.class);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"],
        { className: classes, color: badge.variant },
        badge.text
      );
    }
    return null;
  };

  AppSidebarNav.prototype.isExternal = function isExternal(url) {
    var link = url ? url.substring(0, 4) : '';
    return link === 'http';
  };

  AppSidebarNav.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        navConfig = _props.navConfig,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'navConfig']);

    delete attributes.isOpen;
    delete attributes.staticContext;
    delete attributes.Tag;

    var navClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'sidebar-nav');

    // ToDo: find better rtl fix
    var isRtl = getComputedStyle(document.documentElement).direction === 'rtl';

    // sidebar-nav root
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a,
      _extends({ className: navClasses }, attributes, { options: { suppressScrollX: !isRtl } }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"],
        null,
        children || this.navList(navConfig.items)
      )
    );
  };

  return AppSidebarNav;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarNav.propTypes =  true ? propTypes : undefined;
AppSidebarNav.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppSidebarNav);

/***/ }),

/***/ "./node_modules/@coreui/react/es/SidebarNav2.js":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/react/es/SidebarNav2.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "./node_modules/react-perfect-scrollbar/lib/index.js");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ "./node_modules/react-perfect-scrollbar/dist/css/styles.css");
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_5__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  navConfig: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  navFunc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  staticContext: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

var defaultProps = {
  tag: 'nav',
  navConfig: {
    items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: { variant: 'info', text: 'NEW' }
    }]
  },
  isOpen: false,
  router: { RsNavLink: reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"] }
};

var AppSidebarNav2 = function (_Component) {
  _inherits(AppSidebarNav2, _Component);

  function AppSidebarNav2(props) {
    _classCallCheck(this, AppSidebarNav2);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.activeRoute = _this.activeRoute.bind(_this);
    _this.hideMobile = _this.hideMobile.bind(_this);
    return _this;
  }

  AppSidebarNav2.prototype.handleClick = function handleClick(e) {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('open');
  };

  AppSidebarNav2.prototype.activeRoute = function activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  };

  AppSidebarNav2.prototype.hideMobile = function hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  };

  // nav list


  AppSidebarNav2.prototype.navList = function navList(items) {
    var _this2 = this;

    return items.map(function (item, index) {
      return _this2.navType(item, index);
    });
  };

  // nav type


  AppSidebarNav2.prototype.navType = function navType(item, idx) {
    return item.title ? this.navTitle(item, idx) : item.divider ? this.navDivider(item, idx) : item.label ? this.navLabel(item, idx) : item.children ? this.navDropdown(item, idx) : this.navItem(item, idx);
  };

  // nav list section title


  AppSidebarNav2.prototype.navTitle = function navTitle(title, key) {
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-title', title.class);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'li',
      { key: key, className: classes },
      this.navWrapper(title),
      ' '
    );
  };

  // simple wrapper for nav-title item


  AppSidebarNav2.prototype.navWrapper = function navWrapper(item) {
    return item.wrapper && item.wrapper.element ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
  };

  // nav list divider


  AppSidebarNav2.prototype.navDivider = function navDivider(divider, key) {
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('divider', divider.class);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('li', { key: key, className: classes });
  };

  // nav label with nav link


  AppSidebarNav2.prototype.navLabel = function navLabel(item, key) {
    var classes = {
      item: classnames__WEBPACK_IMPORTED_MODULE_2___default()('hidden-cn', item.class),
      link: classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-label', item.class ? item.class : ''),
      icon: classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-icon', !item.icon ? 'fa fa-circle' : item.icon, item.label.variant ? 'text-' + item.label.variant : '', item.label.class ? item.label.class : '')
    };
    return this.navLink(item, key, classes);
  };

  // nav dropdown


  AppSidebarNav2.prototype.navDropdown = function navDropdown(item, key) {
    var classIcon = classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-icon', item.icon);
    var attributes = JSON.parse(JSON.stringify(item.attributes || {}));
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-link', 'nav-dropdown-toggle', item.class, attributes.class);
    delete attributes.class;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'li',
      { key: key, className: this.activeRoute(item.url, this.props) },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'a',
        _extends({ className: classes, href: '#', onClick: this.handleClick }, attributes),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: classIcon }),
        item.name,
        this.navBadge(item.badge)
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'ul',
        { className: 'nav-dropdown-items' },
        this.navList(item.children)
      )
    );
  };

  // nav item with nav link


  AppSidebarNav2.prototype.navItem = function navItem(item, key) {
    var classes = {
      item: classnames__WEBPACK_IMPORTED_MODULE_2___default()(item.class),
      link: classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-link', item.variant ? 'nav-link-' + item.variant : ''),
      icon: classnames__WEBPACK_IMPORTED_MODULE_2___default()('nav-icon', item.icon)
    };
    return this.navLink(item, key, classes);
  };

  // nav link


  AppSidebarNav2.prototype.navLink = function navLink(item, key, classes) {
    var url = item.url || '';
    var itemIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: classes.icon });
    var itemBadge = this.navBadge(item.badge);
    var attributes = item.attributes || {};
    var NavLink = this.props.router.NavLink || reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"],
      { key: key, className: classes.item },
      attributes.disabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        _extends({ href: '', className: classes.link }, attributes),
        itemIcon,
        item.name,
        itemBadge
      ) : this.isExternal(url) || NavLink === reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"],
        _extends({ href: url, className: classes.link, active: true }, attributes),
        itemIcon,
        item.name,
        itemBadge
      ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        NavLink,
        _extends({ to: url, className: classes.link, activeClassName: 'active', onClick: this.hideMobile }, attributes),
        itemIcon,
        item.name,
        itemBadge
      )
    );
  };

  // badge addon to NavItem


  AppSidebarNav2.prototype.navBadge = function navBadge(badge) {
    if (badge) {
      var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(badge.class);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        reactstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"],
        { className: classes, color: badge.variant },
        badge.text
      );
    }
    return null;
  };

  AppSidebarNav2.prototype.isExternal = function isExternal(url) {
    var link = url ? url.substring(0, 4) : '';
    return link === 'http';
  };

  AppSidebarNav2.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        children = _props.children,
        navConfig = _props.navConfig,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'navConfig']);

    delete attributes.isOpen;
    delete attributes.staticContext;
    delete attributes.Tag;
    delete attributes.router;

    var navClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'sidebar-nav');

    // ToDo: find better rtl fix
    var isRtl = getComputedStyle(document.documentElement).direction === 'rtl';

    // sidebar-nav root
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a,
      _extends({ className: navClasses }, attributes, { options: { suppressScrollX: !isRtl } }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"],
        null,
        children || this.navList(navConfig.items)
      )
    );
  };

  return AppSidebarNav2;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarNav2.propTypes =  true ? propTypes : undefined;
AppSidebarNav2.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppSidebarNav2);

/***/ }),

/***/ "./node_modules/@coreui/react/es/SidebarToggler.js":
/*!*********************************************************!*\
  !*** ./node_modules/@coreui/react/es/SidebarToggler.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/index */ "./node_modules/@coreui/react/es/Shared/index.js");
/* harmony import */ var _Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared/toggle-classes */ "./node_modules/@coreui/react/es/Shared/toggle-classes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  mobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps = {
  display: 'lg',
  mobile: false,
  tag: 'button',
  type: 'button'
};

var AppSidebarToggler = function (_Component) {
  _inherits(AppSidebarToggler, _Component);

  function AppSidebarToggler(props) {
    _classCallCheck(this, AppSidebarToggler);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.sidebarToggle = _this.sidebarToggle.bind(_this);
    return _this;
  }

  AppSidebarToggler.prototype.sidebarToggle = function sidebarToggle(e) {
    e.preventDefault();
    this.toggle();
  };

  AppSidebarToggler.prototype.toggle = function toggle(force) {
    var _ref = [this.props.display, this.props.mobile],
        display = _ref[0],
        mobile = _ref[1];

    var cssClass = _Shared_index__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"][0];
    if (!mobile && display && Object(_Shared_index__WEBPACK_IMPORTED_MODULE_3__["checkBreakpoint"])(display, _Shared_index__WEBPACK_IMPORTED_MODULE_3__["validBreakpoints"])) {
      cssClass = 'sidebar-' + display + '-show';
    }
    Object(_Shared_toggle_classes__WEBPACK_IMPORTED_MODULE_4__["default"])(cssClass, _Shared_index__WEBPACK_IMPORTED_MODULE_3__["sidebarCssClasses"], force);
  };

  AppSidebarToggler.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        children = _props.children,
        Tag = _props.tag,
        attributes = _objectWithoutProperties(_props, ['className', 'children', 'tag']);

    delete attributes.mobile;
    delete attributes.display;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'navbar-toggler');

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Tag,
      _extends({ type: 'button', className: classes }, attributes, { onClick: function onClick(event) {
          return _this2.sidebarToggle(event);
        }, 'data-sidebar-toggler': true }),
      children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: 'navbar-toggler-icon' })
    );
  };

  return AppSidebarToggler;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSidebarToggler.propTypes =  true ? propTypes : undefined;
AppSidebarToggler.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppSidebarToggler);

/***/ }),

/***/ "./node_modules/@coreui/react/es/Switch.js":
/*!*************************************************!*\
  !*** ./node_modules/@coreui/react/es/Switch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  outline: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['', 'alt'])]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['', 'lg', 'sm']),
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  form: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['checkbox', 'radio']),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['', '3d', 'pill']),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dataOn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dataOff: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var defaultProps = {
  color: 'secondary',
  label: false,
  outline: false,
  size: '',
  checked: false,
  defaultChecked: undefined,
  disabled: undefined,
  required: undefined,
  type: 'checkbox',
  variant: '',
  dataOn: 'On',
  dataOff: 'Off'
};

var AppSwitch = function (_Component) {
  _inherits(AppSwitch, _Component);

  function AppSwitch(props) {
    _classCallCheck(this, AppSwitch);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.state = {
      uncontrolled: !!_this.props.defaultChecked,
      checked: _this.props.defaultChecked || _this.props.checked,
      selected: []
    };
    return _this;
  }

  AppSwitch.prototype.toggleState = function toggleState(check) {
    this.setState({
      checked: check
    });
  };

  AppSwitch.prototype.handleChange = function handleChange(event) {
    var target = event.target;
    this.toggleState(target.checked);

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  AppSwitch.prototype.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  AppSwitch.prototype.handleKeyUp = function handleKeyUp(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleState(!this.state.checked);
    }
  };

  AppSwitch.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (!this.state.uncontrolled && this.props.checked !== prevState.checked) {
      this.toggleState(this.props.checked);
    }
  };

  AppSwitch.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        disabled = _props.disabled,
        color = _props.color,
        name = _props.name,
        label = _props.label,
        outline = _props.outline,
        size = _props.size,
        required = _props.required,
        type = _props.type,
        value = _props.value,
        dataOn = _props.dataOn,
        dataOff = _props.dataOff,
        variant = _props.variant,
        attributes = _objectWithoutProperties(_props, ['className', 'disabled', 'color', 'name', 'label', 'outline', 'size', 'required', 'type', 'value', 'dataOn', 'dataOff', 'variant']);

    var tabindex = attributes.tabIndex;
    delete attributes.tabIndex;
    delete attributes.checked;
    delete attributes.defaultChecked;
    delete attributes.onChange;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'switch', label ? 'switch-label' : false, size ? 'switch-' + size : false, variant ? 'switch-' + variant : false, 'switch' + (outline ? '-outline' : '') + '-' + color + (outline === 'alt' ? '-alt' : ''), 'form-check-label');

    var inputClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('switch-input', 'form-check-input');

    var sliderClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('switch-slider');

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'label',
      { className: classes, tabIndex: tabindex, onKeyUp: this.handleKeyUp, onKeyDown: this.handleKeyDown },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', _extends({ type: type,
        className: inputClasses,
        onChange: this.handleChange,
        checked: this.state.checked,
        name: name,
        required: required,
        disabled: disabled,
        value: value,
        'aria-checked': this.state.checked,
        'aria-disabled': disabled,
        'aria-readonly': disabled
      }, attributes)),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: sliderClasses, 'data-checked': dataOn, 'data-unchecked': dataOff })
    );
  };

  return AppSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

AppSwitch.propTypes =  true ? propTypes : undefined;
AppSwitch.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (AppSwitch);

/***/ }),

/***/ "./node_modules/@coreui/react/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/@coreui/react/es/index.js ***!
  \************************************************/
/*! exports provided: AppAside, AppAsideToggler, AppBreadcrumb, AppBreadcrumb2, AppFooter, AppHeader, AppHeaderDropdown, AppNavbarBrand, AppSidebar, AppSidebarFooter, AppSidebarForm, AppSidebarHeader, AppSidebarMinimizer, AppSidebarNav, AppSidebarNav2, AppSidebarToggler, AppSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Aside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Aside */ "./node_modules/@coreui/react/es/Aside.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppAside", function() { return _Aside__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AsideToggler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsideToggler */ "./node_modules/@coreui/react/es/AsideToggler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppAsideToggler", function() { return _AsideToggler__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumb */ "./node_modules/@coreui/react/es/Breadcrumb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumb", function() { return _Breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Breadcrumb2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Breadcrumb2 */ "./node_modules/@coreui/react/es/Breadcrumb2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBreadcrumb2", function() { return _Breadcrumb2__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./node_modules/@coreui/react/es/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppFooter", function() { return _Footer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./node_modules/@coreui/react/es/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return _Header__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _HeaderDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderDropdown */ "./node_modules/@coreui/react/es/HeaderDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeaderDropdown", function() { return _HeaderDropdown__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _NavbarBrand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavbarBrand */ "./node_modules/@coreui/react/es/NavbarBrand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppNavbarBrand", function() { return _NavbarBrand__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sidebar */ "./node_modules/@coreui/react/es/Sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebar", function() { return _Sidebar__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _SidebarFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarFooter */ "./node_modules/@coreui/react/es/SidebarFooter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarFooter", function() { return _SidebarFooter__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _SidebarForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarForm */ "./node_modules/@coreui/react/es/SidebarForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarForm", function() { return _SidebarForm__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _SidebarHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarHeader */ "./node_modules/@coreui/react/es/SidebarHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarHeader", function() { return _SidebarHeader__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _SidebarMinimizer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SidebarMinimizer */ "./node_modules/@coreui/react/es/SidebarMinimizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarMinimizer", function() { return _SidebarMinimizer__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _SidebarNav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SidebarNav */ "./node_modules/@coreui/react/es/SidebarNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNav", function() { return _SidebarNav__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _SidebarNav2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SidebarNav2 */ "./node_modules/@coreui/react/es/SidebarNav2.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarNav2", function() { return _SidebarNav2__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _SidebarToggler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SidebarToggler */ "./node_modules/@coreui/react/es/SidebarToggler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSidebarToggler", function() { return _SidebarToggler__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Switch */ "./node_modules/@coreui/react/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSwitch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_16__["default"]; });




































/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-perfect-scrollbar/dist/css/styles.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/react-perfect-scrollbar/dist/css/styles.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n.scrollbar-container {\n  position: relative;\n  height: 100%; }", ""]);

// exports


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/react-onclickout/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-onclickout/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var ClickOutComponent = function (_React$Component) {
  _inherits(ClickOutComponent, _React$Component);

  function ClickOutComponent() {
    _classCallCheck(this, ClickOutComponent);

    return _possibleConstructorReturn(this, (ClickOutComponent.__proto__ || Object.getPrototypeOf(ClickOutComponent)).call(this));
  }

  _createClass(ClickOutComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      var elTouchIsClick = true;
      var documentTouchIsClick = true;
      var el = ReactDOM.findDOMNode(this);

      self.__documentTouchStarted = function (e) {
        el.removeEventListener('click', self.__elementClicked);
        document.removeEventListener('click', self.__documentClicked);
      };

      self.__documentTouchMoved = function (e) {
        documentTouchIsClick = false;
      };

      self.__documentTouchEnded = function (e) {
        if (documentTouchIsClick) self.__documentClicked(e);
        documentTouchIsClick = true;
      };

      self.__documentClicked = function (e) {
        if ((e.__clickedElements || []).indexOf(el) !== -1) return;

        var clickOutHandler = self.onClickOut || self.props.onClickOut;
        if (!clickOutHandler) {
          return console.warn('onClickOut is not defined.');
        }

        clickOutHandler.call(self, e);
      };

      self.__elementTouchMoved = function (e) {
        elTouchIsClick = false;
      };

      self.__elementTouchEnded = function (e) {
        if (elTouchIsClick) self.__elementClicked(e);
        elTouchIsClick = true;
      };

      self.__elementClicked = function (e) {
        e.__clickedElements = e.__clickedElements || [];
        e.__clickedElements.push(el);
      };

      setTimeout(function () {
        if (self.__unmounted) return;
        self.toggleListeners('addEventListener');
      }, 0);
    }
  }, {
    key: 'toggleListeners',
    value: function toggleListeners(listenerMethod) {
      var el = ReactDOM.findDOMNode(this);

      el[listenerMethod]('touchmove', this.__elementTouchMoved);
      el[listenerMethod]('touchend', this.__elementTouchEnded);
      el[listenerMethod]('click', this.__elementClicked);

      document[listenerMethod]('touchstart', this.__documentTouchStarted);
      document[listenerMethod]('touchmove', this.__documentTouchMoved);
      document[listenerMethod]('touchend', this.__documentTouchEnded);
      document[listenerMethod]('click', this.__documentClicked);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.toggleListeners('removeEventListener');
      this.__unmounted = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return Array.isArray(this.props.children) ? React.createElement(
        'div',
        null,
        this.props.children
      ) : React.Children.only(this.props.children);
    }
  }]);

  return ClickOutComponent;
}(React.Component);

module.exports = ClickOutComponent;


/***/ }),

/***/ "./node_modules/react-perfect-scrollbar/dist/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/react-perfect-scrollbar/dist/css/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-perfect-scrollbar/dist/css/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/react-perfect-scrollbar/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-perfect-scrollbar/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollbar = __webpack_require__(/*! ./scrollbar */ "./node_modules/react-perfect-scrollbar/lib/scrollbar.js");

var _scrollbar2 = _interopRequireDefault(_scrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _scrollbar2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-perfect-scrollbar/lib/scrollbar.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-perfect-scrollbar/lib/scrollbar.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _perfectScrollbar = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar = function (_Component) {
  _inherits(ScrollBar, _Component);

  function ScrollBar(props) {
    _classCallCheck(this, ScrollBar);

    var _this = _possibleConstructorReturn(this, (ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call(this, props));

    _this.handleRef = _this.handleRef.bind(_this);
    _this._handlerByEvent = {};
    return _this;
  }

  _createClass(ScrollBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.option) {
        console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"');
      }

      this._ps = new _perfectScrollbar2.default(this._container, this.props.options || this.props.option);
      // hook up events
      this._updateEventHook();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this._updateEventHook(prevProps);
      this._ps.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      // unhook up evens
      Object.keys(this._handlerByEvent).forEach(function (key) {
        var value = _this2._handlerByEvent[key];

        if (value) {
          _this2._container.removeEventListener(key, value, false);
        }
      });
      this._handlerByEvent = {};
      this._ps.destroy();
      this._ps = null;
    }
  }, {
    key: '_updateEventHook',
    value: function _updateEventHook() {
      var _this3 = this;

      var prevProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // hook up events
      Object.keys(handlerNameByEvent).forEach(function (key) {
        var callback = _this3.props[handlerNameByEvent[key]];
        var prevCallback = prevProps[handlerNameByEvent[key]];
        if (callback !== prevCallback) {
          if (prevCallback) {
            var prevHandler = _this3._handlerByEvent[key];
            _this3._container.removeEventListener(key, prevHandler, false);
            _this3._handlerByEvent[key] = null;
          }
          if (callback) {
            var handler = function handler() {
              return callback(_this3._container);
            };
            _this3._container.addEventListener(key, handler, false);
            _this3._handlerByEvent[key] = handler;
          }
        }
      });
    }
  }, {
    key: 'updateScroll',
    value: function updateScroll() {
      this._ps.update();
    }
  }, {
    key: 'handleRef',
    value: function handleRef(ref) {
      this._container = ref;
      this.props.containerRef(ref);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component,
          className = _props.className,
          style = _props.style;

      var Comp = component;

      return _react2.default.createElement(
        Comp,
        { style: style, className: 'scrollbar-container ' + className, ref: this.handleRef },
        children
      );
    }
  }]);

  return ScrollBar;
}(_react.Component);

exports.default = ScrollBar;


ScrollBar.defaultProps = {
  className: '',
  style: undefined,
  option: undefined,
  options: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined,
  component: 'div'
};

ScrollBar.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  className: _propTypes.PropTypes.string,
  style: _propTypes.PropTypes.object,
  option: _propTypes.PropTypes.object,
  options: _propTypes.PropTypes.object,
  containerRef: _propTypes.PropTypes.func,
  onScrollY: _propTypes.PropTypes.func,
  onScrollX: _propTypes.PropTypes.func,
  onScrollUp: _propTypes.PropTypes.func,
  onScrollDown: _propTypes.PropTypes.func,
  onScrollLeft: _propTypes.PropTypes.func,
  onScrollRight: _propTypes.PropTypes.func,
  onYReachStart: _propTypes.PropTypes.func,
  onYReachEnd: _propTypes.PropTypes.func,
  onXReachStart: _propTypes.PropTypes.func,
  onXReachEnd: _propTypes.PropTypes.func,
  component: _propTypes.PropTypes.string
};
module.exports = exports['default'];

/***/ })

}]);