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
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./app/blocks/reusable-blocks/slider/inspector.jsx");
/* harmony import */ var _controllers_general_spacing_inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controllers/general-spacing/inspector */ "./app/blocks/controllers/general-spacing/inspector.jsx");
/* harmony import */ var _controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controllers/general-spacing/class */ "./app/blocks/controllers/general-spacing/class.jsx");
/* harmony import */ var _edit_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit.scss */ "./app/blocks/reusable-blocks/slider/edit.scss");










function Edit({
  attributes,
  setAttributes
}) {
  const handleDragStart = e => e.preventDefault();
  let styleButtons = attributes.buttonsStyle ? attributes.buttonsStyle : '';
  let spacingClass = (0,_controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_6__.SpacingClassGenerator)({
    attributes
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'ms-slider ' + spacingClass + ` ${styleButtons}`
  });
  const innerBlocks = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    template: false,
    templateInsertUpdatesSelection: false,
    allowedBlocks: []
  });
  let responsive = {
    0: {
      items: attributes.responsiveMobile,
      itemsFit: 'contain'
    },
    640: {
      items: attributes.responsiveTablet,
      itemsFit: 'contain'
    },
    1024: {
      items: attributes.responsiveDesktop,
      itemsFit: 'contain'
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocks
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_4__.Inspector, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controllers_general_spacing_inspector__WEBPACK_IMPORTED_MODULE_5__.InspectorSpacing, {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      images: media.map(item => item.url)
    }),
    allowedTypes: ['image'],
    multiple: true,
    value: attributes.images || [],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isPrimary: true,
      onClick: open
    }, "Selecionar/Enviar M\xEDdia")
  }), attributes.images.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {
    mouseTracking: true,
    controlsStrategy: "alternate",
    disableDotsControls: true,
    animationDuration: attributes.animationDuration,
    animationType: attributes.animationType,
    autoPlay: attributes.autoPlay,
    autoPlayInterval: attributes.autoPlayInterval,
    infinite: attributes.infinite,
    items: attributes.images.map((imageUrl, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      key: index,
      src: imageUrl,
      alt: `Slide ${index}`
    })),
    responsive: responsive
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controllers/general-spacing/class */ "./app/blocks/controllers/general-spacing/class.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./app/blocks/reusable-blocks/slider/style.scss");







function Save({
  attributes
}) {
  let styleButtons = attributes.buttonsStyle ? attributes.buttonsStyle : '';
  let spacingClass = (0,_controllers_general_spacing_class__WEBPACK_IMPORTED_MODULE_4__.SpacingClassGenerator)({
    attributes
  });
  let responsive = {
    0: {
      items: attributes.responsiveMobile,
      itemsFit: 'contain'
    },
    640: {
      items: attributes.responsiveTablet,
      itemsFit: 'contain'
    },
    1024: {
      items: attributes.responsiveDesktop,
      itemsFit: 'contain'
    }
  };
  const handleDragStart = e => e.preventDefault();
  const images = attributes.images.map((imageUrl, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    key: index,
    src: imageUrl,
    alt: `Slide ${index}`
  }));
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: 'ms-slider' + +spacingClass + ` ${styleButtons}`
  });
  const innerBlocks = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps.save(blockProps);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocks
  }, attributes.images.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((react_alice_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
    mouseTracking: true,
    animationDuration: attributes.animationDuration,
    animationType: attributes.animationType,
    autoPlay: attributes.autoPlay,
    autoPlayInterval: attributes.autoPlayInterval,
    infinite: attributes.infinite,
    items: images,
    responsive: responsive
  }));
}

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

/***/ "./node_modules/react-alice-carousel/lib/defaultProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/defaultProps.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.defaultProps=void 0;var types_1=__webpack_require__(/*! ./types */ "./node_modules/react-alice-carousel/lib/types/index.js");exports.defaultProps={activeIndex:0,animationDuration:400,animationEasingFunction:"ease",animationType:types_1.AnimationType.SLIDE,autoHeight:!1,autoWidth:!1,autoPlay:!1,autoPlayControls:!1,autoPlayDirection:types_1.AutoplayDirection.LTR,autoPlayInterval:400,autoPlayStrategy:types_1.AutoPlayStrategy.DEFAULT,children:void 0,controlsStrategy:types_1.ControlsStrategy.DEFAULT,disableButtonsControls:!1,disableDotsControls:!1,disableSlideInfo:!0,infinite:!1,innerWidth:void 0,items:void 0,keyboardNavigation:!1,mouseTracking:!1,syncStateOnPropsUpdate:!0,name:"",paddingLeft:0,paddingRight:0,responsive:void 0,swipeDelta:20,swipeExtraPadding:200,ssrSilentMode:!0,touchTracking:!0,touchMoveDefaultEvents:!0,onInitialized:function(){},onResized:function(){},onUpdated:function(){},onResizeEvent:void 0,onSlideChange:function(){},onSlideChanged:function(){}};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/react-alice-carousel.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __extends=function(){var n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__assign=function(){return(__assign=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__createBinding=Object.create?function(t,e,i,n){void 0===n&&(n=i);var o=Object.getOwnPropertyDescriptor(e,i);o&&("get"in o?e.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,n,o)}:function(t,e,i,n){t[n=void 0===n?i:n]=e[i]},__setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&__createBinding(e,t,i);return __setModuleDefault(e,t),e},__exportStar=function(t,e){for(var i in t)"default"===i||Object.prototype.hasOwnProperty.call(e,i)||__createBinding(e,t,i)},__awaiter=function(t,a,r,l){return new(r=r||Promise)(function(i,e){function n(t){try{s(l.next(t))}catch(t){e(t)}}function o(t){try{s(l.throw(t))}catch(t){e(t)}}function s(t){var e;t.done?i(t.value):((e=t.value)instanceof r?e:new r(function(t){t(e)})).then(n,o)}s((l=l.apply(t,a||[])).next())})},__generator=function(n,o){var s,a,r,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(i){return function(t){var e=[i,t];if(s)throw new TypeError("Generator is already executing.");for(;l;)try{if(s=1,a&&(r=2&e[0]?a.return:e[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,e[1])).done)return r;switch(a=0,(e=r?[2&e[0],r.value]:e)[0]){case 0:case 1:r=e;break;case 4:return l.label++,{value:e[1],done:!1};case 5:l.label++,a=e[1],e=[0];continue;case 7:e=l.ops.pop(),l.trys.pop();continue;default:if(!(r=0<(r=l.trys).length&&r[r.length-1])&&(6===e[0]||2===e[0])){l=0;continue}if(3===e[0]&&(!r||e[1]>r[0]&&e[1]<r[3]))l.label=e[1];else if(6===e[0]&&l.label<r[1])l.label=r[1],r=e;else{if(!(r&&l.label<r[2])){r[2]&&l.ops.pop(),l.trys.pop();continue}l.label=r[2],l.ops.push(e)}}e=o.call(n,l)}catch(t){e=[6,t],a=0}finally{s=r=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}}},__importDefault=function(t){return t&&t.__esModule?t:{default:t}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(__webpack_require__(/*! react */ "react"))),vanilla_swipe_1=__importDefault(__webpack_require__(/*! vanilla-swipe */ "./node_modules/vanilla-swipe/lib/index.js")),defaultProps_1=__webpack_require__(/*! ./defaultProps */ "./node_modules/react-alice-carousel/lib/defaultProps.js"),Views=__importStar(__webpack_require__(/*! ./views */ "./node_modules/react-alice-carousel/lib/views/index.js")),Utils=__importStar(__webpack_require__(/*! ./utils */ "./node_modules/react-alice-carousel/lib/utils/index.js")),types_1=__webpack_require__(/*! ./types */ "./node_modules/react-alice-carousel/lib/types/index.js"),AliceCarousel=(__exportStar(__webpack_require__(/*! ./types */ "./node_modules/react-alice-carousel/lib/types/index.js"),exports),function(e){function t(t){var s=e.call(this,t)||this;return s.swipeListener=null,s._handleKeyboardEvents=function(t){switch(t.code){case"Space":return s.props.autoPlay&&s._handlePlayPauseToggle();case"ArrowLeft":return s.slidePrev(t);case"ArrowRight":return s.slideNext(t)}},s._handleBeforeSlideEnd=function(o){return __awaiter(s,void 0,void 0,function(){var e,i,n;return __generator(this,function(t){switch(t.label){case 0:return(i=this.state,n=i.activeIndex,e=i.itemsCount,i=i.fadeoutAnimationProcessing,Utils.shouldRecalculateSlideIndex(n,e))?(n=Utils.getUpdateSlidePositionIndex(n,e),[4,this._handleUpdateSlidePosition(n)]):[3,2];case 1:return t.sent(),[3,4];case 2:return i?[4,this.setState({fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})]:[3,4];case 3:t.sent(),t.label=4;case 4:return this._handleSlideChanged(o),[2]}})})},s._handleMouseEnter=function(){var t=s.props.autoPlayStrategy;Utils.shouldCancelAutoPlayOnHover(t)&&s.state.isAutoPlaying&&(s.isHovered=!0,s._handlePause())},s._handleMouseLeave=function(){s.state.isAutoPlaying&&(s.isHovered=!1,s._handlePlay())},s._handlePause=function(){s._clearAutoPlayTimeout()},s._handlePlayPauseToggle=function(){return __awaiter(s,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=this.state.isAutoPlaying,this.hasUserAction=!0,[4,this.setState({isAutoPlaying:!e,isAutoPlayCanceledOnAction:!0})];case 1:return t.sent(),e?this._handlePause():this._handlePlay(),[2]}})})},s._setRootComponentRef=function(t){return s.rootElement=t},s._setStageComponentRef=function(t){return s.stageComponent=t},s._renderStageItem=function(t,e){var i=Utils.getRenderStageItemStyles(e,s.state),n=Utils.getRenderStageItemClasses(e,s.state);return react_1.default.createElement(Views.StageItem,{styles:i,className:n,key:"stage-item-".concat(e),item:t})},s._renderSlideInfo=function(){var t=s.props.renderSlideInfo,e=s.state,i=e.activeIndex,e=e.itemsCount;return react_1.default.createElement(Views.SlideInfo,{itemsCount:e,activeIndex:i,renderSlideInfo:t})},s.state=Utils.calculateInitialState(t,null),s.isHovered=!1,s.isAnimationDisabled=!1,s.isTouchMoveProcessStarted=!1,s.cancelTouchAnimations=!1,s.hasUserAction=!1,s.rootElement=null,s.rootComponentDimensions={},s.stageComponent=null,s.startTouchmovePosition=void 0,s.slideTo=s.slideTo.bind(s),s.slidePrev=s.slidePrev.bind(s),s.slideNext=s.slideNext.bind(s),s._handleTouchmove=s._handleTouchmove.bind(s),s._handleTouchend=s._handleTouchend.bind(s),s._handleDotClick=s._handleDotClick.bind(s),s._handleResize=s._handleResize.bind(s),t=Utils.debounce(s._handleResize,100),s._handleResizeDebounced=t[0],s._cancelResizeDebounced=t[1],s}return __extends(t,e),t.prototype.componentDidMount=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this._setInitialState()];case 1:return t.sent(),this._addEventListeners(),this._setupSwipeHandlers(),this.props.autoPlay&&this._handlePlay(),[2]}})})},t.prototype.componentDidUpdate=function(t){var e=this.props,i=e.activeIndex,n=e.animationDuration,o=e.autoWidth,s=e.children,a=e.infinite,r=e.items,l=e.paddingLeft,u=e.paddingRight,d=e.responsive,c=e.swipeExtraPadding,h=e.mouseTracking,p=e.swipeDelta,_=e.touchTracking,e=e.touchMoveDefaultEvents;s&&t.children!==s||t.autoWidth!==o||t.infinite!==a||t.items!==r||t.paddingLeft!==l||t.paddingRight!==u||t.responsive!==d||t.swipeExtraPadding!==c?this._updateComponent():(t.animationDuration!==n&&this.setState({animationDuration:n}),t.activeIndex!==i&&this.slideTo(i,types_1.EventType.UPDATE)),t.swipeDelta===p&&t.mouseTracking===h&&t.touchTracking===_&&t.touchMoveDefaultEvents===e||this._updateSwipeProps(),this.props.keyboardNavigation!==t.keyboardNavigation&&this._updateEventListeners()},t.prototype.componentWillUnmount=function(){this._cancelResizeDebounced(),this._cancelTimeoutAnimations(),this._removeEventListeners()},Object.defineProperty(t.prototype,"eventObject",{get:function(){var t=this.state,e=t.itemsInSlide,t=t.activeIndex,i=Utils.getSlideItemInfo(this.state),n=i.isNextSlideDisabled,i=i.isPrevSlideDisabled;return{item:t,slide:Utils.getActiveSlideIndex(n,this.state),itemsInSlide:e,isNextSlideDisabled:n,isPrevSlideDisabled:i,type:types_1.EventType.ACTION}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isFadeoutAnimationAllowed",{get:function(){var t=this.state.itemsInSlide,e=this.props,i=e.animationType,n=e.paddingLeft,o=e.paddingRight,e=e.autoWidth;return 1===t&&i===types_1.AnimationType.FADEOUT&&!(n||o||e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"touchmovePosition",{get:function(){return void 0!==this.startTouchmovePosition?this.startTouchmovePosition:this.state.translate3d},enumerable:!1,configurable:!0}),t.prototype.slideTo=function(t,e){var i,n,o;void 0===t&&(t=0),this._handlePause(),this.isFadeoutAnimationAllowed?(i=Utils.getUpdateSlidePositionIndex(t,this.state.itemsCount),n=Utils.getFadeoutAnimationPosition(i,this.state),o=Utils.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:i,fadeoutAnimationIndex:o,fadeoutAnimationPosition:n,eventType:e})):this._handleSlideTo({activeIndex:t,eventType:e})},t.prototype.slidePrev=function(t){this._handlePause(),t&&t.isTrusted&&(this.hasUserAction=!0);var e,i,t=this.state.activeIndex-1;this.isFadeoutAnimationAllowed?(e=-this.state.stageWidth,i=Utils.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:t,fadeoutAnimationIndex:i,fadeoutAnimationPosition:e})):this._handleSlideTo({activeIndex:t})},t.prototype.slideNext=function(t){this._handlePause(),t&&t.isTrusted&&(this.hasUserAction=!0);var e,i,t=this.state.activeIndex+1;this.isFadeoutAnimationAllowed?(e=this.state.stageWidth,i=Utils.getFadeoutAnimationIndex(this.state),this._handleSlideTo({activeIndex:t,fadeoutAnimationIndex:i,fadeoutAnimationPosition:e})):this._handleSlideTo({activeIndex:t})},t.prototype._addEventListeners=function(){window.addEventListener("resize",this._handleResizeDebounced),this.props.keyboardNavigation&&window.addEventListener("keyup",this._handleKeyboardEvents)},t.prototype._removeEventListeners=function(){this.swipeListener&&this.swipeListener.destroy(),window.removeEventListener("resize",this._handleResizeDebounced),window.removeEventListener("keyup",this._handleKeyboardEvents)},t.prototype._updateEventListeners=function(){this.props.keyboardNavigation?window.addEventListener("keyup",this._handleKeyboardEvents):window.removeEventListener("keyup",this._handleKeyboardEvents)},t.prototype._handleResize=function(o){return __awaiter(this,void 0,void 0,function(){var e,i,n;return __generator(this,function(t){switch(t.label){case 0:return(i=this.props.onResizeEvent,n=Utils.getElementDimensions(this.rootElement),(i||Utils.shouldHandleResizeEvent)(o,this.rootComponentDimensions,n))?(this._cancelTimeoutAnimations(),this.rootComponentDimensions=n,i=this.state,n=i.itemsCount,e=i.isAutoPlaying,i=Utils.getUpdateSlidePositionIndex(this.state.activeIndex,n),n=Utils.calculateInitialState(__assign(__assign({},this.props),{activeIndex:i}),this.stageComponent),i=Utils.getTranslate3dProperty(n.activeIndex,n),n=__assign(__assign({},n),{translate3d:i,isAutoPlaying:e}),Utils.animate(this.stageComponent,{position:-i}),[4,this.setState(n)]):[3,2];case 1:t.sent(),this._handleResized(),this.isAnimationDisabled=!1,e&&this._handlePlay(),t.label=2;case 2:return[2]}})})},t.prototype._handleTouchmove=function(t,e){var i=e.absY,n=e.absX,o=e.deltaX,e=this.props.swipeDelta,s=this.state,a=s.swipeShiftValue,r=s.swipeLimitMin,l=s.swipeLimitMax,u=s.infinite,s=s.fadeoutAnimationProcessing;if(this.hasUserAction=!0,!(s||!this.isTouchMoveProcessStarted&&Utils.isVerticalTouchmoveDetected(n,i,e))){this.isTouchMoveProcessStarted||(this._cancelTimeoutAnimations(),this._setTouchmovePosition(),this.isAnimationDisabled=!0,this.isTouchMoveProcessStarted=!0,this._handleSlideChange());var d=Utils.getTouchmoveTranslatePosition(o,this.touchmovePosition);if(!1===u)return r<d||d<-l?void 0:void Utils.animate(this.stageComponent,{position:d});if(Utils.shouldRecalculateSwipePosition(d,r,l))try{!function t(){Utils.getIsLeftDirection(o)?d+=a:d+=-a;Utils.shouldRecalculateSwipePosition(d,r,l)&&t()}()}catch(t){Utils.debug(t)}Utils.animate(this.stageComponent,{position:d})}},t.prototype._handleTouchend=function(t,e){var i,n,o,e=e.deltaX;this._clearTouchmovePosition(),this.isTouchMoveProcessStarted&&(this.isTouchMoveProcessStarted=!1,i=this.state.animationDuration,n=this.props.animationEasingFunction,o=Utils.getTranslateXProperty(this.stageComponent),e=Utils.getSwipeTouchendPosition(this.state,e,o),Utils.animate(this.stageComponent,{position:e,animationDuration:i,animationEasingFunction:n}),this._handleBeforeTouchEnd(e))},t.prototype._handleBeforeTouchEnd=function(s){var t=this,e=this.state.animationDuration;this.touchEndTimeoutId=window.setTimeout(function(){return __awaiter(t,void 0,void 0,function(){var e,i,n,o=this;return __generator(this,function(t){switch(t.label){case 0:return e=Utils.getSwipeTouchendIndex(s,this.state),i=Utils.getTranslate3dProperty(e,this.state),Utils.animate(this.stageComponent,{position:-i}),n=Utils.getTransitionProperty(),[4,this.setState({activeIndex:e,translate3d:i,transition:n})];case 1:return t.sent(),requestAnimationFrame(function(){return o._handleSlideChanged()}),[2]}})})},e)},t.prototype._handleSlideTo=function(t){var e=t.activeIndex,a=void 0===e?0:e,e=t.fadeoutAnimationIndex,r=void 0===e?null:e,e=t.fadeoutAnimationPosition,l=void 0===e?null:e,u=t.eventType;return __awaiter(this,void 0,void 0,function(){var e,i,n,o,s=this;return __generator(this,function(t){switch(t.label){case 0:return(i=this.props,n=i.infinite,i=i.animationEasingFunction,e=this.state,o=e.itemsCount,e=e.animationDuration,this.isAnimationDisabled||this.state.activeIndex===a||!n&&Utils.shouldCancelSlideAnimation(a,o))?[2]:(this.isAnimationDisabled=!0,this._cancelTimeoutAnimations(),this._handleSlideChange(u),n=!1,o=Utils.getTranslate3dProperty(a,this.state),i=null!==r&&null!==l?(n=!0,Utils.getTransitionProperty()):Utils.getTransitionProperty({animationDuration:e,animationEasingFunction:i}),[4,this.setState({activeIndex:a,transition:i,translate3d:o,animationDuration:e,fadeoutAnimationIndex:r,fadeoutAnimationPosition:l,fadeoutAnimationProcessing:n})]);case 1:return t.sent(),this.slideEndTimeoutId=window.setTimeout(function(){return s._handleBeforeSlideEnd(u)},e),[2]}})})},t.prototype._handleUpdateSlidePosition=function(o){return __awaiter(this,void 0,void 0,function(){var e,i,n;return __generator(this,function(t){switch(t.label){case 0:return e=this.state.animationDuration,i=Utils.getTranslate3dProperty(o,this.state),n=Utils.getTransitionProperty({animationDuration:0}),[4,this.setState({activeIndex:o,translate3d:i,transition:n,animationDuration:e,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1})];case 1:return t.sent(),[2]}})})},t.prototype._handleUpdated=function(){this.props.onUpdated&&this.props.onUpdated(__assign(__assign({},this.eventObject),{type:types_1.EventType.UPDATE}))},t.prototype._handleResized=function(){this.props.onResized&&this.props.onResized(__assign(__assign({},this.eventObject),{type:types_1.EventType.RESIZE}))},t.prototype._handleSlideChange=function(t){this.props.onSlideChange&&(t=t?__assign(__assign({},this.eventObject),{type:t}):this.eventObject,this.props.onSlideChange(t))},t.prototype._handleSlideChanged=function(s){return __awaiter(this,void 0,void 0,function(){var e,i,n,o;return __generator(this,function(t){switch(t.label){case 0:return(i=this.state,e=i.isAutoPlaying,i=i.isAutoPlayCanceledOnAction,n=this.props,o=n.autoPlayStrategy,n=n.onSlideChanged,Utils.shouldCancelAutoPlayOnAction(o)&&this.hasUserAction&&!i)?[4,this.setState({isAutoPlayCanceledOnAction:!0,isAutoPlaying:!1})]:[3,2];case 1:return t.sent(),[3,3];case 2:e&&this._handlePlay(),t.label=3;case 3:return this.isAnimationDisabled=!1,n&&(o=s?__assign(__assign({},this.eventObject),{type:s}):this.eventObject,n(o)),s===types_1.EventType.UPDATE&&this._handleUpdated(),[2]}})})},t.prototype._handleDotClick=function(t){this.hasUserAction=!0,this.slideTo(t)},t.prototype._handlePlay=function(){this._setAutoPlayInterval()},t.prototype._cancelTimeoutAnimations=function(){this._clearAutoPlayTimeout(),this._clearSlideEndTimeout(),this.clearTouchendTimeout()},t.prototype._clearAutoPlayTimeout=function(){window.clearTimeout(this.autoPlayTimeoutId),this.autoPlayTimeoutId=void 0},t.prototype._clearSlideEndTimeout=function(){clearTimeout(this.slideEndTimeoutId),this.slideEndTimeoutId=void 0},t.prototype.clearTouchendTimeout=function(){clearTimeout(this.touchEndTimeoutId),this.touchEndTimeoutId=void 0},t.prototype._clearTouchmovePosition=function(){this.startTouchmovePosition=void 0},t.prototype._setTouchmovePosition=function(){var t=Utils.getTranslateXProperty(this.stageComponent);this.startTouchmovePosition=-t},t.prototype._setInitialState=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=Utils.calculateInitialState(this.props,this.stageComponent),this.rootComponentDimensions=Utils.getElementDimensions(this.rootElement),[4,this.setState(e)];case 1:return t.sent(),this.props.onInitialized&&this.props.onInitialized(__assign(__assign({},this.eventObject),{type:types_1.EventType.INIT})),[2]}})})},t.prototype._setAutoPlayInterval=function(){var t=this,e=this.props,i=e.autoPlayDirection,e=e.autoPlayInterval;this.autoPlayTimeoutId=window.setTimeout(function(){t.isHovered||(i===types_1.AutoplayDirection.RTL?t.slidePrev():t.slideNext())},e)},t.prototype._setupSwipeHandlers=function(){this.swipeListener=new vanilla_swipe_1.default({element:this.rootElement,delta:this.props.swipeDelta,onSwiping:this._handleTouchmove,onSwiped:this._handleTouchend,rotationAngle:5,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents,preventTrackingOnMouseleave:!0}),this.swipeListener.init()},t.prototype._updateComponent=function(){var t=this,e=(this.props.syncStateOnPropsUpdate?this.state:this.props).activeIndex,i=__assign(__assign({},this.props),{activeIndex:e});this._cancelTimeoutAnimations(),this.isAnimationDisabled=!1,this.state.isAutoPlaying&&this._handlePlay(),this.setState({clones:Utils.createClones(i)}),requestAnimationFrame(function(){t.setState(Utils.calculateInitialState(i,t.stageComponent),function(){return t._handleUpdated()})})},t.prototype._updateSwipeProps=function(){this.swipeListener&&this.swipeListener.update({delta:this.props.swipeDelta,mouseTrackingEnabled:this.props.mouseTracking,touchTrackingEnabled:this.props.touchTracking,preventDefaultTouchmoveEvent:!this.props.touchMoveDefaultEvents})},t.prototype._renderDotsNavigation=function(){var t=this.props,e=t.renderDotsItem,t=t.controlsStrategy;return react_1.default.createElement(Views.DotsNavigation,{state:this.state,onClick:this._handleDotClick,renderDotsItem:e,controlsStrategy:t})},t.prototype._renderPrevButton=function(){var t=this.props.renderPrevButton,e=Utils.getSlideItemInfo(this.state).isPrevSlideDisabled;return react_1.default.createElement(Views.PrevNextButton,{name:"prev",onClick:this.slidePrev,isDisabled:e,renderPrevButton:t})},t.prototype._renderNextButton=function(){var t=this.props.renderNextButton,e=Utils.getSlideItemInfo(this.state).isNextSlideDisabled;return react_1.default.createElement(Views.PrevNextButton,{name:"next",onClick:this.slideNext,isDisabled:e,renderNextButton:t})},t.prototype._renderPlayPauseButton=function(){var t=this.props.renderPlayPauseButton,e=this.state.isAutoPlaying;return react_1.default.createElement(Views.PlayPauseButton,{isPlaying:e,onClick:this._handlePlayPauseToggle,renderPlayPauseButton:t})},t.prototype.render=function(){var t=this.state,e=t.translate3d,i=t.clones,n=t.transition,t=t.canUseDom,o=Utils.shouldDisableDots(this.props,this.state),s=Utils.shouldDisableButtons(this.props,this.state),a=Utils.getRenderWrapperStyles(this.props,this.state,this.stageComponent),e=Utils.getRenderStageStyles({translate3d:e},{transition:n}),n=this.props.ssrSilentMode||t?"":types_1.Modifiers.SSR,t=Utils.concatClassnames(types_1.Classnames.ROOT,n);return react_1.default.createElement("div",{className:t},react_1.default.createElement("div",{ref:this._setRootComponentRef},react_1.default.createElement("div",{style:a,className:types_1.Classnames.WRAPPER,onMouseEnter:this._handleMouseEnter,onMouseLeave:this._handleMouseLeave},react_1.default.createElement("ul",{style:e,className:types_1.Classnames.STAGE,ref:this._setStageComponentRef},i.map(this._renderStageItem)))),o?null:this._renderDotsNavigation(),s?null:this._renderPrevButton(),s?null:this._renderNextButton(),this.props.disableSlideInfo?null:this._renderSlideInfo(),this.props.autoPlayControls?this._renderPlayPauseButton():null)},t.defaultProps=defaultProps_1.defaultProps,t}(react_1.default.PureComponent));exports["default"]=AliceCarousel;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/types/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/types/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {

var EventType,AnimationType,AutoPlayStrategy,ControlsStrategy,AutoplayDirection,Classnames,Modifiers;Object.defineProperty(exports, "__esModule", ({value:!0})),exports.Modifiers=exports.Classnames=exports.AutoplayDirection=exports.ControlsStrategy=exports.AutoPlayStrategy=exports.AnimationType=exports.EventType=void 0,function(e){e.ACTION="action",e.INIT="init",e.RESIZE="resize",e.UPDATE="update"}(EventType=exports.EventType||(exports.EventType={})),function(e){e.FADEOUT="fadeout",e.SLIDE="slide"}(AnimationType=exports.AnimationType||(exports.AnimationType={})),function(e){e.DEFAULT="default",e.ALL="all",e.ACTION="action",e.NONE="none"}(AutoPlayStrategy=exports.AutoPlayStrategy||(exports.AutoPlayStrategy={})),function(e){e.DEFAULT="default",e.ALTERNATE="alternate",e.RESPONSIVE="responsive"}(ControlsStrategy=exports.ControlsStrategy||(exports.ControlsStrategy={})),function(e){e.RTL="rtl",e.LTR="ltr"}(AutoplayDirection=exports.AutoplayDirection||(exports.AutoplayDirection={})),function(e){e.ANIMATED="animated animated-out fadeOut",e.ROOT="alice-carousel",e.WRAPPER="alice-carousel__wrapper",e.STAGE="alice-carousel__stage",e.STAGE_ITEM="alice-carousel__stage-item",e.DOTS="alice-carousel__dots",e.DOTS_ITEM="alice-carousel__dots-item",e.PLAY_BTN="alice-carousel__play-btn",e.PLAY_BTN_ITEM="alice-carousel__play-btn-item",e.PLAY_BTN_WRAPPER="alice-carousel__play-btn-wrapper",e.SLIDE_INFO="alice-carousel__slide-info",e.SLIDE_INFO_ITEM="alice-carousel__slide-info-item",e.BUTTON_PREV="alice-carousel__prev-btn",e.BUTTON_PREV_WRAPPER="alice-carousel__prev-btn-wrapper",e.BUTTON_PREV_ITEM="alice-carousel__prev-btn-item",e.BUTTON_NEXT="alice-carousel__next-btn",e.BUTTON_NEXT_WRAPPER="alice-carousel__next-btn-wrapper",e.BUTTON_NEXT_ITEM="alice-carousel__next-btn-item"}(Classnames=exports.Classnames||(exports.Classnames={})),function(e){e.ACTIVE="__active",e.INACTIVE="__inactive",e.CLONED="__cloned",e.CUSTOM="__custom",e.PAUSE="__pause",e.SEPARATOR="__separator",e.SSR="__ssr",e.TARGET="__target"}(Modifiers=exports.Modifiers||(exports.Modifiers={}));

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/classnames.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/classnames.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.isClonedItem=exports.isTargetItem=exports.isActiveItem=exports.getRenderStageItemClasses=void 0;var types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js"),common_1=__webpack_require__(/*! ./common */ "./node_modules/react-alice-carousel/lib/utils/common.js"),math_1=__webpack_require__(/*! ./math */ "./node_modules/react-alice-carousel/lib/utils/math.js"),getRenderStageItemClasses=function(e,t){void 0===e&&(e=0);var s=t.fadeoutAnimationIndex,i=(0,exports.isActiveItem)(e,t)?types_1.Modifiers.ACTIVE:"",n=(0,exports.isClonedItem)(e,t)?types_1.Modifiers.CLONED:"",t=(0,exports.isTargetItem)(e,t)?types_1.Modifiers.TARGET:"",e=e===s?types_1.Classnames.ANIMATED:"";return(0,common_1.concatClassnames)(types_1.Classnames.STAGE_ITEM,i,n,t,e)},isActiveItem=(exports.getRenderStageItemClasses=getRenderStageItemClasses,function(e,t){void 0===e&&(e=0);var s=t.activeIndex,i=t.itemsInSlide,n=t.itemsOffset,r=t.infinite,t=t.autoWidth,o=(0,math_1.getShiftIndex)(i,n);return t&&r?e-o===s+n:(t=s+o,r?t<=e&&e<t+i:s<=e&&e<t)}),isTargetItem=(exports.isActiveItem=isActiveItem,function(e,t){void 0===e&&(e=0);var s=t.activeIndex,i=t.itemsInSlide,n=t.itemsOffset,r=t.infinite,t=t.autoWidth,i=(0,math_1.getShiftIndex)(i,n);return r?t&&r?e-i===s+n:e===s+i:e===s}),isClonedItem=(exports.isTargetItem=isTargetItem,function(e,t){void 0===e&&(e=0);var s=t.itemsInSlide,i=t.itemsOffset,n=t.itemsCount,r=t.infinite,t=t.autoWidth;return!!r&&(t&&r?e<s||n-1+s<e:e<(t=(0,math_1.getShiftIndex)(s,i))||n-1+t<e)});exports.isClonedItem=isClonedItem;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/common.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/common.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.calculateInitialState=exports.getIsStageContentPartial=exports.concatClassnames=void 0;var elements_1=__webpack_require__(/*! ./elements */ "./node_modules/react-alice-carousel/lib/utils/elements.js"),math_1=__webpack_require__(/*! ./math */ "./node_modules/react-alice-carousel/lib/utils/math.js"),concatClassnames=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter(Boolean).join(" ")},getIsStageContentPartial=(exports.concatClassnames=concatClassnames,function(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=0),!(t=void 0!==t&&t)&&i<=e}),calculateInitialState=(exports.getIsStageContentPartial=getIsStageContentPartial,function(t,e,i){void 0===i&&(i=(0,elements_1.canUseDOM)());var n,a,o=t.animationDuration,o=void 0===o?0:o,s=t.infinite,s=void 0!==s&&s,l=t.autoPlay,l=void 0!==l&&l,r=t.autoWidth,r=void 0!==r&&r,m=(0,elements_1.createClones)(t),d=(0,elements_1.getTransitionProperty)(),c=(0,elements_1.getItemsCount)(t),u=(0,elements_1.getItemsOffset)(t),f=(0,elements_1.getItemsInSlide)(c,t),g=(0,math_1.getStartIndex)(t.activeIndex,c),g=(0,math_1.getActiveIndex)({startIndex:g,itemsCount:c,infinite:s}),S=(0,elements_1.getElementDimensions)(e).width,I=(a=(e=(r?(n=(e=(0,elements_1.createAutowidthTransformationSet)(e,S,s)).coords,a=e.content,e):(n=(e=(0,elements_1.createDefaultTransformationSet)(m,S,f,s)).coords,a=e.content,e)).partial,a),(0,math_1.getItemCoords)(-f,n=n).position),_=(0,math_1.getSwipeLimitMin)({itemsOffset:u,transformationSet:n},t),t=(0,math_1.getSwipeLimitMax)({itemsCount:c,itemsOffset:u,itemsInSlide:f,transformationSet:n},t),h=(0,math_1.getSwipeShiftValue)(c,n);return{activeIndex:g,autoWidth:r,animationDuration:o,clones:m,infinite:s,itemsCount:c,itemsInSlide:f,itemsOffset:u,translate3d:(0,elements_1.getTranslate3dProperty)(g,{itemsInSlide:f,itemsOffset:u,transformationSet:n,autoWidth:r,infinite:s}),stageWidth:S,stageContentWidth:a,initialStageHeight:0,isStageContentPartial:e,isAutoPlaying:l,isAutoPlayCanceledOnAction:!1,transformationSet:n,transition:d,fadeoutAnimationIndex:null,fadeoutAnimationPosition:null,fadeoutAnimationProcessing:!1,swipeLimitMin:_,swipeLimitMax:t,swipeAllowedPositionMax:I,swipeShiftValue:h,canUseDom:i}});exports.calculateInitialState=calculateInitialState;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/controls.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/controls.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.shouldCancelAutoPlayOnHover=exports.shouldCancelAutoPlayOnAction=exports.getItemIndexForDotNavigation=exports.checkIsTheLastDotIndex=exports.getDotsNavigationLength=exports.hasDotForEachSlide=exports.isStrategy=exports.shouldDisableButtons=exports.shouldDisableDots=exports.shouldDisableControls=void 0;var types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js");function shouldDisableControls(t,o){var t=(t||{}).controlsStrategy,o=o||{},e=o.itemsInSlide,s=o.itemsCount,o=o.autoWidth;if((0,exports.isStrategy)(t,types_1.ControlsStrategy.RESPONSIVE))return!o&&e===s}function shouldDisableDots(t,o){return t.disableDotsControls||shouldDisableControls(t,o)}function shouldDisableButtons(t,o){return t.disableButtonsControls||!t.infinite&&shouldDisableControls(t,o)}exports.shouldDisableControls=shouldDisableControls,exports.shouldDisableDots=shouldDisableDots,exports.shouldDisableButtons=shouldDisableButtons;var isStrategy=function(t,o){return void 0===t&&(t=""),void 0===o&&(o=""),Boolean(t&&t.includes(o))},hasDotForEachSlide=(exports.isStrategy=isStrategy,function(t,o){return t||(0,exports.isStrategy)(o,types_1.ControlsStrategy.ALTERNATE)}),getDotsNavigationLength=(exports.hasDotForEachSlide=hasDotForEachSlide,function(t,o,e){return void 0===t&&(t=0),void 0===o&&(o=1),(e=void 0!==e&&e)?t:0!==Number(o)&&Math.ceil(t/o)||0}),checkIsTheLastDotIndex=(exports.getDotsNavigationLength=getDotsNavigationLength,function(t,o,e){return!o&&t===e-1}),getItemIndexForDotNavigation=(exports.checkIsTheLastDotIndex=checkIsTheLastDotIndex,function(t,o,e,s){return(o?e-s:t*s)||0}),shouldCancelAutoPlayOnAction=(exports.getItemIndexForDotNavigation=getItemIndexForDotNavigation,function(t){return(t=void 0===t?"":t)===types_1.AutoPlayStrategy.ACTION||t===types_1.AutoPlayStrategy.ALL}),shouldCancelAutoPlayOnHover=(exports.shouldCancelAutoPlayOnAction=shouldCancelAutoPlayOnAction,function(t){return(t=void 0===t?"":t)===types_1.AutoPlayStrategy.DEFAULT||t===types_1.AutoPlayStrategy.ALL});exports.shouldCancelAutoPlayOnHover=shouldCancelAutoPlayOnHover;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/debug.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/debug.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports) {

function debug(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o]; true&&console.debug.apply(console,e)}Object.defineProperty(exports, "__esModule", ({value:!0})),exports.debug=void 0,exports.debug=debug;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/elements.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/elements.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __assign=function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},mappers_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.getItemsInSlide=exports.canUseDOM=exports.getTransformMatrix=exports.getTranslateXProperty=exports.getTouchmoveTranslatePosition=exports.getTranslate3dProperty=exports.getRenderStageItemStyles=exports.getRenderStageStyles=exports.getTransitionProperty=exports.getRenderWrapperStyles=exports.animate=exports.shouldHandleResizeEvent=exports.getElementFirstChild=exports.getElementCursor=exports.getAutoheightProperty=exports.getElementDimensions=exports.getItemWidth=exports.createDefaultTransformationSet=exports.createAutowidthTransformationSet=exports.isElement=exports.createClones=exports.getItemsOffset=exports.getItemsCount=exports.getSlides=void 0,__webpack_require__(/*! ./mappers */ "./node_modules/react-alice-carousel/lib/utils/mappers.js")),math_1=__webpack_require__(/*! ./math */ "./node_modules/react-alice-carousel/lib/utils/math.js"),getSlides=function(t){var e=t.children,t=t.items;return e?e.length?e:[e]:void 0===t?[]:t},getItemsCount=(exports.getSlides=getSlides,function(t){return(0,exports.getSlides)(t).length}),getItemsOffset=(exports.getItemsCount=getItemsCount,function(t){var e=t.infinite,n=t.paddingRight,t=t.paddingLeft;return e&&(t||n)?1:0}),createClones=(exports.getItemsOffset=getItemsOffset,function(t){var e,n,r,o,i=(0,exports.getSlides)(t);return t.infinite?(e=(0,exports.getItemsCount)(t),o=(0,exports.getItemsOffset)(t),t=(0,exports.getItemsInSlide)(e,t),r=Math.min(t,e)+o,n=i.slice(0,r),r=i.slice(-r),o&&t===e&&(o=i[0],t=i.slice(-1)[0],r.unshift(t),n.push(o)),r.concat(i,n)):i}),isElement=(exports.createClones=createClones,function(t){try{return t instanceof Element||t instanceof HTMLDocument}catch(t){return!1}}),createAutowidthTransformationSet=(exports.isElement=isElement,function(t,i,e){void 0===i&&(i=0),void 0===e&&(e=!1);var s=0,a=!0,n=[];return(0,exports.isElement)(t)&&(n=Array.from((null==t?void 0:t.children)||[]).reduce(function(t,e,n){var r=0,n=n-1,o=t[n],e=getElementDimensions(null==e?void 0:e.firstChild).width,e=void 0===e?0:e;return a=(s+=e)<=i,o&&(r=0==n?o.width:o.width+o.position),t.push({position:r,width:e}),t},[]),e||(n=a?(0,mappers_1.mapPartialCoords)(n):(t=s-i,(0,mappers_1.mapPositionCoords)(n,t)))),{coords:n,content:s,partial:a}}),createDefaultTransformationSet=(exports.createAutowidthTransformationSet=createAutowidthTransformationSet,function(t,o,e,n){void 0===n&&(n=!1);var i=0,s=!0,r=[],a=(0,exports.getItemWidth)(o,e);return r=t.reduce(function(t,e,n){var r=0,n=t[n-1];return s=(i+=a)<=o,n&&(r=a+n.position||0),t.push({width:a,position:r}),t},[]),{coords:r=n?r:s?(0,mappers_1.mapPartialCoords)(r):(e=i-o,(0,mappers_1.mapPositionCoords)(r,e)),content:i,partial:s}}),getItemWidth=(exports.createDefaultTransformationSet=createDefaultTransformationSet,function(t,e){return 0<e?t/e:t});function getElementDimensions(t){return t&&t.getBoundingClientRect?{width:(t=t.getBoundingClientRect()).width,height:t.height}:{width:0,height:0}}exports.getItemWidth=getItemWidth,exports.getElementDimensions=getElementDimensions;var getAutoheightProperty=function(t,e,n){var e=(0,exports.getElementCursor)(e,n),n=(0,exports.getElementFirstChild)(t,e);if((0,exports.isElement)(n))return t=window.getComputedStyle(n),e=parseFloat(t.marginTop),t=parseFloat(t.marginBottom),Math.ceil(n.offsetHeight+e+t)},getElementCursor=(exports.getAutoheightProperty=getAutoheightProperty,function(t,e){var n=e.activeIndex,e=e.itemsInSlide;return t.infinite?n+e+(0,exports.getItemsOffset)(t):n}),getElementFirstChild=(exports.getElementCursor=getElementCursor,function(t,e){t=t&&t.children||[];return t[e]&&t[e].firstChild||null});function shouldHandleResizeEvent(t,e,n){return(e=void 0===e?{}:e).width!==(n=void 0===n?{}:n).width}function animate(t,e){var e=e||{},n=e.position,n=void 0===n?0:n,r=e.animationDuration,r=void 0===r?0:r,e=e.animationEasingFunction,e=void 0===e?"ease":e;return t&&(0,exports.isElement)(t)&&(t.style.transition="transform ".concat(r,"ms ").concat(e," 0ms"),t.style.transform="translate3d(".concat(n,"px, 0, 0)")),t}exports.getElementFirstChild=getElementFirstChild,exports.shouldHandleResizeEvent=shouldHandleResizeEvent,exports.animate=animate;var getRenderWrapperStyles=function(t,e,n){var r=t||{},o=r.paddingLeft,i=r.paddingRight,s=r.autoHeight,r=r.animationDuration,s=s?(0,exports.getAutoheightProperty)(n,t,e):void 0;return{height:s,transition:s?"height ".concat(r,"ms"):void 0,paddingLeft:"".concat(o,"px"),paddingRight:"".concat(i,"px")}},getTransitionProperty=(exports.getRenderWrapperStyles=getRenderWrapperStyles,function(t){var t=t||{},e=t.animationDuration,t=t.animationEasingFunction,t=void 0===t?"ease":t;return"transform ".concat(void 0===e?0:e,"ms ").concat(t," 0ms")}),getRenderStageStyles=(exports.getTransitionProperty=getTransitionProperty,function(t,e){t=(t||{}).translate3d,t="translate3d(".concat(-(void 0===t?0:t),"px, 0, 0)");return __assign(__assign({},e),{transform:t})}),getRenderStageItemStyles=(exports.getRenderStageStyles=getRenderStageStyles,function(t,e){var n=e.transformationSet,r=e.fadeoutAnimationIndex,o=e.fadeoutAnimationPosition,i=e.fadeoutAnimationProcessing,e=e.animationDuration,n=(n[t]||{}).width;return i&&r===t?{transform:"translateX(".concat(o,"px)"),animationDuration:"".concat(e,"ms"),width:"".concat(n,"px")}:{width:n}}),getTranslate3dProperty=(exports.getRenderStageItemStyles=getRenderStageItemStyles,function(t,e){var n=t,r=e.infinite,o=e.itemsOffset,i=e.itemsInSlide,e=e.transformationSet;return((void 0===e?[]:e)[n=r?t+(0,math_1.getShiftIndex)(void 0===i?0:i,void 0===o?0:o):n]||{}).position||0}),getTouchmoveTranslatePosition=(exports.getTranslate3dProperty=getTranslate3dProperty,function(t,e){return-(e-Math.floor(t))});function getTranslateXProperty(t){t=getTransformMatrix(t),t=t&&t[4]||"";return Number(t)}function getTransformMatrix(t){return t&&(0,exports.isElement)(t)&&window.getComputedStyle(t).transform.match(/(-?[0-9.]+)/g)||[]}exports.getTouchmoveTranslatePosition=getTouchmoveTranslatePosition,exports.getTranslateXProperty=getTranslateXProperty,exports.getTransformMatrix=getTransformMatrix;var canUseDOM=function(){var t;try{return Boolean(null==(t=null===window||void 0===window?void 0:window.document)?void 0:t.createElement)}catch(t){return!1}},getItemsInSlide=(exports.canUseDOM=canUseDOM,function(n,t){var r,o=1,i=t.responsive,e=t.autoWidth,s=t.infinite,t=t.innerWidth;return void 0!==e&&e?void 0!==s&&s?n:o:(i&&(e=Object.keys(i)).length&&(t||(0,exports.canUseDOM)())&&(r=void 0===t?window.innerWidth:t,e.forEach(function(t){var e;Number(t)<=r&&(e=(t=i[t]).items,t=t.itemsFit,o="contain"===(void 0===t?"fill":t)?e:Math.min(e,n))})),o||1)});exports.getItemsInSlide=getItemsInSlide;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __createBinding=Object.create?function(e,r,t,o){void 0===o&&(o=t);var p=Object.getOwnPropertyDescriptor(r,t);p&&("get"in p?r.__esModule:!p.writable&&!p.configurable)||(p={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,o,p)}:function(e,r,t,o){e[o=void 0===o?t:o]=r[t]},__exportStar=function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||__createBinding(r,e,t)};Object.defineProperty(exports, "__esModule", ({value:!0})),__exportStar(__webpack_require__(/*! ./common */ "./node_modules/react-alice-carousel/lib/utils/common.js"),exports),__exportStar(__webpack_require__(/*! ./elements */ "./node_modules/react-alice-carousel/lib/utils/elements.js"),exports),__exportStar(__webpack_require__(/*! ./classnames */ "./node_modules/react-alice-carousel/lib/utils/classnames.js"),exports),__exportStar(__webpack_require__(/*! ./timers */ "./node_modules/react-alice-carousel/lib/utils/timers.js"),exports),__exportStar(__webpack_require__(/*! ./math */ "./node_modules/react-alice-carousel/lib/utils/math.js"),exports),__exportStar(__webpack_require__(/*! ./debug */ "./node_modules/react-alice-carousel/lib/utils/debug.js"),exports),__exportStar(__webpack_require__(/*! ./render */ "./node_modules/react-alice-carousel/lib/utils/render.js"),exports),__exportStar(__webpack_require__(/*! ./controls */ "./node_modules/react-alice-carousel/lib/utils/controls.js"),exports),__exportStar(__webpack_require__(/*! ./mappers */ "./node_modules/react-alice-carousel/lib/utils/mappers.js"),exports);

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/mappers.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/mappers.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

var __assign=function(){return(__assign=Object.assign||function(o){for(var t,r=1,i=arguments.length;r<i;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(o[s]=t[s]);return o}).apply(this,arguments)},mapPartialCoords=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapPositionCoords=exports.mapPartialCoords=void 0,function(o){return o.map(function(o){return{width:o.width,position:0}})}),mapPositionCoords=(exports.mapPartialCoords=mapPartialCoords,function(o,t){return void 0===t&&(t=0),o.map(function(o){return o.position>t?__assign(__assign({},o),{position:t}):o})});exports.mapPositionCoords=mapPositionCoords;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/math.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/math.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.isVerticalTouchmoveDetected=exports.getFadeoutAnimationPosition=exports.getFadeoutAnimationIndex=exports.getSwipeTouchendIndex=exports.getSwipeTouchendPosition=exports.getSwipeTransformationCursor=exports.getTransformationItemIndex=exports.getSwipeShiftValue=exports.getItemCoords=exports.getIsLeftDirection=exports.shouldRecalculateSwipePosition=exports.getSwipeLimitMax=exports.getSwipeLimitMin=exports.shouldCancelSlideAnimation=exports.shouldRecalculateSlideIndex=exports.getUpdateSlidePositionIndex=exports.getActiveIndex=exports.getStartIndex=exports.getShiftIndex=void 0;var getShiftIndex=function(e,t){return(e=void 0===e?0:e)+(t=void 0===t?0:t)},getStartIndex=(exports.getShiftIndex=getShiftIndex,function(e,t){if(void 0===e&&(e=0),t=void 0===t?0:t){if(t<=e)return t-1;if(0<e)return e}return 0}),getActiveIndex=(exports.getStartIndex=getStartIndex,function(e){var t=e.startIndex,t=void 0===t?0:t,i=e.itemsCount,e=e.infinite;return void 0!==e&&e?t:(0,exports.getStartIndex)(t,void 0===i?0:i)}),getUpdateSlidePositionIndex=(exports.getActiveIndex=getActiveIndex,function(e,t){return e<0?t-1:t<=e?0:e}),shouldRecalculateSlideIndex=(exports.getUpdateSlidePositionIndex=getUpdateSlidePositionIndex,function(e,t){return e<0||t<=e}),shouldCancelSlideAnimation=(exports.shouldRecalculateSlideIndex=shouldRecalculateSlideIndex,function(e,t){return e<0||t<=e}),getSwipeLimitMin=(exports.shouldCancelSlideAnimation=shouldCancelSlideAnimation,function(e,t){var i=e.itemsOffset,e=e.transformationSet,e=void 0===e?[]:e,o=t.infinite,t=t.swipeExtraPadding;return o?(e[void 0===i?0:i]||{}).position:(o=(e[0]||{}).width,Math.min(void 0===t?0:t,void 0===o?0:o))}),getSwipeLimitMax=(exports.getSwipeLimitMin=getSwipeLimitMin,function(e,t){var i=t.infinite,t=t.swipeExtraPadding,t=void 0===t?0:t,o=e.itemsCount,n=e.itemsOffset,r=e.itemsInSlide,r=void 0===r?1:r,e=e.transformationSet,e=void 0===e?[]:e;return i?(e[(void 0===o?1:o)+(0,exports.getShiftIndex)(r,void 0===n?0:n)]||{}).position||0:(0,exports.getItemCoords)(-r,e).position+t}),shouldRecalculateSwipePosition=(exports.getSwipeLimitMax=getSwipeLimitMax,function(e,t,i){return-t<=e||Math.abs(e)>=i}),getIsLeftDirection=(exports.shouldRecalculateSwipePosition=shouldRecalculateSwipePosition,function(e){return(e=void 0===e?0:e)<0}),getItemCoords=(exports.getIsLeftDirection=getIsLeftDirection,function(e,t){return(t=void 0===t?[]:t).slice(e=void 0===e?0:e)[0]||{position:0,width:0}}),getSwipeShiftValue=(exports.getItemCoords=getItemCoords,function(e,t){return void 0===e&&(e=0),void 0===t&&(t=[]),(0,exports.getItemCoords)(e,t).position}),getTransformationItemIndex=(exports.getSwipeShiftValue=getSwipeShiftValue,function(e,t){return void 0===t&&(t=0),(e=void 0===e?[]:e).findIndex(function(e){return e.position>=Math.abs(t)})}),getSwipeTransformationCursor=(exports.getTransformationItemIndex=getTransformationItemIndex,function(e,t,i){void 0===e&&(e=[]),void 0===t&&(t=0),void 0===i&&(i=0);e=(0,exports.getTransformationItemIndex)(e,t);return(0,exports.getIsLeftDirection)(i)?e:e-1}),getSwipeTouchendPosition=(exports.getSwipeTransformationCursor=getSwipeTransformationCursor,function(e,t,i){void 0===i&&(i=0);var o=e.infinite,n=e.autoWidth,r=e.isStageContentPartial,s=e.swipeAllowedPositionMax,e=e.transformationSet,i=(0,exports.getSwipeTransformationCursor)(e,i,t),t=(0,exports.getItemCoords)(i,e).position;if(!o){if(n&&r)return 0;if(s<t)return-s}return-t}),getSwipeTouchendIndex=(exports.getSwipeTouchendPosition=getSwipeTouchendPosition,function(e,t){var i=t.transformationSet,o=t.itemsInSlide,n=t.itemsOffset,r=t.itemsCount,s=t.infinite,d=t.isStageContentPartial,a=t.activeIndex,t=t.translate3d;return s||!d&&t!==Math.abs(e)?(d=(0,exports.getTransformationItemIndex)(i,e),s?d<(t=(0,exports.getShiftIndex)(o,n))?r-o-n+d:t+r<=d?d-(t+r):d-t:d):a}),getFadeoutAnimationIndex=(exports.getSwipeTouchendIndex=getSwipeTouchendIndex,function(e){var t=e.infinite,i=e.activeIndex,e=e.itemsInSlide;return t?i+e:i}),getFadeoutAnimationPosition=(exports.getFadeoutAnimationIndex=getFadeoutAnimationIndex,function(e,t){var i=t.activeIndex,t=t.stageWidth;return e<i?(i-e)*-t||0:(e-i)*t||0}),isVerticalTouchmoveDetected=(exports.getFadeoutAnimationPosition=getFadeoutAnimationPosition,function(e,t,i){return e<(i=void 0===i?0:i)||e<.1*t});exports.isVerticalTouchmoveDetected=isVerticalTouchmoveDetected;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/render.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/render.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.getSlideItemInfo=exports.getSlideInfo=exports.getSlideIndexForMultipleItems=exports.getSlideIndexForNonMultipleItems=exports.getActiveSlideDotsLength=exports.getActiveSlideIndex=void 0;var getActiveSlideIndex=function(e,t){var t=t||{},i=t.activeIndex,o=t.itemsInSlide,t=t.itemsCount,i=i+o;return 1===o?(0,exports.getSlideIndexForNonMultipleItems)(i,o,t):(0,exports.getSlideIndexForMultipleItems)(i,o,t,e)},getActiveSlideDotsLength=(exports.getActiveSlideIndex=getActiveSlideIndex,function(e,t){var i;return void 0===t&&(t=1),(e=void 0===e?0:e)&&t?(i=Math.floor(e/t),e%t==0?i-1:i):0}),getSlideIndexForNonMultipleItems=(exports.getActiveSlideDotsLength=getActiveSlideDotsLength,function(e,t,i){return e<t?i-t:i<e?0:e-1}),getSlideIndexForMultipleItems=(exports.getSlideIndexForNonMultipleItems=getSlideIndexForNonMultipleItems,function(e,t,i,o){var l=(0,exports.getActiveSlideDotsLength)(i,t);return e===i+t?0:o||e<t&&0!==e?l:0===e?i%t==0?l:l-1:0<t?Math.floor(e/t)-1:0}),getSlideInfo=(exports.getSlideIndexForMultipleItems=getSlideIndexForMultipleItems,function(e,t){void 0===t&&(t=0);e=(e=void 0===e?0:e)+1;return e<1?e=t:t<e&&(e=1),{item:e,itemsCount:t}}),getSlideItemInfo=(exports.getSlideInfo=getSlideInfo,function(e){var e=e||{},t=e.itemsInSlide,i=e.activeIndex,o=e.infinite,l=e.itemsCount;return e.isStageContentPartial?{isPrevSlideDisabled:!0,isNextSlideDisabled:!0}:{isPrevSlideDisabled:!1===o&&0===i,isNextSlideDisabled:!1===o&&l-t<=i}});exports.getSlideItemInfo=getSlideItemInfo;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/timers.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/timers.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

function debounce(n,i){void 0===i&&(i=0);function u(){d&&(clearTimeout(d),d=void 0)}var d=void 0;return[function(){for(var e=this,o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];u(),d=window.setTimeout(function(){n.apply(e,o),d=void 0},i)},u]}Object.defineProperty(exports, "__esModule", ({value:!0})),exports.debounce=void 0,exports.debounce=debounce;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/DotsNavigation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/DotsNavigation.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.DotsNavigation=void 0,__importDefault(__webpack_require__(/*! react */ "react"))),types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js"),utils_1=__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js"),DotsNavigation=function(e){var a=e.state,n=e.onClick,r=e.onMouseEnter,l=e.onMouseLeave,t=e.controlsStrategy,u=e.renderDotsItem,c=a.itemsCount,_=a.itemsInSlide,d=a.infinite,e=a.autoWidth,m=a.activeIndex,v=(0,utils_1.getSlideItemInfo)(a).isNextSlideDisabled,f=(0,utils_1.hasDotForEachSlide)(e,t),D=(0,utils_1.getDotsNavigationLength)(c,_,f);return react_1.default.createElement("ul",{className:types_1.Classnames.DOTS},Array.from({length:c}).map(function(e,t){var i,s,o;if(t<D)return s=(0,utils_1.checkIsTheLastDotIndex)(t,Boolean(d),D),i=(0,utils_1.getItemIndexForDotNavigation)(t,s,c,_),s=(0,utils_1.getActiveSlideIndex)(v,a),f&&((s=m)<0?s=c-1:c<=m&&(s=0),i=t),s=s===t?types_1.Modifiers.ACTIVE:"",o=u?types_1.Modifiers.CUSTOM:"",o=(0,utils_1.concatClassnames)(types_1.Classnames.DOTS_ITEM,s,o),react_1.default.createElement("li",{key:"dot-item-".concat(t),onMouseEnter:r,onMouseLeave:l,onClick:function(){return n(i)},className:o},u&&u({isActive:Boolean(s),activeIndex:t}))}))};exports.DotsNavigation=DotsNavigation;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/PlayPauseButton.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/PlayPauseButton.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.PlayPauseButton=void 0,__importDefault(__webpack_require__(/*! react */ "react"))),types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js"),utils_1=__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js"),PlayPauseButton=function(e){var t=e.isPlaying,a=e.onClick,e=e.renderPlayPauseButton;return"function"==typeof e?react_1.default.createElement("div",{className:types_1.Classnames.PLAY_BTN,onClick:a},e({isPlaying:t})):(e=t?types_1.Modifiers.PAUSE:"",t=(0,utils_1.concatClassnames)(types_1.Classnames.PLAY_BTN_ITEM,e),react_1.default.createElement("div",{className:types_1.Classnames.PLAY_BTN},react_1.default.createElement("div",{className:types_1.Classnames.PLAY_BTN_WRAPPER},react_1.default.createElement("div",{onClick:a,className:t}))))};exports.PlayPauseButton=PlayPauseButton;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/PrevNextButton.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/PrevNextButton.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.PrevNextButton=void 0,__importDefault(__webpack_require__(/*! react */ "react"))),types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js"),utils_1=__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js"),PrevNextButton=function(e){var t,s=e.name,a=e.isDisabled,r=e.onClick,n=e.renderPrevButton,e=e.renderNextButton;return"function"==typeof n?react_1.default.createElement("div",{className:types_1.Classnames.BUTTON_PREV,onClick:r},n({isDisabled:a})):"function"==typeof e?react_1.default.createElement("div",{className:types_1.Classnames.BUTTON_NEXT,onClick:r},e({isDisabled:a})):(e=(n="prev"===s)?"<":">",s=n?types_1.Classnames.BUTTON_PREV:types_1.Classnames.BUTTON_NEXT,t=n?types_1.Classnames.BUTTON_PREV_WRAPPER:types_1.Classnames.BUTTON_NEXT_WRAPPER,n=n?types_1.Classnames.BUTTON_PREV_ITEM:types_1.Classnames.BUTTON_NEXT_ITEM,a=a?types_1.Modifiers.INACTIVE:"",n=(0,utils_1.concatClassnames)(n,a),react_1.default.createElement("div",{className:s},react_1.default.createElement("div",{className:t},react_1.default.createElement("p",{className:n,onClick:function(e){return r(e)}},react_1.default.createElement("span",{"data-area":e})))))};exports.PrevNextButton=PrevNextButton;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/SlideInfo.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/SlideInfo.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.SlideInfo=void 0,__importDefault(__webpack_require__(/*! react */ "react"))),types_1=__webpack_require__(/*! ../types */ "./node_modules/react-alice-carousel/lib/types/index.js"),utils_1=__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js"),SlideInfo=function(e){var t=e.activeIndex,s=e.itemsCount,e=e.renderSlideInfo,t=(0,utils_1.getSlideInfo)(t,s).item;return"function"==typeof e?react_1.default.createElement("div",{className:types_1.Classnames.SLIDE_INFO},e({item:t,itemsCount:s})):(e=(0,utils_1.concatClassnames)(types_1.Classnames.SLIDE_INFO_ITEM,types_1.Modifiers.SEPARATOR),react_1.default.createElement("div",{className:types_1.Classnames.SLIDE_INFO},react_1.default.createElement("span",{className:types_1.Classnames.SLIDE_INFO_ITEM},t),react_1.default.createElement("span",{className:e},"/"),react_1.default.createElement("span",{className:types_1.Classnames.SLIDE_INFO_ITEM},s)))};exports.SlideInfo=SlideInfo;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/StageItem.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/StageItem.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.StageItem=void 0,__importDefault(__webpack_require__(/*! react */ "react"))),StageItem=function(e){var t=e.item,r=e.className,e=e.styles;return react_1.default.createElement("li",{style:e,className:r},t)};exports.StageItem=StageItem;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({value:!0})),exports.PrevNextButton=exports.PlayPauseButton=exports.DotsNavigation=exports.StageItem=exports.SlideInfo=void 0;var SlideInfo_1=__webpack_require__(/*! ./SlideInfo */ "./node_modules/react-alice-carousel/lib/views/SlideInfo.js"),StageItem_1=(Object.defineProperty(exports,"SlideInfo",{enumerable:!0,get:function(){return SlideInfo_1.SlideInfo}}),__webpack_require__(/*! ./StageItem */ "./node_modules/react-alice-carousel/lib/views/StageItem.js")),DotsNavigation_1=(Object.defineProperty(exports,"StageItem",{enumerable:!0,get:function(){return StageItem_1.StageItem}}),__webpack_require__(/*! ./DotsNavigation */ "./node_modules/react-alice-carousel/lib/views/DotsNavigation.js")),PlayPauseButton_1=(Object.defineProperty(exports,"DotsNavigation",{enumerable:!0,get:function(){return DotsNavigation_1.DotsNavigation}}),__webpack_require__(/*! ./PlayPauseButton */ "./node_modules/react-alice-carousel/lib/views/PlayPauseButton.js")),PrevNextButton_1=(Object.defineProperty(exports,"PlayPauseButton",{enumerable:!0,get:function(){return PlayPauseButton_1.PlayPauseButton}}),__webpack_require__(/*! ./PrevNextButton */ "./node_modules/react-alice-carousel/lib/views/PrevNextButton.js"));Object.defineProperty(exports, "PrevNextButton", ({enumerable:!0,get:function(){return PrevNextButton_1.PrevNextButton}}));

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
exports["default"] = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "./node_modules/vanilla-swipe/lib/utils/index.js"));

var _types = __webpack_require__(/*! ./types */ "./node_modules/vanilla-swipe/lib/types/index.js");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VanillaSwipe = /*#__PURE__*/function () {
  function VanillaSwipe(props) {
    _classCallCheck(this, VanillaSwipe);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "props", void 0);

    this.state = Utils.getInitialState();
    this.props = Utils.getInitialProps(props);
    this.handleSwipeStart = this.handleSwipeStart.bind(this);
    this.handleSwipeMove = this.handleSwipeMove.bind(this);
    this.handleSwipeEnd = this.handleSwipeEnd.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  _createClass(VanillaSwipe, [{
    key: "init",
    value: function init() {
      this.setupTouchListeners();
      this.setupMouseListeners();
    }
  }, {
    key: "update",
    value: function update(props) {
      var prevProps = this.props;
      var nextProps = Object.assign({}, prevProps, props);

      if (prevProps.element !== nextProps.element || prevProps.target !== nextProps.target) {
        this.destroy();
        this.props = nextProps;
        this.init();
        return;
      }

      this.props = nextProps;

      if (prevProps.mouseTrackingEnabled !== nextProps.mouseTrackingEnabled || prevProps.preventTrackingOnMouseleave !== nextProps.preventTrackingOnMouseleave) {
        this.cleanupMouseListeners();
        nextProps.mouseTrackingEnabled ? this.setupMouseListeners() : this.cleanupMouseListeners();
      }

      if (prevProps.touchTrackingEnabled !== nextProps.touchTrackingEnabled) {
        this.cleanupTouchListeners();
        nextProps.touchTrackingEnabled ? this.setupTouchListeners() : this.cleanupTouchListeners();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cleanupMouseListeners();
      this.cleanupTouchListeners();
      this.state = Utils.getInitialState();
      this.props = Utils.getInitialProps();
    }
  }, {
    key: "setupTouchListeners",
    value: function setupTouchListeners() {
      var _this$props = this.props,
          element = _this$props.element,
          target = _this$props.target,
          touchTrackingEnabled = _this$props.touchTrackingEnabled;

      if (element && touchTrackingEnabled) {
        var listener = target || element;
        var isPassiveSupported = Utils.checkIsPassiveSupported();
        var options = Utils.getOptions(isPassiveSupported);
        listener.addEventListener('touchstart', this.handleSwipeStart, options);
        listener.addEventListener('touchmove', this.handleSwipeMove, options);
        listener.addEventListener('touchend', this.handleSwipeEnd, options);
      }
    }
  }, {
    key: "cleanupTouchListeners",
    value: function cleanupTouchListeners() {
      var _this$props2 = this.props,
          element = _this$props2.element,
          target = _this$props2.target;
      var listener = target || element;

      if (listener) {
        listener.removeEventListener('touchstart', this.handleSwipeStart);
        listener.removeEventListener('touchmove', this.handleSwipeMove);
        listener.removeEventListener('touchend', this.handleSwipeEnd);
      }
    }
  }, {
    key: "setupMouseListeners",
    value: function setupMouseListeners() {
      var _this$props3 = this.props,
          element = _this$props3.element,
          mouseTrackingEnabled = _this$props3.mouseTrackingEnabled,
          preventTrackingOnMouseleave = _this$props3.preventTrackingOnMouseleave;

      if (mouseTrackingEnabled && element) {
        element.addEventListener('mousedown', this.handleMouseDown);
        element.addEventListener('mousemove', this.handleMouseMove);
        element.addEventListener('mouseup', this.handleMouseUp);

        if (preventTrackingOnMouseleave) {
          element.addEventListener('mouseleave', this.handleMouseLeave);
        }
      }
    }
  }, {
    key: "cleanupMouseListeners",
    value: function cleanupMouseListeners() {
      var element = this.props.element;

      if (element) {
        element.removeEventListener('mousedown', this.handleMouseDown);
        element.removeEventListener('mousemove', this.handleMouseMove);
        element.removeEventListener('mouseup', this.handleMouseUp);
        element.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    }
  }, {
    key: "getEventData",
    value: function getEventData(e) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        directionDelta: 0
      };
      var rotationAngle = this.props.rotationAngle;
      var directionDelta = options.directionDelta;
      var movingPosition = Utils.calculateMovingPosition(e);
      var rotatePosition = Utils.rotateByAngle(movingPosition, rotationAngle);
      return Utils.calculatePosition(this.state, {
        rotatePosition: rotatePosition,
        directionDelta: directionDelta
      });
    }
  }, {
    key: "handleSwipeStart",
    value: function handleSwipeStart(e) {
      if (Utils.checkIsMoreThanSingleTouches(e)) return;
      var rotationAngle = this.props.rotationAngle;
      var movingPosition = Utils.calculateMovingPosition(e);

      var _Utils$rotateByAngle = Utils.rotateByAngle(movingPosition, rotationAngle),
          x = _Utils$rotateByAngle.x,
          y = _Utils$rotateByAngle.y;

      this.state = Utils.getInitialState({
        isSwiping: false,
        start: Date.now(),
        x: x,
        y: y
      });
    }
  }, {
    key: "handleSwipeMove",
    value: function handleSwipeMove(e) {
      var _this$state = this.state,
          x = _this$state.x,
          y = _this$state.y,
          isSwiping = _this$state.isSwiping;
      if (!x || !y || Utils.checkIsMoreThanSingleTouches(e)) return;
      var directionDelta = this.props.directionDelta || 0;

      var _this$getEventData = this.getEventData(e, {
        directionDelta: directionDelta
      }),
          absX = _this$getEventData.absX,
          absY = _this$getEventData.absY,
          deltaX = _this$getEventData.deltaX,
          deltaY = _this$getEventData.deltaY,
          directionX = _this$getEventData.directionX,
          directionY = _this$getEventData.directionY,
          duration = _this$getEventData.duration,
          velocity = _this$getEventData.velocity;

      var _this$props4 = this.props,
          delta = _this$props4.delta,
          preventDefaultTouchmoveEvent = _this$props4.preventDefaultTouchmoveEvent,
          onSwipeStart = _this$props4.onSwipeStart,
          onSwiping = _this$props4.onSwiping;
      if (e.cancelable && preventDefaultTouchmoveEvent) e.preventDefault();
      if (absX < Number(delta) && absY < Number(delta) && !isSwiping) return;

      if (onSwipeStart && !isSwiping) {
        onSwipeStart(e, {
          deltaX: deltaX,
          deltaY: deltaY,
          absX: absX,
          absY: absY,
          directionX: directionX,
          directionY: directionY,
          duration: duration,
          velocity: velocity
        });
      }

      this.state.isSwiping = true;

      if (onSwiping) {
        onSwiping(e, {
          deltaX: deltaX,
          deltaY: deltaY,
          absX: absX,
          absY: absY,
          directionX: directionX,
          directionY: directionY,
          duration: duration,
          velocity: velocity
        });
      }
    }
  }, {
    key: "handleSwipeEnd",
    value: function handleSwipeEnd(e) {
      var _this$props5 = this.props,
          onSwiped = _this$props5.onSwiped,
          onTap = _this$props5.onTap;

      if (this.state.isSwiping) {
        var directionDelta = this.props.directionDelta || 0;
        var position = this.getEventData(e, {
          directionDelta: directionDelta
        });
        onSwiped && onSwiped(e, position);
      } else {
        var _position = this.getEventData(e);

        onTap && onTap(e, _position);
      }

      this.state = Utils.getInitialState();
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      var target = this.props.target;

      if (target) {
        if (target === e.target) {
          this.handleSwipeStart(e);
        }
      } else {
        this.handleSwipeStart(e);
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {
      this.handleSwipeMove(e);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      var isSwiping = this.state.isSwiping;
      var target = this.props.target;

      if (target) {
        if (target === e.target || isSwiping) {
          this.handleSwipeEnd(e);
        }
      } else {
        this.handleSwipeEnd(e);
      }
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(e) {
      var isSwiping = this.state.isSwiping;

      if (isSwiping) {
        this.handleSwipeEnd(e);
      }
    }
  }], [{
    key: "isTouchEventsSupported",
    value: function isTouchEventsSupported() {
      return Utils.checkIsTouchEventsSupported();
    }
  }]);

  return VanillaSwipe;
}();

exports["default"] = VanillaSwipe;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/types/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/types/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TraceDirectionKey = exports.Direction = exports.Axis = void 0;
var TraceDirectionKey;
exports.TraceDirectionKey = TraceDirectionKey;

(function (TraceDirectionKey) {
  TraceDirectionKey["NEGATIVE"] = "NEGATIVE";
  TraceDirectionKey["POSITIVE"] = "POSITIVE";
  TraceDirectionKey["NONE"] = "NONE";
})(TraceDirectionKey || (exports.TraceDirectionKey = TraceDirectionKey = {}));

var Direction;
exports.Direction = Direction;

(function (Direction) {
  Direction["TOP"] = "TOP";
  Direction["LEFT"] = "LEFT";
  Direction["RIGHT"] = "RIGHT";
  Direction["BOTTOM"] = "BOTTOM";
  Direction["NONE"] = "NONE";
})(Direction || (exports.Direction = Direction = {}));

var Axis;
exports.Axis = Axis;

(function (Axis) {
  Axis["X"] = "x";
  Axis["Y"] = "y";
})(Axis || (exports.Axis = Axis = {}));

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateDirection.js":
/*!********************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateDirection.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calculateDirection = calculateDirection;

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

function calculateDirection(trace) {
  var direction;
  var negative = _types.TraceDirectionKey.NEGATIVE;
  var positive = _types.TraceDirectionKey.POSITIVE;
  var current = trace[trace.length - 1];
  var previous = trace[trace.length - 2] || 0;

  if (trace.every(function (i) {
    return i === 0;
  })) {
    return _types.TraceDirectionKey.NONE;
  }

  direction = current > previous ? positive : negative;

  if (current === 0) {
    direction = previous < 0 ? positive : negative;
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateDirectionDelta.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateDirectionDelta.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calculateDirectionDelta = calculateDirectionDelta;

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

var _common = __webpack_require__(/*! ./common */ "./node_modules/vanilla-swipe/lib/utils/common.js");

function calculateDirectionDelta(traceDirections) {
  var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var length = traceDirections.length;
  var i = length - 1;
  var direction = _types.TraceDirectionKey.NONE;

  for (; i >= 0; i--) {
    var current = traceDirections[i];
    var currentKey = (0, _common.getDirectionKey)(current);
    var currentValue = (0, _common.getDirectionValue)(current[currentKey]);
    var prev = traceDirections[i - 1] || {};
    var prevKey = (0, _common.getDirectionKey)(prev);
    var prevValue = (0, _common.getDirectionValue)(prev[prevKey]);
    var difference = (0, _common.getDifference)(currentValue, prevValue);

    if (difference >= delta) {
      direction = currentKey;
      break;
    } else {
      direction = prevKey;
    }
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateDuration.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateDuration.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calculateDuration = calculateDuration;

function calculateDuration() {
  var prevTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var nextTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return prevTime ? nextTime - prevTime : 0;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateMovingPosition.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateMovingPosition.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calculateMovingPosition = calculateMovingPosition;

function calculateMovingPosition(e) {
  if ('changedTouches' in e) {
    var touches = e.changedTouches && e.changedTouches[0];
    return {
      x: touches && touches.clientX,
      y: touches && touches.clientY
    };
  }

  return {
    x: e.clientX,
    y: e.clientY
  };
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculatePosition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculatePosition.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calculatePosition = calculatePosition;

var _updateTrace = __webpack_require__(/*! ./updateTrace */ "./node_modules/vanilla-swipe/lib/utils/updateTrace.js");

var _resolveDirection = __webpack_require__(/*! ./resolveDirection */ "./node_modules/vanilla-swipe/lib/utils/resolveDirection.js");

var _calculateDuration = __webpack_require__(/*! ./calculateDuration */ "./node_modules/vanilla-swipe/lib/utils/calculateDuration.js");

var _calculateVelocity = __webpack_require__(/*! ./calculateVelocity */ "./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js");

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

function calculatePosition(state, options) {
  var start = state.start,
      x = state.x,
      y = state.y,
      traceX = state.traceX,
      traceY = state.traceY;
  var rotatePosition = options.rotatePosition,
      directionDelta = options.directionDelta;
  var deltaX = rotatePosition.x - x;
  var deltaY = y - rotatePosition.y;
  var absX = Math.abs(deltaX);
  var absY = Math.abs(deltaY);
  (0, _updateTrace.updateTrace)(traceX, deltaX);
  (0, _updateTrace.updateTrace)(traceY, deltaY);
  var directionX = (0, _resolveDirection.resolveDirection)(traceX, _types.Axis.X, directionDelta);
  var directionY = (0, _resolveDirection.resolveDirection)(traceY, _types.Axis.Y, directionDelta);
  var duration = (0, _calculateDuration.calculateDuration)(start, Date.now());
  var velocity = (0, _calculateVelocity.calculateVelocity)(absX, absY, duration);
  return {
    absX: absX,
    absY: absY,
    deltaX: deltaX,
    deltaY: deltaY,
    directionX: directionX,
    directionY: directionY,
    duration: duration,
    positionX: rotatePosition.x,
    positionY: rotatePosition.y,
    velocity: velocity
  };
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateTraceDirections.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateTraceDirections.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calculateTraceDirections = calculateTraceDirections;

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function calculateTraceDirections() {
  var trace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ticks = [];
  var positive = _types.TraceDirectionKey.POSITIVE;
  var negative = _types.TraceDirectionKey.NEGATIVE;
  var i = 0;
  var tick = [];
  var direction = _types.TraceDirectionKey.NONE;

  for (; i < trace.length; i++) {
    var current = trace[i];
    var prev = trace[i - 1];

    if (tick.length) {
      var currentDirection = current > prev ? positive : negative;

      if (direction === _types.TraceDirectionKey.NONE) {
        direction = currentDirection;
      }

      if (currentDirection === direction) {
        tick.push(current);
      } else {
        ticks.push(_defineProperty({}, direction, tick.slice()));
        tick = [];
        tick.push(current);
        direction = currentDirection;
      }
    } else {
      if (current !== 0) {
        direction = current > 0 ? positive : negative;
      }

      tick.push(current);
    }
  }

  if (tick.length) {
    ticks.push(_defineProperty({}, direction, tick));
  }

  return ticks;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calculateVelocity = calculateVelocity;

function calculateVelocity(x, y, time) {
  var magnitude = Math.sqrt(x * x + y * y);
  return magnitude / (time || 1);
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/checkIsMoreThanSingleTouches.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/checkIsMoreThanSingleTouches.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkIsMoreThanSingleTouches = void 0;

var checkIsMoreThanSingleTouches = function checkIsMoreThanSingleTouches(e) {
  return Boolean(e.touches && e.touches.length > 1);
};

exports.checkIsMoreThanSingleTouches = checkIsMoreThanSingleTouches;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/checkIsPassiveSupported.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/checkIsPassiveSupported.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkIsPassiveSupported = checkIsPassiveSupported;
exports.noop = void 0;

var _createOptions = __webpack_require__(/*! ./createOptions */ "./node_modules/vanilla-swipe/lib/utils/createOptions.js");

function checkIsPassiveSupported(isPassiveSupported) {
  if (typeof isPassiveSupported === 'boolean') {
    return isPassiveSupported;
  }

  var proxy = {
    isPassiveSupported: isPassiveSupported
  };

  try {
    var options = (0, _createOptions.createOptions)(proxy);
    window.addEventListener('checkIsPassiveSupported', noop, options);
    window.removeEventListener('checkIsPassiveSupported', noop, options);
  } catch (err) {}

  return proxy.isPassiveSupported;
}

var noop = function noop() {};

exports.noop = noop;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/checkIsTouchEventsSupported.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/checkIsTouchEventsSupported.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checkIsTouchEventsSupported = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var checkIsTouchEventsSupported = function checkIsTouchEventsSupported() {
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && ('ontouchstart' in window || Boolean(window.navigator.maxTouchPoints));
};

exports.checkIsTouchEventsSupported = checkIsTouchEventsSupported;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/common.js":
/*!********************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/common.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resolveAxisDirection = exports.getDirectionValue = exports.getDirectionKey = exports.getDifference = void 0;

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

var getDirectionKey = function getDirectionKey() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = Object.keys(object).toString();

  switch (key) {
    case _types.TraceDirectionKey.POSITIVE:
      return _types.TraceDirectionKey.POSITIVE;

    case _types.TraceDirectionKey.NEGATIVE:
      return _types.TraceDirectionKey.NEGATIVE;

    default:
      return _types.TraceDirectionKey.NONE;
  }
};

exports.getDirectionKey = getDirectionKey;

var getDirectionValue = function getDirectionValue() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return values[values.length - 1] || 0;
};

exports.getDirectionValue = getDirectionValue;

var getDifference = function getDifference() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.abs(x - y);
};

exports.getDifference = getDifference;

var resolveAxisDirection = function resolveAxisDirection(axis, key) {
  var negative = _types.Direction.LEFT;
  var positive = _types.Direction.RIGHT;
  var direction = _types.Direction.NONE;

  if (axis === _types.Axis.Y) {
    negative = _types.Direction.BOTTOM;
    positive = _types.Direction.TOP;
  }

  if (key === _types.TraceDirectionKey.NEGATIVE) {
    direction = negative;
  }

  if (key === _types.TraceDirectionKey.POSITIVE) {
    direction = positive;
  }

  return direction;
};

exports.resolveAxisDirection = resolveAxisDirection;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/createOptions.js":
/*!***************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/createOptions.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createOptions = createOptions;

function createOptions() {
  var proxy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Object.defineProperty(proxy, 'passive', {
    get: function get() {
      this.isPassiveSupported = true;
      return true;
    },
    enumerable: true
  });
  return proxy;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/getInitialProps.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/getInitialProps.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getInitialProps = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getInitialProps = function getInitialProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    element: null,
    target: null,
    delta: 10,
    directionDelta: 0,
    rotationAngle: 0,
    mouseTrackingEnabled: false,
    touchTrackingEnabled: true,
    preventDefaultTouchmoveEvent: false,
    preventTrackingOnMouseleave: false
  }, props);
};

exports.getInitialProps = getInitialProps;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/getInitialState.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/getInitialState.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getInitialState = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getInitialState = function getInitialState() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    x: 0,
    y: 0,
    start: 0,
    isSwiping: false,
    traceX: [],
    traceY: []
  }, options);
};

exports.getInitialState = getInitialState;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/getOptions.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/getOptions.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getOptions = getOptions;

function getOptions() {
  var isPassiveSupported = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (isPassiveSupported) {
    return {
      passive: false
    };
  }

  return {};
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _calculateDirection = __webpack_require__(/*! ./calculateDirection */ "./node_modules/vanilla-swipe/lib/utils/calculateDirection.js");

Object.keys(_calculateDirection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _calculateDirection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateDirection[key];
    }
  });
});

var _calculateDirectionDelta = __webpack_require__(/*! ./calculateDirectionDelta */ "./node_modules/vanilla-swipe/lib/utils/calculateDirectionDelta.js");

Object.keys(_calculateDirectionDelta).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _calculateDirectionDelta[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateDirectionDelta[key];
    }
  });
});

var _calculateDuration = __webpack_require__(/*! ./calculateDuration */ "./node_modules/vanilla-swipe/lib/utils/calculateDuration.js");

Object.keys(_calculateDuration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _calculateDuration[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateDuration[key];
    }
  });
});

var _calculateMovingPosition = __webpack_require__(/*! ./calculateMovingPosition */ "./node_modules/vanilla-swipe/lib/utils/calculateMovingPosition.js");

Object.keys(_calculateMovingPosition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _calculateMovingPosition[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateMovingPosition[key];
    }
  });
});

var _calculatePosition = __webpack_require__(/*! ./calculatePosition */ "./node_modules/vanilla-swipe/lib/utils/calculatePosition.js");

Object.keys(_calculatePosition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _calculatePosition[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculatePosition[key];
    }
  });
});

var _calculateTraceDirections = __webpack_require__(/*! ./calculateTraceDirections */ "./node_modules/vanilla-swipe/lib/utils/calculateTraceDirections.js");

Object.keys(_calculateTraceDirections).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _calculateTraceDirections[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateTraceDirections[key];
    }
  });
});

var _calculateVelocity = __webpack_require__(/*! ./calculateVelocity */ "./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js");

Object.keys(_calculateVelocity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _calculateVelocity[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateVelocity[key];
    }
  });
});

var _checkIsMoreThanSingleTouches = __webpack_require__(/*! ./checkIsMoreThanSingleTouches */ "./node_modules/vanilla-swipe/lib/utils/checkIsMoreThanSingleTouches.js");

Object.keys(_checkIsMoreThanSingleTouches).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _checkIsMoreThanSingleTouches[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkIsMoreThanSingleTouches[key];
    }
  });
});

var _checkIsPassiveSupported = __webpack_require__(/*! ./checkIsPassiveSupported */ "./node_modules/vanilla-swipe/lib/utils/checkIsPassiveSupported.js");

Object.keys(_checkIsPassiveSupported).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _checkIsPassiveSupported[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkIsPassiveSupported[key];
    }
  });
});

var _checkIsTouchEventsSupported = __webpack_require__(/*! ./checkIsTouchEventsSupported */ "./node_modules/vanilla-swipe/lib/utils/checkIsTouchEventsSupported.js");

Object.keys(_checkIsTouchEventsSupported).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _checkIsTouchEventsSupported[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkIsTouchEventsSupported[key];
    }
  });
});

var _common = __webpack_require__(/*! ./common */ "./node_modules/vanilla-swipe/lib/utils/common.js");

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _common[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _common[key];
    }
  });
});

var _createOptions = __webpack_require__(/*! ./createOptions */ "./node_modules/vanilla-swipe/lib/utils/createOptions.js");

Object.keys(_createOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createOptions[key];
    }
  });
});

var _getInitialState = __webpack_require__(/*! ./getInitialState */ "./node_modules/vanilla-swipe/lib/utils/getInitialState.js");

Object.keys(_getInitialState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getInitialState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getInitialState[key];
    }
  });
});

var _getInitialProps = __webpack_require__(/*! ./getInitialProps */ "./node_modules/vanilla-swipe/lib/utils/getInitialProps.js");

Object.keys(_getInitialProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getInitialProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getInitialProps[key];
    }
  });
});

var _getOptions = __webpack_require__(/*! ./getOptions */ "./node_modules/vanilla-swipe/lib/utils/getOptions.js");

Object.keys(_getOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getOptions[key];
    }
  });
});

var _resolveDirection = __webpack_require__(/*! ./resolveDirection */ "./node_modules/vanilla-swipe/lib/utils/resolveDirection.js");

Object.keys(_resolveDirection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _resolveDirection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _resolveDirection[key];
    }
  });
});

var _rotateByAngle = __webpack_require__(/*! ./rotateByAngle */ "./node_modules/vanilla-swipe/lib/utils/rotateByAngle.js");

Object.keys(_rotateByAngle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _rotateByAngle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rotateByAngle[key];
    }
  });
});

var _updateTrace = __webpack_require__(/*! ./updateTrace */ "./node_modules/vanilla-swipe/lib/utils/updateTrace.js");

Object.keys(_updateTrace).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _updateTrace[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _updateTrace[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/resolveDirection.js":
/*!******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/resolveDirection.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resolveDirection = resolveDirection;

var _calculateDirection = __webpack_require__(/*! ./calculateDirection */ "./node_modules/vanilla-swipe/lib/utils/calculateDirection.js");

var _calculateTraceDirections = __webpack_require__(/*! ./calculateTraceDirections */ "./node_modules/vanilla-swipe/lib/utils/calculateTraceDirections.js");

var _calculateDirectionDelta = __webpack_require__(/*! ./calculateDirectionDelta */ "./node_modules/vanilla-swipe/lib/utils/calculateDirectionDelta.js");

var _common = __webpack_require__(/*! ./common */ "./node_modules/vanilla-swipe/lib/utils/common.js");

var _types = __webpack_require__(/*! ../types */ "./node_modules/vanilla-swipe/lib/types/index.js");

function resolveDirection(trace) {
  var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _types.Axis.X;
  var directionDelta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (directionDelta) {
    var directions = (0, _calculateTraceDirections.calculateTraceDirections)(trace);

    var _direction = (0, _calculateDirectionDelta.calculateDirectionDelta)(directions, directionDelta);

    return (0, _common.resolveAxisDirection)(axis, _direction);
  }

  var direction = (0, _calculateDirection.calculateDirection)(trace);
  return (0, _common.resolveAxisDirection)(axis, direction);
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/rotateByAngle.js":
/*!***************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/rotateByAngle.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.rotateByAngle = rotateByAngle;

function rotateByAngle(position) {
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (angle === 0) {
    return position;
  }

  var x = position.x,
      y = position.y;
  var angleInRadians = Math.PI / 180 * angle;
  var rotatedX = x * Math.cos(angleInRadians) + y * Math.sin(angleInRadians);
  var rotatedY = y * Math.cos(angleInRadians) - x * Math.sin(angleInRadians);
  return {
    x: rotatedX,
    y: rotatedY
  };
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/updateTrace.js":
/*!*************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/updateTrace.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.updateTrace = updateTrace;

function updateTrace(trace, value) {
  var last = trace[trace.length - 1];

  if (last !== value) {
    trace.push(value);
  }

  return trace;
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

module.exports = window["ReactDOM"];

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

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"version":"1.0.0","name":"makersolucoes/slider","title":"Slider","category":"ms_blocks","description":"Exibe um componente de Slider","icon":"minus","keywords":["icon"],"attributes":{"images":{"type":"array","default":[]},"animationDuration":{"type":"number","default":400},"animationType":{"type":"string","default":"slide"},"autoPlay":{"type":"boolean","default":true},"autoPlayInterval":{"type":"number","default":3000},"infinite":{"type":"boolean","default":true},"responsiveMobile":{"type":"number","default":1},"responsiveTablet":{"type":"number","default":1},"responsiveDesktop":{"type":"number","default":1},"buttonsStyle":{"type":"string","default":""}},"providesContext":{"contextLabelChecked":"checked"},"supports":{"html":false,"alignWide":true,"color":{"text":false,"background":true,"gradients":true},"width":true},"textdomain":"boilerplate","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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