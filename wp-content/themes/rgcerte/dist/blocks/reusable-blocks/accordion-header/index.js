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

/***/ "./app/blocks/reusable-blocks/accordion-header/edit.jsx":
/*!**************************************************************!*\
  !*** ./app/blocks/reusable-blocks/accordion-header/edit.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edit: function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./app/blocks/reusable-blocks/accordion-header/inspector.jsx");
/* harmony import */ var _controllers_general_spacing_inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controllers/general-spacing/inspector */ "./app/blocks/controllers/general-spacing/inspector.jsx");
/* harmony import */ var _controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controllers/general-spacing/class */ "./app/blocks/controllers/general-spacing/class.jsx");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _edit_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.scss */ "./app/blocks/reusable-blocks/accordion-header/edit.scss");


jquery__WEBPACK_IMPORTED_MODULE_1___default()('.ms-accordion').on('click', function () {
  alert('teste');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.ms-accordion-body').toggleClass('active');
});





function Edit({
  attributes,
  setAttributes
}) {
  let spacingClass = (0,_controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_4__.SpacingClassGenerator)({
    attributes
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: 'ms-accordion-header ' + spacingClass
  });
  const TEMPLATE = [['core/heading', {
    placeholder: 'Título'
  }]];
  const {
    children: innerBlocks
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useInnerBlocksProps)({}, {
    template: TEMPLATE,
    templateLock: true
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ms-accordion-body-content"
  }, innerBlocks));
}

/***/ }),

/***/ "./app/blocks/reusable-blocks/accordion-header/index.jsx":
/*!***************************************************************!*\
  !*** ./app/blocks/reusable-blocks/accordion-header/index.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./app/blocks/reusable-blocks/accordion-header/block.json");
/* harmony import */ var _controllers_general_spacing_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/general-spacing/index */ "./app/blocks/controllers/general-spacing/index.jsx");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./app/blocks/reusable-blocks/accordion-header/edit.jsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./app/blocks/reusable-blocks/accordion-header/save.jsx");





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

/***/ "./app/blocks/reusable-blocks/accordion-header/inspector.jsx":
/*!*******************************************************************!*\
  !*** ./app/blocks/reusable-blocks/accordion-header/inspector.jsx ***!
  \*******************************************************************/
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Configura\xE7\xF5es do Slider"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "Auto Play",
    checked: attributes.autoPlay,
    onChange: value => setAttributes({
      autoPlay: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "Loop inifito",
    checked: attributes.infinite,
    onChange: value => setAttributes({
      infinite: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Configura\xE7\xF5es avan\xE7adas",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ms-inspector-slider"
  }, "Tempo da anima\xE7\xE3o"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: attributes.animationDuration,
    onChange: value => setAttributes({
      animationDuration: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Estilo bot\xF5es",
    value: attributes.buttonsStyle,
    options: [{
      label: 'Centralizado',
      value: 'buttons-centered'
    }, {
      label: 'Abaixo do slider',
      value: ''
    }],
    onChange: value => setAttributes({
      buttonsStyle: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Tipo de anima\xE7\xE3o",
    value: attributes.animationType,
    options: [{
      label: 'Slide',
      value: 'slide'
    }, {
      label: 'Fade',
      value: 'fade'
    }],
    onChange: value => setAttributes({
      animationType: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ms-inspector-slider"
  }, "Intervalo do Auto Play"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: attributes.autoPlayInterval,
    onChange: value => setAttributes({
      autoPlayInterval: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Configura\xE7\xF5es de responsividade",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ms-inspector-slider"
  }, "Quantidade de itens: Mobile", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: attributes.responsiveMobile,
    onChange: value => setAttributes({
      responsiveMobile: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ms-inspector-slider"
  }, "Quantidade de itens: Tablet", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: attributes.responsiveTablet,
    onChange: value => setAttributes({
      responsiveTablet: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "ms-inspector-slider"
  }, "Quantidade de itens: Desktop", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    type: "number",
    value: attributes.responsiveDesktop,
    onChange: value => setAttributes({
      responsiveDesktop: value
    })
  }))));
}

/***/ }),

/***/ "./app/blocks/reusable-blocks/accordion-header/save.jsx":
/*!**************************************************************!*\
  !*** ./app/blocks/reusable-blocks/accordion-header/save.jsx ***!
  \**************************************************************/
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./app/blocks/reusable-blocks/accordion-header/style.scss");




function Save({
  attributes
}) {
  let styleButtons = attributes.buttonsStyle ? attributes.buttonsStyle : '';
  let spacingClass = (0,_controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_2__.SpacingClassGenerator)({
    attributes
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: 'ms-accordion-header ' + +spacingClass + ` ${styleButtons}`
  });
  const {
    children: innerBlocks
  } = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, innerBlocks);
}

/***/ }),

/***/ "./app/blocks/reusable-blocks/accordion-header/edit.scss":
/*!***************************************************************!*\
  !*** ./app/blocks/reusable-blocks/accordion-header/edit.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/blocks/reusable-blocks/accordion-header/style.scss":
/*!****************************************************************!*\
  !*** ./app/blocks/reusable-blocks/accordion-header/style.scss ***!
  \****************************************************************/
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

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["jQuery"];

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

/***/ "./app/blocks/reusable-blocks/accordion-header/block.json":
/*!****************************************************************!*\
  !*** ./app/blocks/reusable-blocks/accordion-header/block.json ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"version":"1.0.0","name":"makersolucoes/accordion-header","title":"header-Acordeon","category":"ms_blocks","description":"Exibe um componente de Accordion header","icon":"table-row-before","keywords":["icon"],"attributes":{"open":{"type":"array","default":[]},"buttonsStyle":{"type":"string","default":""}},"providesContext":{"contextLabelChecked":"checked"},"supports":{"html":false,"alignWide":true,"color":{"text":true,"background":true,"gradients":true},"width":true,"innerBlocks":true,"__experimentalBorder":{"color":true,"width":true,"style":true,"__experimentalDefaultControls":{"color":true}}},"textdomain":"boilerplate","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"reusable-blocks/accordion-header/index": 0,
/******/ 			"reusable-blocks/accordion-header/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["reusable-blocks/accordion-header/style-index"], function() { return __webpack_require__("./app/blocks/reusable-blocks/accordion-header/index.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map