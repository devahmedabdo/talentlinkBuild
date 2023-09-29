(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 92449:
/*!**********************************************************!*\
  !*** ./src/app/@pages/animations/dropdown-animations.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropDownAnimation": () => (/* binding */ dropDownAnimation),
/* harmony export */   "scaleInAnimation": () => (/* binding */ scaleInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);

const dropDownAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('dropDownAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('bottom', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => bottom', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('top', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => top', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 100%'
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('250ms 100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }))])
]);
const scaleInAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scaleInAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        height: '0',
        opacity: '0',
        transform: 'scale(0.7)'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        display: 'block',
        opacity: '1',
        transform: 'scale(1)'
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('close => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('140ms ease-in')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('open => close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('140ms ease-out'))
]);


/***/ }),

/***/ 42320:
/*!******************************************************!*\
  !*** ./src/app/@pages/animations/fade-animations.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeAnimation": () => (/* binding */ fadeAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);

const fadeAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0.4, 0.0, 1, 1)'))
]);


/***/ }),

/***/ 86476:
/*!*****************************************************!*\
  !*** ./src/app/@pages/animations/tag-animations.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tagAnimation": () => (/* binding */ tagAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);

const tagAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('tagAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1)' })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale(0)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms linear')]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale(0)' })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms linear')])
]);


/***/ }),

/***/ 95003:
/*!**********************************************************************!*\
  !*** ./src/app/@pages/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["*"];
class BreadcrumbComponent {
    constructor() { }
    ngOnInit() { }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["pg-breadcrumb"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });


/***/ }),

/***/ 8915:
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/collapse/collapse.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgCollapseComponent": () => (/* binding */ pgCollapseComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _collapseset_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapseset.component */ 14774);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




const _c0 = function (a0) { return { "collapsed": a0 }; };
function pgCollapseComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 4)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, !ctx_r0._active));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.Title, " ");
} }
function pgCollapseComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 1);
} }
const _c1 = ["*", [["", "collapse-title", ""]]];
const _c2 = function (a1, a2) { return { "show": true, "active": a1, "inactive": a2 }; };
const _c3 = ["*", "[collapse-title]"];
class pgCollapseComponent {
    constructor(_collapseSet, _elementRef) {
        this._collapseSet = _collapseSet;
        this._elementRef = _elementRef;
        this._disabled = false;
        this._active = false;
        this._el = this._elementRef.nativeElement;
        this._collapseSet.addTab(this);
    }
    set Disabled(value) {
        this._disabled = value;
    }
    get Disabled() {
        return this._disabled;
    }
    set Active(value) {
        const active = value;
        if (this._active === active) {
            return;
        }
        if (!this.Disabled) {
            this._active = active;
        }
    }
    get Active() {
        return this._active;
    }
    clickHeader($event) {
        this.Active = !this.Active;
        /** trigger host collapseSet click event */
        this._collapseSet.pgClick(this);
    }
}
pgCollapseComponent.ɵfac = function pgCollapseComponent_Factory(t) { return new (t || pgCollapseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_collapseset_component__WEBPACK_IMPORTED_MODULE_0__.pgCollapsesetComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
pgCollapseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: pgCollapseComponent, selectors: [["pg-collapse"]], hostVars: 8, hostBindings: function pgCollapseComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("card", true)("card-default", true)("m-b-0", true)("disabled", ctx.Disabled);
    } }, inputs: { Title: "Title", Disabled: "Disabled", Active: "Active" }, ngContentSelectors: _c3, decls: 6, vars: 8, consts: [["role", "tab", 1, "card-header", 3, "click"], [3, "ngIf"], [1, "collapse", 3, "ngClass"], [1, "card-body"], [1, "card-title"], ["href", "javascript:;", 3, "ngClass"]], template: function pgCollapseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function pgCollapseComponent_Template_div_click_0_listener($event) { return ctx.clickHeader($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, pgCollapseComponent_ng_template_1_Template, 3, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, pgCollapseComponent_ng_template_2_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx._active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c2, ctx._active, !ctx._active))("@collapseState", ctx._active ? "active" : "inactive");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('collapseState', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                    opacity: '0',
                    height: 0
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                    opacity: '1',
                    height: '*'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('inactive => active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('125ms ease-in')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('active => inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('125ms ease-out'))
            ])
        ] } });


/***/ }),

/***/ 29917:
/*!***************************************************************!*\
  !*** ./src/app/@pages/components/collapse/collapse.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PG_COLLAPSE_DIRECTIVES": () => (/* binding */ PG_COLLAPSE_DIRECTIVES),
/* harmony export */   "pgCollapseModule": () => (/* binding */ pgCollapseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _collapse_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse.component */ 8915);
/* harmony import */ var _collapseset_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collapseset.component */ 14774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




const PG_COLLAPSE_DIRECTIVES = [_collapseset_component__WEBPACK_IMPORTED_MODULE_1__.pgCollapsesetComponent, _collapse_component__WEBPACK_IMPORTED_MODULE_0__.pgCollapseComponent];
class pgCollapseModule {
    static forRoot() {
        return {
            ngModule: pgCollapseModule
        };
    }
}
pgCollapseModule.ɵfac = function pgCollapseModule_Factory(t) { return new (t || pgCollapseModule)(); };
pgCollapseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: pgCollapseModule });
pgCollapseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](pgCollapseModule, { declarations: [_collapseset_component__WEBPACK_IMPORTED_MODULE_1__.pgCollapsesetComponent, _collapse_component__WEBPACK_IMPORTED_MODULE_0__.pgCollapseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_collapseset_component__WEBPACK_IMPORTED_MODULE_1__.pgCollapsesetComponent, _collapse_component__WEBPACK_IMPORTED_MODULE_0__.pgCollapseComponent] }); })();


/***/ }),

/***/ 14774:
/*!*********************************************************************!*\
  !*** ./src/app/@pages/components/collapse/collapseset.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgCollapsesetComponent": () => (/* binding */ pgCollapsesetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = ["*"];
class pgCollapsesetComponent {
    constructor() {
        this._accordion = false;
        this._horizontal = true;
        this.panels = [];
    }
    set Accordion(value) {
        this._accordion = value;
    }
    get Accordion() {
        return this._accordion;
    }
    set Horizontal(value) {
        this._horizontal = value;
    }
    get Horizontal() {
        return this._horizontal;
    }
    pgClick(collapse) {
        if (this.Accordion) {
            this.panels.map((item, index) => {
                const curIndex = this.panels.indexOf(collapse);
                if (index !== curIndex) {
                    item.Active = false;
                }
            });
        }
    }
    addTab(collapse) {
        this.panels.push(collapse);
    }
}
pgCollapsesetComponent.ɵfac = function pgCollapsesetComponent_Factory(t) { return new (t || pgCollapsesetComponent)(); };
pgCollapsesetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: pgCollapsesetComponent, selectors: [["pg-collapseset"]], inputs: { Accordion: "Accordion", Horizontal: "Horizontal" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "card-group"]], template: function pgCollapsesetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("horizontal", ctx.Horizontal);
    } }, encapsulation: 2 });


/***/ }),

/***/ 62637:
/*!********************************************************************!*\
  !*** ./src/app/@pages/components/container/container.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerComponent": () => (/* binding */ ContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function ContainerComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainerComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container ", ctx_r0._extraHorizontalClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function ContainerComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ContainerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainerComponent_ng_template_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("container-fluid container-fixed-lg ", ctx_r2._extraClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function ContainerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
class ContainerComponent {
    constructor() {
        this._enableHorizontalContainer = false;
        this._extraClass = '';
        this._extraHorizontalClass = '';
    }
    set extraClass(value) {
        this._extraClass = value;
    }
    set extraHorizontalClass(value) {
        this._extraHorizontalClass = value;
    }
    ngOnInit() {
        this._enableHorizontalContainer = pg.isHorizontalLayout;
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
ContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["pg-container"]], inputs: { extraClass: "extraClass", extraHorizontalClass: "extraHorizontalClass" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[3, "class", 4, "ngIf", "ngIfElse"], ["determineBlock", ""], ["contentTpl", ""], [4, "ngTemplateOutlet"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContainerComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContainerComponent_ng_template_1_Template, 2, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContainerComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._enableHorizontalContainer)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 61780:
/*!*************************************************************************!*\
  !*** ./src/app/@pages/components/container/page-container.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageContainer": () => (/* binding */ pageContainer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toggler.service */ 76226);


const _c0 = ["*"];
class pageContainer {
    constructor(toggler) {
        this.toggler = toggler;
    }
    triggerMouseOverCall() {
        this.toggler.triggerPageContainerHover(true);
    }
}
pageContainer.ɵfac = function pageContainer_Factory(t) { return new (t || pageContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toggler_service__WEBPACK_IMPORTED_MODULE_0__.pagesToggleService)); };
pageContainer.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: pageContainer, selectors: [["page-container"]], hostAttrs: [1, "page-container"], hostBindings: function pageContainer_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function pageContainer_mouseenter_HostBindingHandler($event) { return ctx.triggerMouseOverCall($event); })("tap", function pageContainer_tap_HostBindingHandler($event) { return ctx.triggerMouseOverCall($event); });
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function pageContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, styles: ["page-container {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtY29udGFpbmVyLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZyb250JTIwZW5kXFxQcm9qZWN0c1xcdGFsZW50bGlua1xcc3JjXFxhcHBcXEBwYWdlc1xcY29tcG9uZW50c1xcY29udGFpbmVyXFxwYWdlLWNvbnRhaW5lci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InBhZ2UtY29udGFpbmVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwicGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 26917:
/*!*************************************************************************!*\
  !*** ./src/app/@pages/components/forms/form-group-default.directive.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormGroupDefaultDirective": () => (/* binding */ FormGroupDefaultDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FormGroupDefaultDirective {
    constructor(El, renderer) {
        this.El = El;
        this.renderer = renderer;
        this._isActive = false;
    }
    onclick() {
        if (this._isActive) {
            return;
        }
        this._isActive = true;
        let inputEl = this.El.nativeElement.querySelector('input');
        if (inputEl) {
            inputEl.focus();
        }
    }
    ngOnInit() {
        let inputEl = this.El.nativeElement.querySelector('input');
        if (inputEl) {
            this.renderer.listen(inputEl, 'focus', event => {
                this._isActive = true;
            });
            this.renderer.listen(inputEl, 'focusout', event => {
                if (!inputEl.value) {
                    this._isActive = false;
                }
            });
        }
    }
}
FormGroupDefaultDirective.ɵfac = function FormGroupDefaultDirective_Factory(t) { return new (t || FormGroupDefaultDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
FormGroupDefaultDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FormGroupDefaultDirective, selectors: [["", "pgFormGroupDefault", ""]], hostVars: 2, hostBindings: function FormGroupDefaultDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormGroupDefaultDirective_click_HostBindingHandler() { return ctx.onclick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx._isActive);
    } } });


/***/ }),

/***/ 89438:
/*!********************************************************************************!*\
  !*** ./src/app/@pages/components/horizontal-menu/horizontal-menu.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": () => (/* binding */ HorizontalMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toggler.service */ 76226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




const _c0 = ["mobileSidebarFooter"];
const _c1 = ["menuItemsList"];
const _c2 = ["menuWrapper"];
function HorizontalMenuComponent_li_6_a_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.label);
} }
function HorizontalMenuComponent_li_6_a_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "more_horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HorizontalMenuComponent_li_6_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 22);
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", item_r5.mToggle === "open");
} }
function HorizontalMenuComponent_li_6_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HorizontalMenuComponent_li_6_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.toggleLink($event, item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalMenuComponent_li_6_a_1_ng_template_2_Template, 1, 1, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HorizontalMenuComponent_li_6_a_1_i_3_Template, 2, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HorizontalMenuComponent_li_6_a_1_span_4_Template, 1, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.type != "more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.submenu && !item_r5.type);
} }
const _c3 = function (a0) { return [a0]; };
function HorizontalMenuComponent_li_6_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, item_r5.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.label);
} }
function HorizontalMenuComponent_li_6_ng_template_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", item_r5.externalLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("target", item_r5.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.label);
} }
function HorizontalMenuComponent_li_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HorizontalMenuComponent_li_6_ng_template_2_a_0_Template, 3, 4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_6_ng_template_2_a_1_Template, 3, 3, "a", 24);
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.externalLink);
} }
function HorizontalMenuComponent_li_6_ul_4_li_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 22);
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", item_r5.mToggle === "open");
} }
function HorizontalMenuComponent_li_6_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HorizontalMenuComponent_li_6_ul_4_li_1_a_1_span_3_Template, 1, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r25.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.submenu);
} }
function HorizontalMenuComponent_li_6_ul_4_li_1_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const child_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, child_r25.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r25.label);
} }
function HorizontalMenuComponent_li_6_ul_4_li_1_ng_template_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const child_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", child_r25.externalLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("target", child_r25.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](child_r25.label);
} }
function HorizontalMenuComponent_li_6_ul_4_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HorizontalMenuComponent_li_6_ul_4_li_1_ng_template_2_a_0_Template, 3, 4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_6_ul_4_li_1_ng_template_2_a_1_Template, 3, 3, "a", 24);
} if (rf & 2) {
    const child_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r25.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r25.externalLink);
} }
function HorizontalMenuComponent_li_6_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const lvl2_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, lvl2_r40.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lvl2_r40.label);
} }
function HorizontalMenuComponent_li_6_ul_4_li_1_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const lvl2_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c3, lvl2_r40.externalLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("target", lvl2_r40.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.label);
} }
function HorizontalMenuComponent_li_6_ul_4_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_6_ul_4_li_1_ul_4_li_1_a_1_Template, 3, 4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalMenuComponent_li_6_ul_4_li_1_ul_4_li_1_a_2_Template, 3, 5, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lvl2_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lvl2_r40.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lvl2_r40.externalLink);
} }
function HorizontalMenuComponent_li_6_ul_4_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_6_ul_4_li_1_ul_4_li_1_Template, 3, 2, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", child_r25.submenu);
} }
function HorizontalMenuComponent_li_6_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_6_ul_4_li_1_a_1_Template, 4, 2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalMenuComponent_li_6_ul_4_li_1_ng_template_2_Template, 2, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HorizontalMenuComponent_li_6_ul_4_li_1_ul_4_Template, 2, 1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r25 = ctx.$implicit;
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r25.submenu)("ngIfElse", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", child_r25.submenu);
} }
function HorizontalMenuComponent_li_6_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_6_ul_4_li_1_Template, 5, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r5.submenu);
} }
const _c4 = function () { return ["active"]; };
const _c5 = function () { return { exact: true }; };
function HorizontalMenuComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalMenuComponent_li_6_a_1_Template, 5, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalMenuComponent_li_6_ng_template_2_Template, 2, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HorizontalMenuComponent_li_6_ul_4_Template, 2, 1, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", item_r5.open || item_r5.mToggle === "open")("opening", item_r5.opening)("more", item_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.submenu)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", item_r5.ghost);
} }
function HorizontalMenuComponent_li_9_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 22);
} }
function HorizontalMenuComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 30)(2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HorizontalMenuComponent_li_9_span_4_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r48.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r48.submenu);
} }
function HorizontalMenuComponent_ng_template_10_Template(rf, ctx) { }
class HorizontalMenuComponent {
    constructor(toggler) {
        this.toggler = toggler;
        this.menuItems = [];
        this._renduerMenuItems = [];
        this._hideExtra = 0;
        this._autoHideItems = true;
        this.currentItem = null;
        this._horizontalMobileMenu = false;
        // Simple hack flag to check if its wrapped
        this._wrapped = false;
        this._service = this.toggler.mobileHorizontaMenu.subscribe(state => {
            this._horizontalMobileMenu = state;
            this.closeHorizontalMenu();
        });
    }
    set HideExtra(value) {
        this._hideExtra = value;
    }
    set AutoHideItems(value) {
        this._autoHideItems = value;
    }
    set Items(value) {
        this.menuItems = value;
        this._renduerMenuItems = this.menuItems.slice();
    }
    ngAfterContentInit() { }
    ngAfterViewInit() {
        setTimeout(() => {
            if (pg.isVisibleSm() || pg.isVisibleXs()) {
                return false;
            }
            this._onContentChanges();
        });
    }
    ngOnDestroy() {
        this._service.unsubscribe();
    }
    closeHorizontalMenu() {
        if (!this.currentItem) {
            return;
        }
        this.currentItem['open'] = false;
        this.currentItem['opening'] = false;
        this.currentItem['ghost'] = {
            visibility: 'hidden'
        };
    }
    toggleLink(event, item) {
        // Mobile
        if (pg.isVisibleSm() || pg.isVisibleXs()) {
            if (this.currentItem && this.currentItem !== item) {
                this.currentItem['mToggle'] = 'close';
            }
            this.currentItem = item;
            item.mToggle = item.mToggle === 'close' ? 'open' : 'close';
            return false;
        }
        // Desktop
        if (this.currentItem && this.currentItem !== item) {
            this.currentItem['open'] = false;
            this.currentItem['opening'] = false;
            this.currentItem['ghost'] = {
                visibility: 'hidden'
            };
        }
        this.currentItem = item;
        const elParent = event.currentTarget.parentNode;
        if (item['open']) {
            const el = elParent.querySelector('ul');
            const rect = el.getBoundingClientRect();
            item.ghost = {
                width: rect.width + 'px',
                height: 0,
                zIndex: 'auto'
            };
            item['open'] = false;
            setTimeout(() => {
                item['opening'] = false;
            }, 240);
        }
        else {
            item['open'] = true;
            setTimeout(() => {
                const el = elParent.querySelector('ul');
                const rect = el.getBoundingClientRect();
                item.ghost = {
                    height: '0',
                    width: rect.width + 'px',
                    zIndex: 'auto'
                };
                item.ghost = {
                    width: rect.width + 'px',
                    height: rect.height + 'px',
                    zIndex: 'auto'
                };
                setTimeout(() => {
                    item['opening'] = true;
                }, 140);
            }, 0);
        }
    }
    onResize(event) {
        clearTimeout(this.resizeId);
        this.resizeId = setTimeout(() => {
            if (pg.isVisibleSm() || pg.isVisibleXs()) {
                this._renduerMenuItems = this.menuItems.slice();
                return false;
            }
            this._onContentChanges();
        }, 140);
    }
    _onContentChanges() {
        // Cache User Items
        //console.log(this._autoHideItems);
        if (this._autoHideItems === false) {
            return;
        }
        this._renduerMenuItems = this.menuItems.slice();
        //console.log(this._renduerMenuItems);
        const children = this._menuItemsList.nativeElement.childNodes;
        let totalChildrenWidth = 0;
        let liCount = 0;
        for (let i = 0; i < children.length; i++) {
            if (children[i]['nodeName'] === 'LI') {
                totalChildrenWidth = totalChildrenWidth + children[i].offsetWidth;
                if (totalChildrenWidth > this._menuWrapper.nativeElement.offsetWidth) {
                    this.wrap(liCount);
                    break;
                }
                liCount++;
            }
        }
        // @TODO:Will Force Wrap
        if (!this._wrapped) {
            this.wrap(liCount);
        }
    }
    wrap(startIndex) {
        this._wrapped = true;
        startIndex--;
        startIndex = startIndex - this._hideExtra;
        const temp = {
            type: 'more',
            toggle: 'close',
            submenu: []
        };
        for (let i = startIndex; i < this._renduerMenuItems.length; i++) {
            temp['submenu'].push(this._renduerMenuItems[i]);
        }
        this._renduerMenuItems.splice(startIndex, this._renduerMenuItems.length);
        this._renduerMenuItems.push(temp);
    }
    toggleHorizontalMenu() {
        if (this._horizontalMobileMenu) {
            this._horizontalMobileMenu = false;
        }
        else {
            this._horizontalMobileMenu = true;
        }
        this.toggler.toggleMobileHorizontalMenu(this._horizontalMobileMenu);
    }
}
HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) { return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toggler_service__WEBPACK_IMPORTED_MODULE_0__.pagesToggleService)); };
HorizontalMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HorizontalMenuComponent, selectors: [["pg-horizontal-menu"]], contentQueries: function HorizontalMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mobileSidebarFooter = _t.first);
    } }, viewQuery: function HorizontalMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._menuItemsList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._menuWrapper = _t.first);
    } }, hostBindings: function HorizontalMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function HorizontalMenuComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { HideExtra: "HideExtra", AutoHideItems: "AutoHideItems", Items: "Items" }, decls: 13, vars: 9, consts: [[1, "menu-bar", "header-sm-height"], ["menuWrapper", ""], ["href", "javascript:void(0)", 1, "btn-link", "header-icon", "toggle-sidebar", "d-lg-none", 3, "click"], [1, "pg-icon"], [3, "cdkObserveContent"], [3, "open", "opening", "more", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "ghost-ul", "d-none", "d-lg-block"], ["menuItemsList", ""], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], [1, "horizontal-menu-backdrop-dekstop", 3, "click"], [1, "horizontal-menu-backdrop", 3, "click"], [3, "routerLinkActive", "routerLinkActiveOptions"], ["href", "javascript:void(0);", 3, "click", 4, "ngIf", "ngIfElse"], ["singleLink", ""], [4, "ngIf"], [1, "ghost-nav-dropdown", 3, "ngStyle"], ["href", "javascript:void(0);", 3, "click"], [1, "title"], [3, "ngIf"], ["class", "pg-icon", 4, "ngIf"], ["class", " arrow", 3, "open", 4, "ngIf"], [1, "arrow"], [3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"], [3, "routerLink"], [3, "href"], ["href", "javascript:void(0);", 4, "ngIf", "ngIfElse"], ["singleLinkChild", ""], ["class", "sub-menu", 4, "ngIf"], ["href", "javascript:void(0);"], [1, "sub-menu"], ["class", " arrow", 4, "ngIf"]], template: function HorizontalMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HorizontalMenuComponent_Template_a_click_2_listener() { return ctx.toggleHorizontalMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function HorizontalMenuComponent_Template_ul_cdkObserveContent_5_listener() { return ctx._onContentChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HorizontalMenuComponent_li_6_Template, 6, 14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HorizontalMenuComponent_li_9_Template, 5, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HorizontalMenuComponent_ng_template_10_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HorizontalMenuComponent_Template_div_click_11_listener() { return ctx.closeHorizontalMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HorizontalMenuComponent_Template_div_click_12_listener() { return ctx.toggleHorizontalMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx._horizontalMobileMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._renduerMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.mobileSidebarFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", (ctx.currentItem == null ? null : ctx.currentItem.open) ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx._horizontalMobileMenu ? "block" : "none");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet], styles: [".horizontal-app-menu .menu-bar > ul {\n  flex-flow: row;\n}\n.horizontal-app-menu .ghost-nav-dropdown {\n  height: 0;\n}\n.horizontal-app-menu .ghost-ul {\n  visibility: hidden;\n  position: absolute;\n  pointer-events: none;\n}\n.horizontal-app-menu .horizontal-menu-backdrop-dekstop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcZnJvbnQlMjBlbmRcXFByb2plY3RzXFx0YWxlbnRsaW5rXFxzcmNcXGFwcFxcQHBhZ2VzXFxjb21wb25lbnRzXFxob3Jpem9udGFsLW1lbnVcXGhvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBQ0ksU0FBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDQVIiLCJmaWxlIjoiaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b250YWwtYXBwLW1lbnUge1xyXG4gICAgLm1lbnUtYmFyID4gdWx7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIH1cclxuICAgIC5naG9zdC1uYXYtZHJvcGRvd257XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmdob3N0LXVse1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaG9yaXpvbnRhbC1tZW51LWJhY2tkcm9wLWRla3N0b3B7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDowO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbn0iLCIuaG9yaXpvbnRhbC1hcHAtbWVudSAubWVudS1iYXIgPiB1bCB7XG4gIGZsZXgtZmxvdzogcm93O1xufVxuLmhvcml6b250YWwtYXBwLW1lbnUgLmdob3N0LW5hdi1kcm9wZG93biB7XG4gIGhlaWdodDogMDtcbn1cbi5ob3Jpem9udGFsLWFwcC1tZW51IC5naG9zdC11bCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5ob3Jpem9udGFsLWFwcC1tZW51IC5ob3Jpem9udGFsLW1lbnUtYmFja2Ryb3AtZGVrc3RvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 60793:
/*!******************************************************************************!*\
  !*** ./src/app/@pages/components/list-view/list-item/list-item.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemComponent": () => (/* binding */ ListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list-view-container/list-view-container.component */ 6448);



const _c0 = ["ItemHeading"];
function ListItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
} }
const _c1 = ["*"];
class ListItemComponent {
    constructor(pgItemView) {
        this.pgItemView = pgItemView;
    }
    get content() {
        return this._content;
    }
    ngOnInit() {
        this.pgItemView._items.push(this);
    }
    ngOnDestroy() {
        this.pgItemView._items.splice(this.pgItemView._items.indexOf(this), 1);
    }
}
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_0__.ListViewContainerComponent)); };
ListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["pg-list-item"]], contentQueries: function ListItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._itemHeading = _t.first);
    } }, viewQuery: function ListItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
    } }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ListItemComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6448:
/*!**************************************************************************************************!*\
  !*** ./src/app/@pages/components/list-view/list-view-container/list-view-container.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListViewContainerComponent": () => (/* binding */ ListViewContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/observers */ 81665);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 59403);




const _c0 = ["itemListWrapper"];
function ListViewContainerComponent_ng_template_2_Template(rf, ctx) { }
function ListViewContainerComponent_div_5_ng_template_2_Template(rf, ctx) { }
function ListViewContainerComponent_div_5_ng_template_4_Template(rf, ctx) { }
function ListViewContainerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListViewContainerComponent_div_5_ng_template_2_Template, 0, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListViewContainerComponent_div_5_ng_template_4_Template, 0, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const elem_i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("list-view-animated", ctx_r2.elems[elem_i_r4] == null ? null : ctx_r2.elems[elem_i_r4].animated)("list-view-animated", item_r3.animated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", item_r3._itemHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", item_r3._content);
} }
class ListViewContainerComponent {
    constructor(el) {
        this.el = el;
        this._items = [];
        this.elems = [];
        this.fakeHeaderHidden = false;
        this.topClassAnimated = false;
        this.config = {};
        this.isPerfectScrollbarDisabled = false;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        setTimeout(() => {
            this.togglePerfectScrollbar();
        });
    }
    onResize() {
        this.togglePerfectScrollbar();
    }
    togglePerfectScrollbar() {
        this.isPerfectScrollbarDisabled = window.innerWidth < 1025;
    }
    cacheElements() {
        var rootRect = this.el.nativeElement.getBoundingClientRect();
        var els = this.el.nativeElement.querySelectorAll('.list-view-group-container');
        for (var i = 0; i < els.length; i++) {
            var rect = els[i].getBoundingClientRect();
            var offsetTop = rect.top - rootRect.top;
            var headerElement = els[i].querySelector('.list-view-group-header');
            this.elems.push({
                listHeight: rect.height,
                headerHeight: headerElement.offsetHeight,
                listOffset: offsetTop,
                listBottom: rect.height + offsetTop,
                animated: false
            });
        }
        this.computeHeader();
    }
    computeHeader() {
        let currentTop = this.itemListWrapper.nativeElement.scrollTop;
        let offscreenElement, topElementBottom, topIndex = 0;
        let i = 0;
        if (this.elems.length === 0) {
            return;
        }
        while (this.elems[i].listOffset - currentTop <= 0) {
            this.topElement = this.elems[i];
            topIndex = i;
            topElementBottom = this.topElement.listBottom - currentTop;
            if (topElementBottom < -this.topElement.headerHeight) {
                offscreenElement = this.topElement;
            }
            i++;
            if (i >= this.elems.length) {
                break;
            }
        }
        if (topElementBottom < this.topElement.headerHeight && topElementBottom > 0) {
            this.fakeHeaderHidden = true;
            this.topElement.animated = true;
        }
        else {
            this.fakeHeaderHidden = false;
            if (this.topElement) {
                this.topElement.animated = false;
            }
        }
        if (this.topElement && this._items[topIndex]) {
            this.topHeader = this._items[topIndex]._itemHeading;
        }
    }
}
ListViewContainerComponent.ɵfac = function ListViewContainerComponent_Factory(t) { return new (t || ListViewContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
ListViewContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListViewContainerComponent, selectors: [["pg-list-view-container"]], viewQuery: function ListViewContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.itemListWrapper = _t.first);
    } }, hostBindings: function ListViewContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ListViewContainerComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 6, consts: [[1, "list-view", "boreded", "no-top-border", "scrollable", "full-height", "relative", 3, "cdkObserveContent"], [1, "list-view-fake-header"], [3, "ngTemplateOutlet"], [1, "scroll-wrapper", "list-view-wrapper", 3, "perfectScrollbar", "disabled", "scroll"], ["itemListWrapper", ""], ["class", "list-view-group-container", 3, "list-view-animated", 4, "ngFor", "ngForOf"], [1, "list-view-group-container"], [1, "list-view-group-header", "text-uppercase"]], template: function ListViewContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function ListViewContainerComponent_Template_div_cdkObserveContent_0_listener() { return ctx.cacheElements(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListViewContainerComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ListViewContainerComponent_Template_div_scroll_3_listener() { return ctx.computeHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListViewContainerComponent_div_5_Template, 5, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("list-view-hidden", ctx.fakeHeaderHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.topHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("perfectScrollbar", ctx.config)("disabled", ctx.isPerfectScrollbarDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._items);
    } }, directives: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__.CdkObserveContent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXZpZXctY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 93830:
/*!*****************************************************************!*\
  !*** ./src/app/@pages/components/list-view/list-view.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgListViewModule": () => (/* binding */ pgListViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/observers */ 81665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class pgListViewModule {
}
pgListViewModule.ɵfac = function pgListViewModule_Factory(t) { return new (t || pgListViewModule)(); };
pgListViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: pgListViewModule });
pgListViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__.ObserversModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](pgListViewModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_2__.ObserversModule] }); })();


/***/ }),

/***/ 47183:
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/menu/menu-alt.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuAltComponent": () => (/* binding */ MenuAltComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component */ 34317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _menu_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-icon.component */ 23790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);






function MenuAltComponent_li_1_a_1_pg_menu_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pg-menu-icon", 10);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("IconType", item_r1.iconType)("IconName", item_r1.iconName);
} }
function MenuAltComponent_li_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 11);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", item_r1.toggle === "open");
} }
function MenuAltComponent_li_1_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.badgeCount);
} }
const _c0 = function (a0, a1) { return { "name_ar": a0, "name_en": a1 }; };
function MenuAltComponent_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuAltComponent_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.toggleNavigationSub($event, item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_a_1_pg_menu_icon_1_Template, 1, 2, "pg-menu-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuAltComponent_li_1_a_1_span_3_Template, 1, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuAltComponent_li_1_a_1_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("detailed", item_r1.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.iconType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c0, item_r1.labelAR, item_r1.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.badgeCount);
} }
function MenuAltComponent_li_1_ng_template_2_a_0_pg_menu_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pg-menu-icon", 10);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("IconType", item_r1.iconType)("IconName", item_r1.iconName);
} }
function MenuAltComponent_li_1_ng_template_2_a_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 11);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", item_r1.toggle === "open");
} }
function MenuAltComponent_li_1_ng_template_2_a_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.badgeCount);
} }
const _c1 = function (a0) { return [a0]; };
function MenuAltComponent_li_1_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_ng_template_2_a_0_pg_menu_icon_1_Template, 1, 2, "pg-menu-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuAltComponent_li_1_ng_template_2_a_0_span_3_Template, 1, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuAltComponent_li_1_ng_template_2_a_0_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("detailed", item_r1.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", "text-complete bold")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c1, item_r1.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.iconType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, item_r1.labelAR, item_r1.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.badgeCount);
} }
function MenuAltComponent_li_1_ng_template_2_a_1_pg_menu_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pg-menu-icon", 10);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("IconType", item_r1.iconType)("IconName", item_r1.iconName);
} }
function MenuAltComponent_li_1_ng_template_2_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 11);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", item_r1.toggle === "open");
} }
function MenuAltComponent_li_1_ng_template_2_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.badgeCount);
} }
function MenuAltComponent_li_1_ng_template_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_ng_template_2_a_1_pg_menu_icon_1_Template, 1, 2, "pg-menu-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuAltComponent_li_1_ng_template_2_a_1_span_3_Template, 1, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuAltComponent_li_1_ng_template_2_a_1_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("detailed", item_r1.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", item_r1.externalLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", item_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.iconType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c0, item_r1.labelAR, item_r1.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.badgeCount);
} }
function MenuAltComponent_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MenuAltComponent_li_1_ng_template_2_a_0_Template, 5, 14, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_ng_template_2_a_1_Template, 5, 12, "a", 14);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.externalLink);
} }
function MenuAltComponent_li_1_ul_4_li_1_a_1_pg_menu_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pg-menu-icon", 10);
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("IconType", child_r34.iconType)("IconName", child_r34.iconName);
} }
function MenuAltComponent_li_1_ul_4_li_1_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 11);
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", child_r34.toggle === "open");
} }
function MenuAltComponent_li_1_ul_4_li_1_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r34.badgeCount);
} }
function MenuAltComponent_li_1_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuAltComponent_li_1_ul_4_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r44.toggleNavigationSub($event, item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_ul_4_li_1_a_1_pg_menu_icon_1_Template, 1, 2, "pg-menu-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuAltComponent_li_1_ul_4_li_1_a_1_span_3_Template, 1, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuAltComponent_li_1_ul_4_li_1_a_1_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.iconType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, child_r34.labelAR, child_r34.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.badgeCount);
} }
function MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_0_pg_menu_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pg-menu-icon", 10);
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("IconType", child_r34.iconType)("IconName", child_r34.iconName);
} }
function MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 11);
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", child_r34.toggle === "open");
} }
function MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r34.badgeCount);
} }
function MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_0_pg_menu_icon_1_Template, 1, 2, "pg-menu-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_0_span_3_Template, 1, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_0_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, child_r34.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.iconType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c0, child_r34.labelAR, child_r34.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.badgeCount);
} }
function MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_1_pg_menu_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pg-menu-icon", 10);
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("IconType", child_r34.iconType)("IconName", child_r34.iconName);
} }
function MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 11);
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", child_r34.toggle === "open");
} }
function MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r34.badgeCount);
} }
function MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_1_pg_menu_icon_1_Template, 1, 2, "pg-menu-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_1_span_3_Template, 1, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_1_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", child_r34.externalLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", item_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.iconType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c0, child_r34.labelAR, child_r34.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.badgeCount);
} }
function MenuAltComponent_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_0_Template, 5, 11, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_ul_4_li_1_ng_template_2_a_1_Template, 5, 10, "a", 21);
} if (rf & 2) {
    const child_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.externalLink);
} }
function MenuAltComponent_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_ul_4_li_1_a_1_Template, 5, 8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuAltComponent_li_1_ul_4_li_1_ng_template_2_Template, 2, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r34 = ctx.$implicit;
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", child_r34.toggle === "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r34.submenu)("ngIfElse", _r36);
} }
function MenuAltComponent_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_ul_4_li_1_Template, 4, 4, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@toggleHeight", item_r1.toggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r1.submenu);
} }
function MenuAltComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_a_1_Template, 5, 10, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuAltComponent_li_1_ng_template_2_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuAltComponent_li_1_ul_4_Template, 2, 2, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", item_r1.toggle === "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.submenu)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.submenu);
} }
class MenuAltComponent extends _menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent {
    ngOnInit() {
        // console.log('menu called')
    }
}
MenuAltComponent.ɵfac = /*@__PURE__*/ function () { let ɵMenuAltComponent_BaseFactory; return function MenuAltComponent_Factory(t) { return (ɵMenuAltComponent_BaseFactory || (ɵMenuAltComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MenuAltComponent)))(t || MenuAltComponent); }; }();
MenuAltComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MenuAltComponent, selectors: [["pg-menu-items-alt"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "main-menu"], [3, "open", 4, "ngFor", "ngForOf"], ["href", "javascript:;", 3, "detailed", "click", 4, "ngIf", "ngIfElse"], ["singleLink", ""], ["class", "sub-menu", 4, "ngIf"], ["href", "javascript:;", 3, "click"], [3, "IconType", "IconName", 4, "ngIf"], [1, "title", 3, "translate", "translateParams"], ["class", " arrow", 3, "open", 4, "ngIf"], ["class", "badge pull-right", 4, "ngIf"], [3, "IconType", "IconName"], [1, "arrow"], [1, "badge", "pull-right"], [3, "routerLinkActive", "routerLink", "detailed", 4, "ngIf"], [3, "href", "detailed", 4, "ngIf"], [3, "routerLinkActive", "routerLink"], [3, "href"], [1, "sub-menu"], ["href", "javascript:;", 3, "click", 4, "ngIf", "ngIfElse"], ["singleLinkChild", ""], [3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"], [3, "routerLink"]], template: function MenuAltComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuAltComponent_li_1_Template, 5, 5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _menu_icon_component__WEBPACK_IMPORTED_MODULE_1__.MenuIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LWFsdC5zY3NzIn0= */"], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('toggleHeight', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    height: '0',
                    overflow: 'hidden',
                    marginBottom: '0',
                    display: 'none'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    display: 'block',
                    height: '*',
                    marginBottom: '10px',
                    overflow: 'hidden'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('close => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('140ms ease-in')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('open => close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('140ms ease-out'))
            ])
        ] } });


/***/ }),

/***/ 23790:
/*!***************************************************************!*\
  !*** ./src/app/@pages/components/menu/menu-icon.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuIconComponent": () => (/* binding */ MenuIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function MenuIconComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/fonts/feather/feather-sprite.svg#", ctx_r0.IconName, "", null, "xlink");
} }
function MenuIconComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/fonts/feather/tabler-sprite.svg#", ctx_r1.IconName, "", null, "xlink");
} }
function MenuIconComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/fonts/feather/fa-regular.svg#", ctx_r2.IconName, "", null, "xlink");
} }
function MenuIconComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/fonts/feather/all.svg#", ctx_r3.IconName, "", null, "xlink");
} }
function MenuIconComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/fonts/feather/boxicons.svg#", ctx_r4.IconName, "", null, "xlink");
} }
function MenuIconComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.IconName, " ");
} }
function MenuIconComponent__svg_svg_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("href", "assets/icons/hugeicons.svg#", ctx_r6.IconName, "", null, "xlink");
} }
function MenuIconComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r7.IconType, "-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.IconName);
} }
class MenuIconComponent {
    constructor() {
        this._classMap = 'icon-thumbnail ';
    }
    set ExtraClass(value) {
        if (value !== undefined) {
            this._classMap = this._classMap + value;
        }
    }
    ngOnInit() { }
}
MenuIconComponent.ɵfac = function MenuIconComponent_Factory(t) { return new (t || MenuIconComponent)(); };
MenuIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuIconComponent, selectors: [["pg-menu-icon"]], hostVars: 2, hostBindings: function MenuIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx._classMap);
    } }, inputs: { IconType: "IconType", IconName: "IconName", ExtraClass: "ExtraClass" }, decls: 9, vars: 8, consts: [[3, "ngSwitch"], ["class", "feather", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngSwitchCase"], ["class", "feather", "stroke", "currentColor", "stroke-width", "2", 4, "ngSwitchCase"], ["class", "feather", "stroke", "currentColor", "stroke-width", "0.1", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "feather", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngSwitchCase"], [3, "class", 4, "ngSwitchDefault"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather"], ["stroke", "currentColor", "stroke-width", "2", 1, "feather"], ["stroke", "currentColor", "stroke-width", "0.1", 1, "feather"], ["width", "16", "height", "16"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "feather"], ["width", "24", "height", "24"]], template: function MenuIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuIconComponent__svg_svg_1_Template, 2, 1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuIconComponent__svg_svg_2_Template, 2, 1, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuIconComponent__svg_svg_3_Template, 2, 1, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuIconComponent__svg_svg_4_Template, 2, 1, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuIconComponent__svg_svg_5_Template, 2, 1, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuIconComponent_ng_container_6_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuIconComponent__svg_svg_7_Template, 2, 1, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MenuIconComponent_i_8_Template, 2, 4, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.IconType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "fi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "fa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "cg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "bi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "custom");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchDefault], styles: [".feather[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtaWNvbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcZnJvbnQlMjBlbmRcXFByb2plY3RzXFx0YWxlbnRsaW5rXFxzcmNcXGFwcFxcQHBhZ2VzXFxjb21wb25lbnRzXFxtZW51XFxtZW51LWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6Im1lbnUtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0aGVye1xyXG4gICAgd2lkdGg6MjRweDtcclxuICAgIGhlaWdodDoyNHB4XHJcbn0iLCIuZmVhdGhlciB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59Il19 */"] });


/***/ }),

/***/ 34317:
/*!**********************************************************!*\
  !*** ./src/app/@pages/components/menu/menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 59403);
/* harmony import */ var _menu_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-icon.component */ 23790);






function MenuComponent_div_0_li_3_pg_menu_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "pg-menu-icon", 11);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("IconType", item_r3.iconType)("IconName", item_r3.iconName)("ExtraClass", item_r3.thumbNailClass);
} }
function MenuComponent_div_0_li_3_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.details);
} }
const _c0 = function () { return ["active"]; };
const _c1 = function (a0, a1) { return { "name_ar": a0, "name_en": a1 }; };
function MenuComponent_div_0_li_3_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_0_li_3_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.toggleNavigationSub($event, item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_div_0_li_3_a_3_span_2_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("detailed", item_r3.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c1, item_r3.labelAR, item_r3.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.details);
} }
const _c2 = function () { return ["open"]; };
function MenuComponent_div_0_li_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 16);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", item_r3.toggle === "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c2));
} }
function MenuComponent_div_0_li_3_ng_template_5_a_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.details);
} }
const _c3 = function (a0) { return [a0]; };
function MenuComponent_div_0_li_3_ng_template_5_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_div_0_li_3_ng_template_5_a_0_span_2_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("detailed", item_r3.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c3, item_r3.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c1, item_r3.labelAR, item_r3.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.details);
} }
function MenuComponent_div_0_li_3_ng_template_5_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.details);
} }
function MenuComponent_div_0_li_3_ng_template_5_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_div_0_li_3_ng_template_5_a_1_span_2_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("detailed", item_r3.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", item_r3.externalLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", item_r3.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c1, item_r3.labelAR, item_r3.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.details);
} }
function MenuComponent_div_0_li_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MenuComponent_div_0_li_3_ng_template_5_a_0_Template, 3, 11, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_div_0_li_3_ng_template_5_a_1_Template, 3, 10, "a", 18);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.externalLink);
} }
function MenuComponent_div_0_li_3_ul_7_li_1_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 28);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", item_r3.toggle === "open");
} }
function MenuComponent_div_0_li_3_ul_7_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_div_0_li_3_ul_7_li_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r35.toggleNavigationSub($event, item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_div_0_li_3_ul_7_li_1_a_1_span_2_Template, 1, 2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c1, child_r29.labelAR, child_r29.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r29.submenu);
} }
function MenuComponent_div_0_li_3_ul_7_li_1_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c3, child_r29.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c1, child_r29.labelAR, child_r29.labelEN));
} }
function MenuComponent_div_0_li_3_ul_7_li_1_ng_template_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", child_r29.externalLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", item_r3.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c1, child_r29.labelAR, child_r29.labelEN));
} }
function MenuComponent_div_0_li_3_ul_7_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MenuComponent_div_0_li_3_ul_7_li_1_ng_template_2_a_0_Template, 2, 8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_div_0_li_3_ul_7_li_1_ng_template_2_a_1_Template, 2, 7, "a", 30);
} if (rf & 2) {
    const child_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r29.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r29.externalLink);
} }
const _c4 = function () { return ["active", "open"]; };
function MenuComponent_div_0_li_3_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_div_0_li_3_ul_7_li_1_a_1_Template, 3, 6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_div_0_li_3_ul_7_li_1_ng_template_2_Template, 2, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r29 = ctx.$implicit;
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", child_r29.toggle === "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r29.submenu)("ngIfElse", _r31);
} }
function MenuComponent_div_0_li_3_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_div_0_li_3_ul_7_li_1_Template, 4, 6, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@toggleHeight", item_r3.toggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r3.submenu);
} }
function MenuComponent_div_0_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_div_0_li_3_pg_menu_icon_2_Template, 1, 3, "pg-menu-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_div_0_li_3_a_3_Template, 3, 10, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_div_0_li_3_span_4_Template, 1, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MenuComponent_div_0_li_3_ng_template_5_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MenuComponent_div_0_li_3_ul_7_Template, 2, 2, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", item_r3.toggle === "open")("active", item_r3.toggle === "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.iconType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.submenu)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.submenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.submenu);
} }
function MenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_div_0_li_3_Template, 8, 11, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translate", "product_name")("translateParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c1, menuItem_r1.labelAR, menuItem_r1.labelEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", ctx_r0.config)("disabled", ctx_r0.isPerfectScrollbarDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", menuItem_r1.items);
} }
class MenuComponent {
    constructor(router) {
        this.router = router;
        this.menuItems = [];
        this.currentItem = null;
        this.isPerfectScrollbarDisabled = false;
        this.config = {};
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.togglePerfectScrollbar();
        });
    }
    onResize() {
        this.togglePerfectScrollbar();
    }
    togglePerfectScrollbar() {
        this.isPerfectScrollbarDisabled = window.innerWidth < 1025;
    }
    set Items(value) {
        this.menuItems = value;
        this.checkRouter(this.router.url);
    }
    toggleNavigationSub(event, item) {
        if (item.submenu) {
            event.preventDefault();
            if (this.currentItem && this.currentItem !== item) {
                this.currentItem['toggle'] = 'close';
            }
            this.menuItems.forEach(elem => {
                elem.toggle = 'close';
            });
            this.currentItem = item;
            item.toggle = item.toggle === 'close' ? 'open' : 'close';
        }
    }
    toggleNavigationSubManualy(item) {
        if (item.submenu) {
            if (this.currentItem && this.currentItem !== item) {
                this.currentItem['toggle'] = 'close';
            }
            this.currentItem = item;
            item.toggle = item.toggle === 'close' ? 'open' : 'close';
        }
    }
    checkRouter(router) {
        this.menuItems.forEach(elem1 => {
            elem1.items.forEach(elem => {
                if (elem.hasOwnProperty('submenu')) {
                    const found = elem.submenu.find(x => x.routerLink == router.split("?")[0]);
                    if (found) {
                        setTimeout(() => {
                            this.toggleNavigationSubManualy(elem);
                        }, 20);
                        return true;
                    }
                }
                //elem.toggle = 'close';
            });
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["pg-menu-items"]], hostBindings: function MenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function MenuComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, inputs: { Items: "Items" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "menu-title", "m-t-20", 3, "translate", "translateParams"], [1, "menu-items", 3, "perfectScrollbar", "disabled"], [3, "routerLinkActive", "open", "active", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], [1, "main-menu-item"], [3, "IconType", "IconName", "ExtraClass", 4, "ngIf"], [3, "routerLinkActive", "detailed", "click", 4, "ngIf", "ngIfElse"], ["class", "arrow", 3, "routerLinkActive", "open", 4, "ngIf"], ["singleLink", ""], ["class", "sub-menu", 4, "ngIf"], [3, "IconType", "IconName", "ExtraClass"], [3, "routerLinkActive", "click"], [1, "title", "pointer", 3, "translate", "translateParams"], ["class", "details", 4, "ngIf"], [1, "details"], [1, "arrow", 3, "routerLinkActive"], [3, "routerLink", "detailed", 4, "ngIf"], [3, "href", "detailed", 4, "ngIf"], [3, "routerLink"], [1, "title", 3, "translate", "translateParams"], [3, "href"], [1, "sub-menu"], [3, "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["href", "javascript:;", 3, "click", 4, "ngIf", "ngIfElse"], ["singleLinkChild", ""], ["href", "javascript:;", 3, "click"], ["class", " arrow", 3, "open", 4, "ngIf"], [1, "arrow"], [3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MenuComponent_div_0_Template, 4, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _menu_icon_component__WEBPACK_IMPORTED_MODULE_1__.MenuIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".page-sidebar .sidebar-menu .menu-items > li ul.sub-menu {\n  margin: 0;\n  padding: 0;\n}\n.page-sidebar .sidebar-menu .menu-items > li ul.sub-menu > :first-child {\n  margin-top: 19px;\n}\n.page-sidebar .sidebar-menu .menu-items > li ul.sub-menu > :last-child {\n  margin-bottom: 10px;\n}\n.page-sidebar .sidebar-menu .menu-items > li ul.sub-menu {\n  height: 0;\n  overflow: hidden;\n}\n.page-sidebar .sidebar-menu .menu-items > li.open ul.sub-menu {\n  height: auto;\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZyb250JTIwZW5kXFxQcm9qZWN0c1xcdGFsZW50bGlua1xcc3JjXFxhcHBcXEBwYWdlc1xcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQVI7QURDUTtFQUNJLGdCQUFBO0FDQ1o7QURDUTtFQUNJLG1CQUFBO0FDQ1o7QURJUTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FES1k7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIWiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IC5tZW51LWl0ZW1ze1xyXG4gICAgJiA+IGxpIHVsLnN1Yi1tZW51e1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICYgPiA6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgPiA6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IGxpIHtcclxuICAgICAgICAmIHVsLnN1Yi1tZW51e1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLm9wZW4geyBcclxuICAgICAgICAgICAgJiB1bC5zdWItbWVudXtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgLm1lbnUtaXRlbXMgPiBsaSB1bC5zdWItbWVudSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAubWVudS1pdGVtcyA+IGxpIHVsLnN1Yi1tZW51ID4gOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMTlweDtcbn1cbi5wYWdlLXNpZGViYXIgLnNpZGViYXItbWVudSAubWVudS1pdGVtcyA+IGxpIHVsLnN1Yi1tZW51ID4gOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnBhZ2Utc2lkZWJhciAuc2lkZWJhci1tZW51IC5tZW51LWl0ZW1zID4gbGkgdWwuc3ViLW1lbnUge1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucGFnZS1zaWRlYmFyIC5zaWRlYmFyLW1lbnUgLm1lbnUtaXRlbXMgPiBsaS5vcGVuIHVsLnN1Yi1tZW51IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn0iXX0= */"], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('toggleHeight', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    height: '0',
                    overflow: 'hidden'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
                    height: '*',
                    overflow: '*'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('close => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('140ms ease-in')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('open => close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('140ms ease-out'))
            ])
        ] } });


/***/ }),

/***/ 83815:
/*!*************************************************************!*\
  !*** ./src/app/@pages/components/message/message-config.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_MESSAGE_CONFIG": () => (/* binding */ _MESSAGE_CONFIG),
/* harmony export */   "_MESSAGE_DEFAULT_CONFIG": () => (/* binding */ _MESSAGE_DEFAULT_CONFIG),
/* harmony export */   "_MESSAGE_DEFAULT_CONFIG_PROVIDER": () => (/* binding */ _MESSAGE_DEFAULT_CONFIG_PROVIDER)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _MESSAGE_DEFAULT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('_MESSAGE_DEFAULT_CONFIG');
const _MESSAGE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('_MESSAGE_CONFIG');
const _MESSAGE_DEFAULT_CONFIG_PROVIDER = {
    provide: _MESSAGE_DEFAULT_CONFIG,
    useValue: {
        Position: 'top-right',
        Style: 'simple',
        Duration: 1500,
        Animate: true,
        PauseOnHover: true,
        MaxStack: 7
    }
};


/***/ }),

/***/ 86713:
/*!**************************************************************************!*\
  !*** ./src/app/@pages/components/message/message-container.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageContainerComponent": () => (/* binding */ MessageContainerComponent)
/* harmony export */ });
/* harmony import */ var _message_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-config */ 83815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


function MessageContainerComponent_div_0_pg_message_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pg-message", 3);
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("Message", message_r2)("Index", i_r3);
} }
function MessageContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MessageContainerComponent_div_0_pg_message_1_Template, 1, 2, "pg-message", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", ctx_r0.messages.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-position", ctx_r0.currentMessage.options.Position);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.messages);
} }
class MessageContainerComponent {
    constructor(defaultConfig, config) {
        this.messages = [];
        this.currentMessage = null;
        this.config = { ...defaultConfig, ...config };
        //console.log(this.currentMessage);
    }
    // Create a new message
    createMessage(message) {
        let el = window.document.querySelector('.header ');
        if (el) {
            let rect = el.getBoundingClientRect();
            this.style = {
                marginTop: rect.height + 'px'
            };
        }
        this.currentMessage = message;
        if (this.messages.length >= this.config.MaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        this.messages.push(message);
    }
    // Remove a message by messageId
    removeMessage(messageId) {
        this.messages.some((message, index) => {
            if (message.messageId === messageId) {
                this.messages.splice(index, 1);
                return true;
            }
        });
    }
    // Remove all messages
    removeMessageAll() {
        this.messages = [];
    }
    // Merge default options and cutom message options
    _mergeMessageOptions(options) {
        const defaultOptions = {
            Duration: this.config.Duration,
            Animate: this.config.Animate,
            PauseOnHover: this.config.PauseOnHover
        };
        return { ...defaultOptions, ...options };
    }
}
MessageContainerComponent.ɵfac = function MessageContainerComponent_Factory(t) { return new (t || MessageContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_message_config__WEBPACK_IMPORTED_MODULE_0__._MESSAGE_DEFAULT_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_message_config__WEBPACK_IMPORTED_MODULE_0__._MESSAGE_CONFIG, 8)); };
MessageContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageContainerComponent, selectors: [["pg-message-container"]], decls: 1, vars: 1, consts: [["class", "pgn-wrapper", 3, "hide", "ngStyle", 4, "ngIf"], [1, "pgn-wrapper", 3, "ngStyle"], [3, "Message", "Index", 4, "ngFor", "ngForOf"], [3, "Message", "Index"]], template: function MessageContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MessageContainerComponent_div_0_Template, 2, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentMessage);
    } }, encapsulation: 2 });


/***/ }),

/***/ 49367:
/*!****************************************************************!*\
  !*** ./src/app/@pages/components/message/message.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageComponent": () => (/* binding */ MessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _message_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-container.component */ 86713);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




function MessageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessageComponent_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onClickClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("container", ctx_r0._enableHorizontalContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.Message.content);
} }
function MessageComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 7)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9)(5, "div")(6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessageComponent_ng_template_3_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.onClickClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r7._options.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7._options.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.Message.content);
} }
function MessageComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MessageComponent_ng_template_3_div_0_Template, 15, 3, "div", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2._options.Style === "circle")("ngIfElse", _r3);
} }
function MessageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessageComponent_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onClickClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.Message.content);
} }
class MessageComponent {
    constructor(_messageContainer) {
        this._messageContainer = _messageContainer;
        this._eraseTimer = null;
    }
    ngOnInit() {
        this._options = this.Message.options;
        if (this._options.Animate) {
            this.Message.state = 'enter';
        }
        this._autoErase = this._options.Duration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
        this._enableHorizontalContainer = pg.isHorizontalLayout;
    }
    ngOnDestroy() {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    }
    onEnter() {
        if (this._autoErase && this._options.PauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    }
    onLeave() {
        if (this._autoErase && this._options.PauseOnHover) {
            this._startEraseTimeout();
        }
    }
    onClickClose() {
        this._destroy();
    }
    // Remove self
    _destroy() {
        if (this._options.Animate) {
            this.Message.state = 'leave';
            setTimeout(() => this._messageContainer.removeMessage(this.Message.messageId), 200);
        }
        else {
            this._messageContainer.removeMessage(this.Message.messageId);
        }
    }
    _initErase() {
        this._eraseTTL = this._options.Duration;
        this._eraseTimingStart = Date.now();
    }
    _updateTTL() {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    }
    _startEraseTimeout() {
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout(); // To prevent calling _startEraseTimeout() more times to create more timer
            this._eraseTimer = window.setTimeout(() => this._destroy(), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    }
    _clearEraseTimeout() {
        if (this._eraseTimer !== null) {
            window.clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_message_container_component__WEBPACK_IMPORTED_MODULE_0__.MessageContainerComponent)); };
MessageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["pg-message"]], inputs: { Message: "Message", Index: "Index" }, decls: 7, vars: 8, consts: [[3, "container", 4, "ngIf", "ngIfElse"], ["determineBlock", ""], ["standardBlock", ""], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], [4, "ngIf", "ngIfElse"], [1, "pgn-thumbnail"], ["alt", "", "height", "40", "width", "40", 2, "display", "inline-block", 3, "src"], [1, "pgn-message"], [1, "bold"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MessageComponent_div_2_Template, 9, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MessageComponent_ng_template_3_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MessageComponent_ng_template_5_Template, 8, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("pgn push-on-sidebar-open pgn-", ctx._options.Style, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("alert alert-", ctx.Message.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._options.Style === "bar")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('enterLeave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 1, transform: 'translateY(0)' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 0, transform: 'translateY(-50%)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('100ms linear')]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 0, transform: 'translateY(-50%)' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('* => leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 1, transform: 'translateY(0)' }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('100ms linear')])
            ])
        ] } });


/***/ }),

/***/ 45073:
/*!*************************************************************!*\
  !*** ./src/app/@pages/components/message/message.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageModule": () => (/* binding */ MessageModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 1274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _message_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-config */ 83815);
/* harmony import */ var _message_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-container.component */ 86713);
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.component */ 49367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







const providers = [_message_config__WEBPACK_IMPORTED_MODULE_0__._MESSAGE_DEFAULT_CONFIG_PROVIDER];
class MessageModule {
}
MessageModule.ɵfac = function MessageModule_Factory(t) { return new (t || MessageModule)(); };
MessageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MessageModule });
MessageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: providers, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MessageModule, { declarations: [_message_container_component__WEBPACK_IMPORTED_MODULE_1__.MessageContainerComponent, _message_component__WEBPACK_IMPORTED_MODULE_2__.MessageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetComponentScope"](_message_container_component__WEBPACK_IMPORTED_MODULE_1__.MessageContainerComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _message_component__WEBPACK_IMPORTED_MODULE_2__.MessageComponent], []);


/***/ }),

/***/ 24474:
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/message/message.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBaseService": () => (/* binding */ MessageBaseService),
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 83820);
/* harmony import */ var _message_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-container.component */ 86713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ 1274);




// TODO: remove MessageData generic type as it has no contributon in typing
class MessageBaseService {
    constructor(overlay, containerClass, _idPrefix = '') {
        this._idPrefix = _idPrefix;
        this._counter = 0; // Id counter for messages
        //Wait till wrapper gets init parameters
        setTimeout(() => {
            this._container = overlay.create().attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.ComponentPortal(containerClass)).instance;
        }, 100);
    }
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    createMessage(message, options) {
        // TODO: spread on literal has been disallow on latest proposal
        const resultMessage = {
            ...message,
            ...{
                messageId: this._generateMessageId(),
                options,
                createdAt: new Date()
            }
        };
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    _generateMessageId() {
        return this._idPrefix + this._counter++;
    }
}
class MessageService extends MessageBaseService {
    constructor(overlay) {
        super(overlay, _message_container_component__WEBPACK_IMPORTED_MODULE_0__.MessageContainerComponent, 'message-');
    }
    // Shortcut methods
    success(content, options) {
        return this.createMessage({ type: 'success', content }, options);
    }
    error(content, options) {
        return this.createMessage({ type: 'error', content }, options);
    }
    info(content, options) {
        return this.createMessage({ type: 'info', content }, options);
    }
    warning(content, options) {
        return this.createMessage({ type: 'warning', content }, options);
    }
    create(type, content, options) {
        return this.createMessage({ type, content }, options);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay)); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac });


/***/ }),

/***/ 90937:
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/parallax/parallax.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallaxDirective": () => (/* binding */ ParallaxDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ParallaxDirective {
    constructor(parallaxEl, renderer) {
        this.parallaxEl = parallaxEl;
        this.renderer = renderer;
        this.scrollElement = 'window';
        this.scrollPos = 0;
        this.coverPhotoSpeend = 0.3;
        this.contentSpeed = 0.17;
        this.windowSize = window.innerWidth;
    }
    ngOnInit() {
        this.nativeElement = this.parallaxEl.nativeElement;
        this.registerPageContainerScroller();
    }
    registerPageContainerScroller() {
        if (!pg.isHorizontalLayout) {
            return;
        }
        let pageContainer = document.querySelector('.page-container');
        if (pageContainer) {
            this.scrollElement = pageContainer;
            this.renderer.listen(pageContainer, 'scroll', event => {
                this.animate();
            });
        }
    }
    onResize() {
        this.windowSize = window.innerWidth;
    }
    onWindowScroll() {
        this.animate();
    }
    animate() {
        // Disable on mobile;
        if ((this.windowSize = window.innerWidth < 1025)) {
            return;
        }
        let rect = this.nativeElement.getBoundingClientRect();
        let opacityKeyFrame = (rect.width * 50) / 100;
        let direction = 'translateX';
        if (this.scrollElement === 'window') {
            this.scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        }
        else {
            this.scrollPos = this.scrollElement.scrollTop;
        }
        direction = 'translateY';
        let styleString = direction + '(' + this.scrollPos * this.coverPhotoSpeend + 'px)';
        this.nativeElement.style.transform = styleString;
        // Legacy Browsers
        this.nativeElement.style.webkitTransform = styleString;
        this.nativeElement.style.mozTransform = styleString;
        this.nativeElement.style.msTransform = styleString;
        if (this.scrollPos > opacityKeyFrame) {
            this.nativeElement.style.opacity = 1 - this.scrollPos / 1200;
        }
        else {
            this.nativeElement.style.opacity = 1;
        }
    }
}
ParallaxDirective.ɵfac = function ParallaxDirective_Factory(t) { return new (t || ParallaxDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ParallaxDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ParallaxDirective, selectors: [["", "pg-parallax", ""]], hostBindings: function ParallaxDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ParallaxDirective_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scroll", function ParallaxDirective_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } } });


/***/ }),

/***/ 32559:
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/progress/progress.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressComponent": () => (/* binding */ ProgressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function ProgressComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress-small", !ctx_r3.thick);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("progress-bar-", ctx_r3.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress-bar-indeterminate", ctx_r3.indeterminate);
} }
const _c0 = function (a0) { return { "width": a0 }; };
function ProgressComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress-small", !ctx_r5.thick);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("progress-bar progress-bar-", ctx_r5.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r5.value + "%"));
} }
function ProgressComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressComponent_div_0_div_1_Template, 3, 7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgressComponent_div_0_ng_template_2_Template, 2, 8, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.indeterminate)("ngIfElse", _r4);
} }
function ProgressComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
const _c1 = function () { return { "clip": "rect(auto, auto, auto, auto)" }; };
const _c2 = function (a0) { return { "transform": a0 }; };
function ProgressComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r8._value2 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r8._value2 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, "rotate(" + ctx_r8.value + "deg)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r8._value2 === true ? "rotate(180deg)" : "rotate(" + ctx_r8.value + "deg)"));
} }
function ProgressComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressComponent_ng_template_1_div_1_Template, 1, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgressComponent_ng_template_1_ng_template_2_Template, 4, 8, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("progress-circle-", ctx_r2.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("progress-circle-indeterminate", ctx_r2.indeterminate)("progress-circle", !ctx_r2.indeterminate)("progress-circle-thick", ctx_r2.thick);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.indeterminate)("ngIfElse", _r7);
} }
class ProgressComponent {
    constructor() { }
    set value(value) {
        if (this.type === 'circle') {
            this._value = (value / 100) * 360;
            if (this.value >= 50) {
                this._value2 = true;
            }
        }
        else {
            this._value = value;
        }
    }
    get value() {
        return this._value;
    }
    get value2() {
        return this._value2;
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["pg-progress"]], inputs: { type: "type", color: "color", thick: "thick", indeterminate: "indeterminate", value: "value" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["circleBlock", ""], ["determineBarBlock", ""], [1, "progress"], [3, "ngStyle"], ["determineBlock", ""], [1, "pie", 3, "ngStyle"], [1, "left-side", "half-circle", 3, "ngStyle"], [1, "right-side", "half-circle", 3, "ngStyle"], [1, "shadow"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressComponent_ng_template_1_Template, 4, 11, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "bar")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 35417:
/*!***************************************************************!*\
  !*** ./src/app/@pages/components/progress/progress.config.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressConfig": () => (/* binding */ ProgressConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ProgressConfig {
    constructor() {
        this.color = 'primary';
        this.thickness = 1;
    }
}
ProgressConfig.ɵfac = function ProgressConfig_Factory(t) { return new (t || ProgressConfig)(); };
ProgressConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProgressConfig, factory: ProgressConfig.ɵfac });


/***/ }),

/***/ 76187:
/*!***************************************************************!*\
  !*** ./src/app/@pages/components/progress/progress.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressModule": () => (/* binding */ ProgressModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress.component */ 32559);
/* harmony import */ var _progress_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress.config */ 35417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ProgressModule {
    static forRoot() {
        return { ngModule: ProgressModule, providers: [_progress_config__WEBPACK_IMPORTED_MODULE_1__.ProgressConfig] };
    }
}
ProgressModule.ɵfac = function ProgressModule_Factory(t) { return new (t || ProgressModule)(); };
ProgressModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProgressModule });
ProgressModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProgressModule, { declarations: [_progress_component__WEBPACK_IMPORTED_MODULE_0__.ProgressComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_progress_component__WEBPACK_IMPORTED_MODULE_0__.ProgressComponent] }); })();


/***/ }),

/***/ 92764:
/*!********************************************************!*\
  !*** ./src/app/@pages/components/quickview/message.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatHistory": () => (/* binding */ chatHistory),
/* harmony export */   "chatMessage": () => (/* binding */ chatMessage)
/* harmony export */ });
//Sample Note Class
class chatMessage {
}
class chatHistory {
}


/***/ }),

/***/ 3317:
/*!*****************************************************!*\
  !*** ./src/app/@pages/components/quickview/note.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Note": () => (/* binding */ Note)
/* harmony export */ });
//Sample Note Class
class Note {
}


/***/ }),

/***/ 73828:
/*!********************************************************************!*\
  !*** ./src/app/@pages/components/quickview/quickview.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickviewComponent": () => (/* binding */ QuickviewComponent)
/* harmony export */ });
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ 3317);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ 92764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _quickview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickview.service */ 87244);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toggler.service */ 76226);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 62916);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 59403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-quill */ 41588);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _view_view_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/view.directive */ 41930);
/* harmony import */ var _list_view_list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../list-view/list-view-container/list-view-container.component */ 6448);
/* harmony import */ var _list_view_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../list-view/list-item/list-item.component */ 60793);














const _c0 = ["chatHistoryWrapper"];
const _c1 = function () { return { "display": "block" }; };
function QuickviewComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QuickviewComponent_li_21_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const note_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r7.onSelectNote(note_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 70)(2, "div", 71)(3, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function QuickviewComponent_li_21_Template_input_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const note_r6 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.onCheck($event, note_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 75)(7, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "a", 77)(11, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const note_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", ctx_r0.deleteNoteMode && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "qncheckbox", note_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("for", "qncheckbox", note_r6.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", note_r6.notes, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 5, note_r6.date, "dd/MM/yy"));
} }
function QuickviewComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 1, ctx_r1.selectedNote.date, "dd LLLL yyyy"));
} }
function QuickviewComponent_pg_list_item_142_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
} if (rf & 2) {
    const group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", group_r10.group, " ");
} }
function QuickviewComponent_pg_list_item_142_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 82)(1, "a", 83)(2, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 86)(5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const user_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", user_r15.img, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](user_r15.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](user_r15.lastMessage);
} }
function QuickviewComponent_pg_list_item_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "pg-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, QuickviewComponent_pg_list_item_142_ng_template_1_Template, 1, 1, "ng-template", null, 80, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, QuickviewComponent_pg_list_item_142_li_3_Template, 9, 3, "li", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", group_r10.users);
} }
function QuickviewComponent_div_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "a", 88)(2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a", 90)(9, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "more_horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.chatHistory.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.chatHistory.status);
} }
function QuickviewComponent_div_148_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx_r17.chatHistory.img, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
} }
function QuickviewComponent_div_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, QuickviewComponent_div_148_div_1_Template, 2, 1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const message_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", message_r16.from != "me");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("from-me", message_r16.from == "me")("from-them", message_r16.from != "me");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", message_r16.message, " ");
} }
class QuickviewComponent {
    constructor(_service, http, toggler) {
        this._service = _service;
        this.http = http;
        this.toggler = toggler;
        this.subscriptions = [];
        this.isOpen = false;
        this.noteList = [];
        this.noteDeleteList = [];
        this.noteText = '';
        //List for deleting or CRUD functions
        this.deleteNoteMode = false;
        this.isNoteOpen = false;
        this.userList = [];
        this.editorModules = {
            //https://github.com/KillerCodeMonkey/ngx-quill
            toolbar: [[{ header: [1, 2, 3, 4, false] }], ['bold', 'italic', 'underline'], ['link', 'image']]
        };
        this.subscriptions.push(this.toggler.quickViewToggle.subscribe(message => {
            this.toggle();
        }));
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
    ngOnInit() {
        // Retrieve posts from the API
        this.subscriptions.push(this._service.getNotes().subscribe(notes => {
            this.noteList = notes;
        }));
        this.subscriptions.push(this._service.getUsers().subscribe(users => {
            this.userList = users;
        }));
        this.subscriptions.push(this._service.getChatMessages().subscribe(messages => {
            this.chatHistory = messages;
        }));
    }
    toggle() {
        if (this.isOpen) {
            this.isOpen = false;
        }
        else {
            this.isOpen = true;
        }
    }
    popNote(item) {
        const index = this.noteDeleteList.indexOf(item);
        if (index !== -1) {
            this.noteDeleteList.splice(index, 1);
        }
    }
    pushNote(item) {
        this.noteDeleteList.push(item);
    }
    onSelectNote(item) {
        if (!this.deleteNoteMode) {
            this.selectedNote = item;
            this.noteText = this.selectedNote.notes;
            this.isNoteOpen = true;
        }
    }
    toggleNotesView() {
        if (this.isNoteOpen) {
            this.isNoteOpen = false;
            this.saveNote();
        }
        else
            this.isNoteOpen = true;
    }
    onCheck(e, item) {
        if (e.target.checked) {
            this.pushNote(item);
        }
        else {
            this.popNote(item);
        }
    }
    composeNote() {
        this.isNoteOpen = true;
        this.selectedNote = new _note__WEBPACK_IMPORTED_MODULE_0__.Note();
        this.selectedNote.id = this.noteList.length + 1;
        this.selectedNote.date = new Date();
        this.selectedNote.notes = '';
        this.noteText = '';
        this.noteList.push(this.selectedNote);
    }
    saveNote() {
        this.selectedNote.notes = this.noteText;
    }
    deleteMode() {
        if (this.deleteNoteMode)
            this.deleteNoteMode = false;
        else
            this.deleteNoteMode = true;
    }
    deleteNote() {
        this.noteList = this.noteList.filter(item => this.noteDeleteList.indexOf(item) === -1);
    }
    onMessageKeyPress(event) {
        if (event.keyCode == 13) {
            if (this.userMessage) {
                this.newMessage = new _message__WEBPACK_IMPORTED_MODULE_1__.chatMessage();
                this.newMessage.from = 'me';
                this.newMessage.date = '';
                this.newMessage.message = this.userMessage;
                this.chatHistory['log'].push(this.newMessage);
                this.userMessage = '';
                this.chatHistoryWrapper.nativeElement.scrollTop = this.chatHistoryWrapper.nativeElement.scrollHeight;
            }
        }
    }
}
QuickviewComponent.ɵfac = function QuickviewComponent_Factory(t) { return new (t || QuickviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_quickview_service__WEBPACK_IMPORTED_MODULE_2__.QuickviewService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_toggler_service__WEBPACK_IMPORTED_MODULE_3__.pagesToggleService)); };
QuickviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: QuickviewComponent, selectors: [["app-quickview"]], viewQuery: function QuickviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.chatHistoryWrapper = _t.first);
    } }, decls: 164, vars: 21, consts: [["id", "quickview", 1, "quickview-wrapper"], ["heading", "Notes", "id", "quickview-notes", "customClass", "full-height"], ["id", "note-views", 1, "view-port", "clearfix", "quickview-notes"], ["id", "quick-note-list", 1, "view"], [1, "full-height", "d-flex", "flex-column", "list"], [1, "toolbar", "clearfix"], [1, "pull-right"], [1, "delete-note-link", 3, "click"], [1, "pg-icon"], [1, "new-note-link", 3, "click"], [1, "btn-remove-notes", "btn", "btn-xs", "btn-block", 3, "click"], ["perfectScrollbar", "", 1, "full-height"], ["class", "d-flex justify-space-between", 3, "click", 4, "ngFor", "ngForOf"], ["id", "quick-note", 1, "view", "note"], ["class", "extra-component", 4, "ngIf"], ["placeholder", "", 1, "full-height", "full-width", 3, "ngModel", "modules", "ngModelChange"], ["quill-editor-toolbar", "", 1, "ql-toolbar", "ql-snow"], [1, "close-note-link", 3, "click"], [1, "ql-formats"], [1, "ql-bold", 3, "title"], [1, "ql-italic", 3, "title"], [1, "ql-link", 3, "title"], ["heading", "Alerts", "id", "quickview-alerts", "customClass", "full-height"], ["id", "alerts", 1, "view-port", "clearfix"], [1, "view", "bg-white"], [1, "full-height", "d-flex", "flex-column"], [1, "navbar", "navbar-default", "navbar-sm"], [1, "navbar-inner"], ["href", "javascript:;", "data-navigate", "view", "data-view-port", "#chat", "data-view-animation", "push-parrallax", 1, "action", "p-l-10", "link", "text-color"], [1, "view-heading"], ["href", "javascript:void(0)", 1, "action", "p-r-10", "pull-right", "link", "text-color"], ["perfectScrollbar", "", 1, "full-height", "list-view", "boreded", "no-top-border"], [1, "list-view-group-container"], [1, "list-view-group-header", "text-uppercase"], [1, "alert-list"], ["href", "javascript:;", "data-navigate", "view", "data-view-port", "#chat", "data-view-animation", "push-parrallax", 1, "align-items-center"], [1, ""], [1, "text-warning", "fs-10"], [1, "p-l-10", "overflow-ellipsis", "fs-12"], [1, "text-color"], [1, "p-r-10", "ml-auto", "fs-12", "text-right"], [1, "text-warning"], ["href", "javascript:void(0)", "data-navigate", "view", "data-view-port", "#chat", "data-view-animation", "push-parrallax", 1, "align-items-center"], ["href", "javascript:;", "data-navigate", "view", "data-view-port", "#chat", "data-view-animation", "push-parrallax", 1, "p-t-10", "p-b-10", "align-items-center"], [1, "text-complete", "fs-10"], [1, "col", "overflow-ellipsis", "fs-12", "p-l-10"], [1, "text-color", "link"], ["href", "javascript:void(0)", "data-navigate", "view", "data-view-port", "#chat", "data-view-animation", "push-parrallax", 1, "p-t-10", "p-b-10", "align-items-center"], [1, "text-danger", "fs-10"], ["heading", "Chat", "id", "quickview-chat", "active", "true", "customClass", "full-height"], ["id", "chat", 1, "view-port", "clearfix"], [1, "navbar", "navbar-default"], ["href", "javascript:;", "pg-view-trigger", "", "parentView", "chat", "animationType", "push-parrallax", 1, "action", "p-l-10", "link", "text-color"], [1, "fs-11"], [1, "scrollable", "full-height"], [4, "ngFor", "ngForOf"], [1, "view", "chat-view", "bg-white", "clearfix"], ["class", "navbar-inner", 4, "ngIf"], ["perfectScrollbar", "", 1, "chat-inner"], ["chatHistoryWrapper", ""], ["class", "message clearfix", 4, "ngFor", "ngForOf"], [1, "b-t", "b-grey", "bg-white", "clearfix", "p-l-10", "p-r-10"], [1, "row"], [1, "col-1", "p-t-15"], ["href", "javascript:void(0)", 1, "link", "text-color"], [1, "col-8", "no-padding"], ["type", "text", "placeholder", "Say something", 1, "form-control", "chat-input", 3, "ngModel", "ngModelChange", "keypress"], [1, "col-2", "link", "text-color", "m-l-10", "m-t-15", "p-l-10", "b-l", "b-grey", "col-top"], [1, "btn-icon-link", "invert", "quickview-toggle", 3, "click"], [1, "d-flex", "justify-space-between", 3, "click"], [1, "left"], [1, "form-check", "warning", "no-margin", 3, "ngStyle"], ["type", "checkbox", "value", "1", 3, "id", "change"], [3, "for"], [1, "note-preview", 3, "innerHTML"], [1, "d-flex", "right", "justify-content-end"], [1, "date"], ["href", "javascript:void(0)", 1, "d-flex", "align-items-center"], [1, "extra-component"], [1, "top"], ["ItemHeading", ""], ["class", "chat-user-list clearfix", 4, "ngFor", "ngForOf"], [1, "chat-user-list", "clearfix"], ["pg-view-trigger", "", "parentView", "chat", "animationType", "push-parrallax"], [1, "thumbnail-wrapper", "d32", "circular", "bg-success"], ["width", "34", "height", "34", "alt", "", 1, "col-top", 3, "src"], [1, "p-l-10"], [1, "block", "text-color", "hint-text", "fs-12"], ["href", "javascript:;", "pg-view-trigger", "", "parentView", "chat", "animationType", "push-parrallax", 1, "link", "text-color", "action", "p-l-10", "p-r-10"], [1, "fs-11", "hint-text"], ["href", "javascript:void(0)", 1, "link", "text-color", "action", "p-r-10", "pull-right"], [1, "message", "clearfix"], ["class", "profile-img-wrapper m-t-5 inline", 4, "ngIf"], [1, "chat-bubble", "from-them"], [1, "profile-img-wrapper", "m-t-5", "inline"], ["width", "30", "height", "30", "alt", "", 1, "col-top", 3, "src"]], template: function QuickviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "tabset")(2, "tab", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "ul", 6)(8, "li")(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QuickviewComponent_Template_a_click_9_listener() { return ctx.deleteMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "trash_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "li")(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QuickviewComponent_Template_a_click_13_listener() { return ctx.composeNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QuickviewComponent_Template_button_click_16_listener() { return ctx.deleteNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, QuickviewComponent_li_21_Template, 13, 9, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, QuickviewComponent_div_23_Template, 5, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "quill-editor", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function QuickviewComponent_Template_quill_editor_ngModelChange_24_listener($event) { return ctx.noteText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "ul", 16)(26, "li")(27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QuickviewComponent_Template_button_click_27_listener() { return ctx.toggleNotesView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "tab", 22)(37, "div", 23)(38, "div", 24)(39, "div", 25)(40, "div", 26)(41, "div", 27)(42, "a", 28)(43, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "more_horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, " Notications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "a", 30)(48, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 31)(51, "div", 32)(52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, " Calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "ul")(55, "li", 34)(56, "a", 35)(57, "p", 36)(58, "span", 37)(59, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "circle_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "p", 38)(62, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "David Nester Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "p", 40)(65, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "All Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "li", 34)(71, "a", 42)(72, "p", 36)(73, "span", 37)(74, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "circle_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "p", 38)(77, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "Meeting at 2:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "p", 40)(80, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 32)(83, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, " Social ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "ul")(86, "li", 34)(87, "a", 43)(88, "p", 36)(89, "span", 44)(90, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "circle_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "p", 45)(93, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94, "Jame Smith commented on your status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "\u201CPerfection Simplified - Company Revox\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "li", 34)(99, "a", 43)(100, "p", 36)(101, "span", 44)(102, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, "circle_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "p", 45)(105, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "Jame Smith commented on your status");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "\u201CPerfection Simplified - Company Revox\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "div", 32)(111, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112, " Sever Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "ul")(114, "li", 34)(115, "a", 47)(116, "p", 36)(117, "span", 48)(118, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119, "circle_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "p", 45)(121, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, "12:13AM GTM, 10230, ID:WR174s");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "Server Load Exceeted. Take action");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "tab", 49)(127, "div", 50)(128, "div", 24)(129, "div", 51)(130, "div", 27)(131, "a", 52)(132, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](135, " Chat List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, "Show All");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "a", 30)(139, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "more_horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "pg-list-view-container", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](142, QuickviewComponent_pg_list_item_142_Template, 4, 1, "pg-list-item", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "div", 56)(144, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](145, QuickviewComponent_div_145_Template, 11, 2, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "div", 58, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](148, QuickviewComponent_div_148_Template, 4, 6, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "div", 61)(150, "div", 62)(151, "div", 63)(152, "a", 64)(153, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "div", 65)(156, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function QuickviewComponent_Template_input_ngModelChange_156_listener($event) { return ctx.userMessage = $event; })("keypress", function QuickviewComponent_Template_input_keypress_156_listener($event) { return ctx.onMessageKeyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "div", 67)(158, "a", 64)(159, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](160, "camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](161, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function QuickviewComponent_Template_a_click_161_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("open", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("push", ctx.isNoteOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx.deleteNoteMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hide", ctx.deleteNoteMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hide", !ctx.deleteNoteMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.noteList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.noteText)("modules", ctx.editorModules);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Italic");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.userList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.chatHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.chatHistory == null ? null : ctx.chatHistory.log);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.userMessage);
    } }, directives: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__.TabsetComponent, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__.TabDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ngx_quill__WEBPACK_IMPORTED_MODULE_12__.QuillEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _view_view_directive__WEBPACK_IMPORTED_MODULE_5__.ViewDirective, _list_view_list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_6__.ListViewContainerComponent, _list_view_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__.ListItemComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".quickview-wrapper quill-editor {\n  display: table;\n  height: 100%;\n  width: 100%;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow {\n  background: #fcfcfa;\n  height: 35px;\n  width: 100%;\n  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.33);\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow button {\n  width: 39px;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow button svg {\n  padding-top: 9px;\n  padding-bottom: 9px;\n  height: 34px;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow button:hover {\n  background-color: #fffaf6;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow button:hover .ql-stroke {\n  stroke: #a5a5a5;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow button.ql-active {\n  background-color: #fffaf6;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow .close-note-link {\n  text-align: center;\n  color: #a5a5a5;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow .ql-formats {\n  height: 35px;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow li {\n  border-right: 1px solid #edecec;\n  width: 40px;\n  margin: 0;\n  padding: 0;\n}\n.quickview-wrapper quill-editor .ql-toolbar.ql-snow .ql-stroke {\n  stroke: #a5a5a5;\n}\n.quickview-wrapper .ql-editor {\n  padding: 51px 20px 0 45px;\n  font-size: 12px;\n}\n.quickview-wrapper .extra-component {\n  position: absolute;\n  top: 51px;\n  text-align: center;\n}\n.quickview-wrapper .extra-component .top span {\n  font-style: italic;\n  color: #b0b0a8;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aWNrdmlldy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcZnJvbnQlMjBlbmRcXFByb2plY3RzXFx0YWxlbnRsaW5rXFxzcmNcXGFwcFxcQHBhZ2VzXFxjb21wb25lbnRzXFxxdWlja3ZpZXdcXHF1aWNrdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0RSO0FERVE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7QUNBWjtBRENZO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ0NoQjtBREFnQjtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRXBCO0FEQWdCO0VBQ0kseUJBQUE7QUNFcEI7QUREb0I7RUFDSSxlQUFBO0FDR3hCO0FEQWdCO0VBQ0kseUJBQUE7QUNFcEI7QURDWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NoQjtBRENZO0VBQ0ksWUFBQTtBQ0NoQjtBRENZO0VBQ0ksK0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDaEI7QURDWTtFQUNJLGVBQUE7QUNDaEI7QURJSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FESVk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRmhCIiwiZmlsZSI6InF1aWNrdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRXh0cmEgc3R5bGVzXHJcbi5xdWlja3ZpZXctd3JhcHBlcntcclxuICAgIHF1aWxsLWVkaXRvcntcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnFsLXRvb2xiYXIucWwtc25vd3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojZmNmY2ZhO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MzVweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM5cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDlweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjY7XHJcbiAgICAgICAgICAgICAgICAgICAgLnFsLXN0cm9rZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiNhNWE1YTU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5xbC1hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFmNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2xvc2Utbm90ZS1saW5re1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2E1YTVhNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucWwtZm9ybWF0c3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZGVjZWM7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucWwtc3Ryb2tle1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiNhNWE1YTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnFsLWVkaXRvcntcclxuICAgICAgICBwYWRkaW5nOiA1MXB4IDIwcHggMCA0NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5leHRyYS1jb21wb25lbnR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLnRvcHtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjBiMGE4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5xdWlja3ZpZXctd3JhcHBlciBxdWlsbC1lZGl0b3Ige1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5xdWlja3ZpZXctd3JhcHBlciBxdWlsbC1lZGl0b3IgLnFsLXRvb2xiYXIucWwtc25vdyB7XG4gIGJhY2tncm91bmQ6ICNmY2ZjZmE7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG59XG4ucXVpY2t2aWV3LXdyYXBwZXIgcXVpbGwtZWRpdG9yIC5xbC10b29sYmFyLnFsLXNub3cgYnV0dG9uIHtcbiAgd2lkdGg6IDM5cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4ucXVpY2t2aWV3LXdyYXBwZXIgcXVpbGwtZWRpdG9yIC5xbC10b29sYmFyLnFsLXNub3cgYnV0dG9uIHN2ZyB7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gIGhlaWdodDogMzRweDtcbn1cbi5xdWlja3ZpZXctd3JhcHBlciBxdWlsbC1lZGl0b3IgLnFsLXRvb2xiYXIucWwtc25vdyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWY2O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIHF1aWxsLWVkaXRvciAucWwtdG9vbGJhci5xbC1zbm93IGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlIHtcbiAgc3Ryb2tlOiAjYTVhNWE1O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIHF1aWxsLWVkaXRvciAucWwtdG9vbGJhci5xbC1zbm93IGJ1dHRvbi5xbC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWY2O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIHF1aWxsLWVkaXRvciAucWwtdG9vbGJhci5xbC1zbm93IC5jbG9zZS1ub3RlLWxpbmsge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYTVhNWE1O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIHF1aWxsLWVkaXRvciAucWwtdG9vbGJhci5xbC1zbm93IC5xbC1mb3JtYXRzIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIHF1aWxsLWVkaXRvciAucWwtdG9vbGJhci5xbC1zbm93IGxpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZWNlYztcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5xdWlja3ZpZXctd3JhcHBlciBxdWlsbC1lZGl0b3IgLnFsLXRvb2xiYXIucWwtc25vdyAucWwtc3Ryb2tlIHtcbiAgc3Ryb2tlOiAjYTVhNWE1O1xufVxuLnF1aWNrdmlldy13cmFwcGVyIC5xbC1lZGl0b3Ige1xuICBwYWRkaW5nOiA1MXB4IDIwcHggMCA0NXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucXVpY2t2aWV3LXdyYXBwZXIgLmV4dHJhLWNvbXBvbmVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucXVpY2t2aWV3LXdyYXBwZXIgLmV4dHJhLWNvbXBvbmVudCAudG9wIHNwYW4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjYjBiMGE4O1xuICBmb250LXNpemU6IDExcHg7XG59Il19 */"], encapsulation: 2 });


/***/ }),

/***/ 87244:
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/quickview/quickview.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickviewService": () => (/* binding */ QuickviewService)
/* harmony export */ });
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 99464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ 83702);



class QuickviewService {
    constructor(http) {
        this.http = http;
    }
    // Get from the API
    getNotes() {
        return this.http.get('assets/data/notes.json').map(res => res.json());
    }
    getUsers() {
        return this.http.get('assets/data/users.json').map(res => res.json());
    }
    getChatMessages() {
        return this.http.get('assets/data/messages.json').map(res => res.json());
    }
}
QuickviewService.ɵfac = function QuickviewService_Factory(t) { return new (t || QuickviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_2__.Http)); };
QuickviewService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuickviewService, factory: QuickviewService.ɵfac });


/***/ }),

/***/ 91806:
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/retina/retina.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgRetinaDirective": () => (/* binding */ pgRetinaDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class pgRetinaDirective {
    constructor(El, renderer) {
        this.El = El;
        this.renderer = renderer;
        this.isRetina = false;
        this.isRetina = window.devicePixelRatio > 1;
    }
    set src2x(value) {
        this._srcRetina = value;
    }
    set src1x(value) {
        this._src = value;
    }
    ngOnInit() {
        if (this.isRetina) {
            this.renderer.setAttribute(this.El.nativeElement, 'src', this._srcRetina);
        }
    }
}
pgRetinaDirective.ɵfac = function pgRetinaDirective_Factory(t) { return new (t || pgRetinaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
pgRetinaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: pgRetinaDirective, selectors: [["", "pgRetina", ""]], inputs: { src2x: "src2x", src1x: "src1x" } });


/***/ }),

/***/ 73510:
/*!******************************************************************************!*\
  !*** ./src/app/@pages/components/search-overlay/search-overlay.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchOverlayComponent": () => (/* binding */ SearchOverlayComponent)
/* harmony export */ });
/* harmony import */ var _animations_fade_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/fade-animations */ 42320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/toggler.service */ 76226);
/* harmony import */ var _retina_retina_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../retina/retina.directive */ 91806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);





const _c0 = ["searchField"];
class SearchOverlayComponent {
    constructor(el, toggler) {
        this.el = el;
        this.toggler = toggler;
        this._isEnabled = false;
        this.isVisible = false;
        this.value = '';
        this.toggleSubscription = this.toggler.searchToggle.subscribe(toggleValue => {
            this.open();
        });
    }
    ngOnDestroy() {
        this.toggleSubscription.unsubscribe();
    }
    set isEnabled(isEnabled) {
        this.isEnabled = isEnabled;
    }
    get isEnabled() {
        return this._isEnabled;
    }
    close($event) {
        $event.preventDefault();
        this.isVisible = false;
        this.value = '';
    }
    open() {
        this.isVisible = true;
        this.value = '';
        setTimeout(() => {
            this.searchField.nativeElement.focus();
        }, 200);
    }
    onKeydownHandler(e) {
        var nodeName = e.target.nodeName;
        // Ignore When focus on input, textarea & contenteditable
        if (nodeName === 'INPUT' || nodeName === 'TEXTAREA' || e.target.contentEditable === 'true') {
            return;
        }
        // Ignore Escape
        if (this.isVisible && e.keyCode === 27) {
            this.isVisible = false;
            this.value = '';
        }
        // Ignore Keyes
        if (e.which !== 0 && e.charCode !== 0 && !e.ctrlKey && !e.metaKey && !e.altKey && e.keyCode !== 27) {
            this.isVisible = true;
            if (!this.value) {
                this.value = String.fromCharCode(e.keyCode | e.charCode);
            }
            this.searchField.nativeElement.focus();
        }
    }
    searchKeyPress(event) {
        if (this.isVisible && event.keyCode === 27) {
            this.isVisible = false;
            this.value = '';
        }
    }
    fadeInComplete() {
    }
}
SearchOverlayComponent.ɵfac = function SearchOverlayComponent_Factory(t) { return new (t || SearchOverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__.pagesToggleService)); };
SearchOverlayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SearchOverlayComponent, selectors: [["app-search-overlay"]], viewQuery: function SearchOverlayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, hostBindings: function SearchOverlayComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function SearchOverlayComponent_keypress_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    } }, inputs: { isEnabled: "isEnabled" }, decls: 98, vars: 11, consts: [[1, "overlay"], [1, "overlay-content", "has-results", "m-t-20"], [1, "container-fluid"], ["alt", "logo", "pgRetina", "", "src1x", "assets/img/logo.png", "src2x", "assets/img/logo_2x.png", "height", "22", "src", "assets/img/logo.png", "width", "78", 1, "overlay-brand"], ["href", "javascript:void(0)", 1, "close-icon-light", "btn-link", "btn-rounded", "overlay-close", "text-black", 3, "click"], [1, "pg-icon"], ["autocomplete", "off", "placeholder", "Search...", "spellcheck", "false", 1, "no-border", "overlay-search", "bg-transparent", 3, "ngModel", "keyup", "ngModelChange"], ["searchField", ""], [1, "d-flex", "align-items-center"], [1, "form-check", "right", "m-b-0", "d-flex"], ["id", "checkboxn", "type", "checkbox", "value", "1", "checked", "checked"], ["for", "checkboxn", 1, "d-flex"], [1, "pg-icon", "m-r-5"], [1, "fs-13", "m-l-10", "m-b-0"], [1, "search-results", "m-t-40"], [1, "bold"], [1, "row"], [1, "col-md-6"], [1, "d-flex", "m-t-15"], [1, "thumbnail-wrapper", "d48", "circular", "bg-success", "text-white", "inline", "m-t-10"], ["alt", "", "pgRetina", "", "src1x", "assets/img/profiles/avatar.jpg", "src2x", "assets/img/profiles/avatar2x.jpg", "height", "40", "src", "assets/img/profiles/avatar.jpg", "width", "40"], [1, "p-l-10"], [1, "m-b-5"], [1, "semi-bold", "result-name"], [1, "hint-text"], [1, "thumbnail-wrapper", "d48", "circular", "bg-info", "text-white", "d-flex", "align-items-center", "m-t-10"], [1, "pg-icon", "large-text"], [1, "thumbnail-wrapper", "d48", "circular", "bg-complete", "text-white", "d-flex", "align-items-center", "m-t-10"], [1, "thumbnail-wrapper", "d48", "circular", "text-white", "bg-danger", "d-flex", "align-items-center", "m-t-10"]], template: function SearchOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SearchOverlayComponent_Template_a_click_4_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2)(8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function SearchOverlayComponent_Template_input_keyup_8_listener($event) { return ctx.searchKeyPress($event); })("ngModelChange", function SearchOverlayComponent_Template_input_ngModelChange_8_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 11)(15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Search within page");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Press enter to search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 2)(21, "span")(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "suggestions :");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 14)(27, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Pages Search Results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 16)(30, "div", 17)(31, "div", 18)(32, "div", 19)(33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 21)(36, "h5", 22)(37, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " on pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " via john smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 18)(43, "div", 19)(44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " T ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 21)(47, "h5", 22)(48, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " related topics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " via pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 18)(54, "div", 19)(55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 21)(58, "h5", 22)(59, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " music ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " via pagesmix ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 17)(65, "div", 18)(66, "div", 25)(67, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 21)(70, "h5", 22)(71, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " on facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, " via facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 18)(77, "div", 27)(78, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 21)(81, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " Tweats on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " via twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 18)(88, "div", 28)(89, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "google_plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 21)(92, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, " Circles on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, " via google plus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("hide", !ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeAnimation", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.value);
    } }, directives: [_retina_retina_directive__WEBPACK_IMPORTED_MODULE_2__.pgRetinaDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtb3ZlcmxheS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [_animations_fade_animations__WEBPACK_IMPORTED_MODULE_0__.fadeAnimation] } });


/***/ }),

/***/ 8662:
/*!************************************************************************************!*\
  !*** ./src/app/@pages/components/secondary-sidebar/secondary-sidebar.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondarySidebarComponent": () => (/* binding */ SecondarySidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toggler.service */ 76226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



const _c0 = ["*"];
class SecondarySidebarComponent {
    constructor(toggler) {
        this.toggler = toggler;
        this._toggleMobileSidebar = false;
    }
    ngOnInit() {
        this._service = this.toggler.secondarySideBarToggle.subscribe(state => {
            if (typeof state === 'boolean') {
                this._toggleMobileSidebar = state;
            }
            else {
                this._toggleMobileSidebar = state.open;
                let rect = state.$event.target.getBoundingClientRect();
                this._togglePosition = {
                    position: 'fixed',
                    top: rect.top + rect.height + 'px',
                    left: rect.left + 'px',
                    transform: 'translateX(-50%)'
                };
            }
        });
    }
    ngOnDestroy() {
        this._service.unsubscribe();
    }
    set extraClass(value) {
        this._extraClass = value;
    }
}
SecondarySidebarComponent.ɵfac = function SecondarySidebarComponent_Factory(t) { return new (t || SecondarySidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toggler_service__WEBPACK_IMPORTED_MODULE_0__.pagesToggleService)); };
SecondarySidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SecondarySidebarComponent, selectors: [["pg-secondary-sidebar"]], inputs: { extraClass: "extraClass" }, ngContentSelectors: _c0, decls: 2, vars: 8, consts: [[3, "ngStyle"]], template: function SecondarySidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("secondary-sidebar ", ctx._extraClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("secondary-show", ctx._toggleMobileSidebar)("secondary-hide", !ctx._toggleMobileSidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._togglePosition);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle], styles: ["@media (max-width: 1024px) {\n  .secondary-show[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .secondary-hide[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZGFyeS1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmcm9udCUyMGVuZFxcUHJvamVjdHNcXHRhbGVudGxpbmtcXHNyY1xcYXBwXFxAcGFnZXNcXGNvbXBvbmVudHNcXHNlY29uZGFyeS1zaWRlYmFyXFxzZWNvbmRhcnktc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksY0FBQTtFQ0NOOztFRENFO0lBQ0ksYUFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic2Vjb25kYXJ5LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuc2Vjb25kYXJ5LXNob3d7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuc2Vjb25kYXJ5LWhpZGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSIsIkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNlY29uZGFyeS1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5zZWNvbmRhcnktaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 60216:
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/select/option.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgOptionComponent": () => (/* binding */ pgOptionComponent)
/* harmony export */ });
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/convert */ 47429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.component */ 52435);



const _c0 = ["OptionTemplate"];
const _c1 = ["*"];
class pgOptionComponent {
    constructor(_Select) {
        this._Select = _Select;
        this._disabled = false;
    }
    set Value(value) {
        if (this._value === value) {
            return;
        }
        this._value = value;
    }
    get Value() {
        return this._value;
    }
    set Label(value) {
        if (this._label === value) {
            return;
        }
        this._label = value;
    }
    get Label() {
        return this._label;
    }
    set Disabled(value) {
        this._disabled = (0,_util_convert__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    }
    get Disabled() {
        return this._disabled;
    }
    ngOnInit() {
        this._Select.addOption(this);
    }
    ngOnDestroy() {
        this._Select.removeOption(this);
    }
}
pgOptionComponent.ɵfac = function pgOptionComponent_Factory(t) { return new (t || pgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_select_component__WEBPACK_IMPORTED_MODULE_1__.pgSelectComponent)); };
pgOptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: pgOptionComponent, selectors: [["pg-option"]], contentQueries: function pgOptionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.OptionTemplate = _t.first);
    } }, inputs: { Value: "Value", Label: "Label", Disabled: "Disabled" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function pgOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 34757:
/*!*********************************************************!*\
  !*** ./src/app/@pages/components/select/option.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionPipe": () => (/* binding */ OptionPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class OptionPipe {
    // TODO: enable type checking for this method
    transform(options, value) {
        if (value.searchText) {
            let _options = options.filter(option => option.Label && option.Label.toLowerCase().indexOf(value.searchText.toLowerCase()) !== -1);
            if (value.tags) {
                _options = options.filter(option => option.Label && option.Label.toLowerCase() === value.searchText.toLowerCase());
            }
            if (_options.length) {
                return _options;
            }
            else {
                return [
                    {
                        Value: value.value,
                        _value: value.value,
                        Disabled: value.disabled,
                        _disabled: value.disabled,
                        Label: value.notFoundContent,
                        _label: value.notFoundContent
                    }
                ];
            }
        }
        else {
            return options;
        }
    }
}
OptionPipe.ɵfac = function OptionPipe_Factory(t) { return new (t || OptionPipe)(); };
OptionPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "OptionPipe", type: OptionPipe, pure: true });


/***/ }),

/***/ 52435:
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/select/select.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgSelectComponent": () => (/* binding */ pgSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 57929);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 1274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/dropdown-animations */ 92449);
/* harmony import */ var _animations_tag_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/tag-animations */ 86476);
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/convert */ 47429);
/* harmony import */ var _option_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option.pipe */ 34757);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/**
 * complex but work well
 * TODO: rebuild latter
 */












const _c0 = ["searchInput"];
const _c1 = ["trigger"];
const _c2 = ["dropdownUl"];
function pgSelectComponent_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.PlaceHolder, " ");
} }
function pgSelectComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, pgSelectComponent_div_3_ng_template_2_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2._selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2._selectedOption == null ? null : ctx_r2._selectedOption.Label, " ");
} }
function pgSelectComponent_div_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r7._selectedOption.Label, " ");
} }
function pgSelectComponent_div_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.PlaceHolder, " ");
} }
function pgSelectComponent_div_4_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function pgSelectComponent_div_4_ul_4_li_1_Template_span_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const option_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r15.unSelectMultipleOption(option_r14, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@tagAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("title", (option_r14 == null ? null : option_r14.Label) || (option_r14 == null ? null : option_r14.Value));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r14 == null ? null : option_r14.Label);
} }
function pgSelectComponent_div_4_ul_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, pgSelectComponent_div_4_ul_4_li_1_Template, 4, 3, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li", 15)(3, "div", 16)(4, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("compositionstart", function pgSelectComponent_div_4_ul_4_Template_input_compositionstart_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.compositionStart(); })("compositionend", function pgSelectComponent_div_4_ul_4_Template_input_compositionend_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); ctx_r19.compositionEnd(); return ctx_r19.updateWidth(_r13, ctx_r19._searchText); })("ngModelChange", function pgSelectComponent_div_4_ul_4_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r20._searchText = $event; })("ngModelChange", function pgSelectComponent_div_4_ul_4_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); ctx_r21.updateFilterOption(); return ctx_r21.onSearchChange($event); })("keydown", function pgSelectComponent_div_4_ul_4_Template_input_keydown_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.updateWidth(_r13, ctx_r22._searchText); })("input", function pgSelectComponent_div_4_ul_4_Template_input_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r23.updateWidth(_r13, ctx_r23._searchText); })("blur", function pgSelectComponent_div_4_ul_4_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.onTouched(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9._selectedOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r9._searchText);
} }
function pgSelectComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !(ctx_r10._selectedOption == null ? null : ctx_r10._selectedOption.Label) || ctx_r10.Open);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10._selectedOption == null ? null : ctx_r10._selectedOption.Label, " ");
} }
function pgSelectComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "div", 16)(2, "input", 25, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function pgSelectComponent_div_4_div_6_Template_input_blur_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r26.onTouched(); })("compositionstart", function pgSelectComponent_div_4_div_6_Template_input_compositionstart_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.compositionStart(); })("compositionend", function pgSelectComponent_div_4_div_6_Template_input_compositionend_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r29.compositionEnd(); })("ngModelChange", function pgSelectComponent_div_4_div_6_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r30._searchText = $event; })("ngModelChange", function pgSelectComponent_div_4_div_6_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); ctx_r31.updateFilterOption(); return ctx_r31.onSearchChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx_r11.Open);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r11._searchText);
} }
function pgSelectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, pgSelectComponent_div_4_ng_template_2_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, pgSelectComponent_div_4_ng_template_3_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, pgSelectComponent_div_4_ul_4_Template, 7, 2, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, pgSelectComponent_div_4_div_5_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, pgSelectComponent_div_4_div_6_Template, 5, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r3._searchText || !ctx_r3.Open && ctx_r3._selectedOption || ctx_r3._selectedOptions.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3._composing && ctx_r3._selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3._composing && !ctx_r3._selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.Multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.Multiple);
} }
function pgSelectComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function pgSelectComponent_span_5_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r32.onTouched(); return ctx_r32.clearSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function pgSelectComponent_ng_template_8_li_4_1_ng_template_0_Template(rf, ctx) { }
function pgSelectComponent_ng_template_8_li_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, pgSelectComponent_ng_template_8_li_4_1_ng_template_0_Template, 0, 0, "ng-template", 33);
} if (rf & 2) {
    const option_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", option_r36.OptionTemplate);
} }
function pgSelectComponent_ng_template_8_li_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const option_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r36.Label, " ");
} }
function pgSelectComponent_ng_template_8_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function pgSelectComponent_ng_template_8_li_4_Template_li_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const option_r36 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r42.clickOption(option_r36, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, pgSelectComponent_ng_template_8_li_4_1_Template, 1, 1, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, pgSelectComponent_ng_template_8_li_4_ng_template_2_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r36 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pg-select-dropdown-menu-item-disabled", option_r36.Disabled)("pg-select-dropdown-menu-item-active", option_r36.Value == (ctx_r35._activeFilterOption == null ? null : ctx_r35._activeFilterOption.Value))("pg-select-dropdown-menu-item-selected", option_r36.Value == (ctx_r35._selectedOption == null ? null : ctx_r35._selectedOption.Value) || ctx_r35.isInSet(ctx_r35._selectedOptions, option_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", option_r36.OptionTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !option_r36.OptionTemplate);
} }
function pgSelectComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "ul", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function pgSelectComponent_ng_template_8_Template_ul_scroll_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r44.dropDownScroll(_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, pgSelectComponent_ng_template_8_li_4_Template, 3, 8, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r5._dropDownClassMap)("@dropDownAnimation", ctx_r5._dropDownPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5._filterOptions);
} }
class pgSelectComponent {
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._allowClear = false;
        this._disabled = false;
        this._isTags = false;
        this._isMultiple = false;
        this._keepUnListOptions = false;
        this._showSearch = false;
        this._isOpen = false;
        this._prefixCls = 'pg-select';
        this._classList = [];
        this._dropDownPrefixCls = `${this._prefixCls}-dropdown`;
        this._selectionPrefixCls = `${this._prefixCls}-selection`;
        this._placeholder = 'placeholder';
        this._notFoundContent = 'No Content';
        this._searchText = '';
        this._triggerWidth = 0;
        this._selectedOptions = new Set();
        this._options = [];
        this._cacheOptions = [];
        this._filterOptions = [];
        this._tagsOptions = [];
        this._isMultiInit = false;
        this._dropDownPosition = 'bottom';
        this._composing = false;
        // ngModel Access
        this.onChange = () => null;
        this.onTouched = () => null;
        this.SearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.OpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.ScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.Filter = true;
        this.MaxMultiple = Infinity;
        /** new -option insert or new tags insert */
        this.addOption = option => {
            this._options.push(option);
            if (!this._isTags) {
                if (option.Value) {
                    this.updateSelectedOption(this._value);
                }
                else {
                    this.forceUpdateSelectedOption(this._value);
                }
            }
        };
        /** cancel select multiple option */
        this.unSelectMultipleOption = (option, $event, emitChange = true) => {
            this._operatingMultipleOption = option;
            this._selectedOptions.delete(option);
            if (emitChange) {
                this.emitMultipleOptions();
            }
            if (this._isTags && this._options.indexOf(option) !== -1 && this._tagsOptions.indexOf(option) !== -1) {
                this.removeOption(option);
                this._tagsOptions.splice(this._tagsOptions.indexOf(option), 1);
            }
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
        };
        this._el = this._elementRef.nativeElement;
    }
    set AllowClear(value) {
        this._allowClear = (0,_util_convert__WEBPACK_IMPORTED_MODULE_2__.toBoolean)(value);
    }
    get AllowClear() {
        return this._allowClear;
    }
    set KeepUnListOptions(value) {
        this._keepUnListOptions = (0,_util_convert__WEBPACK_IMPORTED_MODULE_2__.toBoolean)(value);
    }
    get KeepUnListOptions() {
        return this._keepUnListOptions;
    }
    set Mode(value) {
        this._mode = value;
        if (this._mode === 'multiple') {
            this.Multiple = true;
        }
        else if (this._mode === 'tags') {
            this.Tags = true;
        }
        else if (this._mode === 'combobox') {
            this.ShowSearch = true;
        }
    }
    set Multiple(value) {
        this._isMultiple = (0,_util_convert__WEBPACK_IMPORTED_MODULE_2__.toBoolean)(value);
        if (this._isMultiple) {
            this.ShowSearch = true;
        }
    }
    get Multiple() {
        return this._isMultiple;
    }
    set PlaceHolder(value) {
        this._placeholder = value;
    }
    get PlaceHolder() {
        return this._placeholder;
    }
    set NotFoundContent(value) {
        this._notFoundContent = value;
    }
    get NotFoundContent() {
        return this._notFoundContent;
    }
    set Size(value) {
        this._size = { large: 'lg', small: 'sm' }[value];
        this.setClassMap();
    }
    get Size() {
        return this._size;
    }
    set ShowSearch(value) {
        this._showSearch = (0,_util_convert__WEBPACK_IMPORTED_MODULE_2__.toBoolean)(value);
    }
    get ShowSearch() {
        return this._showSearch;
    }
    set Tags(value) {
        const isTags = (0,_util_convert__WEBPACK_IMPORTED_MODULE_2__.toBoolean)(value);
        this._isTags = isTags;
        this.Multiple = isTags;
    }
    get Tags() {
        return this._isTags;
    }
    set Disabled(value) {
        this._disabled = (0,_util_convert__WEBPACK_IMPORTED_MODULE_2__.toBoolean)(value);
        this.closeDropDown();
        this.setClassMap();
    }
    get Disabled() {
        return this._disabled;
    }
    set Open(value) {
        const isOpen = (0,_util_convert__WEBPACK_IMPORTED_MODULE_2__.toBoolean)(value);
        if (this._isOpen === isOpen) {
            return;
        }
        if (isOpen) {
            this.scrollToActive();
            this._setTriggerWidth();
        }
        this._isOpen = isOpen;
        this.OpenChange.emit(this._isOpen);
        this.setClassMap();
        if (this._isOpen) {
            setTimeout(() => {
                this.checkDropDownScroll();
            });
        }
    }
    get Open() {
        return this._isOpen;
    }
    /** -option remove or tags remove */
    removeOption(option) {
        this._options.splice(this._options.indexOf(option), 1);
        if (!this._isTags) {
            this.forceUpdateSelectedOption(this._value);
        }
    }
    /** dropdown position changed */
    onPositionChange(position) {
        this._dropDownPosition = position.connectionPair.originY;
    }
    compositionStart() {
        this._composing = true;
    }
    compositionEnd() {
        this._composing = false;
    }
    /** clear single selected option */
    clearSelect($event) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._selectedOption = null;
        this.Value = null;
        this.onChange(null);
    }
    /** click dropdown option by user */
    clickOption(option, $event) {
        if (!option) {
            return;
        }
        this.chooseOption(option, true, $event);
        this.clearSearchText();
        if (!this._isMultiple) {
            this.Open = false;
        }
    }
    /** choose option */
    chooseOption(option, isUserClick = false, $event) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._activeFilterOption = option;
        if (option && !option.Disabled) {
            if (!this.Multiple) {
                this._selectedOption = option;
                this._value = option.Value;
                if (isUserClick) {
                    this.onChange(option.Value);
                }
            }
            else {
                if (isUserClick) {
                    this.isInSet(this._selectedOptions, option) ? this.unSelectMultipleOption(option) : this.selectMultipleOption(option);
                }
            }
        }
    }
    updateWidth(element, text) {
        if (text) {
            /** wait for scroll width change */
            setTimeout(_ => {
                this._renderer.setStyle(element, 'width', `${element.scrollWidth}px`);
            });
        }
        else {
            this._renderer.removeStyle(element, 'width');
        }
    }
    /** determine if option in set */
    isInSet(set, option) {
        return Array.from(set).find((data) => data.Value === option.Value);
    }
    /** select multiple option */
    selectMultipleOption(option, $event) {
        /** if tags do push to tag option */
        if (this._isTags && this._options.indexOf(option) === -1 && this._tagsOptions.indexOf(option) === -1) {
            this.addOption(option);
            this._tagsOptions.push(option);
        }
        this._operatingMultipleOption = option;
        if (this._selectedOptions.size < this.MaxMultiple) {
            this._selectedOptions.add(option);
        }
        this.emitMultipleOptions();
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
    }
    /** emit multiple options */
    emitMultipleOptions() {
        if (this._isMultiInit) {
            return;
        }
        const arrayOptions = Array.from(this._selectedOptions);
        this._value = arrayOptions.map(item => item.Value);
        this.onChange(this._value);
    }
    /** update selected option when add remove option etc */
    updateSelectedOption(currentModelValue, triggerByNgModel = false) {
        if (currentModelValue == null) {
            return;
        }
        if (this.Multiple) {
            const selectedOptions = this._options.filter(item => {
                return item != null && currentModelValue.indexOf(item.Value) !== -1;
            });
            if ((this.KeepUnListOptions || this.Tags) && !triggerByNgModel) {
                const _selectedOptions = Array.from(this._selectedOptions);
                selectedOptions.forEach(option => {
                    const _exist = _selectedOptions.some(item => item._value === option._value);
                    if (!_exist) {
                        this._selectedOptions.add(option);
                    }
                });
            }
            else {
                this._selectedOptions = new Set();
                selectedOptions.forEach(option => {
                    this._selectedOptions.add(option);
                });
            }
        }
        else {
            const selectedOption = this._options.filter(item => {
                return item != null && item.Value === currentModelValue;
            });
            this.chooseOption(selectedOption[0]);
        }
    }
    forceUpdateSelectedOption(value) {
        /** trigger dirty check */
        setTimeout(_ => {
            this.updateSelectedOption(value);
        });
    }
    get Value() {
        return this._value;
    }
    set Value(value) {
        this._updateValue(value);
    }
    clearAllSelectedOption(emitChange = true) {
        this._selectedOptions.forEach(item => {
            this.unSelectMultipleOption(item, null, emitChange);
        });
    }
    handleKeyEnterEvent(event) {
        /** when composing end */
        if (!this._composing && this._isOpen) {
            event.preventDefault();
            event.stopPropagation();
            this.updateFilterOption(false);
            this.clickOption(this._activeFilterOption);
        }
    }
    handleKeyBackspaceEvent(event) {
        if (!this._searchText && !this._composing && this._isMultiple) {
            event.preventDefault();
            const lastOption = Array.from(this._selectedOptions).pop();
            this.unSelectMultipleOption(lastOption);
        }
    }
    handleKeyDownEvent($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.nextOption(this._activeFilterOption, this._filterOptions.filter(w => !w.Disabled));
            this.scrollToActive();
        }
    }
    handleKeyUpEvent($event) {
        if (this._isOpen) {
            $event.preventDefault();
            $event.stopPropagation();
            this._activeFilterOption = this.preOption(this._activeFilterOption, this._filterOptions.filter(w => !w.Disabled));
            this.scrollToActive();
        }
    }
    preOption(option, options) {
        return options[options.indexOf(option) - 1] || options[options.length - 1];
    }
    nextOption(option, options) {
        return options[options.indexOf(option) + 1] || options[0];
    }
    clearSearchText() {
        this._searchText = '';
        this.updateFilterOption();
    }
    updateFilterOption(updateActiveFilter = true) {
        if (this.Filter) {
            this._filterOptions = new _option_pipe__WEBPACK_IMPORTED_MODULE_3__.OptionPipe().transform(this._options, {
                searchText: this._searchText,
                tags: this._isTags,
                notFoundContent: this._isTags ? this._searchText : this._notFoundContent,
                disabled: !this._isTags,
                value: this._isTags ? this._searchText : 'disabled'
            });
        }
        else {
            this._filterOptions = this._options;
        }
        /** TODO: cause pre & next key selection not work */
        if (updateActiveFilter && !this._selectedOption) {
            this._activeFilterOption = this._filterOptions[0];
        }
    }
    onSearchChange(searchValue) {
        this.SearchChange.emit(searchValue);
    }
    onClick(e) {
        e.preventDefault();
        if (!this._disabled) {
            this.Open = !this.Open;
            if (this.ShowSearch) {
                /** wait for search display */
                setTimeout(_ => {
                    this.searchInputElementRef.nativeElement.focus();
                });
            }
        }
    }
    onKeyDown(e) {
        const keyCode = e.keyCode;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.TAB && this.Open) {
            this.Open = false;
            return;
        }
        if ((keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.DOWN_ARROW && keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER) || this.Open) {
            return;
        }
        e.preventDefault();
        if (!this._disabled) {
            this.Open = true;
            if (this.ShowSearch) {
                /** wait for search display */
                setTimeout(_ => {
                    this.searchInputElementRef.nativeElement.focus();
                });
            }
        }
    }
    closeDropDown() {
        if (!this.Open) {
            return;
        }
        this.onTouched();
        if (this.Multiple) {
            this._renderer.removeStyle(this.searchInputElementRef.nativeElement, 'width');
        }
        this.clearSearchText();
        this.Open = false;
    }
    setClassMap() {
        this._classList.forEach(_className => {
            this._renderer.removeClass(this._el, _className);
        });
        this._classList = [
            this._prefixCls,
            this._mode === 'combobox' && `${this._prefixCls}-combobox`,
            !this._disabled && `${this._prefixCls}-enabled`,
            this._disabled && `${this._prefixCls}-disabled`,
            this._isOpen && `${this._prefixCls}-open`,
            this._showSearch && `${this._prefixCls}-show-search`,
            this._size && `${this._prefixCls}-${this._size}`
        ].filter(item => {
            return !!item;
        });
        this._classList.forEach(_className => {
            this._renderer.addClass(this._el, _className);
        });
        this._selectionClassMap = {
            [this._selectionPrefixCls]: true,
            [`${this._selectionPrefixCls}--single`]: !this.Multiple,
            [`${this._selectionPrefixCls}--multiple`]: this.Multiple
        };
    }
    setDropDownClassMap() {
        this._dropDownClassMap = {
            [this._dropDownPrefixCls]: true,
            ['component-select']: this._mode === 'combobox',
            [`${this._dropDownPrefixCls}--single`]: !this.Multiple,
            [`${this._dropDownPrefixCls}--multiple`]: this.Multiple,
            [`${this._dropDownPrefixCls}-placement-bottomLeft`]: this._dropDownPosition === 'bottom',
            [`${this._dropDownPrefixCls}-placement-topLeft`]: this._dropDownPosition === 'top'
        };
    }
    scrollToActive() {
        /** wait for dropdown display */
        setTimeout(_ => {
            if (this._activeFilterOption && this._activeFilterOption.Value) {
                const index = this._filterOptions.findIndex(option => option.Value === this._activeFilterOption.Value);
                try {
                    const scrollPane = this.dropdownUl.nativeElement.children[index];
                    // TODO: scrollIntoViewIfNeeded is not a standard API, why doing so?
                    /* tslint:disable-next-line:no-any */
                    scrollPane.scrollIntoViewIfNeeded(false);
                }
                catch (e) { }
            }
        });
    }
    flushComponentState() {
        this.updateFilterOption();
        if (!this.Multiple) {
            this.updateSelectedOption(this._value);
        }
        else {
            if (this._value) {
                this.updateSelectedOption(this._value);
            }
        }
    }
    _setTriggerWidth() {
        this._triggerWidth = this._getTriggerRect().width;
        /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
        if (this._cdkOverlay && this._cdkOverlay.overlayRef) {
            this._cdkOverlay.overlayRef.updateSize({
                width: this._triggerWidth
            });
        }
    }
    _getTriggerRect() {
        return this.trigger.nativeElement.getBoundingClientRect();
    }
    writeValue(value) {
        this._updateValue(value, false);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.Disabled = isDisabled;
    }
    dropDownScroll(ul) {
        if (ul && ul.scrollHeight - ul.scrollTop === ul.clientHeight) {
            this.ScrollToBottom.emit(true);
        }
    }
    checkDropDownScroll() {
        if (this.dropdownUl && this.dropdownUl.nativeElement.scrollHeight === this.dropdownUl.nativeElement.clientHeight) {
            this.ScrollToBottom.emit(true);
        }
    }
    ngAfterContentInit() {
        if (this._value != null) {
            this.flushComponentState();
        }
    }
    ngOnInit() {
        this.updateFilterOption();
        this.setClassMap();
        this.setDropDownClassMap();
    }
    ngAfterContentChecked() {
        if (this._cacheOptions !== this._options) {
            /** update filter option after every content check cycle */
            this.updateFilterOption();
            this._cacheOptions = this._options;
        }
        else {
            this.updateFilterOption(false);
        }
    }
    _updateValue(value, emitChange = true) {
        if (this._value === value) {
            return;
        }
        if (value == null && this.Multiple) {
            this._value = [];
        }
        else {
            this._value = value;
        }
        if (!this.Multiple) {
            if (value == null) {
                this._selectedOption = null;
            }
            else {
                this.updateSelectedOption(value);
            }
        }
        else {
            if (value) {
                if (value.length === 0) {
                    this.clearAllSelectedOption(emitChange);
                }
                else {
                    this.updateSelectedOption(value, true);
                }
            }
            else if (value == null) {
                this.clearAllSelectedOption(emitChange);
            }
        }
    }
}
pgSelectComponent.ɵfac = function pgSelectComponent_Factory(t) { return new (t || pgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2)); };
pgSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: pgSelectComponent, selectors: [["pg-select"]], viewQuery: function pgSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.CdkConnectedOverlay, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.searchInputElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dropdownUl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._cdkOverlay = _t.first);
    } }, hostBindings: function pgSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function pgSelectComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("keydown", function pgSelectComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { Filter: "Filter", MaxMultiple: "MaxMultiple", AllowClear: "AllowClear", KeepUnListOptions: "KeepUnListOptions", Mode: "Mode", Multiple: "Multiple", PlaceHolder: "PlaceHolder", NotFoundContent: "NotFoundContent", Size: "Size", ShowSearch: "ShowSearch", Tags: "Tags", Disabled: "Disabled", Open: "Open" }, outputs: { SearchChange: "SearchChange", OpenChange: "OpenChange", ScrollToBottom: "ScrollToBottom" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => pgSelectComponent),
                multi: true
            }
        ])], decls: 9, vars: 7, consts: [["tabindex", "0", "cdkOverlayOrigin", "", 3, "ngClass", "keydown.Enter", "keydown.Backspace", "keydown.ArrowUp", "keydown.ArrowDown"], ["trigger", "", "origin", "cdkOverlayOrigin"], ["class", "pg-select-selection__rendered", 4, "ngIf"], ["class", "pg-select-selection__clear", "style", "-webkit-user-select: none;", 3, "click", 4, "ngIf"], [1, "pg-select-arrow"], ["cdkConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [1, "pg-select-selection__rendered"], [1, "pg-select-selection__placeholder"], [3, "ngIf"], [1, "pg-select-selection-selected-value"], [1, "pg-select-selection__placeholder", 3, "hidden"], [4, "ngIf"], ["class", "pg-select-selection-selected-value", 3, "hidden", 4, "ngIf"], ["class", "pg-select-search pg-select-search--inline", 3, "hidden", 4, "ngIf"], ["class", "pg-select-selection__choice", "style", "-webkit-user-select: none;", 4, "ngFor", "ngForOf"], [1, "pg-select-search", "pg-select-search--inline"], [1, "pg-select-search__field__wrap"], [1, "pg-select-search__field", 3, "ngModel", "compositionstart", "compositionend", "ngModelChange", "keydown", "input", "blur"], ["searchInput", ""], [1, "pg-select-search__field__mirror"], [1, "pg-select-selection__choice", 2, "-webkit-user-select", "none"], [1, "pg-select-selection__choice__remove", 3, "click"], [1, "pg-select-selection__choice__content"], [1, "pg-select-selection-selected-value", 3, "hidden"], [1, "pg-select-search", "pg-select-search--inline", 3, "hidden"], [1, "pg-select-search__field", 3, "ngModel", "blur", "compositionstart", "compositionend", "ngModelChange"], [1, "pg-select-selection__clear", 2, "-webkit-user-select", "none", 3, "click"], [3, "ngClass"], [2, "overflow", "auto"], [1, "pg-select-dropdown-menu", "pg-select-dropdown-menu-vertical", "pg-select-dropdown-menu-root", 3, "scroll"], ["dropdownUl", ""], ["class", "pg-select-dropdown-menu-item", 3, "pg-select-dropdown-menu-item-disabled", "pg-select-dropdown-menu-item-active", "pg-select-dropdown-menu-item-selected", "click", 4, "ngFor", "ngForOf"], [1, "pg-select-dropdown-menu-item", 3, "click"], [3, "ngTemplateOutlet"]], template: function pgSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.Enter", function pgSelectComponent_Template_div_keydown_Enter_0_listener($event) { return ctx.handleKeyEnterEvent($event); })("keydown.Backspace", function pgSelectComponent_Template_div_keydown_Backspace_0_listener($event) { return ctx.handleKeyBackspaceEvent($event); })("keydown.ArrowUp", function pgSelectComponent_Template_div_keydown_ArrowUp_0_listener($event) { return ctx.handleKeyUpEvent($event); })("keydown.ArrowDown", function pgSelectComponent_Template_div_keydown_ArrowDown_0_listener($event) { return ctx.handleKeyDownEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, pgSelectComponent_div_3_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, pgSelectComponent_div_4_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, pgSelectComponent_span_5_Template, 1, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, pgSelectComponent_ng_template_8_Template, 5, 3, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("backdropClick", function pgSelectComponent_Template_ng_template_backdropClick_8_listener() { return ctx.closeDropDown(); })("detach", function pgSelectComponent_Template_ng_template_detach_8_listener() { return ctx.closeDropDown(); })("positionChange", function pgSelectComponent_Template_ng_template_positionChange_8_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx._selectionClassMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ShowSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ShowSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx._selectedOption == null ? null : ctx._selectedOption.Label) && ctx.AllowClear && !ctx.Multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkConnectedOverlayOrigin", _r1)("cdkConnectedOverlayWidth", ctx._triggerWidth)("cdkConnectedOverlayOpen", ctx._isOpen);
    } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.CdkOverlayOrigin, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.CdkConnectedOverlay, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5zY3NzIn0= */"], encapsulation: 2, data: { animation: [_animations_dropdown_animations__WEBPACK_IMPORTED_MODULE_0__.dropDownAnimation, _animations_tag_animations__WEBPACK_IMPORTED_MODULE_1__.tagAnimation] } });


/***/ }),

/***/ 78909:
/*!***********************************************************!*\
  !*** ./src/app/@pages/components/select/select.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgSelectModule": () => (/* binding */ pgSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 1274);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _option_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option.component */ 60216);
/* harmony import */ var _option_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option.pipe */ 34757);
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select.component */ 52435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class pgSelectModule {
}
pgSelectModule.ɵfac = function pgSelectModule_Factory(t) { return new (t || pgSelectModule)(); };
pgSelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: pgSelectModule });
pgSelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](pgSelectModule, { declarations: [_option_pipe__WEBPACK_IMPORTED_MODULE_1__.OptionPipe, _option_component__WEBPACK_IMPORTED_MODULE_0__.pgOptionComponent, _select_component__WEBPACK_IMPORTED_MODULE_2__.pgSelectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule], exports: [_option_pipe__WEBPACK_IMPORTED_MODULE_1__.OptionPipe, _option_component__WEBPACK_IMPORTED_MODULE_0__.pgOptionComponent, _select_component__WEBPACK_IMPORTED_MODULE_2__.pgSelectComponent] }); })();


/***/ }),

/***/ 57732:
/*!****************************************************!*\
  !*** ./src/app/@pages/components/shared.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/observers */ 81665);
/* harmony import */ var _secondary_sidebar_secondary_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secondary-sidebar/secondary-sidebar.component */ 8662);
/* harmony import */ var _quickview_quickview_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quickview/quickview.service */ 87244);
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ 89394);
/* harmony import */ var _parallax_parallax_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parallax/parallax.directive */ 90937);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ 95003);
/* harmony import */ var _forms_form_group_default_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/form-group-default.directive */ 26917);
/* harmony import */ var _view_view_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.directive */ 41930);
/* harmony import */ var _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collapse/collapse.module */ 29917);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 59403);
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./container/container.component */ 62637);
/* harmony import */ var _container_page_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container/page-container.component */ 61780);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _list_view_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-view/list-item/list-item.component */ 60793);
/* harmony import */ var _list_view_list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-view/list-view-container/list-view-container.component */ 6448);
/* harmony import */ var _retina_retina_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./retina/retina.directive */ 91806);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/menu.component */ 34317);
/* harmony import */ var _menu_menu_alt_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu-alt.component */ 47183);
/* harmony import */ var _menu_menu_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu/menu-icon.component */ 23790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
};
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        _quickview_quickview_service__WEBPACK_IMPORTED_MODULE_1__.QuickviewService,
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_18__.ObserversModule,
            ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_19__.TypeaheadModule.forRoot(),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule,
        ], _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_6__.pgCollapseModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_secondary_sidebar_secondary_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SecondarySidebarComponent,
        _parallax_parallax_directive__WEBPACK_IMPORTED_MODULE_2__.ParallaxDirective,
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent,
        _forms_form_group_default_directive__WEBPACK_IMPORTED_MODULE_4__.FormGroupDefaultDirective,
        _view_view_directive__WEBPACK_IMPORTED_MODULE_5__.ViewDirective,
        _container_container_component__WEBPACK_IMPORTED_MODULE_8__.ContainerComponent,
        _container_page_container_component__WEBPACK_IMPORTED_MODULE_9__.pageContainer,
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__.MenuComponent,
        _menu_menu_alt_component__WEBPACK_IMPORTED_MODULE_14__.MenuAltComponent,
        _menu_menu_icon_component__WEBPACK_IMPORTED_MODULE_15__.MenuIconComponent,
        _list_view_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_10__.ListItemComponent,
        _list_view_list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_11__.ListViewContainerComponent,
        _retina_retina_directive__WEBPACK_IMPORTED_MODULE_12__.pgRetinaDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_18__.ObserversModule, ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_19__.TypeaheadModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule], exports: [_secondary_sidebar_secondary_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SecondarySidebarComponent,
        _parallax_parallax_directive__WEBPACK_IMPORTED_MODULE_2__.ParallaxDirective,
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent,
        _forms_form_group_default_directive__WEBPACK_IMPORTED_MODULE_4__.FormGroupDefaultDirective,
        _view_view_directive__WEBPACK_IMPORTED_MODULE_5__.ViewDirective,
        _collapse_collapse_module__WEBPACK_IMPORTED_MODULE_6__.pgCollapseModule,
        _container_container_component__WEBPACK_IMPORTED_MODULE_8__.ContainerComponent,
        _container_page_container_component__WEBPACK_IMPORTED_MODULE_9__.pageContainer,
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_13__.MenuComponent,
        _menu_menu_alt_component__WEBPACK_IMPORTED_MODULE_14__.MenuAltComponent,
        _menu_menu_icon_component__WEBPACK_IMPORTED_MODULE_15__.MenuIconComponent,
        _list_view_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_10__.ListItemComponent,
        _list_view_list_view_container_list_view_container_component__WEBPACK_IMPORTED_MODULE_11__.ListViewContainerComponent,
        _retina_retina_directive__WEBPACK_IMPORTED_MODULE_12__.pgRetinaDirective] }); })();


/***/ }),

/***/ 39886:
/*!****************************************************************!*\
  !*** ./src/app/@pages/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toggler.service */ 76226);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



const _c0 = ["sideBarOverlay"];
const _c1 = ["sideBarHeader"];
const _c2 = ["menuItems"];
function SidebarComponent_ng_template_1_Template(rf, ctx) { }
function SidebarComponent_ng_template_3_Template(rf, ctx) { }
function SidebarComponent_ng_template_5_Template(rf, ctx) { }
class SidebarComponent {
    constructor(appSidebar, toggler) {
        this.appSidebar = appSidebar;
        this.toggler = toggler;
        this.subscriptions = [];
        this.pin = false;
        this.drawer = false;
        this.sideBarWidth = 280;
        this.sideBarWidthCondensed = 280 - 70;
        this.subscriptions.push(this.toggler.sideBarToggle.subscribe(toggle => {
            this.toggleMobile(toggle);
        }));
        this.subscriptions.push(this.toggler.pageContainerHover.subscribe(message => {
            this.closeSideBar();
        }));
        this.subscriptions.push(this.toggler.menuDrawer.subscribe(message => {
            this.toggleDrawer();
        }));
        this.mobileSidebar = false;
    }
    ngOnInit() { }
    ngOnDestroy() {
        for (const subs of this.subscriptions) {
            subs.unsubscribe();
        }
        clearTimeout(this.timer);
    }
    openSideBar() {
        if (pg.isVisibleSm() || pg.isVisibleXs()) {
            return false;
        }
        if (this.pin) {
            return false;
        }
        this.style = 'translate3d(' + this.sideBarWidthCondensed + 'px, 0,0)';
        pg.addClass(document.body, 'sidebar-visible');
    }
    closeSideBar() {
        if (pg.isVisibleSm() || pg.isVisibleXs()) {
            return false;
        }
        if (this.pin) {
            return false;
        }
        this.style = 'translate3d(0,0,0)';
        pg.removeClass(document.body, 'sidebar-visible');
        // this.drawer = false;
    }
    toggleMenuPin() {
        if (this.pin) {
            this.pin = false;
        }
        else {
            this.pin = true;
        }
    }
    toggleDrawer() {
        if (this.drawer) {
            this.drawer = false;
        }
        else {
            this.drawer = true;
        }
    }
    toggleMobile(toggle) {
        clearTimeout(this.timer);
        if (toggle) {
            this.mobileSidebar = toggle;
        }
        else {
            this.timer = setTimeout(() => {
                this.mobileSidebar = toggle;
            }, 400);
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_toggler_service__WEBPACK_IMPORTED_MODULE_0__.pagesToggleService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["pg-sidebar"]], contentQueries: function SidebarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c2, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sideBarOverlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sideBarHeader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menuItems = _t.first);
    } }, hostAttrs: [1, "page-sidebar"], hostVars: 4, hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function SidebarComponent_mouseenter_HostBindingHandler($event) { return ctx.openSideBar($event); })("click", function SidebarComponent_click_HostBindingHandler($event) { return ctx.openSideBar($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.mobileSidebar);
    } }, decls: 7, vars: 5, consts: [[1, "sidebar-overlay-slide", "from-top"], [3, "ngTemplateOutlet"], [1, "sidebar-header"], [1, "sidebar-menu"], [1, "clearfix"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidebarComponent_ng_template_3_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SidebarComponent_ng_template_5_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.drawer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.sideBarOverlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.sideBarHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.menuItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });


/***/ }),

/***/ 47298:
/*!******************************************************************!*\
  !*** ./src/app/@pages/components/upload/upload-btn.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgUploadBtnComponent": () => (/* binding */ pgUploadBtnComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




const _c0 = ["file"];
const _c1 = ["pg-upload-btn", ""];
const _c2 = ["*"];
class pgUploadBtnComponent {
    // endregion
    constructor(http, _el, _renderer, cd) {
        this.http = http;
        this._el = _el;
        this._renderer = _renderer;
        this.cd = cd;
        this.reqs = {};
        this.inited = false;
        this.destroy = false;
        // region: fields
        this.classes = [];
        // region: styles
        this._prefixCls = 'ant-upload';
        this._classList = [];
        if (!http)
            throw new Error(`Not found 'HttpClient', You can import 'HttpClientModel' in your root module.`);
    }
    // endregion
    onClick() {
        if (this.options.disabled || !this.file)
            return;
        this.file.nativeElement.click();
    }
    onKeyDown(e) {
        if (this.options.disabled)
            return;
        if (e.key === 'Enter') {
            this.onClick();
        }
    }
    onFileDrop(e) {
        if (this.options.disabled)
            return;
        if (e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        const files = Array.prototype.slice.call(e.dataTransfer.files).filter(file => this.attrAccept(file, this.options.accept));
        this.uploadFiles(files);
        e.preventDefault();
    }
    onChange(e) {
        if (this.options.disabled)
            return;
        this.uploadFiles(e.target.files);
        e.target.value = '';
    }
    attrAccept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            const fileName = file.name || '';
            const mimeType = file.type || '';
            const baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some(type => {
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            });
        }
        return true;
    }
    uploadFiles(fileList) {
        let postFiles = Array.prototype.slice.call(fileList);
        this.options.filters.forEach(f => (postFiles = f.fn(postFiles)));
        postFiles.forEach((file) => {
            file.uid = Math.random()
                .toString(36)
                .substring(2);
            this.upload(file, postFiles);
        });
    }
    upload(file, fileList) {
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        const before = this.options.beforeUpload(file, fileList);
        if (before instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable) {
            before.subscribe((processedFile) => {
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.post(processedFile);
                }
                else {
                    this.post(file);
                }
            }, err => {
                // tslint:disable-next-line:no-unused-expression
                console && console.log(err);
            });
        }
        else if (before !== false) {
            return this.post(file);
        }
    }
    post(file) {
        if (this.destroy)
            return;
        const opt = this.options;
        const request = opt.customRequest || this.xhr;
        const { uid } = file;
        let { data } = opt;
        if (typeof data === 'function') {
            data = data(file);
        }
        this.reqs[uid] = (opt.customRequest || this.xhr).call(this, {
            action: opt.action,
            name: opt.name,
            headers: opt.headers,
            file,
            data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? e => {
                    opt.onProgress(e, file);
                }
                : null,
            onSuccess: (ret, xhr) => {
                delete this.reqs[uid];
                opt.onSuccess(ret, file, xhr);
            },
            onError: xhr => {
                delete this.reqs[uid];
                opt.onError(xhr, file);
            }
        });
        opt.onStart(file);
    }
    xhr(args) {
        const formData = new FormData();
        formData.append(args.name, args.file);
        if (args.data) {
            Object.keys(args.data).map(key => {
                formData.append(key, args.data[key]);
            });
        }
        if (!args.headers)
            args.headers = {};
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = `XMLHttpRequest`;
        }
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', args.action, formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(args.headers)
        });
        return this.http.request(req).subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpEventType.UploadProgress) {
                if (event.total > 0) {
                    event.percent = (event.loaded / event.total) * 100;
                }
                args.onProgress(event);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                args.onSuccess(event.body, event);
            }
        }, err => {
            this.abort(args);
            args.onError(err);
        });
    }
    abort(file) {
        if (file) {
            let uid = file;
            if (file && file.uid) {
                uid = file.uid;
            }
            if (this.reqs[uid]) {
                this.reqs[uid].unsubscribe();
                delete this.reqs[uid];
            }
        }
        else {
            Object.keys(this.reqs).forEach(uid => {
                if (this.reqs[uid]) {
                    this.reqs[uid].unsubscribe();
                }
                delete this.reqs[uid];
            });
        }
    }
    _setClassMap() {
        this._classList.forEach(cls => this._renderer.removeClass(this._el.nativeElement, cls));
        this._classList = [this._prefixCls, this.options.disabled && `${this._prefixCls}-disabled`, ...this.classes].filter(item => !!item);
        this._classList.forEach(cls => this._renderer.addClass(this._el.nativeElement, cls));
        this.cd.detectChanges();
    }
    ngOnInit() {
        this.inited = true;
        this._setClassMap();
    }
    ngOnChanges(changes) {
        if (this.inited) {
            this._setClassMap();
        }
    }
    ngOnDestroy() {
        this.destroy = true;
        this.abort();
    }
}
pgUploadBtnComponent.ɵfac = function pgUploadBtnComponent_Factory(t) { return new (t || pgUploadBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
pgUploadBtnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: pgUploadBtnComponent, selectors: [["", "pg-upload-btn", ""]], viewQuery: function pgUploadBtnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
    } }, hostVars: 4, hostBindings: function pgUploadBtnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function pgUploadBtnComponent_click_HostBindingHandler() { return ctx.onClick(); })("keydown", function pgUploadBtnComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("drop", function pgUploadBtnComponent_drop_HostBindingHandler($event) { return ctx.onFileDrop($event); })("dragover", function pgUploadBtnComponent_dragover_HostBindingHandler($event) { return ctx.onFileDrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", "0")("role", "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("upload", true);
    } }, inputs: { classes: "classes", options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], attrs: _c1, ngContentSelectors: _c2, decls: 3, vars: 2, consts: [["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]], template: function pgUploadBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function pgUploadBtnComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", ctx.options.multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("accept", ctx.options.accept);
    } }, encapsulation: 2 });


/***/ }),

/***/ 43699:
/*!*******************************************************************!*\
  !*** ./src/app/@pages/components/upload/upload-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgUploadListComponent": () => (/* binding */ pgUploadListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../progress/progress.component */ 32559);




function pgUploadListComponent_div_0_ng_template_1_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.locale.uploading);
} }
function pgUploadListComponent_div_0_ng_template_1_ng_container_0_ng_container_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 14);
} }
function pgUploadListComponent_div_0_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, pgUploadListComponent_div_0_ng_template_1_ng_container_0_ng_container_1_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, pgUploadListComponent_div_0_ng_template_1_ng_container_0_ng_container_1_i_2_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.listType === "picture-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.listType !== "picture-card");
} }
function pgUploadListComponent_div_0_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, pgUploadListComponent_div_0_ng_template_1_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1.status === "uploading" || !file_r1.thumbUrl && !file_r1.url)("ngIfElse", _r15);
} }
function pgUploadListComponent_div_0_ng_template_1_ng_template_1_pg_progress_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pg-progress", 17);
} }
function pgUploadListComponent_div_0_ng_template_1_ng_template_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "link_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function pgUploadListComponent_div_0_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, pgUploadListComponent_div_0_ng_template_1_ng_template_1_pg_progress_0_Template, 1, 0, "pg-progress", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, pgUploadListComponent_div_0_ng_template_1_ng_template_1_i_1_Template, 2, 0, "i", 16);
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1.status === "uploading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1.status !== "uploading");
} }
function pgUploadListComponent_div_0_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function pgUploadListComponent_div_0_ng_template_1_ng_template_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.handlePreview(file_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", file_r1.thumbUrl || file_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", file_r1.thumbUrl || file_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", file_r1.name);
} }
function pgUploadListComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, pgUploadListComponent_div_0_ng_template_1_ng_container_0_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, pgUploadListComponent_div_0_ng_template_1_ng_template_1_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, pgUploadListComponent_div_0_ng_template_1_ng_template_3_Template, 2, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.listType === "picture" || ctx_r3.listType === "picture-card")("ngIfElse", _r13);
} }
function pgUploadListComponent_div_0_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function pgUploadListComponent_div_0_ng_template_3_ng_container_0_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.handlePreview(file_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", file_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", file_r1.thumbUrl || file_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r1.name);
} }
function pgUploadListComponent_div_0_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function pgUploadListComponent_div_0_ng_template_3_ng_template_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.handlePreview(file_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", file_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r1.name);
} }
function pgUploadListComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, pgUploadListComponent_div_0_ng_template_3_ng_container_0_Template, 3, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, pgUploadListComponent_div_0_ng_template_3_ng_template_1_Template, 2, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1.url)("ngIfElse", _r29);
} }
function pgUploadListComponent_div_0_ng_template_7_Template(rf, ctx) { }
function pgUploadListComponent_div_0_ng_template_8_Template(rf, ctx) { }
const _c0 = function () { return { opacity: 0.5, "pointer-events": "none" }; };
function pgUploadListComponent_div_0_ng_container_9_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function pgUploadListComponent_div_0_ng_container_9_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.handlePreview(file_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r40.locale.previewFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", file_r1.thumbUrl || file_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngStyle", !(file_r1.url || file_r1.thumbUrl) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
} }
function pgUploadListComponent_div_0_ng_container_9_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function pgUploadListComponent_div_0_ng_container_9_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.handleClose(file_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r41.locale.removeFile);
} }
function pgUploadListComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, pgUploadListComponent_div_0_ng_container_9_a_2_Template, 3, 4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, pgUploadListComponent_div_0_ng_container_9_i_3_Template, 2, 1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.icons.showPreviewIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.icons.showRemoveIcon);
} }
function pgUploadListComponent_div_0_ng_template_10_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function pgUploadListComponent_div_0_ng_template_10_i_0_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.handleClose(file_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r49.locale.removeFile);
} }
function pgUploadListComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, pgUploadListComponent_div_0_ng_template_10_i_0_Template, 2, 1, "i", 26);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.icons.showRemoveIcon);
} }
function pgUploadListComponent_div_0_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "pg-progress", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function pgUploadListComponent_div_0_div_12_ng_template_2_pg_progress_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pg-progress", 34);
} }
function pgUploadListComponent_div_0_div_12_ng_template_2_pg_progress_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pg-progress", 35);
} }
function pgUploadListComponent_div_0_div_12_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, pgUploadListComponent_div_0_div_12_ng_template_2_pg_progress_0_Template, 1, 0, "pg-progress", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, pgUploadListComponent_div_0_div_12_ng_template_2_pg_progress_1_Template, 1, 0, "pg-progress", 33);
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1.percent == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1.percent != 0);
} }
function pgUploadListComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, pgUploadListComponent_div_0_div_12_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, pgUploadListComponent_div_0_div_12_ng_template_2_Template, 2, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.listType === "picture-card")("ngIfElse", _r54);
} }
function pgUploadListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, pgUploadListComponent_div_0_ng_template_1_Template, 5, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, pgUploadListComponent_div_0_ng_template_3_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, pgUploadListComponent_div_0_ng_template_7_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, pgUploadListComponent_div_0_ng_template_8_Template, 0, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, pgUploadListComponent_div_0_ng_container_9_Template, 4, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, pgUploadListComponent_div_0_ng_template_10_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, pgUploadListComponent_div_0_div_12_Template, 4, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("list-group-item upload-", file_r1.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@itemState", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.listType === "picture-card" && file_r1.status !== "uploading")("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", file_r1.status === "uploading" && ctx_r0.progressType !== "circle");
} }
class pgUploadListComponent {
    // endregion
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        // endregion
        // region: styles
        this._prefixCls = 'upload-list';
        this._classList = [];
        // endregion
        // region: render
        this.locale = {
            uploading: 'Uploading',
            previewFile: 'Preview File',
            removeFile: 'Remove File'
        };
    }
    _setClassMap() {
        this._classList.forEach(cls => this._renderer.removeClass(this._el.nativeElement, cls));
        this._classList = [this._prefixCls, `${this._prefixCls}-${this.listType}`].filter(item => !!item);
        this._classList.forEach(cls => this._renderer.addClass(this._el.nativeElement, cls));
    }
    handlePreview(file, e) {
        if (!this.onPreview)
            return;
        e.preventDefault();
        return this.onPreview(file);
    }
    handleClose(file) {
        if (this.onRemove)
            this.onRemove(file);
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        this._setClassMap();
    }
}
pgUploadListComponent.ɵfac = function pgUploadListComponent_Factory(t) { return new (t || pgUploadListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
pgUploadListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: pgUploadListComponent, selectors: [["pg-upload-list"]], hostVars: 4, hostBindings: function pgUploadListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("list-group", true)("upload-list", true);
    } }, inputs: { listType: "listType", items: "items", icons: "icons", progressType: "progressType", onPreview: "onPreview", onRemove: "onRemove" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], ["icon", ""], ["preview", ""], [1, "list-group-item-inner", "justify-content-between"], [1, "d-flex"], [3, "ngTemplateOutlet"], [4, "ngIf", "ngIfElse"], ["cross", ""], ["class", "item-progress", 4, "ngIf"], ["defIcon", ""], ["thumbIcon", ""], ["class", "upload-list-item-uploading-text", 4, "ngIf"], ["class", "anticon anticon-picture upload-list-item-thumbnail", 4, "ngIf"], [1, "upload-list-item-uploading-text"], [1, "anticon", "anticon-picture", "upload-list-item-thumbnail"], ["type", "circle", "indeterminate", "true", 4, "ngIf"], ["class", "pg-icon p-l-5 p-r-5", 4, "ngIf"], ["type", "circle", "indeterminate", "true"], [1, "pg-icon", "p-l-5", "p-r-5"], ["target", "_blank", "rel", "noopener noreferrer", 1, "img-thumbnail", 3, "href", "click"], [3, "src"], ["prevText", ""], ["target", "_blank", "rel", "noopener noreferrer", 1, "list-item-name", 3, "href", "title", "click"], [1, "list-item-name", 3, "title", "click"], [1, "upload-list-item-actions"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click", 4, "ngIf"], ["class", "pg-icon", 3, "title", "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click"], [1, "pg-icon"], [1, "pg-icon", 3, "title", "click"], [1, "item-progress"], ["determineBlock", ""], ["type", "bar", "indeterminate", "true", 4, "ngIf"], ["type", "bar", "indeterminate", "false", "value", "file.percent", 4, "ngIf"], ["type", "bar", "indeterminate", "true"], ["type", "bar", "indeterminate", "false", "value", "file.percent"]], template: function pgUploadListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, pgUploadListComponent_div_0_Template, 13, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _progress_progress_component__WEBPACK_IMPORTED_MODULE_0__.ProgressComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('itemState', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ height: '0', width: '0', opacity: 0 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(150, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ height: '*', width: '*', opacity: 1 }))]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(150, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ height: '0', width: '0', opacity: 0 }))])
            ])
        ] } });


/***/ }),

/***/ 68843:
/*!**************************************************************!*\
  !*** ./src/app/@pages/components/upload/upload.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgUploadComponent": () => (/* binding */ pgUploadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _util_convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/convert */ 47429);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _upload_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-list.component */ 43699);
/* harmony import */ var _upload_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-btn.component */ 47298);
// tslint:disable:ordered-imports no-any








const _c0 = ["upload"];
function pgUploadComponent_ng_template_0_pg_upload_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "pg-upload-list", 7);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("listType", ctx_r11.ListType)("items", ctx_r11.FileList)("icons", ctx_r11.ShowUploadList)("onPreview", ctx_r11.Preview)("onRemove", ctx_r11.onRemove)("progressType", ctx_r11.progressType);
} }
function pgUploadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, pgUploadComponent_ng_template_0_pg_upload_list_0_Template, 1, 6, "pg-upload-list", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.ShowUploadList);
} }
function pgUploadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
} }
function pgUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
function pgUploadComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, pgUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx_r5.ShowButton ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r5._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r5._btnOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function pgUploadComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function pgUploadComponent_ng_container_6_ng_template_6_Template(rf, ctx) { }
const _c1 = function () { return ["upload-btn"]; };
function pgUploadComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("drop", function pgUploadComponent_ng_container_6_Template_div_drop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.fileDrop($event); })("dragover", function pgUploadComponent_ng_container_6_Template_div_dragover_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.fileDrop($event); })("dragleave", function pgUploadComponent_ng_container_6_Template_div_dragleave_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.fileDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 13, 10)(4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, pgUploadComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, pgUploadComponent_ng_container_6_ng_template_6_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r6.extraClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r6._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r6._btnOptions)("classes", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function pgUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) { }
function pgUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template(rf, ctx) { }
function pgUploadComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, pgUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, pgUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function pgUploadComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, pgUploadComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.ListType === "picture-card")("ngIfElse", _r9);
} }
function pgUploadComponent_ng_template_9_ng_template_0_Template(rf, ctx) { }
function pgUploadComponent_ng_template_9_ng_template_1_Template(rf, ctx) { }
function pgUploadComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, pgUploadComponent_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, pgUploadComponent_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
const _c2 = ["*"];
class pgUploadComponent {
    // endregion
    constructor(cd) {
        this.cd = cd;
        this.inited = false;
        // region: fields
        this.Type = 'select';
        this.Limit = 0;
        this.Size = 0;
        this.Filter = [];
        this.FileList = [];
        this.FileListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this._disabled = false;
        this.ListType = 'text';
        this._multiple = false;
        this.Name = 'file';
        this._showUploadList = true;
        this._showBtn = true;
        this._withCredentials = false;
        this.Change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.uploadErrorText = 'Error Upload';
        this.onStart = (file) => {
            if (!this.FileList)
                this.FileList = [];
            const targetItem = this.fileToObject(file);
            targetItem.status = 'uploading';
            this.FileList.push(targetItem);
            this.genThumb(targetItem);
            this.FileListChange.emit(this.FileList);
            this.Change.emit({ file: targetItem, fileList: this.FileList });
            // fix ie progress
            if (!window.FormData) {
                this.autoUpdateProgress(targetItem);
            }
            this.cd.detectChanges();
        };
        this.onProgress = (e, file) => {
            const fileList = this.FileList;
            const targetItem = this.getFileItem(file, fileList);
            // removed
            if (!targetItem) {
                return;
            }
            targetItem.percent = e.percent;
            this.Change.emit({
                event: e,
                file: { ...targetItem },
                fileList: this.FileList
            });
            this.cd.detectChanges();
        };
        this.onSuccess = (res, file, xhr) => {
            this.clearProgressTimer();
            const fileList = this.FileList;
            const targetItem = this.getFileItem(file, fileList);
            // removed
            if (!targetItem) {
                return;
            }
            targetItem.status = 'complete';
            targetItem.response = res;
            this.Change.emit({
                file: { ...targetItem },
                fileList
            });
            this.cd.detectChanges();
        };
        this.onError = (err, file) => {
            this.clearProgressTimer();
            const fileList = this.FileList;
            const targetItem = this.getFileItem(file, fileList);
            // removed
            if (!targetItem) {
                return;
            }
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem.message = this.genErr(file);
            this.Change.emit({
                file: { ...targetItem },
                fileList
            });
            this.cd.detectChanges();
        };
        // endregion
        // region: list
        this.onRemove = (file) => {
            this.upload.abort(file);
            file.status = 'removed';
            (this.Remove ? (this.Remove instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable ? this.Remove : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.Remove(file))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(true))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((res) => res))
                .subscribe(res => {
                const removedFileList = this.removeFileItem(file, this.FileList);
                if (removedFileList) {
                    this.FileList = removedFileList;
                    this.Change.emit({
                        file,
                        fileList: removedFileList
                    });
                    this.FileListChange.emit(this.FileList);
                    this.cd.detectChanges();
                }
            });
        };
        // endregion
        // region: styles
        this._prefixCls = 'upload';
        this._classList = [];
    }
    set Disabled(value) {
        this._disabled = (0,_util_convert__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    }
    get Disabled() {
        return this._disabled;
    }
    set Multiple(value) {
        this._multiple = (0,_util_convert__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    }
    get Multiple() {
        return this._multiple;
    }
    set ShowUploadList(value) {
        this._showUploadList = typeof value === 'boolean' ? (0,_util_convert__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value) : value;
    }
    get ShowUploadList() {
        return this._showUploadList;
    }
    set ShowButton(value) {
        this._showBtn = (0,_util_convert__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    }
    get ShowButton() {
        return this._showBtn;
    }
    set WithCredentials(value) {
        this._withCredentials = (0,_util_convert__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    }
    get WithCredentials() {
        return this._withCredentials;
    }
    zipOptions() {
        if (typeof this.ShowUploadList === 'boolean' && this.ShowUploadList) {
            this.ShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true
            };
        }
        // filters
        const filters = this.Filter.slice();
        if (this.Multiple && this.Limit > 0 && filters.findIndex(w => w.name === 'limit') === -1) {
            filters.push({
                name: 'limit',
                fn: (fileList) => fileList.slice(-this.Limit)
            });
        }
        if (this.Size > 0 && filters.findIndex(w => w.name === 'size') === -1) {
            filters.push({
                name: 'size',
                fn: (fileList) => fileList.filter(w => w.size / 1024 <= this.Size)
            });
        }
        if (this.FileType && this.FileType.length > 0 && filters.findIndex(w => w.name === 'type') === -1) {
            const types = this.FileType.split(',');
            filters.push({
                name: 'type',
                fn: (fileList) => fileList.filter(w => ~types.indexOf(w.type))
            });
        }
        this._btnOptions = {
            disabled: this.Disabled,
            accept: this.Accept,
            action: this.Action,
            beforeUpload: this.BeforeUpload,
            customRequest: this.CustomRequest,
            data: this.Data,
            headers: this.Headers,
            name: this.Name,
            multiple: this.Multiple,
            withCredentials: this.WithCredentials,
            filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    }
    // region: upload
    fileToObject(file) {
        return {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.filename || file.name,
            size: file.size,
            type: file.type,
            uid: file.uid,
            response: file.response,
            error: file.error,
            percent: 0,
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            originFileObj: file
        };
    }
    getFileItem(file, fileList) {
        const matchKey = file.uid !== undefined ? 'uid' : 'name';
        return fileList.filter(item => item[matchKey] === file[matchKey])[0];
    }
    removeFileItem(file, fileList) {
        const matchKey = file.uid !== undefined ? 'uid' : 'name';
        const removed = fileList.filter(item => item[matchKey] !== file[matchKey]);
        if (removed.length === fileList.length) {
            return null;
        }
        return removed;
    }
    genErr(file) {
        return file.response && typeof file.response === 'string'
            ? file.response
            : (file.error && file.error.statusText) || this.uploadErrorText;
    }
    clearProgressTimer() {
        clearInterval(this.progressTimer);
    }
    genPercentAdd() {
        let k = 0.1;
        const i = 0.01;
        const end = 0.98;
        return (s) => {
            let start = s;
            if (start >= end) {
                return start;
            }
            start += k;
            k = k - i;
            if (k < 0.001) {
                k = 0.001;
            }
            return start * 100;
        };
    }
    autoUpdateProgress(file) {
        const getPercent = this.genPercentAdd();
        let curPercent = 0;
        this.clearProgressTimer();
        this.progressTimer = setInterval(() => {
            curPercent = getPercent(curPercent);
            this.onProgress({
                percent: curPercent
            }, file);
        }, 200);
    }
    genThumb(file) {
        if (typeof document === 'undefined' ||
            typeof window === 'undefined' ||
            !window.FileReader ||
            !window.File ||
            !(file.originFileObj instanceof File) ||
            file.thumbUrl !== undefined) {
            return;
        }
        file.thumbUrl = '';
        const reader = new FileReader();
        reader.onloadend = e => {
            file.thumbUrl = reader.result;
        };
        reader.readAsDataURL(file.originFileObj);
    }
    fileDrop(e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this._setClassMap();
    }
    _setClassMap() {
        const isDrag = this.Type === 'drag';
        let subCls = [];
        if (this.Type === 'drag') {
            subCls = [
                this.FileList.some(file => file.status === 'uploading') && `${this._prefixCls}-drag-uploading`,
                this.dragState === 'dragover' && `${this._prefixCls}-drag-hover`
            ];
        }
        else {
            subCls = [`${this._prefixCls}-select-${this.ListType}`];
        }
        this._classList = [
            this._prefixCls,
            `${this._prefixCls}-${this.Type}`,
            ...subCls,
            this.Disabled && `${this._prefixCls}-disabled`
        ].filter(item => !!item);
        this.cd.detectChanges();
    }
    // endregion
    ngOnInit() {
        this.inited = true;
    }
    ngOnChanges(changes) {
        if (changes.FileList)
            (this.FileList || []).forEach(file => (file.message = this.genErr(file)));
        this.zipOptions()._setClassMap();
    }
    ngOnDestroy() {
        this.clearProgressTimer();
    }
}
pgUploadComponent.ɵfac = function pgUploadComponent_Factory(t) { return new (t || pgUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
pgUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: pgUploadComponent, selectors: [["pg-upload"]], viewQuery: function pgUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.upload = _t.first);
    } }, inputs: { Type: "Type", Limit: "Limit", Size: "Size", FileType: "FileType", Accept: "Accept", Action: "Action", progressType: "progressType", BeforeUpload: "BeforeUpload", CustomRequest: "CustomRequest", Data: "Data", Filter: "Filter", FileList: "FileList", Disabled: "Disabled", Headers: "Headers", ListType: "ListType", extraClass: "extraClass", Multiple: "Multiple", Name: "Name", ShowUploadList: "ShowUploadList", ShowButton: "ShowButton", WithCredentials: "WithCredentials", Remove: "Remove", Preview: "Preview" }, outputs: { FileListChange: "FileListChange", Change: "Change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 11, vars: 2, consts: [["list", ""], ["con", ""], ["btn", ""], [4, "ngIf", "ngIfElse"], ["select", ""], ["pic", ""], [3, "listType", "items", "icons", "onPreview", "onRemove", "progressType", 4, "ngIf"], [3, "listType", "items", "icons", "onPreview", "onRemove", "progressType"], [3, "ngClass"], ["pg-upload-btn", "", 3, "options"], ["upload", ""], [3, "ngTemplateOutlet"], [3, "ngClass", "drop", "dragover", "dragleave"], ["pg-upload-btn", "", 3, "options", "classes"], [1, "upload-drag-container"]], template: function pgUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, pgUploadComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, pgUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, pgUploadComponent_ng_template_4_Template, 4, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, pgUploadComponent_ng_container_6_Template, 7, 9, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, pgUploadComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, pgUploadComponent_ng_template_9_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Type === "drag")("ngIfElse", _r7);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _upload_list_component__WEBPACK_IMPORTED_MODULE_1__.pgUploadListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _upload_btn_component__WEBPACK_IMPORTED_MODULE_2__.pgUploadBtnComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQuc2NzcyJ9 */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 65362:
/*!***********************************************************!*\
  !*** ./src/app/@pages/components/upload/upload.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pgUploadModule": () => (/* binding */ pgUploadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _progress_progress_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../progress/progress.module */ 76187);
/* harmony import */ var _upload_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-btn.component */ 47298);
/* harmony import */ var _upload_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-list.component */ 43699);
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.component */ 68843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







class pgUploadModule {
}
pgUploadModule.ɵfac = function pgUploadModule_Factory(t) { return new (t || pgUploadModule)(); };
pgUploadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: pgUploadModule });
pgUploadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _progress_progress_module__WEBPACK_IMPORTED_MODULE_0__.ProgressModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](pgUploadModule, { declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_3__.pgUploadComponent,
        _upload_btn_component__WEBPACK_IMPORTED_MODULE_1__.pgUploadBtnComponent,
        _upload_list_component__WEBPACK_IMPORTED_MODULE_2__.pgUploadListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _progress_progress_module__WEBPACK_IMPORTED_MODULE_0__.ProgressModule], exports: [_upload_component__WEBPACK_IMPORTED_MODULE_3__.pgUploadComponent] }); })();


/***/ }),

/***/ 47429:
/*!***************************************************!*\
  !*** ./src/app/@pages/components/util/convert.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toBoolean": () => (/* binding */ toBoolean)
/* harmony export */ });
function toBoolean(value) {
    return value === '' || (value && value !== 'false');
}


/***/ }),

/***/ 41930:
/*!**********************************************************!*\
  !*** ./src/app/@pages/components/view/view.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewDirective": () => (/* binding */ ViewDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ViewDirective {
    constructor(parallaxEl, renderer) {
        this.parallaxEl = parallaxEl;
        this.renderer = renderer;
    }
    onClick(e) {
        e.preventDefault();
        if (this.parentView != null) {
            var parent = document.getElementById(this.parentView);
            if (parent) {
                if (this.animationType != null) {
                    pg.toggleClass(parent, this.animationType);
                }
                else {
                    pg.toggleClass(parent, 'push-parrallax');
                }
            }
        }
    }
}
ViewDirective.ɵfac = function ViewDirective_Factory(t) { return new (t || ViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ViewDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ViewDirective, selectors: [["", "pg-view-trigger", ""]], hostBindings: function ViewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { parentView: "parentView", animationType: "animationType" } });


/***/ }),

/***/ 82116:
/*!*********************************************************************************!*\
  !*** ./src/app/@pages/layouts/blank-simplywhite/blank-simplywhite.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankSimplywhiteComponent": () => (/* binding */ BlankSimplywhiteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BlankSimplywhiteComponent {
    constructor() { }
    ngOnInit() { }
}
BlankSimplywhiteComponent.ɵfac = function BlankSimplywhiteComponent_Factory(t) { return new (t || BlankSimplywhiteComponent)(); };


/***/ }),

/***/ 80283:
/*!*********************************************************!*\
  !*** ./src/app/@pages/layouts/blank/blank.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankComponent": () => (/* binding */ BlankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/side-nav/side-nav.component */ 37644);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ 36290);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




const _c0 = ["root"];
class BlankComponent {
    constructor() { }
    ngOnInit() { }
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["blank-layouts"]], viewQuery: function BlankComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.root = _t.first);
    } }, decls: 7, vars: 0, consts: [[1, "flex"], [1, "w-64"], [1, "flex-grow"]], template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-side-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();


/***/ }),

/***/ 82788:
/*!*****************************************!*\
  !*** ./src/app/@pages/layouts/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankComponent": () => (/* reexport safe */ _blank_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent),
/* harmony export */   "BlankSimplywhiteComponent": () => (/* reexport safe */ _blank_simplywhite_blank_simplywhite_component__WEBPACK_IMPORTED_MODULE_3__.BlankSimplywhiteComponent),
/* harmony export */   "RootLayout": () => (/* reexport safe */ _root_root_component__WEBPACK_IMPORTED_MODULE_0__.RootLayout),
/* harmony export */   "SimplyWhiteLayout": () => (/* reexport safe */ _simplywhite_simplywhite_component__WEBPACK_IMPORTED_MODULE_2__.SimplyWhiteLayout)
/* harmony export */ });
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root/root.component */ 86607);
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank/blank.component */ 80283);
/* harmony import */ var _simplywhite_simplywhite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simplywhite/simplywhite.component */ 3042);
/* harmony import */ var _blank_simplywhite_blank_simplywhite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank-simplywhite/blank-simplywhite.component */ 82116);




//Remove in production
//This is a demo a layout


/***/ }),

/***/ 86607:
/*!*******************************************************!*\
  !*** ./src/app/@pages/layouts/root/root.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RootLayout": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_toggler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/toggler.service */ 76226);





const _c0 = ["root"];
class RootLayout {
    constructor(toggler, router, document) {
        this.toggler = toggler;
        this.router = router;
        this.document = document;
        this._boxed = false;
        this._menuPin = false;
        this._pageContainerClass = "";
        this._contentClass = "";
        this.currentLanguage = "ar";
        this._footer = true;
        this._menuDrawerOpen = false;
        //Mobile
        this._secondarySideBar = false;
        //Mobile
        this._mobileSidebar = false;
        //Mobile
        this._mobileHorizontalMenu = false;
        this._subscriptions = [];
        this.contentClass = "";
        this.pageWrapperClass = "";
        this.footer = true;
        if (this.layoutState) {
            pg.addClass(document.body, this.layoutState);
        }
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                var root = this.router.routerState.snapshot.root;
                while (root) {
                    if (root.children && root.children.length) {
                        root = root.children[0];
                    }
                    else if (root.data) {
                        //Custom Route Data here
                        this._pageTitle = root.data["title"];
                        this._layoutOption = root.data["layoutOption"];
                        this._boxed = root.data["boxed"];
                        break;
                    }
                    else {
                        break;
                    }
                }
                //Reset Any Extra Layouts added from content pages
                pg.removeClass(document.body, this.extraLayoutClass);
                //Close Sidebar and Horizonta Menu
                if (this._mobileSidebar) {
                    this._mobileSidebar = false;
                    pg.removeClass(document.body, "sidebar-open");
                    this.toggler.toggleMobileSideBar(this._mobileSidebar);
                }
                this._mobileHorizontalMenu = false;
                this.toggler.toggleMobileHorizontalMenu(this._mobileHorizontalMenu);
                //Scoll Top
                this.scrollToTop();
            }
            //Subscribition List
            this._subscriptions.push(this.toggler.pageContainerClass.subscribe((state) => {
                this._pageContainerClass = state;
            }));
            this._subscriptions.push(this.toggler.contentClass.subscribe((state) => {
                this._contentClass = state;
            }));
            this._subscriptions.push(this.toggler.bodyLayoutClass.subscribe((state) => {
                if (state) {
                    this.extraLayoutClass = state;
                    pg.addClass(document.body, this.extraLayoutClass);
                }
            }));
            this._subscriptions.push(this.toggler.Applayout.subscribe((state) => {
                this.changeLayout(state);
            }));
            this._subscriptions.push(this.toggler.Footer.subscribe((state) => {
                this._footer = state;
            }));
            this._subscriptions.push(this.toggler.mobileHorizontaMenu.subscribe((state) => {
                this._mobileHorizontalMenu = state;
            }));
        });
        const data = localStorage.getItem("lang");
        if (data) {
            this.currentLanguage = data;
            document.body.setAttribute("dir", data === "ar" ? "rtl" : "ltr");
            if (data === "ar") {
                this.setDir("rtl");
                pg.addClass(document.body, "rtls");
            }
            else {
                this.setDir("ltr");
                pg.removeClass(document.body, "rtls");
            }
        }
        else {
            this.setDir("rtl");
            document.body.setAttribute("dir", "rtl");
            pg.addClass(document.body, "rtls");
        }
    }
    setDir(dir) { }
    /** @function changeLayout
     *   @description Add Document Layout Class
     */
    changeLayout(type) {
        this.layoutState = type;
        if (type) {
            pg.addClass(document.body, type);
        }
    }
    logout() { }
    changeLanguage(val) {
        this.currentLanguage = val;
        localStorage.setItem("lang", val);
        if (val === "ar") {
            this.setDir("rtl");
            pg.addClass(document.body, "rtls");
        }
        else {
            this.setDir("ltr");
            pg.removeClass(document.body, "rtls");
        }
        document.body.setAttribute("dir", val === "ar" ? "rtl" : "ltr");
        location.reload();
    }
    /** @function removeLayout
     *   @description Remove Document Layout Class
     */
    removeLayout(type) {
        pg.removeClass(document.body, type);
    }
    ngOnInit() { }
    ngOnDestroy() {
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
    ngAfterViewInit() { }
    /** @function scrollToTop
     *   @description Force to scroll to top of page. Used on Route
     */
    scrollToTop() {
        let top = window.pageYOffset;
        if (top == 0) {
            let scroller = document.querySelector(".page-container");
            if (scroller)
                scroller.scrollTo(0, 0);
        }
        else {
            window.scrollTo(0, 0);
        }
    }
    /** @function openQuickView
     *   @description Show Quick View Component / Right Sidebar - Service
     */
    openQuickView($e) {
        $e.preventDefault();
        this.toggler.toggleQuickView();
    }
    /** @function openSearch
     *   @description Show Quick Search Component - Service
     */
    openSearch($e) {
        $e.preventDefault();
        this.toggler.toggleSearch(true);
    }
    /** @function toggleMenuPin
     *   @description Permanently Open / Close Main Sidebar
     */
    toggleMenuPin($e) {
        if (pg.isVisibleSm()) {
            this._menuPin = false;
            return;
        }
        if (this._menuPin) {
            pg.removeClass(document.body, "menu-pin");
            this._menuPin = false;
        }
        else {
            pg.addClass(document.body, "menu-pin");
            this._menuPin = true;
        }
    }
    /** @function toggleMenuDrawer
     *   @description Open Main Sidebar Menu Drawer - Service
     */
    toggleMenuDrawer() {
        this._menuDrawerOpen = this._menuDrawerOpen == true ? false : true;
        this.toggler.toggleMenuDrawer();
    }
    /** @function toggleMobileSidebar
     *   @description Open Main Sidebar on Mobile - Service
     */
    toggleMobileSidebar() {
        if (this._mobileSidebar) {
            this._mobileSidebar = false;
            pg.removeClass(document.body, "sidebar-open");
        }
        else {
            this._mobileSidebar = true;
            pg.addClass(document.body, "sidebar-open");
        }
        this.toggler.toggleMobileSideBar(this._mobileSidebar);
    }
    /** @function toggleHorizontalMenuMobile
     *   @description Open Secondary Sidebar on Mobile - Service
     */
    toggleSecondarySideBar() {
        this._secondarySideBar = this._secondarySideBar == true ? false : true;
        this.toggler.toggleSecondarySideBar(this._secondarySideBar);
    }
    /** @function toggleHorizontalMenuMobile
     *   @description Call Horizontal Menu Toggle Service for mobile
     */
    toggleHorizontalMenuMobile() {
        this._mobileHorizontalMenu =
            this._mobileHorizontalMenu == true ? false : true;
        this.toggler.toggleMobileHorizontalMenu(this._mobileHorizontalMenu);
    }
    onResize() {
        this.autoHideMenuPin();
    }
    //Utils
    autoHideMenuPin() {
        if (window.innerWidth < 1025) {
            if (pg.hasClass(document.body, "menu-pin")) {
                pg.addClass(document.body, "menu-unpinned");
                pg.removeClass(document.body, "menu-pin");
            }
        }
        else {
            if (pg.hasClass(document.body, "menu-unpinned")) {
                pg.addClass(document.body, "menu-pin");
            }
        }
    }
}
RootLayout.ɵfac = function RootLayout_Factory(t) { return new (t || RootLayout)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_toggler_service__WEBPACK_IMPORTED_MODULE_0__.pagesToggleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
RootLayout.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RootLayout, selectors: [["root-layout"]], viewQuery: function RootLayout_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.root = _t.first);
    } }, hostBindings: function RootLayout_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function RootLayout_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, inputs: { contentClass: "contentClass", pageWrapperClass: "pageWrapperClass", footer: "footer" }, decls: 2, vars: 0, template: function RootLayout_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " root works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb290LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3042:
/*!*********************************************************************!*\
  !*** ./src/app/@pages/layouts/simplywhite/simplywhite.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimplyWhiteLayout": () => (/* binding */ SimplyWhiteLayout)
/* harmony export */ });
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../root/root.component */ 86607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class SimplyWhiteLayout extends _root_root_component__WEBPACK_IMPORTED_MODULE_0__.RootLayout {
    ngOnInit() { }
}
SimplyWhiteLayout.ɵfac = /*@__PURE__*/ function () { let ɵSimplyWhiteLayout_BaseFactory; return function SimplyWhiteLayout_Factory(t) { return (ɵSimplyWhiteLayout_BaseFactory || (ɵSimplyWhiteLayout_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SimplyWhiteLayout)))(t || SimplyWhiteLayout); }; }();


/***/ }),

/***/ 76226:
/*!****************************************************!*\
  !*** ./src/app/@pages/services/toggler.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pagesToggleService": () => (/* binding */ pagesToggleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class pagesToggleService {
    constructor() {
        // Search Toggle
        this._searchToggle = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.searchToggle = this._searchToggle.asObservable();
        // Quickview Toggle
        this._quickViewToggle = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.quickViewToggle = this._quickViewToggle.asObservable();
        // Sidebar Toggle - Mobile
        this._sideBarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.sideBarToggle = this._sideBarToggle.asObservable();
        // Secondary Sidebar Toggle - Mobile
        this._secondarySideBarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.secondarySideBarToggle = this._secondarySideBarToggle.asObservable();
        // Horizontal Menu Toggle - Mobile
        this._mobileHorizontaMenu = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.mobileHorizontaMenu = this._mobileHorizontaMenu.asObservable();
        // Menu Pin Toggle
        this._menuPinToggle = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.menuPinToggle = this._menuPinToggle.asObservable();
        // Menu Pin Toggle
        this._menuDrawer = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.menuDrawer = this._menuDrawer.asObservable();
        // Page Wrapper Class
        this._pageContainerClass = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.pageContainerClass = this._pageContainerClass.asObservable();
        // Page Content Class
        this._contentClass = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.contentClass = this._contentClass.asObservable();
        // Header Class
        this._headerClass = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.headerClass = this._headerClass.asObservable();
        // Body Layout Class
        this._bodyLayoutClass = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.bodyLayoutClass = this._bodyLayoutClass.asObservable();
        // App Layout
        this._layout = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.Applayout = this._layout.asObservable();
        // Footer Visiblity
        this._footer = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.Footer = this._footer.asObservable();
        // Page Container Hover Event - Used for sidebar
        this._pageContainerHover = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.pageContainerHover = this._pageContainerHover.asObservable();
    }
    setContent(className) {
        this._contentClass.next(className);
    }
    setPageContainer(className) {
        this._pageContainerClass.next(className);
    }
    setHeaderClass(className) {
        this._headerClass.next(className);
    }
    setBodyLayoutClass(className) {
        this._bodyLayoutClass.next(className);
    }
    removeBodyLayoutClass(className) {
        this._bodyLayoutClass.next(className);
    }
    changeLayout(className) {
        this._layout.next(className);
    }
    toggleSearch(toggle) {
        this._searchToggle.next({ text: toggle });
    }
    toggleMenuPin(toggle) {
        this._menuPinToggle.next({ text: toggle });
    }
    toggleMenuDrawer() {
        this._menuDrawer.next();
    }
    toggleQuickView() {
        this._quickViewToggle.next();
    }
    toggleMobileSideBar(toggle) {
        this._sideBarToggle.next(toggle);
    }
    toggleSecondarySideBar(toggle) {
        this._secondarySideBarToggle.next(toggle);
    }
    toggleMobileHorizontalMenu(toggle) {
        this._mobileHorizontaMenu.next(toggle);
    }
    toggleFooter(toggle) {
        this._footer.next(toggle);
    }
    triggerPageContainerHover(toggle) {
        this._pageContainerHover.next(toggle);
    }
}
pagesToggleService.ɵfac = function pagesToggleService_Factory(t) { return new (t || pagesToggleService)(); };
pagesToggleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: pagesToggleService, factory: pagesToggleService.ɵfac });


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class AppComponent {
    constructor() {
        this.title = "Talentlink";
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHammerConfig": () => (/* binding */ AppHammerConfig),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-quill */ 41588);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 62916);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@pages/layouts */ 82788);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 59403);
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/rest-api.service */ 84714);
/* harmony import */ var _services_interceptor_api_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/interceptor/api.interceptor */ 10758);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _pages_components_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./@pages/components/horizontal-menu/horizontal-menu.component */ 89438);
/* harmony import */ var _pages_components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./@pages/components/quickview/quickview.component */ 73828);
/* harmony import */ var _pages_components_quickview_quickview_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@pages/components/quickview/quickview.service */ 87244);
/* harmony import */ var _pages_components_search_overlay_search_overlay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./@pages/components/search-overlay/search-overlay.component */ 73510);
/* harmony import */ var _pages_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./@pages/components/sidebar/sidebar.component */ 39886);
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./@pages/services/toggler.service */ 76226);
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./@pages/components/shared.module */ 57732);
/* harmony import */ var _pages_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./@pages/components/list-view/list-view.module */ 93830);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 97977);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-bootstrap/modal */ 84712);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/login/login.component */ 78146);
/* harmony import */ var _shared_components_footer_btn_footer_btn_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/footer-btn/footer-btn.component */ 35308);
/* harmony import */ var _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/components/side-nav/side-nav.component */ 37644);
/* harmony import */ var _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/title/title.component */ 79896);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/header/header.component */ 36290);
/* harmony import */ var _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./@pages/components/select/select.module */ 78909);
/* harmony import */ var _pages_components_upload_upload_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./@pages/components/upload/upload.module */ 65362);
/* harmony import */ var _pages_components_message_message_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./@pages/components/message/message.module */ 45073);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 66526);
/* harmony import */ var _pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./@pages/components/message/message.service */ 24474);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/home.component */ 45067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 3184);


//Angular Core






//Routing
//Layouts - Import required layout only

//Thirdparty Components / Plugins - Optional













// import { NvD3Module } from 'ngx-nvd3';

















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
};
//Hammer Config Overide
//https://github.com/angular/angular/issues/10541
class AppHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false },
        };
    }
}
AppHammerConfig.ɵfac = /*@__PURE__*/ function () { let ɵAppHammerConfig_BaseFactory; return function AppHammerConfig_Factory(t) { return (ɵAppHammerConfig_BaseFactory || (ɵAppHammerConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetInheritedFactory"](AppHammerConfig)))(t || AppHammerConfig); }; }();
AppHammerConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjectable"]({ token: AppHammerConfig, factory: AppHammerConfig.ɵfac });
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [
        _pages_components_quickview_quickview_service__WEBPACK_IMPORTED_MODULE_8__.QuickviewService,
        _pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_23__.MessageService,
        _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_11__.pagesToggleService,
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.HAMMER_GESTURE_CONFIG,
            useClass: AppHammerConfig,
        },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        _services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HTTP_INTERCEPTORS, useClass: _services_interceptor_api_interceptor__WEBPACK_IMPORTED_MODULE_3__.ApiInterceptor, multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__.TabsModule.forRoot(),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbarModule,
            ngx_quill__WEBPACK_IMPORTED_MODULE_30__.QuillModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__.AppRoutes),
            _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule,
            _pages_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_13__.pgListViewModule,
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_34__.PaginationModule,
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_35__.ModalModule,
            _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_19__.pgSelectModule,
            _pages_components_upload_upload_module__WEBPACK_IMPORTED_MODULE_20__.pgUploadModule,
            _pages_components_message_message_module__WEBPACK_IMPORTED_MODULE_21__.MessageModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
        _pages_layouts__WEBPACK_IMPORTED_MODULE_0__.SimplyWhiteLayout,
        _pages_layouts__WEBPACK_IMPORTED_MODULE_0__.BlankComponent,
        _pages_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.SidebarComponent,
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__.LoginComponent,
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_18__.HeaderComponent,
        _pages_components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_7__.QuickviewComponent,
        _pages_components_search_overlay_search_overlay_component__WEBPACK_IMPORTED_MODULE_9__.SearchOverlayComponent,
        _pages_components_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_6__.HorizontalMenuComponent,
        _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_16__.SideNavComponent,
        _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_17__.TitleComponent,
        _shared_components_footer_btn_footer_btn_component__WEBPACK_IMPORTED_MODULE_15__.FooterBtnComponent,
        _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__.FooterComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_24__.HomeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_29__.TabsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbarModule, ngx_quill__WEBPACK_IMPORTED_MODULE_30__.QuillModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule, _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_12__.SharedModule,
        _pages_components_list_view_list_view_module__WEBPACK_IMPORTED_MODULE_13__.pgListViewModule,
        ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_34__.PaginationModule,
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_35__.ModalModule,
        _pages_components_select_select_module__WEBPACK_IMPORTED_MODULE_19__.pgSelectModule,
        _pages_components_upload_upload_module__WEBPACK_IMPORTED_MODULE_20__.pgUploadModule,
        _pages_components_message_message_module__WEBPACK_IMPORTED_MODULE_21__.MessageModule], exports: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_18__.HeaderComponent,
        _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_16__.SideNavComponent,
        _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_17__.TitleComponent,
        _shared_components_footer_btn_footer_btn_component__WEBPACK_IMPORTED_MODULE_15__.FooterBtnComponent,
        _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__.FooterComponent] }); })();


/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var _pages_layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@pages/layouts */ 82788);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 45067);


const AppRoutes = [
    {
        path: "",
        component: _pages_layouts__WEBPACK_IMPORTED_MODULE_0__.BlankComponent,
        children: [
            {
                path: "",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
                // canActivate: [AuthGuard],
            },
            {
                path: "d",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
                // canActivate: [AuthGuard],
            },
            {
                path: "f",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
                // canActivate: [AuthGuard],
            },
        ],
    },
    {
        path: "config",
        component: _pages_layouts__WEBPACK_IMPORTED_MODULE_0__.BlankComponent,
        children: [
            {
                path: "",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
                // canActivate: [AuthGuard],
            },
            {
                path: "a",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
                // canActivate: [AuthGuard],
            },
            {
                path: "s",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
                // canActivate: [AuthGuard],
            },
        ],
    },
    {
        path: "manage",
        component: _pages_layouts__WEBPACK_IMPORTED_MODULE_0__.BlankComponent,
        children: [
            {
                path: "",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
                // canActivate: [AuthGuard],
            },
            {
                path: "a",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
                // canActivate: [AuthGuard],
            },
            {
                path: "s",
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
                // canActivate: [AuthGuard],
            },
        ],
    },
    // {
    //   path: "",
    //   component: BlankComponent,
    //   children: [
    //     {
    //       path: "",
    //       component: DashboardComponent,
    //       canActivate: [AuthGuard],
    //     },
    //     {
    //       path: "dashboard",
    //       component: DashboardComponent,
    //       canActivate: [AuthGuard],
    //     },
    //   ],
    // },
    // {
    //   path: "application",
    //   canActivate: [AuthGuard],
    //   component: BlankComponent,
    //   children: [
    //     {
    //       path: "",
    //       component: ApplicationComponent,
    //     },
    //   ],
    // },
    // {
    //   path: "details/:uuid",
    //   canActivate: [AuthGuard],
    //   component: BlankComponent,
    //   children: [
    //     {
    //       path: "",
    //       component: ApplicationComponent,
    //     },
    //   ],
    // },
    // {
    //   path: "profile",
    //   canActivate: [AuthGuard],
    //   component: BlankComponent,
    //   children: [
    //     {
    //       path: "",
    //       component: ProfileComponent,
    //     },
    //   ],
    // },
    // {
    //   path: "home",
    //   canActivate: [AuthGuard],
    //   component: BlankComponent,
    //   children: [
    //     {
    //       path: "",
    //       component: DashboardComponent,
    //     },
    //   ],
    // },
    // {
    //   path: "login",
    //   component: BlankComponent,
    //   canActivate: [UnauthGuard],
    //   children: [
    //     {
    //       path: "",
    //       component: LoginComponent,
    //     },
    //   ],
    // },
    // {
    //   path: "signup",
    //   component: BlankComponent,
    //   canActivate: [UnauthGuard],
    //   children: [
    //     {
    //       path: "",
    //       component: SignupComponent,
    //     },
    //   ],
    // },
    // { path: "**", redirectTo: "dashboard" },
    // {
    //   path: "",
    //   component: AppComponent,
    //   loadChildren: () =>
    //     import("./modules/app/app.module").then((m) => m.AppModule),
    //   canActivate: [AuthGuard],
    // },
    // {
    //   path: "auth",
    //   loadChildren: () =>
    //     import("./modules/auth/auth.module").then((m) => m.AuthModule),
    //   canActivate: [UnauthGuard],
    // },
    // {
    //   path: "auth",
    //   component: BlankComponent,
    //   // canActivate: [AuthGuard],
    //   children: [
    //     {
    //       path: "",
    //       loadChildren: () =>
    //         import("./modules/auth/auth.module").then((m) => m.AuthModule),
    //     },
    //   ],
    // },
    // {
    //   path: "",
    //   component: BlankComponent,
    //   canActivate: [AuthGuard],
    //   children: [
    //     {
    //       path: "",
    //       loadChildren: () =>
    //       import("./modules/app/app.module").then((m) => m.AppModule),
    //     },
    //   ],
    // },
    // {
    //   path: "",
    //   component: SimplyWhiteLayout,
    //   children: [
    //     {
    //       path: "",
    //       component: BlankComponent,
    //       canActivate: [AuthGuard]
    //     },
    //     // { path: 'inventory', component: InventoryComponent },
    //     // { path: '**', redirectTo: '' },
    //   ],
    // },
    // {
    // path: "asd",
    // component: SimplyWhiteLayout,
    // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: "",
    //     loadChildren: () =>
    //       import("./modules/app/app.module").then((m) => m.AppModule),
    //   },
    // ],
    // },
];


/***/ }),

/***/ 78146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/storage.service */ 71188);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/header/header.component */ 36290);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ 66526);










function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.formStatus.message);
} }
function LoginComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Terms and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 29)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Thanks for your interest in RETM\u2019s Developer Portal! These RETM Developer Terms (these \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u201D) are a binding agreement between you (\u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "you");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u201D or \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u201D) and RETM and any of our related companies (\u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "RETM");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u201D, \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "we");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\u201D or \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u201D) and govern your use of our Developer Portal. If you are entering into these Terms on behalf of a company, organization or another legal entity, then \u201Cyou\u201D or \u201CDeveloper\u201D refers to that entity, and you represent and warrant that you have the authority to bind that entity to these Terms. If you do not have such authority, or if you do not agree with these Terms, you must not accept these Terms or use or access the Developer Portal. RETM may modify these Terms from time to time, subject to Section 19 (Changes to Terms) below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p")(28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "By clicking on \u201CI agree\u201D (or a similar button) or by using or accessing the Developer Portal, you agree to be bound by these Terms.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p")(31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "1 How These Terms Apply");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " These Terms apply if you use the Developer Portal to enable an application or service you operate (an \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\u201D) to integrate with RETM\u2019s proprietary cloud service and related applications (the \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "RETM Marketplace");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\u201D). Any use of the RETM Marketplace itself remains subject to the separate terms you\u2019ve entered into for your subscription to the RETM Marketplace (the \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "RETM Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\u201D). \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Developer Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\u201D means RETM\u2019s APIs, personal tokens, developer credentials and other tools or services allowing developers to interface with the RETM Marketplace, as may be updated or modified from time to time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "2 Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " To use the Developer Portal, you must complete any registration requirements established by RETM. You must keep any Developer credentials confidential, and not share them with any third parties. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "3 Use of Developer Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " Subject to these Terms, you may use the Developer Portal to enable your Application to integrate with the RETM Marketplace. All of your use rights in these Terms (including rights to use RETM Marks below) are limited, non-exclusive, non-sublicensable, non-transferable and revocable, and you may only use the Developer Portal in accordance with the Developer Policies (as defined below). You may permit your agents and contractors to exercise your rights on your behalf, provided you remain responsible for their compliance with these Terms. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "4 Developer Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " These Terms incorporate the then-current version of RETM\u2019s Developer Portal documentation (currently available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, ") and any other linked or referenced RETM terms (collectively, the \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Developer Policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "\u201D). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "5 Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " Your participation as a Developer and each Application are subject to RETM\u2019s ongoing approval in its sole discretion. We reserve the right to test Applications for security, performance and other criteria, and you agree to provide us with access to your Applications and other reasonably requested information at any time upon request. We may change our approval processes or any user or activation level threshold for approval at any time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "6 Access Limits");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, " RETM may monitor your use of the Developer Portal and, from time to time, may place limits on access to the Developer Portal (e.g., limits on numbers of calls per end user account). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "7 Listings on the RETM Marketplace");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, " RETM may make available Application listings or other features allowing end users to discover or enable Applications on the RETM Marketplace or RETM websites (\u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Listings");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "\u201D and its variants). To submit your Application for Listing, you must provide RETM with your product description, icons, Your Marks and related materials that we reasonably request (collectively, \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Application Package");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "\u201D). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " a. RETM Rights. If RETM approves your Application for Listing, then you hereby grant RETM a worldwide, non-exclusive license to (i) list, promote and market the availability of your Application in connection with the RETM Marketplace, RETM websites and related marketing materials, including rights to use, format, copy, distribute publicly perform and display your Application Package; and (ii) create screenshots and excerpts of your Application\u2019s usage with the RETM Marketplace. For clarity, RETM retains sole discretion and control over the placement, look and feel of any approved Listings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " b. Removals. You may request that we remove your Listing at any time by using your account in the Developer portal. We will use commercially reasonable efforts to promptly remove the Listing following receipt of your request. You agree to cooperate as requested by RETM regarding end user transition and communications. In addition to its other rights, RETM may temporarily or permanently take-down any Listing (and disable any Applications) in its discretion, without notice or liability to you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "8 Restrictions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " You may only use the Developer Portal as permitted in these Terms. You will not (and will not permit anyone else to): (a) access the Developer Portal except through personal tokens and credentials we provide; (b) attempt to circumvent any of the Developer Portal\u2019s access or usage limits; (c) sublicense, sell or grant third parties access to the Developer Portal or any end user account, other than permitted use by your agents or contractors in Section 3 (Use of Developer Portal); (d) use the Developer Portal for competitive purposes or to operate Applications that substantially replicate features of the RETM Marketplace; (e) reverse engineer, modify or create derivative works of the Developer Portal; (f) make calls to the Developer Portal not driven by bona fide end user requests (except for reasonable testing); (g) publish benchmarks or performance information about the Developer Portal; (h) test the capabilities or security of the Developer Portal or RETM Marketplace or disrupt their integrity or performance; (i) use the Developer Portal for any unlawful, infringing or offensive purpose or (j) use the Developer Portal with any Application that constitutes spyware, adware or malicious code or send any malicious code to the Developer Portal or RETM Marketplace. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "9 Use of Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, " a. RETM Marks. Subject to these Terms, you may use the appropriate RETM names, logos and other trademarks as designated in the RETM Brand Guidelines, currently available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, " here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, " (\u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "RETM Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "\u201D) solely to promote your Application\u2019s availability for use with the RETM Marketplace. For clarity, you may not use RETM Marks to imply that RETM endorses your Applications or give your Application a name or branding that includes the word \u201CRETM\u201D. Your use of RETM Marks must comply with the RETM Brand Guidelines and (without limiting RETM\u2019s other termination rights) you must promptly cease any use of RETM Marks we identify as problematic. You receive no other rights to RETM Marks under these Terms. All goodwill arising from use of RETM Marks belongs to RETM. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, " b. Your Marks. RETM may (but is not obligated to) use your name, logos and other trademarks (including those related to your Applications) (\u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Your Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "\u201D) to identify you as a RETM developer and to promote your Applications, the Developer Portal and the RETM Marketplace. RETM receives no other rights to Your Marks under these Terms. All goodwill arising from use of Your Marks belongs to you. These rights (and if applicable RETM\u2019s rights in Section 7.a (RETM Rights)) are sublicensable through multiple tiers, including RETM\u2019s affiliates, contractors and marketing partners, and may be exercised in connection with the RETM Marketplace, the Developer Portal and in related marketing and promotion, in any form or media. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "10 Your Responsibilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, " a. Your Applications and End Users. You are solely responsible, at your own expense, for your Applications (including their operation and support) and your relationships and agreements with end users regarding your Applications. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, " b. Support. You will provide end users with reasonable telephone, web-based and/or email support during normal business hours and maintain your Applications in accordance with any service level agreements we might reasonably require from time to time. You will also provide RETM with a current email address to which RETM may direct end user inquiries about your Applications and designate a support contact (name and email address) for RETM personnel. For clarity, RETM has no obligation to provide any end user support for Applications. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, " c. End User Data. An end user may enable you or your Application to access elements of its RETM account and/or certain of its data, content or information within the RETM Marketplace (collectively, \u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "End User Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "\u201D). You may access End User Data only to the extent enabled and authorized by the end user, solely on the end user\u2019s behalf and as necessary to provide your Applications to that end user. You will ensure that all End User Data is collected, processed, transmitted, maintained and used in accordance with (i) your agreement with the end user, a legally adequate privacy policy, and appropriate notices to and consents from end users, (ii) all laws, rules, regulations or orders, including those relating to data privacy, data transfer, international communications or the export of technical or personal data (\u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "Laws");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "\u201D) and (iii) industry-standard technical, administrative and physical security measures that protect the security and privacy of all End User Data and meet the Security Requirements. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, " d. Minimum Terms. Your agreement with end users will expressly disclaim any liability on RETM\u2019s part for any losses or damages suffered by end users in connection with your Application. Your privacy policy will clearly explain (i) what personal information your Application collects, (ii) how you collect and use personal information, (iii) with whom you intend to share personal information, (iv) in which country or countries personal information will be stored, (v) any other details required to be disclosed under applicable privacy Laws and (v) that you \u2013 and not RETM \u2013 are responsible for safeguarding the personal information you collect. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, " e. RETM Customer Terms. Use of the RETM Marketplace requires each end user to enter into RETM Terms. You will not facilitate or encourage any end user to violate the RETM Terms. If RETM receives any data from you or your Applications on an end user\u2019s behalf, that data will be subject solely to the RETM Terms with the applicable end user, and such data will no longer be subject to your own terms with the end user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, " f. Fees. You may not directly or indirectly charge end users for use of, or access to, the functionality of the Developer Portal. If you charge any fees for your Applications, you are solely responsible for collecting those fees. For clarity, these Terms grant you no right to distribute or resell the Developer Portal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, " g. Your Representations and Warranties. You represent and warrant that (i) you have full power and authority to enter into and perform these Terms and to exploit your Applications without violating any other agreement; (ii) your Applications and their use will not violate any Laws or third party rights (including intellectual property rights, and rights of privacy or publicity), and you will notify RETM if your Applications become subject to any claim or complaint regarding violation of Laws or third party rights; (iii) all information you provide to RETM is and will be true, accurate and complete (and you will keep such information up-to-date). You agree not to (A) suggest any affiliation with RETM (including that RETM sponsors, endorses or guarantees your Applications) except for the relationship expressly contemplated in these Terms and (B) make any representations, warranties or commitments on RETM\u2019s behalf or regarding the Developer Portal or RETM Marketplace. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, " h. Indemnification. You will indemnify, defend (at RETM\u2019s request) and hold harmless RETM and its affiliates and their respective directors, officers, employees, agents, contractors, end users and licensees from and against any claims, losses, costs, expenses (including reasonable attorneys\u2019 fees), damages or liabilities based on or arising from (i) your Applications, (ii) your relationships or interactions with any end users or third party distributors of your Applications, or (iii) your breach or alleged breach of these Terms. RETM may at its own expense participate in the defense and settlement of any claim with its own counsel, and you may not settle a claim without RETM\u2019s prior written consent (not to be unreasonably withheld). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "11 Ownership");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, " RETM does not claim ownership of your Applications and you reserve all rights not expressly granted in these Terms. RETM and its licensors retain all ownership and other rights (including all intellectual property rights) in the Developer Portal. Providing feedback, comments, or suggestions about the Developer Portal (");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "\u201CFeedback\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, ") to RETM is wholly voluntary. RETM may freely use or exploit Feedback for any purpose. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "12 Support; Changes to Developer Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, " RETM has no obligation to provide any maintenance or support for the Developer Portal (or to end users of your Applications) or to fix any errors or defects. From time to time, RETM may change the Developer Portal. Future versions of the Developer Portal may not be compatible with your Applications developed using previous versions. RETM typically makes these changes as part of its overall developer program and is unable to provide notice of the changes to developers individually. RETM will have no liability resulting from the actions described in this Section. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "13 Termination and Suspension");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "These Terms remain in effect until terminated.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, " a. By Developer. Developer may terminate these Terms at any time by ceasing all use of the Developer Portal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](150, " b. By RETM. RETM may terminate or suspend these Terms or your access to the Developer Portal (in whole or in part): (i) for no reason or any reason upon seven (7) days\u2019 notice to you and (ii) immediately if you breach any provision of these Terms, if RETM is required to do so by Laws, if RETM ceases offering the Developer Portal, in case of any security breach or other concern under the Security Requirements, or if RETM otherwise determines in its discretion that such action is necessary to avoid harm, liability or reputational damage to RETM, the Developer Portal or RETM Marketplace, or any end user. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, " c. Effect of Termination. Upon any termination, (i) your rights to use the Developer Portal and RETM Marks will immediately terminate and you will cease all such use, (ii) you will return or destroy all Confidential Information (as requested by RETM) and (iii) Sections 9.b (Your Marks), 10 (Your Responsibilities), 11 (Ownership) and 13 (Termination and Suspension) through 22 (General) will survive. After termination, you will have no further access to any data or content that you submitted to RETM relating to the Developer Portal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, " d. No Obligation or Liability. RETM will have no obligation or liability resulting from termination, suspension or disablement as contemplated in Section 7.b (Removals) or this Section 13.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](155, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](157, "14 Disclaimer of Warranties");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, " TO THE FULL EXTENT PERMITTED BY LAW, THE Developer Portal IS PROVIDED \u201CAS IS\u201D AND \u201CWITH ALL FAULTS\u201D AND RETM AND ITS THIRD-PARTY LICENSORS DISCLAIM ALL REPRESENTATIONS, WARRANTIES AND GUARANTEES, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, NON-INFRINGEMENT AND FITNESS FOR ANY PURPOSE. RETM MAKES NO REPRESENTATION, WARRANTY OR GUARANTEE RELATED TO AVAILABILITY, RELIABILITY, ACCURACY, COMPLETENESS, PERFORMANCE OR QUALITY OF THE Developer Portal, THAT RETM WILL CONTINUE TO OFFER ANY Developer Portal OR THAT USE OF ANY Developer Portal WILL BE SECURE, TIMELY, UNINTERRUPTED, ERROR-FREE OR MEET DEVELOPER\u2019S REQUIREMENTS OR EXPECTATIONS. You may have other statutory rights, in which case the disclaimers above will apply to the full extent permitted by law.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](160, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, "15 RETM Confidential Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, " Any non-public elements of the Developer Portal and any other information disclosed by RETM that is marked as confidential or proprietary or that should reasonably be understood to be confidential or proprietary from the circumstances of disclosure is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](166, "\u201CConfidential Information.\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](167, " Confidential Information does not include any information that: (a) is or becomes generally known to the public; (b) was known to you before its disclosure by RETM; or (c) is received from a third party, in each case without breach of an obligation owed to RETM or anyone else. You will (i) maintain Confidential Information in confidence (using at least the same measures as for your own confidential information, and no less than reasonable care) and not divulge it to any third party and (ii) only use Confidential Information to fulfill your obligations under these Terms. If you are compelled by law to disclose Confidential Information, you must provide RETM with prior notice of such compelled disclosure (to the extent legally permitted) and reasonable assistance if RETM wishes to contest the disclosure. In the event of actual or threatened breach of this Section 16, RETM will have the right, in addition to any other remedies available to it, to seek injunctive relief to protect its Confidential Information, it being specifically acknowledged by the parties that other available remedies may be inadequate.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](168, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, " 16 Independent Development; Information You Provide Not Confidential ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](172, " RETM develops its own products and services and works with many other vendors and developers, and either RETM or these third parties could in the future develop (or already have developed) products similar to yours. You should not provide to RETM any information that you consider confidential and you agree that RETM is not subject to any confidentiality obligations or use restrictions related to information that you may provide to RETM. You expressly agree that nothing in these Terms limits RETM\u2019s right to develop, or have developed, products, concepts, systems or techniques that are similar to or compete with any of your Applications or anything contemplated by or embodied in information you disclose to RETM. For clarity, however, this Section in itself does not grant RETM any license under your intellectual property rights.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](173, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](174, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, "17 Usage Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177, " In addition to RETM\u2019s other rights, RETM may collect certain data and information regarding your use of the Developer Portal, including data about your data pulls or requests, your Applications, and the end user accounts that you access (");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, "\u201CUsage Data\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](180, "). We may use and exploit Usage Data for any purpose in connection with operating, improving and supporting the Developer Portal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](181, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183, "18 Changes to Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](185, " RETM may modify these Terms from time to time. RETM will use reasonable efforts to notify you of modifications as provided in Section 19 (Notices). You may be required to click through the modified Terms to show your acceptance and in any event your continued use of the Developer Portal after the modification constitutes your acceptance to the modifications. If you do not agree to the modified Terms, your sole remedy is to terminate your use of the Developer Portal as described in Section 13 (Termination and Suspension).");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](186, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](187, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](188, "19 Notices");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](189, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](190, " RETM may provide you with notices and communications at your email or physical address on file, through our website (including through publication on the RETM Developer Community page, currently available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, " here");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, "), or other reasonable means.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](194, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](196, "20 Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](198, " The Developer Portal may be subject to export restrictions by the United States government and import restrictions by certain foreign governments, and you agree to comply with all applicable export and import laws and regulations in your use of the Developer Portal. You represent and warrant that you are not located in a country subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a \u201Cterrorist supporting\u201D country, and that you are not listed on any U.S. Government list of prohibited or restricted parties.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](199, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "div", 33)(201, "form", null, 34)(203, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](204, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](207, " I have read and agree to the above terms and conditions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_div_39_Template_button_click_208_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.acceptTerms(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](209, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](205);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](208);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r5.invalid);
} }
const _c0 = function () { return { standalone: true }; };
class LoginComponent {
    constructor(fb, router, http, storageService) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.storageService = storageService;
        this.openTermsBox = false;
        this.loginForm = this.fb.group({
            email: [
                window.localStorage.getItem("email") || "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email],
            ],
            password: [
                window.localStorage.getItem("password") || "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            ],
        });
        this.formStatus = {
            errors: [],
            message: null,
            loading: false,
        };
        this.rememberMe = false;
        this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    ngOnInit() { }
    login(data) {
        this.formStatus.message = null;
        this.formStatus.loading = true;
        this.http.post(this.apiKey + "login", data).subscribe({
            next: (res) => {
                var _a;
                this.formStatus.loading = false;
                this.storageService.setItem("token", res === null || res === void 0 ? void 0 : res.access_token, res === null || res === void 0 ? void 0 : res.expires_in);
                this.storageService.setItem("userData", res === null || res === void 0 ? void 0 : res.client, res === null || res === void 0 ? void 0 : res.expires_in);
                this.storageService.userData.next(res === null || res === void 0 ? void 0 : res.client);
                this.token = res === null || res === void 0 ? void 0 : res.access_token;
                if ((_a = res === null || res === void 0 ? void 0 : res.client) === null || _a === void 0 ? void 0 : _a.developer_at) {
                    //console.log("sdf");
                    this.router.navigateByUrl("dashboard");
                }
                else {
                    // console.log(res?.access_token);
                    this.openTermsBox = true;
                    // Swal.fire({
                    //   title: 'الشروط و الاحكام',
                    //   html: '<p>يقر المطور أنه يبلغ من العمر 18 عامًا أو أكثر وأنه مؤهل للتعاقد. يصرح المطور ويؤكد أنه يشترك في الخدمات بحسن نية ولا يستخدمها إلا للأغراض المقصودة منها.</p><p>يقر المطور أنه في سياق استخدام الموقع والخدمات ، يتصرف بشكل قانوني ويحترم حقوق وكرامة الآخرين ، ويولي اهتمامًا خاصًا لسمعة Retm الجيدة.</p>',
                    //   icon: 'question',
                    //   showCloseButton: false,
                    //   focusCancel: false,
                    //   confirmButtonText: 'أوافق',
                    //   allowOutsideClick: false,
                    //   preConfirm: () => {
                    //     return new Promise((resolve) => {
                    //       this.http
                    //         .post(
                    //           this.apiKey + 'developer',
                    //           {},
                    //           {
                    //             headers: { Authorization: 'Bearer ' + res?.access_token },
                    //           }
                    //         )
                    //         .subscribe({
                    //           next: (res: any) => {
                    //             this.router.navigateByUrl('/home');
                    //           },
                    //           error: (err: any) => {
                    //             this.formStatus.message = err?.error?.message;
                    //           },
                    //         });
                    //     });
                    //   },
                    // });
                }
            },
            error: (err) => {
                var _a;
                this.formStatus.loading = false;
                this.formStatus.message = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
            },
        });
    }
    storeDate() {
        this.formStatus.message = null;
        this.formStatus.errors = [];
        if (this.rememberMe) {
            window.localStorage.setItem("email", `${this.loginForm.controls.email.value}`);
            window.localStorage.setItem("password", `${this.loginForm.controls.password.value}`);
        }
    }
    ngOnDestroy() {
        // Swal.close();
    }
    acceptTerms() {
        this.http
            .post(this.apiKey + "developer", {}, {
            headers: { Authorization: "Bearer " + this.token },
        })
            .subscribe({
            next: (res) => {
                location.reload();
                this.router.navigateByUrl("/home");
            },
            error: (err) => {
                var _a;
                this.formStatus.message = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
            },
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 41, vars: 12, consts: [[1, "auth"], [1, "auth-form", 3, "formGroup", "ngSubmit"], [1, "text-2xl", "font-medium"], ["class", "form-error bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-5", 4, "ngIf"], [1, "form-box"], ["for", "email"], ["formControlName", "email", "id", "email", "type", "email", "placeholder", "example@mail.com", 3, "readOnly", "keypress"], ["for", "password"], ["alt", "password icon", 3, "src", "click"], ["formControlName", "password", "id", "password", "type", "password", "placeholder", "*********", 3, "readOnly", "keypress"], ["password", ""], [1, "check-box"], ["type", "checkbox", "id", "policy", 1, "chckBox", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["for", "policy"], ["src", "assets/icons/check.svg", "alt", ""], ["type", "submit", 1, "submit", 3, "disabled"], ["class", "loading bg-success-500", 4, "ngIf"], [1, "forget", "text-center"], ["type", "button", 1, "text-success-500"], [1, "signup-msg"], [1, "text-neutral-500"], ["type", "button", 1, "text-success-500", 3, "routerLink"], ["class", "content", 4, "ngIf"], [1, "form-error", "bg-red-100", "border", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "mb-5"], [1, "loading", "bg-success-500"], [1, "border-white"], [1, "content"], [1, "terms-conditions"], [1, "title"], [1, "info"], ["href", "https://api.retm.com.sa/"], ["href", "https://retm.com.sa/brand-guideline"], ["href", "https://dev.retm.com.sa/"], [1, "action"], ["form", "ngForm"], [1, "check-input"], ["id", "terms", "type", "checkbox", "ngModel", "", "name", "accept", "required", "", 1, "chckBox"], ["checkBox", "ngModel"], ["for", "terms"], ["type", "button", 1, "btn", "btn-primary", "d-block", "submitBtn", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.login(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div")(11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_11_listener() { return ctx.storeDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 4)(13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div")(16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_img_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18); return _r1.type == "password" ? _r1.type = "text" : _r1.type = "password"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_17_listener() { return ctx.storeDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11)(20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.rememberMe = $event; })("change", function LoginComponent_Template_input_change_20_listener() { return ctx.storeDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 13)(22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, LoginComponent_span_28_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 17)(30, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Forget password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 19)(34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Don\u2019t have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, LoginComponent_div_39_Template, 210, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formStatus.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readOnly", ctx.formStatus.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", _r1.type == "password" ? "assets/icons/slash-eye.svg" : "assets/icons/eye.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readOnly", ctx.formStatus.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.rememberMe)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formStatus.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.openTermsBox);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxRequiredValidator, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: [".auth[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 0px;\n  flex-direction: column;\n  gap: 72px;\n}\n.auth[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--neutral-900, #171717);\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n  \n}\n.auth[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .check-box[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  margin-top: 24px;\n}\n.auth[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.auth[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 24px;\n}\n.auth[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--neutral-900, #171717);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  \n}\n.auth[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.chckBox) {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  height: 40px;\n  border-radius: 8px;\n  border: 1px solid var(--neutral-200, #e5e5e5);\n  background: var(--shades-white, #fff);\n}\n.auth[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.chckBox):focus {\n  border: 1px solid var(--success-500-main, #007aff);\n  box-shadow: 0px 0px 2px 2px rgba(0, 122, 255, 0.15);\n}\n.auth[_ngcontent-%COMP%]   .forget[_ngcontent-%COMP%] {\n  color: var(--success-500-main, #007aff);\n  text-align: center;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 170%;\n  \n  margin: 24px 0px;\n}\n.auth[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  height: 40px;\n  color: var(--shades-white, #fff);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  \n  margin: 0;\n  border-radius: 8px;\n}\n.auth[_ngcontent-%COMP%]   .signup-msg[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.auth[_ngcontent-%COMP%]   .signup-msg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--neutral-500-main, #737373);\n  text-align: center;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 170%;\n}\n.auth[_ngcontent-%COMP%]   .signup-msg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--success-500-main, #007aff);\n  text-align: center;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 170%;\n  \n}\n.content[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #0003;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.terms-conditions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 316px;\n  max-height: 85vh;\n  padding: 24px;\n  border-radius: 12px;\n  background-color: #fff;\n  box-shadow: 0px 0px 4px 1px #ebebeb;\n}\n@media (min-width: 650px) {\n  .terms-conditions[_ngcontent-%COMP%] {\n    max-width: 700px;\n  }\n}\n.title[_ngcontent-%COMP%] {\n  color: #00995c;\n  font-size: 24px;\n  line-height: 130%;\n  font-weight: 700;\n}\n.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #016b41;\n}\n.info[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 360px;\n  padding: 12px 24px;\n  color: #737373;\n  line-height: 28px;\n  font-weight: 400;\n  font-size: 14px;\n  overflow: auto;\n  margin: 10px 0px;\n}\n.terms-conditions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .check-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  margin-bottom: 20px;\n  color: var(--black);\n}\n.terms-conditions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .check-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-inline-end: 10px;\n}\nbutton.submitBtn[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 52px;\n  padding: 12px 24px;\n  border-radius: 8px;\n  background-color: #00995c;\n  transition: all 0.3s ease-in-out;\n  color: #fff;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\nbutton.submitBtn[_ngcontent-%COMP%]:hover {\n  background-color: #016b41;\n}\nbutton.submitBtn[_ngcontent-%COMP%]:disabled {\n  background-color: #919191;\n  color: #d3d3d3;\n}\nbutton.submitBtn[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #919191;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZyb250JTIwZW5kXFxQcm9qZWN0c1xcdGFsZW50bGlua1xcc3JjXFxhcHBcXGF1dGhcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NGO0FERUk7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFBbUIsV0FBQTtBQ0N6QjtBREVJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0FOO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER007RUFDRSxtQkFBQTtBQ0RSO0FESU07RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFBbUIsU0FBQTtBQ0QzQjtBRElNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHFDQUFBO0FDRlI7QURHUTtFQUNFLGtEQUFBO0VBQ0EsbURBQUE7QUNEVjtBRE9FO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFBbUIsV0FBQTtFQUNuQixnQkFBQTtBQ0pKO0FET0U7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQW1CLFNBQUE7RUFDbkIsU0FBQTtFQUNBLGtCQUFBO0FDSko7QURPRTtFQUNFLGtCQUFBO0FDTEo7QURNSTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSk47QURPSTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQW1CLFdBQUE7QUNKekI7QURTQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNORjtBRFNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0FDTkY7QURRRTtFQVpGO0lBYUksZ0JBQUE7RUNMRjtBQUNGO0FEUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRE9FO0VBQ0UsY0FBQTtBQ0xKO0FEU0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0FDUEY7QURVQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDUEY7QURTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNQSjtBRFdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUkY7QURVRTtFQUNFLHlCQUFBO0FDUko7QURXRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ1RKO0FEV0k7RUFDRSx5QkFBQTtBQ1ROIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNzJweDtcclxuXHJcbiAgZm9ybSB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTkwMCwgIzE3MTcxNyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTQwJTsgLyogMzMuNnB4ICovXHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrLWJveCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tYm94IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLW5ldXRyYWwtOTAwLCAjMTcxNzE3KTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7IC8qIDE1MCUgKi9cclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQ6bm90KC5jaGNrQm94KSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1uZXV0cmFsLTIwMCwgI2U1ZTVlNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2hhZGVzLXdoaXRlLCAjZmZmKTtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtNTAwLW1haW4sICMwMDdhZmYpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMTUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcmdldCB7XHJcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcy01MDAtbWFpbiwgIzAwN2FmZik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3MCU7IC8qIDI3LjJweCAqL1xyXG4gICAgbWFyZ2luOiAyNHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5zdWJtaXQge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXNoYWRlcy13aGl0ZSwgI2ZmZik7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7IC8qIDE1MCUgKi9cclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gIC5zaWdudXAtbXNnIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogdmFyKC0tbmV1dHJhbC01MDAtbWFpbiwgIzczNzM3Myk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNzAlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzLTUwMC1tYWluLCAjMDA3YWZmKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE3MCU7IC8qIDI3LjJweCAqL1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDM7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXJtcy1jb25kaXRpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAzMTZweDtcclxuICBtYXgtaGVpZ2h0OiA4NXZoO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCAjZWJlYmViO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNjUwcHgpIHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjMDA5OTVjO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMTMwJTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjMDE2YjQxO1xyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzYwcHg7XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC8vIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5cclxuLnRlcm1zLWNvbmRpdGlvbnMgLmFjdGlvbiAuY2hlY2staW5wdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uLnN1Ym1pdEJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNTJweDtcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5NWM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNmI0MTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkxOTE5MTtcclxuICAgIGNvbG9yOiAjZDNkM2QzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5MTkxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYXV0aCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNzJweDtcbn1cbi5hdXRoIGZvcm0gaDIge1xuICBjb2xvcjogdmFyKC0tbmV1dHJhbC05MDAsICMxNzE3MTcpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIC8qIDMzLjZweCAqL1xufVxuLmF1dGggZm9ybSAuY2hlY2stYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5hdXRoIGZvcm0gLmZvcm0tYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5hdXRoIGZvcm0gLmZvcm0tYm94Omxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uYXV0aCBmb3JtIC5mb3JtLWJveCBsYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTkwMCwgIzE3MTcxNyk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgLyogMTUwJSAqL1xufVxuLmF1dGggZm9ybSAuZm9ybS1ib3ggaW5wdXQ6bm90KC5jaGNrQm94KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDhweDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMjAwLCAjZTVlNWU1KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hhZGVzLXdoaXRlLCAjZmZmKTtcbn1cbi5hdXRoIGZvcm0gLmZvcm0tYm94IGlucHV0Om5vdCguY2hja0JveCk6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdWNjZXNzLTUwMC1tYWluLCAjMDA3YWZmKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4IHJnYmEoMCwgMTIyLCAyNTUsIDAuMTUpO1xufVxuLmF1dGggLmZvcmdldCB7XG4gIGNvbG9yOiB2YXIoLS1zdWNjZXNzLTUwMC1tYWluLCAjMDA3YWZmKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE3MCU7XG4gIC8qIDI3LjJweCAqL1xuICBtYXJnaW46IDI0cHggMHB4O1xufVxuLmF1dGggLnN1Ym1pdCB7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6IHZhcigtLXNoYWRlcy13aGl0ZSwgI2ZmZik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgLyogMTUwJSAqL1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5hdXRoIC5zaWdudXAtbXNnIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF1dGggLnNpZ251cC1tc2cgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTUwMC1tYWluLCAjNzM3MzczKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE3MCU7XG59XG4uYXV0aCAuc2lnbnVwLW1zZyBidXR0b24ge1xuICBjb2xvcjogdmFyKC0tc3VjY2Vzcy01MDAtbWFpbiwgIzAwN2FmZik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNzAlO1xuICAvKiAyNy4ycHggKi9cbn1cblxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDM7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGVybXMtY29uZGl0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAzMTZweDtcbiAgbWF4LWhlaWdodDogODV2aDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4ICNlYmViZWI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjUwcHgpIHtcbiAgLnRlcm1zLWNvbmRpdGlvbnMge1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gIH1cbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICMwMDk5NWM7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGl0bGUgc3BhbiB7XG4gIGNvbG9yOiAjMDE2YjQxO1xufVxuXG4uaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2MHB4O1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLnRlcm1zLWNvbmRpdGlvbnMgLmFjdGlvbiAuY2hlY2staW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG4udGVybXMtY29uZGl0aW9ucyAuYWN0aW9uIC5jaGVjay1pbnB1dCBpbnB1dCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xufVxuXG5idXR0b24uc3VibWl0QnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDUycHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OTVjO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b24uc3VibWl0QnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNmI0MTtcbn1cbmJ1dHRvbi5zdWJtaXRCdG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5MTkxO1xuICBjb2xvcjogI2QzZDNkMztcbn1cbmJ1dHRvbi5zdWJtaXRCdG46ZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5MTkxO1xufSJdfQ== */"] });


/***/ }),

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 49048:
/*!******************************************!*\
  !*** ./src/app/services/form.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormService": () => (/* binding */ FormService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class FormService {
    constructor() {
        this.step = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.basicInfo = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    }
}
FormService.ɵfac = function FormService_Factory(t) { return new (t || FormService)(); };
FormService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormService, factory: FormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10758:
/*!*********************************************************!*\
  !*** ./src/app/services/interceptor/api.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiInterceptor": () => (/* binding */ ApiInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.service */ 71188);



class ApiInterceptor {
    constructor(platformId, storage) {
        this.platformId = platformId;
        this.storage = storage;
    }
    intercept(request, next) {
        var _a, _b;
        if (request.url.includes("login") || request.url.includes("register")) {
            return next.handle(request);
        }
        if (this.storage.decryptData((_a = JSON.parse(localStorage.getItem("nekot") || "")) === null || _a === void 0 ? void 0 : _a.value)) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.storage.decryptData((_b = JSON.parse(localStorage.getItem("nekot") || "")) === null || _b === void 0 ? void 0 : _b.value)}`,
                },
            });
        }
        return next.handle(request);
    }
}
ApiInterceptor.ɵfac = function ApiInterceptor_Factory(t) { return new (t || ApiInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService)); };
ApiInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiInterceptor, factory: ApiInterceptor.ɵfac });


/***/ }),

/***/ 84714:
/*!**********************************************!*\
  !*** ./src/app/services/rest-api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestApiService": () => (/* binding */ RestApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class RestApiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    get(url, token) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "Accept-Language": "ar",
            }),
        };
        return this.http.get(url, httpOptions);
    }
    // post(url: any, data: any, token: any): Observable<any> {
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${token}`,
    //     }),
    //   };
    //   return this.http.post(
    //     'https://' + this.merchantID + this.apiURL + url,
    //     JSON.stringify(data),
    //     httpOptions
    //   );
    // }
    // Error handling
    handleError(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        // window.alert(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorMessage);
    }
}
RestApiService.ɵfac = function RestApiService_Factory(t) { return new (t || RestApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
RestApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RestApiService, factory: RestApiService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 71188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var D_front_end_Projects_talentlink_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);









class StorageService {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.cryptoKey = "";
    this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject("");
  }

  get ourStorage() {
    return localStorage;
  }

  setItem(key, value, expiresin = 168, // a week
  withLanguage = false) {
    var _this = this;

    return (0,D_front_end_Projects_talentlink_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        value = _this.encryptData(value);
        const _value = {
          value,
          timestamp: Date.now(),
          expiresin // in hours

        }; // objects must be strings

        yield _this.ourStorage.setItem(_this.getKey(key.split("").reverse().join(""), withLanguage), JSON.stringify(_value));
      } catch (reason) {}
    })();
  }

  getItem(key, withLanguage = false) {
    var _this2 = this;

    return (0,D_front_end_Projects_talentlink_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // check value
      try {
        const _key = _this2.getKey(key.split("").reverse().join(""), withLanguage);

        let value;
        value = yield _this2.ourStorage.getItem(_key);

        if (!value) {
          return null;
        } // cast


        const _value = JSON.parse(value);

        return _this2.decryptData(_value.value);
      } catch (reason) {
        return null;
      }
    })();
  }

  getTime(key, withLanguage = false) {
    var _this3 = this;

    return (0,D_front_end_Projects_talentlink_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // check value
      try {
        const _key = _this3.getKey(key.split("").reverse().join(""), withLanguage);

        let value;
        value = yield _this3.ourStorage.getItem(_key);

        if (!value) {
          return null;
        } // cast


        const _value = value; // calculate expiration, expiresin is in hours, so convert to milliseconds

        if (Date.now() - _value.timestamp > _value.expiresin * 3600000) {
          // if expired, remove
          _this3.ourStorage.removeItem(_key);

          return null;
        }

        return _value.timestamp;
      } catch (reason) {
        return null;
      }
    })();
  }

  removeItem(key, withLanguage = false) {
    this.ourStorage.removeItem(this.getKey(key.split("").reverse().join(""), withLanguage));
  }

  logout() {
    // this.removeItem('token');
    // this.removeItem('userData');
    // this.removeItem('addresses');
    localStorage.clear();
    this.router.navigateByUrl("/auth");
  }

  clear() {
    // remove all prefixed items
    this.ourStorage.clear();
  }

  getKey(key, withLanguage = false) {
    return key;
  }

  encryptData(cipher) {
    let key = crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Utf8.parse(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.cryptoKey);
    return encodeURIComponent(crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(JSON.stringify(cipher), this.cryptoKey).toString());
  }

  decryptData(cipher) {
    let key = crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Utf8.parse(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.cryptoKey);
    return JSON.parse(crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.decrypt(decodeURIComponent(cipher), this.cryptoKey).toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Utf8));
  }

  imageUpload(data, fileName, path) {
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        AccessKey: "c65ac2e1-c531-44ea-ab5a490bee97-2dc6-486c",
        "Content-Type": "application/octet-stream"
      })
    };
    const apiImage = "https://storage.bunnycdn.com/retm/" + path + "/";
    return this.http.put(apiImage + fileName, data, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)( // Log the result or error
    {
      next: data => {// console.log(data)
      },
      error: error => {// console.log(error)
      }
    }));
  }

  removeImage(fileName, path) {
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        AccessKey: "c65ac2e1-c531-44ea-ab5a490bee97-2dc6-486c",
        "Content-Type": "application/octet-stream"
      })
    };
    const apiImage = "https://storage.bunnycdn.com/retm/" + path + "/";
    return this.http.delete(apiImage + fileName, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)( // Log the result or error
    {
      next: data => {// console.log(data)
      },
      error: error => {// console.log(error)
      }
    }));
  }

}

StorageService.ɵfac = function StorageService_Factory(t) {
  return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

StorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: StorageService,
  factory: StorageService.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 34934:
/*!************************************************!*\
  !*** ./src/app/shared/animations/animation.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fade": () => (/* binding */ fade),
/* harmony export */   "hReveal": () => (/* binding */ hReveal),
/* harmony export */   "uReveal": () => (/* binding */ uReveal)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);

const uReveal = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("uReveal", [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":enter", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: "translateY(30%)", opacity: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("400ms ease", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: "translateY(0%)", opacity: 1 })),
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":leave", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: "translateY(0%)", opacity: 1 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("400ms ease", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: "translateY(30%)", opacity: 0 })),
    ]),
]);
const hReveal = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("hReveal", [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":enter", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: "0", overflow: "hidden" }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("300ms ease", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: "*", overflow: "*" })),
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":leave", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: "*", overflow: "*" }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("300ms ease", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: "0", overflow: "hidden" })),
    ]),
]);
const fade = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("fade", [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":enter", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("400ms ease", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 })),
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":leave", [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("400ms ease", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    ]),
]);



/***/ }),

/***/ 35308:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/footer-btn/footer-btn.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterBtnComponent": () => (/* binding */ FooterBtnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/form.service */ 49048);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);




function FooterBtnComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 4);
} }
function FooterBtnComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 5);
} }
class FooterBtnComponent {
    constructor(form) {
        this.form = form;
        this.sendData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    setStep(step) {
        this.form.step.next(step);
        this.sendData.emit();
    }
}
FooterBtnComponent.ɵfac = function FooterBtnComponent_Factory(t) { return new (t || FooterBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_form_service__WEBPACK_IMPORTED_MODULE_0__.FormService)); };
FooterBtnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterBtnComponent, selectors: [["app-footer-btn"]], inputs: { info: "info", step: "step" }, outputs: { sendData: "sendData" }, decls: 9, vars: 4, consts: [[1, "footer-btn"], [3, "click"], ["src", "assets/icons/arrow-left.svg", "alt", "arrow-left", 4, "ngIf"], ["src", "assets/icons/arrow-right.svg", "alt", "arrow-right", 4, "ngIf"], ["src", "assets/icons/arrow-left.svg", "alt", "arrow-left"], ["src", "assets/icons/arrow-right.svg", "alt", "arrow-right"]], template: function FooterBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterBtnComponent_Template_button_click_1_listener() { return ctx.setStep(ctx.step - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FooterBtnComponent_img_2_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterBtnComponent_Template_button_click_5_listener() { return ctx.setStep(ctx.step + 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FooterBtnComponent_img_8_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.info.prev);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.info == null ? null : ctx.info.prev);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.info == null ? null : ctx.info.next);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.info.next);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".footer-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type   span[_ngcontent-%COMP%] {\n  color: var(--neutral-500-main, #737373);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  \n}\n.footer-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type   span[_ngcontent-%COMP%] {\n  color: var(--success-500-main, #007aff);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1idG4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZyb250JTIwZW5kXFxQcm9qZWN0c1xcdGFsZW50bGlua1xcc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZm9vdGVyLWJ0blxcZm9vdGVyLWJ0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUFtQixTQUFBO0FDRDNCO0FES007RUFDRSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFBbUIsU0FBQTtBQ0YzQiIsImZpbGUiOiJmb290ZXItYnRuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1idG4ge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbmV1dHJhbC01MDAtbWFpbiwgIzczNzM3Myk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4OyAvKiAxNTAlICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtNTAwLW1haW4sICMwMDdhZmYpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDsgLyogMTUwJSAqL1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5mb290ZXItYnRuIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tbmV1dHJhbC01MDAtbWFpbiwgIzczNzM3Myk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgLyogMTUwJSAqL1xufVxuLmZvb3Rlci1idG4gYnV0dG9uOmxhc3Qtb2YtdHlwZSBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtNTAwLW1haW4sICMwMDdhZmYpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIC8qIDE1MCUgKi9cbn0iXX0= */"] });


/***/ }),

/***/ 66526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Powered by RETM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--neutral-300, #d4d4d4);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 24px;\n  \n  margin-bottom: 0;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcZnJvbnQlMjBlbmRcXFByb2plY3RzXFx0YWxlbnRsaW5rXFxzcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUFtQixTQUFBO0VBQ25CLGdCQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTMwMCwgI2Q0ZDRkNCk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7IC8qIDE1MCUgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgfVxyXG59XHJcbiIsIi5mb290ZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTMwMCwgI2Q0ZDRkNCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgLyogMTUwJSAqL1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59Il19 */"] });


/***/ }),

/***/ 36290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/animation */ 34934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/storage.service */ 71188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




class HeaderComponent {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
        this.modal = {
            type: null,
        };
        this.loading = false;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.storageService.getItem("userData").then((res) => {
            if (res) {
                this.user = res;
                this.user.loged = true;
            }
            else {
                this.user = null;
            }
        });
    }
    logOut() {
        // Swal.fire({
        //   title: ' Logout Successfully!    ',
        //   icon: 'success',
        //   confirmButtonText: 'Ok',
        // });
        this.storageService.logout();
        location.reload();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 60, vars: 3, consts: [[1, "flex", "bg-primary-800", "px-6", "justify-between", "fixed", "top-0", "left-64", "z-40", "gap-4"], [1, "flex-grow", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "header-button"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_0_18)"], ["d", "M7.5 20H0.833333C0.612319 20 0.400358 19.9122 0.244078 19.7559C0.0877974 19.5997 0 19.3877 0 19.1667C0 18.9457 0.0877974 18.7337 0.244078 18.5774C0.400358 18.4211 0.612319 18.3333 0.833333 18.3333H7.5C7.72101 18.3333 7.93297 18.4211 8.08925 18.5774C8.24553 18.7337 8.33333 18.9457 8.33333 19.1667C8.33333 19.3877 8.24553 19.5997 8.08925 19.7559C7.93297 19.9122 7.72101 20 7.5 20Z", "fill", "white"], ["d", "M5.83333 16.6667H0.833333C0.61232 16.6667 0.400358 16.5789 0.244078 16.4226C0.0877974 16.2663 0 16.0543 0 15.8333C0 15.6123 0.0877974 15.4004 0.244078 15.2441C0.400358 15.0878 0.61232 15 0.833333 15H5.83333C6.05435 15 6.26631 15.0878 6.42259 15.2441C6.57887 15.4004 6.66667 15.6123 6.66667 15.8333C6.66667 16.0543 6.57887 16.2663 6.42259 16.4226C6.26631 16.5789 6.05435 16.6667 5.83333 16.6667Z", "fill", "white"], ["d", "M4.16667 13.3333H0.833333C0.61232 13.3333 0.400358 13.2455 0.244078 13.0892C0.0877974 12.933 0 12.721 0 12.5C0 12.279 0.0877974 12.067 0.244078 11.9107C0.400358 11.7545 0.61232 11.6667 0.833333 11.6667H4.16667C4.38768 11.6667 4.59964 11.7545 4.75592 11.9107C4.9122 12.067 5 12.279 5 12.5C5 12.721 4.9122 12.933 4.75592 13.0892C4.59964 13.2455 4.38768 13.3333 4.16667 13.3333Z", "fill", "white"], ["d", "M10.833 19.9627C10.612 19.9726 10.3961 19.8942 10.2329 19.7449C10.0696 19.5955 9.97241 19.3875 9.96258 19.1665C9.95274 18.9455 10.0311 18.7296 10.1804 18.5664C10.3298 18.4031 10.5378 18.3059 10.7588 18.2961C12.3359 18.1518 13.8392 17.5611 15.0926 16.5932C16.346 15.6253 17.2978 14.3203 17.8363 12.8311C18.3748 11.3418 18.4778 9.72992 18.1332 8.18423C17.7886 6.63853 17.0108 5.22301 15.8907 4.10347C14.7707 2.98393 13.3548 2.20671 11.8089 1.86286C10.2631 1.519 8.65124 1.62275 7.16222 2.16193C5.6732 2.70112 4.36864 3.65343 3.40135 4.90732C2.43405 6.16121 1.84407 7.66477 1.70049 9.24188C1.6806 9.46201 1.57408 9.66523 1.40436 9.80682C1.23464 9.94841 1.01562 10.0168 0.795493 9.99688C0.575364 9.97699 0.372152 9.87047 0.230562 9.70075C0.0889717 9.53103 0.0206021 9.31201 0.0404934 9.09188C0.272901 6.52797 1.48516 4.15247 3.42493 2.45986C5.3647 0.767243 7.88253 -0.112062 10.4543 0.0049777C13.026 0.122017 15.4536 1.22638 17.2316 3.08819C19.0096 4.95 20.0011 7.4258 19.9997 10.0002C20.0124 12.4988 19.0842 14.9107 17.3996 16.7561C15.715 18.6014 13.3974 19.745 10.908 19.9594C10.883 19.9619 10.8572 19.9627 10.833 19.9627Z", "fill", "white"], ["d", "M9.99935 5C9.77834 5 9.56637 5.0878 9.41009 5.24408C9.25381 5.40036 9.16602 5.61232 9.16602 5.83333V10C9.16606 10.221 9.25389 10.4329 9.41018 10.5892L11.9102 13.0892C12.0674 13.241 12.2779 13.325 12.4963 13.3231C12.7148 13.3212 12.9239 13.2335 13.0784 13.079C13.2329 12.9245 13.3205 12.7155 13.3224 12.497C13.3243 12.2785 13.2403 12.068 13.0885 11.9108L10.8327 9.655V5.83333C10.8327 5.61232 10.7449 5.40036 10.5886 5.24408C10.4323 5.0878 10.2204 5 9.99935 5Z", "fill", "white"], ["id", "clip0_0_18"], ["width", "20", "height", "20", "fill", "FF5F00"], [1, "search-box", "relative"], [1, "absolute", "top-0", "left-0", "h-5/6", "flex", "gap-1", "items-center", "border-r", "border-neutral-200", "px-2"], ["src", "assets/main/header/search.svg", "alt", "search icon", 1, "w-4"], ["src", "assets/main/header/arrow-down.svg", "alt", "arrow-down", 1, "w-[14px]"], ["type", "text", "placeholder", "Search ...", 1, "w-[344px]", "font-light", "placeholder:text-neutral-400", "rounded-lg", "text-white"], [1, "flex", "gap-6"], ["clip-path", "url(#clip0_0_2956)"], ["d", "M9.36578 20C9.09276 19.9991 8.82321 19.9388 8.57578 19.8234C8.17162 19.6434 7.84702 19.3221 7.66291 18.9198C7.4788 18.5175 7.44781 18.0619 7.57578 17.6384L8.87661 13.3334H5.81161C5.42111 13.3338 5.03593 13.2428 4.68695 13.0676C4.33796 12.8924 4.03486 12.6379 3.80195 12.3245C3.56905 12.011 3.4128 11.6474 3.34574 11.2627C3.27867 10.878 3.30266 10.483 3.41578 10.1092L5.93578 1.77588C6.08938 1.26044 6.40602 0.808729 6.83815 0.488533C7.27029 0.168338 7.79462 -0.00306802 8.33244 4.15744e-05H11.4099C11.7597 0.000334193 12.1043 0.0853132 12.4141 0.247716C12.7239 0.410119 12.9898 0.645118 13.189 0.932628C13.3882 1.22014 13.5149 1.55161 13.5582 1.89872C13.6014 2.24583 13.56 2.59825 13.4374 2.92588L12.0349 6.66671H14.1658C14.62 6.66667 15.0656 6.79038 15.4548 7.02455C15.844 7.25871 16.1621 7.59449 16.3748 7.9958C16.5875 8.39711 16.6869 8.8488 16.6623 9.30234C16.6376 9.75588 16.4899 10.1941 16.2349 10.57L10.9016 19.1534C10.7367 19.4116 10.5098 19.6244 10.2415 19.7723C9.97321 19.9202 9.67213 19.9985 9.36578 20ZM8.33244 1.66671C8.15348 1.66653 7.97922 1.72398 7.83544 1.83053C7.69166 1.93709 7.58601 2.08711 7.53411 2.25838L5.01411 10.5917C4.97638 10.7162 4.96833 10.8478 4.9906 10.976C5.01287 11.1042 5.06484 11.2254 5.14236 11.3299C5.21988 11.4344 5.32078 11.5193 5.437 11.5778C5.55321 11.6362 5.68151 11.6667 5.81161 11.6667H9.99911C10.1292 11.6667 10.2575 11.6972 10.3737 11.7557C10.4899 11.8142 10.5908 11.899 10.6684 12.0035C10.7459 12.108 10.7979 12.2292 10.8201 12.3574C10.8424 12.4856 10.8343 12.6172 10.7966 12.7417L9.17411 18.11C9.16661 18.1298 9.16329 18.1509 9.16437 18.172C9.16545 18.1931 9.1709 18.2137 9.18038 18.2326C9.18986 18.2515 9.20316 18.2682 9.21944 18.2817C9.23572 18.2952 9.25462 18.3051 9.27494 18.3109C9.29337 18.3227 9.31406 18.3305 9.33569 18.3338C9.35731 18.3372 9.3794 18.3359 9.40052 18.3302C9.42164 18.3244 9.44132 18.3144 9.4583 18.3006C9.47528 18.2868 9.48918 18.2695 9.49911 18.25L14.8324 9.66671C14.9257 9.54021 14.9813 9.38992 14.9928 9.23317C15.0043 9.07643 14.9712 8.91963 14.8974 8.78088C14.8291 8.64571 14.7244 8.53226 14.5952 8.45322C14.4659 8.37418 14.3173 8.33269 14.1658 8.33338H10.8324C10.6978 8.33346 10.5651 8.3009 10.4457 8.23848C10.3264 8.17606 10.2239 8.08564 10.1472 7.97496C10.0704 7.86429 10.0216 7.73666 10.005 7.60301C9.98833 7.46936 10.0043 7.33366 10.0516 7.20754L11.8766 2.34088C11.9046 2.26542 11.9141 2.18431 11.904 2.10445C11.894 2.02458 11.8649 1.94831 11.819 1.88213C11.7732 1.81594 11.7121 1.7618 11.6409 1.72429C11.5697 1.68679 11.4904 1.66703 11.4099 1.66671H8.33244Z", "fill", "#FF5F00"], ["id", "clip0_0_2956"], ["width", "20", "height", "20", "fill", "white"], ["clip-path", "url(#clip0_0_2945)"], ["d", "M3.33276 14.1668C3.33276 14.8299 3.59616 15.4657 4.065 15.9346C4.53384 16.4034 5.16972 16.6668 5.83276 16.6668", "stroke", "#FF5F00", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.3367 5.30838L14.6558 2.98838C14.8106 2.83358 14.9943 2.71078 15.1965 2.62698C15.3987 2.54319 15.6154 2.50004 15.8343 2.5C16.0532 2.49996 16.2699 2.54303 16.4721 2.62676C16.6744 2.71048 16.8581 2.83322 17.0129 2.98796C17.1677 3.1427 17.2905 3.32642 17.3743 3.52862C17.4581 3.73081 17.5013 3.94754 17.5013 4.16642C17.5013 4.38529 17.4583 4.60203 17.3745 4.80426C17.2908 5.00649 17.1681 5.19025 17.0133 5.34504L14.6933 7.66671", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M13.7542 6.24583C14.5261 7.01761 14.9718 8.05657 14.9991 9.14777C15.0264 10.239 14.6332 11.2989 13.9009 12.1083L13.7542 12.2617L12.1984 13.8175C11.7004 14.315 11.4003 14.9767 11.3542 15.6792L11.3475 15.8708V16.6492C11.3475 16.9217 11.2392 17.1825 11.0475 17.375C10.9772 17.4458 10.8843 17.4896 10.785 17.4987C10.6856 17.5078 10.5862 17.4817 10.5042 17.425L10.4459 17.375L2.62504 9.55499C2.58548 9.51552 2.55409 9.46863 2.53268 9.41701C2.51127 9.36539 2.50024 9.31005 2.50024 9.25416C2.50024 9.19828 2.51127 9.14294 2.53268 9.09132C2.55409 9.0397 2.58548 8.99281 2.62504 8.95333C2.79004 8.78833 3.00504 8.68499 3.23504 8.65916L3.35087 8.6525H4.12837C4.83504 8.6525 5.5142 8.39499 6.04254 7.93249L6.18254 7.80166L7.73837 6.24583L7.8717 6.11833C8.67978 5.37759 9.7426 4.97737 10.8386 5.00112C11.9345 5.02488 12.979 5.47077 13.7542 6.24583Z", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_0_2945"], ["clip-path", "url(#clip0_0_3271)"], ["d", "M8.60417 3.5975C8.95917 2.13417 11.0408 2.13417 11.3958 3.5975C11.4491 3.81733 11.5535 4.02148 11.7006 4.19333C11.8477 4.36518 12.0332 4.49988 12.2422 4.58645C12.4512 4.67303 12.6776 4.70904 12.9032 4.69156C13.1287 4.67407 13.3469 4.60359 13.54 4.48583C14.8258 3.7025 16.2983 5.17417 15.515 6.46083C15.3974 6.65388 15.327 6.87195 15.3096 7.09731C15.2922 7.32267 15.3281 7.54897 15.4146 7.75782C15.5011 7.96666 15.6356 8.15215 15.8073 8.29921C15.9789 8.44627 16.1829 8.55075 16.4025 8.60417C17.8658 8.95917 17.8658 11.0408 16.4025 11.3958C16.1827 11.4491 15.9785 11.5535 15.8067 11.7006C15.6348 11.8477 15.5001 12.0332 15.4135 12.2422C15.327 12.4512 15.291 12.6776 15.3084 12.9032C15.3259 13.1287 15.3964 13.3469 15.5142 13.54C16.2975 14.8258 14.8258 16.2983 13.5392 15.515C13.3461 15.3974 13.1281 15.327 12.9027 15.3096C12.6773 15.2922 12.451 15.3281 12.2422 15.4146C12.0333 15.5011 11.8479 15.6356 11.7008 15.8073C11.5537 15.9789 11.4492 16.1829 11.3958 16.4025C11.0408 17.8658 8.95917 17.8658 8.60417 16.4025C8.5509 16.1827 8.44648 15.9785 8.29941 15.8067C8.15233 15.6348 7.96676 15.5001 7.75779 15.4135C7.54882 15.327 7.32236 15.291 7.09685 15.3084C6.87133 15.3259 6.65313 15.3964 6.46 15.5142C5.17417 16.2975 3.70167 14.8258 4.485 13.5392C4.60258 13.3461 4.67296 13.1281 4.6904 12.9027C4.70785 12.6773 4.67187 12.451 4.58539 12.2422C4.49892 12.0333 4.36438 11.8479 4.19273 11.7008C4.02107 11.5537 3.81714 11.4492 3.5975 11.3958C2.13417 11.0408 2.13417 8.95917 3.5975 8.60417C3.81733 8.5509 4.02148 8.44648 4.19333 8.29941C4.36518 8.15233 4.49988 7.96676 4.58645 7.75779C4.67303 7.54882 4.70904 7.32236 4.69156 7.09685C4.67407 6.87133 4.60359 6.65313 4.48583 6.46C3.7025 5.17417 5.17417 3.70167 6.46083 4.485C7.29417 4.99167 8.37417 4.54333 8.60417 3.5975Z", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10Z", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_0_3271"], [1, "w-10"], ["src", "assets/user.png", "alt", "user", 1, "w-full", "aspect-square", "rounded-full", "object-cover", "border", "border-white"], [1, "bg-redish-500", "w-10", "p-2", "rounded-full", "modules-btn", "relative"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "module", "top-2", "left-2"], ["clip-path", "url(#clip0_0_7)"], ["d", "M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8C8.53043 4 9.03914 4.21071 9.41421 4.58579C9.78929 4.96086 10 5.46957 10 6V7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9H6C5.46957 9 4.96086 8.78929 4.58579 8.41421C4.21071 8.03914 4 7.53043 4 7V6Z", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 15C4 14.4696 4.21071 13.9609 4.58579 13.5858C4.96086 13.2107 5.46957 13 6 13H8C8.53043 13 9.03914 13.2107 9.41421 13.5858C9.78929 13.9609 10 14.4696 10 15V18C10 18.5304 9.78929 19.0391 9.41421 19.4142C9.03914 19.7893 8.53043 20 8 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V15Z", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 6C14 5.46957 14.2107 4.96086 14.5858 4.58579C14.9609 4.21071 15.4696 4 16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V9C20 9.53043 19.7893 10.0391 19.4142 10.4142C19.0391 10.7893 18.5304 11 18 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V6Z", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 17C14 16.4696 14.2107 15.9609 14.5858 15.5858C14.9609 15.2107 15.4696 15 16 15H18C18.5304 15 19.0391 15.2107 19.4142 15.5858C19.7893 15.9609 20 16.4696 20 17V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H16C15.4696 20 14.9609 19.7893 14.5858 19.4142C14.2107 19.0391 14 18.5304 14 18V17Z", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "clip0_0_7"], ["width", "24", "height", "24", "fill", "white"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "logo", "opacity-0", "m-0"], ["d", "M3 7.84093L16.6318 0L21 2.60047L7.47836 10.4809L3 7.84093Z", "fill", "#ffffff"], ["d", "M3 13.2395V7.84097L7.47836 10.481L7.50984 15.7293L3 13.2395Z", "fill", "#ffffff"], ["d", "M7.51025 15.7293L12.0044 13.3502V23.7599L7.51025 21.112V15.7293Z", "fill", "#ffffff"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 4)(5, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "defs")(12, "clipPath", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "rect", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13)(15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 15)(17, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 18)(20, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "svg", 4)(22, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "defs")(25, "clipPath", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "rect", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "svg", 4)(29, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "path", 24)(31, "path", 25)(32, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "defs")(34, "clipPath", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "rect", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "svg", 4)(38, "g", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "path", 29)(40, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "defs")(42, "clipPath", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "rect", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "svg", 35)(48, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "path", 37)(50, "path", 38)(51, "path", 39)(52, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "defs")(54, "clipPath", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "rect", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "svg", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "path", 44)(58, "path", 45)(59, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"](" ", ctx.modal.type == "activities" ? "FF5F00" : "ffffff", "");
    } }, styles: ["header[_ngcontent-%COMP%] {\n  width: calc(100% - 256px);\n  min-height: 56px;\n  gap: 16px;\n}\nheader[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  border-color: #eceff1;\n}\nheader[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  height: 26px;\n  top: 50%;\n  transform: translateY(-50%);\n}\nheader[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #333850;\n  padding: 8px 60px 10px;\n  border: 1px solid rgba(237, 240, 242, 0.31);\n}\nheader[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #408dfb;\n  width: 380px;\n}\nheader[_ngcontent-%COMP%]   .header-button[_ngcontent-%COMP%] {\n  aspect-ratio: 1 / 1;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n}\nheader[_ngcontent-%COMP%]   .header-button[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  --tw-bg-opacity: 0.1;\n}\nheader[_ngcontent-%COMP%]   .modules-btn[_ngcontent-%COMP%]:hover   .module[_ngcontent-%COMP%] {\n  opacity: 0;\n}\nheader[_ngcontent-%COMP%]   .modules-btn[_ngcontent-%COMP%]:hover   .logo[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nheader[_ngcontent-%COMP%]   .modules-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  top: 0.5rem;\n  left: 0.5rem;\n  transition-duration: 300ms;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcZnJvbnQlMjBlbmRcXFByb2plY3RzXFx0YWxlbnRsaW5rXFxzcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRkE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ2pGRjtBRGtGRTtFQUNFLHFCQUFBO0FDaEZKO0FEaUZJO0VBQ0UsWUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQy9FTjtBRGlGSTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtBQy9FTjtBRGdGTTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQzlFUjtBRG1GSTtFQUFBLG1CQUFBO0VBQUEscUJBQUE7RUFBQTtBQUFBO0FBQUE7RUFBQSx5REFBQTtFQUFBO0FBQUE7QUFJRTtFQUNFLFVBQUE7QUNsRlI7QURvRk07RUFDRSxVQUFBO0FDbEZSO0FEc0ZNO0VBQUEsV0FBQTtFQUFBLFlBQUE7RUFBQTtBQUFBIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhlYWRlciB7XHJcbi8vICAgbWluLWhlaWdodDogODNweDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIC51c2VyLW1lbnUge1xyXG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1NnB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbi8vICAgICB0b3A6IDQwcHggIWltcG9ydGFudDtcclxuXHJcbi8vICAgICBociB7XHJcbi8vICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW5ldXRyYWwtMjAwLCAjZTVlNWU2KTtcclxuLy8gICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgPiBkaXYge1xyXG4vLyAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICB3aWR0aDogMjIwcHg7XHJcbi8vICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbi8vICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4vLyAgICAgICBnYXA6IDEycHg7XHJcbi8vICAgICAgID4gYnV0dG9uIHtcclxuLy8gICAgICAgICAvLyBAYXBwbHkgcHgtNiBweS00O1xyXG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTkwMCwgIzE3MTcxNyk7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4OyAvKiAxNTAlICovXHJcbi8vICAgICAgICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgYSB7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4vLyAgICAgICAgICY6aG92ZXIge1xyXG4vLyAgICAgICAgICAgY29sb3I6ICMxNzE3MTcgIWltcG9ydGFudDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGJ1dHRvbiB7XHJcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC5sb2dvdXQge1xyXG4vLyAgIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5zZWFyY2gtaW5wdXQge1xyXG4vLyAgIHdpZHRoOiAyNTBweDtcclxuLy8gICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgcGFkZGluZzogOHB4IDEycHggOHB4IDEycHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAgIGJvcmRlcjogMXB4O1xyXG4vLyAgIGdhcDogOHB4O1xyXG5cclxuLy8gICBpbnB1dHtcclxuLy8gICAgIHdpZHRoOiB1bnNldDtcclxuLy8gICAgIGhlaWdodDogdW5zZXQ7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcclxuLy8gICAgIGJvcmRlcjogdW5zZXQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgfVxyXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC51c2VyLW5hbWUge1xyXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICB9XHJcbi8vIH1cclxuaGVhZGVyIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjU2cHgpO1xyXG4gIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIC5zZWFyY2gtYm94IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2VjZWZmMTtcclxuICAgID4gYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzODUwO1xyXG4gICAgICBwYWRkaW5nOiA4cHggNjBweCAxMHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBoc2xhKDIwNCwgMTUlLCA5NCUsIDAuMzEpO1xyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0MDhkZmI7XHJcbiAgICAgICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkZXItYnV0dG9uIHtcclxuICAgIEBhcHBseSBwLTIgaG92ZXI6Ymctd2hpdGUgaG92ZXI6Ymctb3BhY2l0eS0xMCByb3VuZGVkLWxnIGFzcGVjdC1zcXVhcmU7XHJcbiAgfVxyXG4gIC5tb2R1bGVzLWJ0biB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLm1vZHVsZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3ZnIHtcclxuICAgICAgQGFwcGx5IHRvcC0yIGxlZnQtMiBkdXJhdGlvbi0zMDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImhlYWRlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTZweCk7XG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG4gIGdhcDogMTZweDtcbn1cbmhlYWRlciAuc2VhcmNoLWJveCB7XG4gIGJvcmRlci1jb2xvcjogI2VjZWZmMTtcbn1cbmhlYWRlciAuc2VhcmNoLWJveCA+IGJ1dHRvbiB7XG4gIGhlaWdodDogMjZweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmhlYWRlciAuc2VhcmNoLWJveCBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM4NTA7XG4gIHBhZGRpbmc6IDhweCA2MHB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM3LCAyNDAsIDI0MiwgMC4zMSk7XG59XG5oZWFkZXIgLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM0MDhkZmI7XG4gIHdpZHRoOiAzODBweDtcbn1cbmhlYWRlciAuaGVhZGVyLWJ1dHRvbiB7XG4gIEBhcHBseSBwLTIgaG92ZXI6Ymctd2hpdGUgaG92ZXI6Ymctb3BhY2l0eS0xMCByb3VuZGVkLWxnIGFzcGVjdC1zcXVhcmU7XG59XG5oZWFkZXIgLm1vZHVsZXMtYnRuOmhvdmVyIC5tb2R1bGUge1xuICBvcGFjaXR5OiAwO1xufVxuaGVhZGVyIC5tb2R1bGVzLWJ0bjpob3ZlciAubG9nbyB7XG4gIG9wYWNpdHk6IDE7XG59XG5oZWFkZXIgLm1vZHVsZXMtYnRuIHN2ZyB7XG4gIEBhcHBseSB0b3AtMiBsZWZ0LTIgZHVyYXRpb24tMzAwO1xufSJdfQ== */"], data: { animation: [_animations_animation__WEBPACK_IMPORTED_MODULE_0__.uReveal] } });


/***/ }),

/***/ 37644:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/side-nav/side-nav.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavComponent": () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var _animations_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/animation */ 34934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function SideNavComponent_li_4_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("min-w-[16px] duration-300 ", link_r1.open ? "-rotate-90" : "", "");
} }
function SideNavComponent_li_4_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "div", 12)(2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const subLink_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", subLink_r6.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subLink_r6.name, " ");
} }
function SideNavComponent_li_4_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SideNavComponent_li_4_ul_6_li_1_Template, 4, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hReveal", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", link_r1.subMenu);
} }
const _c0 = function (a0, a1) { return { open: a0, active: a1 }; };
function SideNavComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideNavComponent_li_4_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const link_r1 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.setLink(link_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SideNavComponent_li_4_button_5_Template, 2, 3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SideNavComponent_li_4_ul_6_Template, 2, 2, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, link_r1.open, ctx_r0.activeLink.includes(link_r1.link)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/icons/sidebar/", link_r1.icon, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", link_r1.subMenu == null ? null : link_r1.subMenu.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", link_r1.open);
} }
class SideNavComponent {
    constructor(router) {
        this.router = router;
        this.nav = [
            {
                name: "Dashboard",
                icon: "dashboard",
                link: "dashboard",
            },
            {
                name: "Configuration",
                icon: "configuration",
                link: "/config",
                subMenu: [
                    {
                        name: "Projects",
                        link: "/config/a",
                    },
                    {
                        name: "Dashboard",
                        link: "/config/s",
                    },
                ],
            },
            {
                name: "User Management",
                link: "/manage",
                icon: "configuration",
                subMenu: [
                    {
                        name: "Projects",
                        link: "/manage/f",
                    },
                    {
                        name: "Dashboard",
                        link: "/manage/d",
                    },
                ],
            },
        ];
        this.activeLink = "";
        this.router.events.subscribe((event) => {
            this.activeLink = this.router.url;
        });
    }
    setLink(link) {
        this.nav.forEach((ele) => {
            if (ele.name !== link.name) {
                ele.open = false;
            }
        });
        if (link === null || link === void 0 ? void 0 : link.subMenu) {
            link.open ? (link.open = false) : (link.open = true);
        }
        else {
        }
    }
    ngOnInit() { }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
SideNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["app-side-nav"]], decls: 5, vars: 1, consts: [[1, "fixed", "z-20", "left-0w-64", "duration-300"], ["routerLink", "/", 1, "cursor-pointer", "select-none", "w-64", "border-r", "border-zinc-900", "h-14", "flex", "items-center", "bg-primary-800", "px-6"], ["src", "assets/main/logo.svg", "alt", "logo", 1, "w-20"], [1, "flex", "flex-col", "gap-1", "p-3"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-1", 3, "ngClass", "click"], ["alt", "", 1, "min-w-[32px]", 3, "src"], [1, "flex-grow", "text-left"], [3, "class", 4, "ngIf"], ["class", "flex flex-col gap-1 mt-1 overflow-hidden ", 4, "ngIf"], ["src", "assets/icons/arrow-down.svg", "alt", "", 1, "w-4"], [1, "flex", "flex-col", "gap-1", "mt-1", "overflow-hidden"], ["routerLinkActive", "active", 1, "flex", "items-center", 3, "routerLink"], [1, "text"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SideNavComponent_li_4_Template, 7, 8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.nav);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["nav[_ngcontent-%COMP%] {\n  border-right: 0.5px solid #d9d9d9;\n  background: #f7f7fe;\n  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);\n  height: 100vh;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  transition-duration: 300ms;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div.open[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n  background-color: #ededf7;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div.active[_ngcontent-%COMP%] {\n  background-color: #ededf7;\n  color: #408dfb;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #ededf7;\n  color: #408dfb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmcm9udCUyMGVuZFxcUHJvamVjdHNcXHRhbGVudGxpbmtcXHNyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHNpZGUtbmF2XFxzaWRlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLGFBQUE7QUNDRjtBRElRO0VBQUEscUJBQUE7RUFBQSxlQUFBO0VBQUE7QUFBQTtBQUNBO0VBRUUseUJBQUE7QUNEVjtBREdRO0VBQ0UseUJBQUE7RUFFQSxjQUFBO0FDRlY7QURPYztFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0xoQiIsImZpbGUiOiJzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjZDlkOWQ5O1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3ZmU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLy8gdG9wOiA1NnB4O1xyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIEBhcHBseSBwLTIgcm91bmRlZC1sZyBkdXJhdGlvbi0zMDA7XHJcbiAgICAgICAgJi5vcGVuLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRmNztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRmNztcclxuXHJcbiAgICAgICAgICBjb2xvcjogIzQwOGRmYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZjc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQwOGRmYjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgLy8gQGFwcGx5IG92ZXJmbG93LWhpZGRlbiBoLTA7XHJcbiAgICAgIC8vICYub3BlbiB7XHJcbiAgICAgIC8vICAgQGFwcGx5IGgtYXV0bztcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJuYXYge1xuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJhY2tncm91bmQ6ICNmN2Y3ZmU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbm5hdiB1bCBsaSA+IGRpdiB7XG4gIEBhcHBseSBwLTIgcm91bmRlZC1sZyBkdXJhdGlvbi0zMDA7XG59XG5uYXYgdWwgbGkgPiBkaXYub3BlbiwgbmF2IHVsIGxpID4gZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRmNztcbn1cbm5hdiB1bCBsaSA+IGRpdi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGY3O1xuICBjb2xvcjogIzQwOGRmYjtcbn1cbm5hdiB1bCBsaSA+IGRpdiB1bCBsaSBkaXYuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRmNztcbiAgY29sb3I6ICM0MDhkZmI7XG59Il19 */"], data: { animation: [_animations_animation__WEBPACK_IMPORTED_MODULE_0__.hReveal] } });


/***/ }),

/***/ 79896:
/*!************************************************************!*\
  !*** ./src/app/shared/components/title/title.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleComponent": () => (/* binding */ TitleComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@pages/components/message/message.service */ 24474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





function TitleComponent_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2);
} }
function TitleComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TitleComponent_div_9_ng_container_2_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
class TitleComponent {
    constructor(http, _notification) {
        this.http = http;
        this._notification = _notification;
        this.apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.errors = [];
    }
    ngOnInit() { }
    updateApp() {
        this.info["perms"] = this.info.permissions;
        this.http
            .patch(this.apiKey + "app/" + this.info.uuid + "/update", this.info)
            .subscribe({
            next: (res) => {
                this._notification.create("success", "App Updated Successfully!", {
                    Position: "-right",
                    Style: "simple",
                    Duration: 2000,
                });
                this.errors = null;
            },
            error: (err) => {
                var _a, _b;
                this._notification.create("error", "App Updated error!", {
                    Position: "-right",
                    Style: "simple",
                    Duration: 2000,
                });
                if ((err === null || err === void 0 ? void 0 : err.status) == 422) {
                    for (const key in (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.errors) {
                        this.errors.push((_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.errors[key]);
                    }
                }
            },
        });
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pages_components_message_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService)); };
TitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], inputs: { title: "title", info: "info" }, decls: 11, vars: 3, consts: [[1, "title"], [1, "flex", "flex-wrap-reverse", "justify-between", "items-center"], [1, "flex", "gap-3"], [1, "btn", "text-white", "bg-success", "hover:bg-success-50", "hover:border-error-50", "font-medium", "dev-btn", 3, "click"], [1, "text-neutral-500"], ["class", "alert alert-danger", 4, "ngIf"], [1, "border-neutral-200", "my-8"], [1, "alert", "alert-danger"], [4, "ngFor", "ngForOf"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TitleComponent_Template_button_click_5_listener() { return ctx.updateApp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TitleComponent_div_9_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "hr", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title == null ? null : ctx.title.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title == null ? null : ctx.title.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--neutral-900, #171717);\n  font-size: 28px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n  \n  margin-bottom: 13px;\n}\n.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.alert   p)[_ngcontent-%COMP%] {\n  color: var(--neutral-500-main, #737373);\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 170%;\n  \n}\n.title[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-top: 20px;\n}\n.title[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  list-style: circle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmcm9udCUyMGVuZFxcUHJvamVjdHNcXHRhbGVudGxpbmtcXHNyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHRpdGxlXFx0aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtDQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUFtQixXQUFBO0VBQ25CLG1CQUFBO0FDQUo7QURFRTtFQUNFLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUFtQixXQUFBO0FDQ3ZCO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNDTiIsImZpbGUiOiJ0aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgaDIge1xyXG4gICAgY29sb3I6IHZhcigtLW5ldXRyYWwtOTAwLCAjMTcxNzE3KTtcclxuXHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7IC8qIDM5LjJweCAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICB9XHJcbiAgcDpub3QoLmFsZXJ0IHApIHtcclxuICAgIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTUwMC1tYWluLCAjNzM3MzczKTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTcwJTsgLyogMjcuMnB4ICovXHJcbiAgfVxyXG4gIC5hbGVydCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgbGlzdC1zdHlsZTogY2lyY2xlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIudGl0bGUgaDIge1xuICBjb2xvcjogdmFyKC0tbmV1dHJhbC05MDAsICMxNzE3MTcpO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIC8qIDM5LjJweCAqL1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xufVxuLnRpdGxlIHA6bm90KC5hbGVydCBwKSB7XG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTUwMC1tYWluLCAjNzM3MzczKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNzAlO1xuICAvKiAyNy4ycHggKi9cbn1cbi50aXRsZSAuYWxlcnQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnRpdGxlIC5hbGVydCB1bCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xufSJdfQ== */"] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    apiUrl: 'https://dev.retm.sa/api/portal/',
    production: false,
    cryptoKey: 'uJvMHYLFS90EbYOXshx2fEuqwiPoeGDu',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 15977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule);


/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map