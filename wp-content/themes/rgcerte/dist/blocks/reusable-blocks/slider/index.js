/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/blocks/controllers/desktop-controller/index.jsx":
/*!*************************************************************!*\
  !*** ./app/blocks/controllers/desktop-controller/index.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorDesktop: function() { return /* binding */ InspectorDesktop; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function InspectorDesktop({
  attributes,
  setAttributes
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Espa\xE7amento - Desktop",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Padding - ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-fullscreen-exit-alt"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spacing-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Topo",
    value: attributes.msPaddingDesktopTop,
    onChange: value => setAttributes({
      msPaddingDesktopTop: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Direita",
    value: attributes.msPaddingDesktopRight,
    onChange: value => setAttributes({
      msPaddingDesktopRight: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Baixo",
    value: attributes.msPaddingDesktopBottom,
    onChange: value => {
      setAttributes({
        msPaddingDesktopBottom: value
      });
      console.log(attributes.paddingDesktopBottom);
    },
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Esquerda",
    value: attributes.msPaddingDesktopLeft,
    onChange: value => setAttributes({
      msPaddingDesktopLeft: value
    }),
    min: 0
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Margin - ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-fullscreen-alt"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spacing-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Topo",
    value: attributes.msMarginDesktopTop,
    onChange: value => setAttributes({
      msMarginDesktopTop: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Direita",
    value: attributes.msMarginDesktopRight,
    onChange: value => setAttributes({
      msMarginDesktopRight: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Baixo",
    value: attributes.msMarginDesktopBottom,
    onChange: value => setAttributes({
      msMarginDesktopBottom: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Esquerda",
    value: attributes.msMarginDesktopLeft,
    onChange: value => setAttributes({
      msMarginDesktopLeft: value
    }),
    min: 0
  }))));
}

/***/ }),

/***/ "./app/blocks/controllers/general-spacing/class.jsx":
/*!**********************************************************!*\
  !*** ./app/blocks/controllers/general-spacing/class.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpacingClassGenerator: function() { return /* binding */ SpacingClassGenerator; }
/* harmony export */ });
const SpacingClassGenerator = ({
  attributes
}) => {
  let mobileClass = `ms-mobile-spacing msmmt-${attributes.msMarginMobileTop} msmmr-${attributes.msMarginMobileRight} msmmb-${attributes.msMarginMobileBottom} msmml-${attributes.msMarginMobileLeft}`;
  let tabletClass = `ms-tablet-spacing mstmt-${attributes.msMarginTabletTop} mstmr-${attributes.msMarginTabletRight} mstmb-${attributes.msMarginTabletBottom} mstml-${attributes.msMarginTabletLeft}`;
  let desktopClass = `ms-desktop-spacing msdmt-${attributes.msMarginDesktopTop} msdmr-${attributes.msMarginDesktopRight} msdmb-${attributes.msMarginDesktopBottom} msdml-${attributes.msMarginDesktopLeft}`;
  let spacingClass = `${mobileClass} ${tabletClass} ${desktopClass}`;
  return spacingClass;
};

/***/ }),

/***/ "./app/blocks/controllers/general-spacing/index.jsx":
/*!**********************************************************!*\
  !*** ./app/blocks/controllers/general-spacing/index.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spacingAttributes: function() { return /* binding */ spacingAttributes; }
/* harmony export */ });
/* harmony import */ var _mobile_controller_attributes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mobile-controller/attributes.json */ "./app/blocks/controllers/mobile-controller/attributes.json");
/* harmony import */ var _tablet_controller_attributes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tablet-controller/attributes.json */ "./app/blocks/controllers/tablet-controller/attributes.json");
/* harmony import */ var _desktop_controller_attributes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../desktop-controller/attributes.json */ "./app/blocks/controllers/desktop-controller/attributes.json");



const spacingAttributes = {
  ..._mobile_controller_attributes_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  ..._tablet_controller_attributes_json__WEBPACK_IMPORTED_MODULE_1__.attributes,
  ..._desktop_controller_attributes_json__WEBPACK_IMPORTED_MODULE_2__.attributes
};

/***/ }),

/***/ "./app/blocks/controllers/general-spacing/inspector.jsx":
/*!**************************************************************!*\
  !*** ./app/blocks/controllers/general-spacing/inspector.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorSpacing: function() { return /* binding */ InspectorSpacing; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_controller_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobile-controller/index.jsx */ "./app/blocks/controllers/mobile-controller/index.jsx");
/* harmony import */ var _tablet_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tablet-controller */ "./app/blocks/controllers/tablet-controller/index.jsx");
/* harmony import */ var _desktop_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../desktop-controller */ "./app/blocks/controllers/desktop-controller/index.jsx");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);





function InspectorSpacing({
  attributes,
  setAttributes
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_mobile_controller_index_jsx__WEBPACK_IMPORTED_MODULE_1__.InspectorMobile, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tablet_controller__WEBPACK_IMPORTED_MODULE_2__.InspectorTablet, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_desktop_controller__WEBPACK_IMPORTED_MODULE_3__.InspectorDesktop, {
    attributes: attributes,
    setAttributes: setAttributes
  }));
}

/***/ }),

/***/ "./app/blocks/controllers/mobile-controller/index.jsx":
/*!************************************************************!*\
  !*** ./app/blocks/controllers/mobile-controller/index.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorMobile: function() { return /* binding */ InspectorMobile; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function InspectorMobile({
  attributes,
  setAttributes
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Espa\xE7amento - Mobile",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Padding - ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-fullscreen-exit-alt"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spacing-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Topo",
    value: attributes.msPaddingMobileTop,
    onChange: value => setAttributes({
      msPaddingMobileTop: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Direita",
    value: attributes.msPaddingMobileRight,
    onChange: value => setAttributes({
      msPaddingMobileRight: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Baixo",
    value: attributes.msPaddingMobileBottom,
    onChange: value => {
      setAttributes({
        msPaddingMobileBottom: value
      });
      console.log(attributes.paddingMobileBottom);
    },
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Esquerda",
    value: attributes.msPaddingMobileLeft,
    onChange: value => setAttributes({
      msPaddingMobileLeft: value
    }),
    min: 0
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Margin - ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-fullscreen-alt"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spacing-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Topo",
    value: attributes.msMarginMobileTop,
    onChange: value => setAttributes({
      msMarginMobileTop: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Direita",
    value: attributes.msMarginMobileRight,
    onChange: value => setAttributes({
      msMarginMobileRight: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Baixo",
    value: attributes.msMarginMobileBottom,
    onChange: value => setAttributes({
      msMarginMobileBottom: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Esquerda",
    value: attributes.msMarginMobileLeft,
    onChange: value => setAttributes({
      msMarginMobileLeft: value
    }),
    min: 0
  }))));
}

/***/ }),

/***/ "./app/blocks/controllers/tablet-controller/index.jsx":
/*!************************************************************!*\
  !*** ./app/blocks/controllers/tablet-controller/index.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorTablet: function() { return /* binding */ InspectorTablet; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function InspectorTablet({
  attributes,
  setAttributes
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Espa\xE7amento - Tablet",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Padding - ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-fullscreen-exit-alt"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spacing-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Topo",
    value: attributes.msPaddingTabletTop,
    onChange: value => setAttributes({
      msPaddingTabletTop: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Direita",
    value: attributes.msPaddingTabletRight,
    onChange: value => setAttributes({
      msPaddingTabletRight: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Baixo",
    value: attributes.msPaddingTabletBottom,
    onChange: value => {
      setAttributes({
        msPaddingTabletBottom: value
      });
      console.log(attributes.paddingTabletBottom);
    },
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Esquerda",
    value: attributes.msPaddingTabletLeft,
    onChange: value => setAttributes({
      msPaddingTabletLeft: value
    }),
    min: 0
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Margin - ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-fullscreen-alt"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spacing-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Topo",
    value: attributes.msMarginTabletTop,
    onChange: value => setAttributes({
      msMarginTabletTop: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Direita",
    value: attributes.msMarginTabletRight,
    onChange: value => setAttributes({
      msMarginTabletRight: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Baixo",
    value: attributes.msMarginTabletBottom,
    onChange: value => setAttributes({
      msMarginTabletBottom: value
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    label: "Esquerda",
    value: attributes.msMarginTabletLeft,
    onChange: value => setAttributes({
      msMarginTabletLeft: value
    }),
    min: 0
  }))));
}

/***/ }),

/***/ "./app/blocks/reusable-blocks/slider/edit.jsx":
/*!****************************************************!*\
  !*** ./app/blocks/reusable-blocks/slider/edit.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edit: function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keen-slider/react */ "./node_modules/keen-slider/react.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./app/blocks/reusable-blocks/slider/inspector.jsx");
/* harmony import */ var _controllers_general_spacing_inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controllers/general-spacing/inspector */ "./app/blocks/controllers/general-spacing/inspector.jsx");
/* harmony import */ var _controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controllers/general-spacing/class */ "./app/blocks/controllers/general-spacing/class.jsx");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _edit_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.scss */ "./app/blocks/reusable-blocks/slider/edit.scss");
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ "./node_modules/keen-slider/keen-slider.min.css");









function Edit({
  attributes,
  setAttributes
}) {
  const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [sliderRef, instanceRef] = (0,keen_slider_react__WEBPACK_IMPORTED_MODULE_1__.useKeenSlider)({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });
  let spacingClass = (0,_controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_4__.SpacingClassGenerator)({
    attributes
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: 'ms-slider ' + spacingClass
  });
  const innerBlocks = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useInnerBlocksProps)(blockProps, {
    template: false,
    templateInsertUpdatesSelection: false,
    allowedBlocks: []
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocks
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controllers_general_spacing_inspector__WEBPACK_IMPORTED_MODULE_3__.InspectorSpacing, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__.Inspector, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "navigation-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: sliderRef,
    className: "keen-slider"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "keen-slider__slide number-slide1"
  }, "1"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "keen-slider__slide number-slide2"
  }, "2"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "keen-slider__slide number-slide3"
  }, "3"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "keen-slider__slide number-slide4"
  }, "4"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "keen-slider__slide number-slide5"
  }, "5"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "keen-slider__slide number-slide6"
  }, "6")), loaded && instanceRef.current && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Arrow, {
    left: true,
    onClick: e => e.stopPropagation() || instanceRef.current?.prev(),
    disabled: currentSlide === 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Arrow, {
    onClick: e => e.stopPropagation() || instanceRef.current?.next(),
    disabled: currentSlide === instanceRef.current.track.details.slides.length - 1
  }))), loaded && instanceRef.current && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dots"
  }, [...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: idx,
      onClick: () => {
        instanceRef.current?.moveToIdx(idx);
      },
      className: "dot" + (currentSlide === idx ? " active" : "")
    });
  })));
}
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    onClick: props.onClick,
    className: `arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabeld}`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, props.left && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
  }), !props.left && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
  }));
}

/***/ }),

/***/ "./app/blocks/reusable-blocks/slider/index.jsx":
/*!*****************************************************!*\
  !*** ./app/blocks/reusable-blocks/slider/index.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./app/blocks/reusable-blocks/slider/block.json");
/* harmony import */ var _controllers_general_spacing_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/general-spacing/index */ "./app/blocks/controllers/general-spacing/index.jsx");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./app/blocks/reusable-blocks/slider/edit.jsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./app/blocks/reusable-blocks/slider/save.jsx");





const customAttributes = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__.attributes,
  ..._controllers_general_spacing_index__WEBPACK_IMPORTED_MODULE_2__.spacingAttributes
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__,
  attributes: customAttributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__.Edit,
  save: _save__WEBPACK_IMPORTED_MODULE_4__.Save
});

/***/ }),

/***/ "./app/blocks/reusable-blocks/slider/inspector.jsx":
/*!*********************************************************!*\
  !*** ./app/blocks/reusable-blocks/slider/inspector.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Inspector: function() { return /* binding */ Inspector; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function Inspector({
  attributes,
  setAttributes
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null);
}

/***/ }),

/***/ "./app/blocks/reusable-blocks/slider/save.jsx":
/*!****************************************************!*\
  !*** ./app/blocks/reusable-blocks/slider/save.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Save: function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/general-spacing/class */ "./app/blocks/controllers/general-spacing/class.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./app/blocks/reusable-blocks/slider/style.scss");




function Save({
  attributes
}) {
  let spacingClass = (0,_controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_2__.SpacingClassGenerator)({
    attributes
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: 'ms-slider ' + spacingClass
  });
  const innerBlocks = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocks
  });
}

/***/ }),

/***/ "./node_modules/keen-slider/react.js":
/*!*******************************************!*\
  !*** ./node_modules/keen-slider/react.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({value:!0}));var n=__webpack_require__(/*! react */ "react");function t(n){return Array.prototype.slice.call(n)}function e(n,t){var e=Math.floor(n);return e===t||e+1===t?n:t}function i(){return Date.now()}function r(n,t,e){if(t="data-keen-slider-"+t,null===e)return n.removeAttribute(t);n.setAttribute(t,e||"")}function a(n,e){return e=e||document,"function"==typeof n&&(n=n(e)),Array.isArray(n)?n:"string"==typeof n?t(e.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?t(n):[]}function o(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function u(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function c(){var n=[];return{add:function(t,e,i,r){t.addListener?t.addListener(i):t.addEventListener(e,i,r),n.push([t,e,i,r])},input:function(n,t,e,i){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var e=t.changedTouches||[],i=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:i[0]?i[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:i[0]?i[0].screenY:r?r.y:t.pageY})}}(e),i)},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])})),n=[]}}}function s(n,t,e){return Math.min(Math.max(n,t),e)}function d(n){return(n>0?1:0)-(n<0?1:0)||+n}function l(n){var t=n.getBoundingClientRect();return{height:e(t.height,n.offsetHeight),width:e(t.width,n.offsetWidth)}}function f(n,t,e,i){var r=n&&n[t];return null==r?e:i&&"function"==typeof r?r():r}function p(n){return Math.round(1e6*n)/1e6}function v(n,t){if(n===t)return!0;var e=typeof n;if(e!==typeof t)return!1;if("object"!==e||null===n||null===t)return"function"===e&&n.toString()===t.toString();if(n.length!==t.length||Object.getOwnPropertyNames(n).length!==Object.getOwnPropertyNames(t).length)return!1;for(var i in n)if(!v(n[i],t[i]))return!1;return!0}var h=function(){return h=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},h.apply(this,arguments)};function m(n,t,e){if(e||2===arguments.length)for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return n.concat(i||Array.prototype.slice.call(t))}function g(n){var t,e,i,r,a,o;function u(t){o||(o=t),c(!0);var a=t-o;a>i&&(a=i);var l=r[e];if(l[3]<a)return e++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(a-f)/p);if(h&&n.track.to(v+h),a<i)return d();o=null,c(!1),s(null),n.emit("animationEnded")}function c(n){t.active=n}function s(n){t.targetIdx=n}function d(){var n;n=u,a=window.requestAnimationFrame(n)}function l(){var t;t=a,window.cancelAnimationFrame(t),c(!1),s(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;e=0,i=0,r=t.map((function(n){var t,e=Number(o),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,c=n.distance*u(r/n.duration)||0;o+=c;var s=i;return i+=r,a+=c,[e,n.distance,s,i,n.duration,u]})),s(n.track.distToIdx(a)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}function b(n){var t,e,r,a,o,u,c,l,v,h,g,b,y,x,k=1/0,w=[],M=null,T=0;function C(n){P(T+n)}function E(n){var t=z(T+n).abs;return O(t)?t:null}function z(n){var t=Math.floor(Math.abs(p(n/e))),i=p((n%e+e)%e);i===e&&(i=0);var r=d(n),a=c.indexOf(m([],c,!0).reduce((function(n,t){return Math.abs(t-i)<Math.abs(n-i)?t:n}))),o=a;return r<0&&t++,a===u&&(o=0,t+=r>0?1:-1),{abs:o+t*u*r,origin:a,rel:o}}function I(n,t,e){var i;if(t||!S())return A(n,e);if(!O(n))return null;var r=z(null!=e?e:T),a=r.abs,o=n-r.rel,c=a+o;i=A(c);var s=A(c-u*d(o));return(null!==s&&Math.abs(s)<Math.abs(i)||null===i)&&(i=s),p(i)}function A(n,t){if(null==t&&(t=p(T)),!O(n)||null===n)return null;n=Math.round(n);var i=z(t),r=i.abs,a=i.rel,o=i.origin,s=L(n),d=(t%e+e)%e,l=c[o],f=Math.floor((n-(r-a))/u)*e;return p(l-d-l+c[s]+f+(o===u?e:0))}function O(n){return D(n)===n}function D(n){return s(n,v,h)}function S(){return a.loop}function L(n){return(n%u+u)%u}function P(t){var e;e=t-T,w.push({distance:e,timestamp:i()}),w.length>6&&(w=w.slice(-6)),T=p(t);var r=_().abs;if(r!==M){var a=null!==M;M=r,a&&n.emit("slideChanged")}}function _(i){var c=i?null:function(){if(u){var n=S(),t=n?(T%e+e)%e:T,i=(n?T%e:T)-o[0][2],c=0-(i<0&&n?e-Math.abs(i):i),s=0,l=z(T),f=l.abs,p=l.rel,m=o[p][2],k=o.map((function(t,i){var r=c+s;(r<0-t[0]||r>1)&&(r+=(Math.abs(r)>e-1&&n?e:0)*d(-r));var o=i-p,l=d(o),v=o+f;n&&(-1===l&&r>m&&(v+=u),1===l&&r<m&&(v-=u),null!==g&&v<g&&(r+=e),null!==b&&v>b&&(r-=e));var h=r+t[0]+t[1],y=Math.max(r>=0&&h<=1?1:h<0||r>1?0:r<0?Math.min(1,(t[0]+r)/t[0]):(1-r)/t[0],0);return s+=t[0]+t[1],{abs:v,distance:a.rtl?-1*r+1-t[0]:r,portion:y,size:t[0]}}));return f=D(f),p=L(f),{abs:D(f),length:r,max:x,maxIdx:h,min:y,minIdx:v,position:T,progress:n?t/e:T/r,rel:p,slides:k,slidesLength:e}}}();return t.details=c,n.emit("detailsChanged"),c}return t={absToRel:L,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(a=n.options,o=(a.trackConfig||[]).map((function(n){return[f(n,"size",1),f(n,"spacing",0),f(n,"origin",0)]})),u=o.length){e=p(o.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,i=u-1;r=p(e+o[0][2]-o[i][0]-o[i][2]-o[i][1]),c=o.reduce((function(n,e){if(!n)return[0];var i=o[n.length-1],r=n[n.length-1]+(i[0]+i[2])+i[1];return r-=e[2],n[n.length-1]>r&&(r=n[n.length-1]),r=p(r),n.push(r),(!t||t<r)&&(l=n.length-1),t=r,n}),null),0===r&&(l=0),c.push(p(e))}}(),!u)return _(!0);var i;!function(){var t=n.options.range,e=n.options.loop;g=v=e?f(e,"min",-1/0):0,b=h=e?f(e,"max",k):l;var i=f(t,"min",null),r=f(t,"max",null);null!==i&&(v=i),null!==r&&(h=r),y=v===-1/0?v:n.track.idxToDist(v||0,!0,0),x=h===k?h:I(h,!0,0),null===r&&(b=h),f(t,"align",!1)&&h!==k&&0===o[L(h)][2]&&(x-=1-o[L(h)][0],h=E(x-T)),y=p(y),x=p(x)}(),i=t,Number(i)===i?C(A(D(t))):_()},to:P,velocity:function(){var n=i(),t=w.reduce((function(t,e){var i=e.distance,r=e.timestamp;return n-r>200||(d(i)!==d(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=i),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function y(n){var t,e,i,r,a,o,u,c;function l(n){return 2*n}function f(n){return s(n,u,c)}function p(n){return 1-Math.pow(1-n,3)}function v(){return i?n.track.velocity():0}function h(){b();var t="free-snap"===n.options.mode,e=n.track,i=v();r=d(i);var u=n.track.details,c=[];if(i||!t){var s=m(i),h=s.dist,g=s.dur;if(g=l(g),h*=r,t){var y=e.idxToDist(e.distToIdx(h),!0);y&&(h=y)}c.push({distance:h,duration:g,easing:p});var x=u.position,k=x+h;if(k<a||k>o){var w=k<a?a-x:o-x,M=0,T=i;if(d(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;c[0].earlyExit=E,T=i*(1-C)}else c[0].earlyExit=0,M+=w;var z=m(T,100),I=z.dist*r;n.options.rubberband&&(c.push({distance:I,duration:l(z.dur),easing:p}),c.push({distance:-I+M,duration:500,easing:p}))}n.animator.start(c)}else n.moveToIdx(f(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}function m(n,t){void 0===t&&(t=1e3);var e=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/e,dur:n/e}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,c=t.maxIdx)}function b(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){i=!1,b(),t=e=n.track.details.abs})),n.on("dragChecked",(function(){i=!0})),n.on("dragEnded",(function(){var i=n.options.mode;"snap"===i&&function(){var i=n.track,r=n.track.details,u=r.position,c=d(v());(u>o||u<a)&&(c=0);var s=t+c;0===r.slides[i.absToRel(s)].portion&&(s-=c),t!==e&&(s=e),d(i.idxToDist(s,!0))!==c&&(s+=c),s=f(s);var l=i.idxToDist(s,!0);n.animator.start([{distance:l,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])}(),"free"!==i&&"free-snap"!==i||h()})),n.on("dragged",(function(){e=n.track.details.abs}))}function x(n){var t,e,i,r,l,f,p,v,h,m,g,b,y,x,k,w,M,T,C=c();function E(t){if(f&&v===t.id){var a=O(t);if(h){if(!A(t))return I(t);m=a,h=!1,n.emit("dragChecked")}if(w)return m=a;o(t);var c=function(t){if(M===-1/0&&T===1/0)return t;var i=n.track.details,a=i.length,o=i.position,u=s(t,M-o,T-o);if(0===a)return 0;if(!n.options.rubberband)return u;if(o<=T&&o>=M)return t;if(o<M&&e>0||o>T&&e<0)return t;var c=(o<M?o-M:o-T)/a,d=r*a,f=Math.abs(c*d),p=Math.max(0,1-f/l*2);return p*p*t}(p(m-a)/r*i);e=d(c);var y=n.track.details.position;(y>M&&y<T||y===M&&e>0||y===T&&e<0)&&u(t),g+=c,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(c),m=a,n.emit("dragged")}}function z(t){!f&&n.track.details&&n.track.details.length&&(g=0,f=!0,b=!1,h=!0,v=t.id,A(t),m=O(t),n.emit("dragStarted"))}function I(t){f&&v===t.idChanged&&(f=!1,n.emit("dragEnded"))}function A(n){var t=D(),e=t?n.y:n.x,i=t?n.x:n.y,r=void 0!==y&&void 0!==x&&Math.abs(x-i)<=Math.abs(y-e);return y=e,x=i,r}function O(n){return D()?n.y:n.x}function D(){return n.options.vertical}function S(){r=n.size,l=D()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max)}function L(n){b&&(u(n),o(n))}function P(){if(C.purge(),n.options.drag&&!n.options.disabled){var e;e=n.options.dragSpeed||1,p="function"==typeof e?e:function(n){return n*e},i=n.options.rtl?-1:1,S(),t=n.container,function(){var n="data-keen-slider-clickable";a("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",u),C.add(n,"mousedown",u),C.add(n,"touchstart",u)}))}(),C.add(t,"dragstart",(function(n){o(n)})),C.add(t,"click",L,{capture:!0}),C.input(t,"ksDragStart",z),C.input(t,"ksDrag",E),C.input(t,"ksDragEnd",I),C.input(t,"mousedown",z),C.input(t,"mousemove",E),C.input(t,"mouseleave",I),C.input(t,"mouseup",I),C.input(t,"touchstart",z,{passive:!0}),C.input(t,"touchmove",E,{passive:!1}),C.input(t,"touchend",I),C.input(t,"touchcancel",I),C.add(window,"wheel",(function(n){f&&o(n)}));var r="data-keen-slider-scrollable";a("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=O(n),w=!0,k=!0}),{passive:!0}),C.input(n,"touchmove",(function(e){var i=D(),r=i?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-O(e),u=i?n.scrollTop:n.scrollLeft,c=i&&"scroll"===n.style.overflowY||!i&&"scroll"===n.style.overflowX;if(t=O(e),(a<0&&u>0||a>0&&u<r)&&k&&c)return w=!0;k=!1,o(e),w=!1})),C.input(n,"touchend",(function(){w=!1}))}(n)}))}}n.on("updated",S),n.on("optionsChanged",P),n.on("created",P),n.on("destroyed",C.purge)}function k(n){var t,e,i=null;function r(t,e,i){n.animator.active?o(t,e,i):requestAnimationFrame((function(){return o(t,e,i)}))}function a(){r(!1,!1,e)}function o(e,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(e)!i&&r&&c(n,null,a),s(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!i&&r&&c(n,d,a),s(n,l[t].distance*u-o,a),o+=d}}))}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function c(n,t,e){var i=e?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+i]=t,n.style["max-"+i]=t}function s(n,t,e){if(null!==t){t=u(t);var i=e?t:0;t="translate3d(".concat(e?0:t,"px, ").concat(i,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(o(!0,!0,e),t=null),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,e)}function p(){d(),e=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(i="auto"===f(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",p),n.on("optionsChanged",p),n.on("beforeOptionsChanged",(function(){d()})),n.on("updated",l),n.on("destroyed",d)}function w(n,t){return function(e){var i,o,u,s,d,p,v=c();function m(n){var t;r(e.container,"reverse","rtl"!==(t=e.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),r(e.container,"v",e.options.vertical&&!n?"":null),r(e.container,"disabled",e.options.disabled&&!n?"":null)}function g(){b()&&M()}function b(){var n=null;if(s.forEach((function(t){t.matches&&(n=t.__media)})),n===i)return!1;i||e.emit("beforeOptionsChanged"),i=n;var t=n?u.breakpoints[n]:u;return e.options=h(h({},u),t),m(),I(),A(),C(),!0}function y(n){var t=l(n);return(e.options.vertical?t.height:t.width)/e.size||1}function x(){return e.options.trackConfig.length}function k(n){for(var r in i=!1,u=h(h({},t),n),v.purge(),o=e.size,s=[],u.breakpoints||[]){var a=window.matchMedia(r);a.__media=r,s.push(a),v.add(a,"change",g)}v.add(window,"orientationchange",z),v.add(window,"resize",E),b()}function w(n){e.animator.stop();var t=e.track.details;e.track.init(null!=n?n:t?t.abs:0)}function M(n){w(n),e.emit("optionsChanged")}function T(n,t){if(n)return k(n),void M(t);I(),A();var i=x();C(),x()!==i?M(t):w(t),e.emit("updated")}function C(){var n=e.options.slides;if("function"==typeof n)return e.options.trackConfig=n(e.size,e.slides);for(var t=e.slides,i=t.length,r="number"==typeof n?n:f(n,"number",i,!0),a=[],o=f(n,"perView",1,!0),u=f(n,"spacing",0,!0)/e.size||0,c="auto"===o?u:u/o,s=f(n,"origin","auto"),d=0,l=0;l<r;l++){var p="auto"===o?y(t[l]):1/o-u+c,v="center"===s?.5-p/2:"auto"===s?0:s;a.push({origin:v,size:p,spacing:u}),d+=p}if(d+=u*(r-1),"auto"===s&&!e.options.loop&&1!==o){var h=0;a.map((function(n){var t=d-h;return h+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n}))}e.options.trackConfig=a}function E(){I();var n=e.size;e.options.disabled||n===o||(o=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=l(e.container);e.size=(e.options.vertical?n.height:n.width)||1}function A(){e.slides=a(e.options.selector,e.container)}e.container=(p=a(n,d||document)).length?p[0]:null,e.destroy=function(){v.purge(),e.emit("destroyed"),m(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=T,k(e.options)}}var M=function(n,t,e){try{return function(n,t){var e,i={};return e={emit:function(n){i[n]&&i[n].forEach((function(n){n(e)}));var t=e.options&&e.options[n];t&&t(e)},moveToIdx:function(n,t,i){var r=e.track.idxToDist(n,t);if(r){var a=e.options.defaultAnimation;e.animator.start([{distance:r,duration:f(i||a,"duration",500),easing:f(i||a,"easing",(function(n){return 1+--n*n*n*n*n}))}])}},on:function(n,t,e){void 0===e&&(e=!1),i[n]||(i[n]=[]);var r=i[n].indexOf(t);r>-1?e&&delete i[n][r]:e||i[n].push(t)},options:n},function(){if(e.track=b(e),e.animator=g(e),t)for(var n=0,i=t;n<i.length;n++)(0,i[n])(e);e.track.init(e.options.initial||0),e.emit("created")}(),e}(t,m([w(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),k,x,y],e||[],!0))}catch(n){console.error(n)}};exports.useKeenSlider=function(t,e){var i=n.useRef(null),r=n.useRef(!1),a=n.useRef(t),o=n.useCallback((function(n){n?(a.current=t,i.current=new M(n,t,e),r.current=!1):(i.current&&i.current.destroy&&i.current.destroy(),i.current=null)}),[]);return n.useEffect((function(){v(a.current,t)||(a.current=t,i.current&&i.current.update(a.current))}),[t]),[o,i]};


/***/ }),

/***/ "./node_modules/keen-slider/keen-slider.min.css":
/*!******************************************************!*\
  !*** ./node_modules/keen-slider/keen-slider.min.css ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/blocks/reusable-blocks/slider/edit.scss":
/*!*****************************************************!*\
  !*** ./app/blocks/reusable-blocks/slider/edit.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/blocks/reusable-blocks/slider/style.scss":
/*!******************************************************!*\
  !*** ./app/blocks/reusable-blocks/slider/style.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "./app/blocks/controllers/desktop-controller/attributes.json":
/*!*******************************************************************!*\
  !*** ./app/blocks/controllers/desktop-controller/attributes.json ***!
  \*******************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"attributes":{"msPaddingDesktopTop":{"type":"text","default":0},"msPaddingDesktopBottom":{"type":"text","default":0},"msPaddingDesktopLeft":{"type":"text","default":0},"msPaddingDesktopRight":{"type":"text","default":0},"msMarginDesktopTop":{"type":"text","default":0},"msMarginDesktopBottom":{"type":"text","default":0},"msMarginDesktopLeft":{"type":"text","default":0},"msMarginDesktopRight":{"type":"text","default":0}}}');

/***/ }),

/***/ "./app/blocks/controllers/mobile-controller/attributes.json":
/*!******************************************************************!*\
  !*** ./app/blocks/controllers/mobile-controller/attributes.json ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"attributes":{"msPaddingMobileTop":{"type":"text","default":0},"msPaddingMobileBottom":{"type":"text","default":0},"msPaddingMobileLeft":{"type":"text","default":0},"msPaddingMobileRight":{"type":"text","default":0},"msMarginMobileTop":{"type":"text","default":0},"msMarginMobileBottom":{"type":"text","default":0},"msMarginMobileLeft":{"type":"text","default":0},"msMarginMobileRight":{"type":"text","default":0}}}');

/***/ }),

/***/ "./app/blocks/controllers/tablet-controller/attributes.json":
/*!******************************************************************!*\
  !*** ./app/blocks/controllers/tablet-controller/attributes.json ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"attributes":{"msPaddingTabletTop":{"type":"text","default":0},"msPaddingTabletBottom":{"type":"text","default":0},"msPaddingTabletLeft":{"type":"text","default":0},"msPaddingTabletRight":{"type":"text","default":0},"msMarginTabletTop":{"type":"text","default":0},"msMarginTabletBottom":{"type":"text","default":0},"msMarginTabletLeft":{"type":"text","default":0},"msMarginTabletRight":{"type":"text","default":0}}}');

/***/ }),

/***/ "./app/blocks/reusable-blocks/slider/block.json":
/*!******************************************************!*\
  !*** ./app/blocks/reusable-blocks/slider/block.json ***!
  \******************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"version":"1.0.0","name":"makersolucoes/slider","title":"Slider - Corpo","category":"ms_blocks","description":"Exibe um componente de Slider","icon":"minus","keywords":["icon"],"attributes":{"key":{"type":"string","default":""},"buttons":{"type":"boolean","default":false},"styleButtons":{"type":"boolean","default":false}},"providesContext":{"contextLabelChecked":"checked"},"supports":{"html":false,"alignWide":true,"color":{"text":false,"background":true,"gradients":true},"width":true},"textdomain":"boilerplate","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"reusable-blocks/slider/index": 0,
/******/ 			"reusable-blocks/slider/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrgcerte"] = self["webpackChunkrgcerte"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["reusable-blocks/slider/style-index"], function() { return __webpack_require__("./app/blocks/reusable-blocks/slider/index.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map