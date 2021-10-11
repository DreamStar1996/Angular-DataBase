(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout class=\"app-layout\">\r\n  <nz-sider\r\n    class=\"menu-sidebar\"\r\n    nzCollapsible\r\n    nzWidth=\"256px\"\r\n    nzBreakpoint=\"md\"\r\n    [(nzCollapsed)]=\"isCollapsed\"\r\n    [nzTrigger]=\"null\"\r\n  >\r\n    <div class=\"sidebar-logo\">\r\n      <img src=\"https://ng.ant.design/assets/img/logo.svg\" alt=\"logo\" />\r\n      <h1>Angular DataBase Charts</h1>\r\n    </div>\r\n    <ul\r\n      nz-menu\r\n      nzTheme=\"dark\"\r\n      nzMode=\"inline\"\r\n      [nzInlineCollapsed]=\"isCollapsed\"\r\n    >\r\n      <li nz-submenu nzOpen nzTitle=\"TableBase Data\" nzIcon=\"dashboard\">\r\n        <ul>\r\n          <li nz-menu-item nzMatchRouter>\r\n            <a routerLink=\"ngx-database\">Ngx Database</a>\r\n          </li>\r\n          <li nz-menu-item nzMatchRouter>\r\n            <a routerLink=\"zorro-database\">Zorro Database</a>\r\n          </li>\r\n          <li nz-menu-item nzMatchRouter>\r\n            <a routerLink=\"ng-database\">Ng Database</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li nz-submenu nzOpen nzTitle=\"TableBase Charts\" nzIcon=\"form\">\r\n        <ul>\r\n          <li nz-menu-item nzMatchRouter>\r\n            <a routerLink=\"ngx-charts\">Ngx Charts</a>\r\n          </li>\r\n          <li nz-menu-item nzMatchRouter>\r\n            <a routerLink=\"zorro-charts\">Zorro Charts</a>\r\n          </li>\r\n          <li nz-menu-item nzMatchRouter>\r\n            <a routerLink=\"ng-charts\">Ng Charts</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </nz-sider>\r\n  <nz-layout>\r\n    <nz-header>\r\n      <div class=\"app-header\">\r\n        <span class=\"header-trigger\" (click)=\"isCollapsed = !isCollapsed\">\r\n          <i\r\n            class=\"trigger\"\r\n            nz-icon\r\n            [nzType]=\"isCollapsed ? 'menu-unfold' : 'menu-fold'\"\r\n          ></i>\r\n        </span>\r\n      </div>\r\n    </nz-header>\r\n    <nz-content>\r\n      <div class=\"inner-content\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </nz-content>\r\n  </nz-layout>\r\n</nz-layout>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-base-charts/ng-charts/ng-charts.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-base-charts/ng-charts/ng-charts.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div>\r\n        <mat-grid-list cols=\"2\" rowHeight=\"2:1.4\">\r\n            <mat-grid-tile>\r\n                <div id=\"Onechartdiv\"></div>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile>\r\n                <div id=\"Twochartdiv\"></div>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile>\r\n                <div id=\"Threechartdiv\"></div>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile>\r\n                <div id=\"Fourchartdiv\"></div>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </div>\r\n    <div>\r\n        <div id=\"Fivechartdiv\"></div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-base-charts/ngx-charts/ngx-charts.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-base-charts/ngx-charts/ngx-charts.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- HTML -->\n<div>\n    <div id=\"Onechartdiv\"></div>\n    <br>\n    <div id=\"Twochartdiv\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-base-charts/zorro-charts/zorro-charts.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-base-charts/zorro-charts/zorro-charts.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-database/ng-database/ng-database.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-database/ng-database/ng-database.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" />\r\n</mat-form-field>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n        <th mat-header-cell *matHeaderCellDef>No.</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.position }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef>Name</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n        <th mat-header-cell *matHeaderCellDef>Weight</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.weight }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n        <th mat-header-cell *matHeaderCellDef>Symbol</th>\r\n        <td mat-cell *matCellDef=\"let element\">{{ element.symbol }}</td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-database/ngx-database/ngx-database.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-database/ngx-database/ngx-database.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-datatable #myTable class=\"material expandable\" [columnMode]=\"ColumnMode.force\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [scrollbarV]=\"true\" [rows]=\"rows\" (page)=\"onPage($event)\">\r\n    <!-- Row Detail Template -->\r\n    <ngx-datatable-row-detail [rowHeight]=\"50\" #myDetailRow (toggle)=\"onDetailToggle($event)\">\r\n        <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-row-detail-template>\r\n            <div style=\"padding-left: 60px; font-size: 14px\">\r\n                <div>{{ row.gender }}, {{ row.age }}</div>\r\n            </div>\r\n        </ng-template>\r\n    </ngx-datatable-row-detail>\r\n    <!-- Column Templates -->\r\n    <ngx-datatable-column [width]=\"50\" [resizeable]=\"false\" [sortable]=\"false\" [draggable]=\"false\" [canAutoResize]=\"false\">\r\n        <ng-template let-row=\"row\" let-expanded=\"expanded\" ngx-datatable-cell-template>\r\n            <a href=\"#\" [class.datatable-icon-right]=\"!expanded\" [class.datatable-icon-down]=\"expanded\" title=\"Expand/Collapse Row\" (click)=\"toggleExpandRow(row)\" class=\"desktop-hidden\">\r\n            </a>\r\n        </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Name\" [flexGrow]=\"3\" [minWidth]=\"200\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            {{ value }}\r\n        </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Gender\" [flexGrow]=\"1\">\r\n        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span class=\"mobile-hidden\">{{ column.name }}</span>\r\n        </ng-template>\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n            <span class=\"mobile-hidden\">{{ value }}</span>\r\n        </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Age\" [flexGrow]=\"1\">\r\n        <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\r\n            <span class=\"mobile-hidden\">{{ column.name }}</span>\r\n        </ng-template>\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n            <span class=\"mobile-hidden\">{{ value }}</span>\r\n        </ng-template>\r\n    </ngx-datatable-column>\r\n</ngx-datatable>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-database/zorro-database/zorro-database.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-database/zorro-database/zorro-database.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"components-table-demo-control-bar\">\r\n    <form nz-form nzLayout=\"inline\">\r\n        <nz-form-item>\r\n            <nz-form-label><label>Bordered</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"bordered\" name=\"bordered\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Loading</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"loading\" name=\"loading\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Pagination</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"pagination\" name=\"pagination\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>PageSizeChanger</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"sizeChanger\" name=\"sizeChanger\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Title</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"title\" name=\"title\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Column Header</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"header\" name=\"header\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Footer</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"footer\" name=\"footer\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Expandable</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"expandable\" name=\"expandable\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Checkbox</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"checkbox\" name=\"checkbox\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Fixed Header</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"fixHeader\" name=\"fixHeader\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>No Result</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"noResult\" (ngModelChange)=\"noResultChange($event)\" name=\"noResult\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Simple Pagination</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-switch [(ngModel)]=\"simple\" name=\"simple\"></nz-switch>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Size</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-radio-group [(ngModel)]=\"size\" name=\"size\">\r\n                    <label nz-radio-button nzValue=\"default\">Default</label>\r\n                    <label nz-radio-button nzValue=\"middle\">Middle</label>\r\n                    <label nz-radio-button nzValue=\"small\">Small</label>\r\n                </nz-radio-group>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label><label>Pagination Position</label></nz-form-label>\r\n            <nz-form-control>\r\n                <nz-radio-group [(ngModel)]=\"position\" name=\"position\">\r\n                    <label nz-radio-button nzValue=\"top\">Top</label>\r\n                    <label nz-radio-button nzValue=\"bottom\">Bottom</label>\r\n                    <label nz-radio-button nzValue=\"both\">Both</label>\r\n                </nz-radio-group>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n    </form>\r\n</div>\r\n<nz-table #dynamicTable [nzScroll]=\"fixHeader ? { y: '240px' } : null\" [nzData]=\"listOfData\" [nzBordered]=\"bordered\" [nzSimple]=\"simple\" [nzLoading]=\"loading\" [nzPaginationPosition]=\"position\" [nzShowSizeChanger]=\"sizeChanger\" [nzFrontPagination]=\"pagination\"\r\n    [nzShowPagination]=\"pagination\" [nzFooter]=\"footer ? 'Here is Footer' : null\" [nzTitle]=\"title ? 'Here is Title' : null\" [nzSize]=\"size\" (nzCurrentPageDataChange)=\"currentPageDataChange($event)\">\r\n    <thead>\r\n        <tr *ngIf=\"header\">\r\n            <th nzWidth=\"50px\" nzShowExpand *ngIf=\"expandable\"></th>\r\n            <th nzWidth=\"62px\" nzShowCheckbox *ngIf=\"checkbox\" [(nzChecked)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\" (nzCheckedChange)=\"checkAll($event)\"></th>\r\n            <th nzWidth=\"150px\">Name</th>\r\n            <th nzWidth=\"70px\">Age</th>\r\n            <th>Address</th>\r\n            <th nzWidth=\"260px\">Action</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <ng-template ngFor let-data [ngForOf]=\"dynamicTable.data\">\r\n            <tr>\r\n                <td nzShowExpand *ngIf=\"expandable\" [(nzExpand)]=\"data.expand\"></td>\r\n                <td nzShowCheckbox *ngIf=\"checkbox\" [(nzChecked)]=\"data.checked\" (nzCheckedChange)=\"refreshStatus()\"></td>\r\n                <td>{{ data.name }}</td>\r\n                <td>{{ data.age }}</td>\r\n                <td>{{ data.address }}</td>\r\n                <td>\r\n                    <a href=\"#\">Action 一 {{ data.name }}</a>\r\n                    <nz-divider nzType=\"vertical\"></nz-divider>\r\n                    <a href=\"#\">Delete</a>\r\n                </td>\r\n            </tr>\r\n            <tr [nzExpand]=\"data.expand && expandable\">\r\n                <td></td>\r\n                <td [attr.colspan]=\"checkbox ? 5 : 4\">{{ data.description }}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </tbody>\r\n</nz-table>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout {\n  height: 100vh;\n}\n\n.menu-sidebar {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n}\n\n.header-trigger {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n\n.trigger:hover {\n  color: #1890ff;\n}\n\n.sidebar-logo {\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #001529;\n  transition: all 0.3s;\n}\n\n.sidebar-logo img {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo h1 {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\nnz-header {\n  padding: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.app-header {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n\nnz-content {\n  margin: 24px;\n}\n\n.inner-content {\n  padding: 24px;\n  background: #fff;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFRlc3RfUHJvZ3JhbVxcQW5ndWxhci1EYXRhQmFzZVxcRnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlFQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5hcHAtbGF5b3V0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1lbnUtc2lkZWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBib3gtc2hhZG93OiAycHggMCA2cHggcmdiYSgwLDIxLDQxLC4zNSk7XG59XG5cbi5oZWFkZXItdHJpZ2dlciB7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyxwYWRkaW5nIDBzO1xufVxuXG4udHJpZ2dlcjpob3ZlciB7XG4gIGNvbG9yOiAjMTg5MGZmO1xufVxuXG4uc2lkZWJhci1sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQ6ICMwMDE1Mjk7XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG5cbi5zaWRlYmFyLWxvZ28gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2lkZWJhci1sb2dvIGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsSGVsdmV0aWNhIE5ldWUsQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbm56LWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDIxLDQxLC4wOCk7XG59XG5cbm56LWNvbnRlbnQge1xuICBtYXJnaW46IDI0cHg7XG59XG5cbi5pbm5lci1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmFwcC1sYXlvdXQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWVudS1zaWRlYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJveC1zaGFkb3c6IDJweCAwIDZweCByZ2JhKDAsIDIxLCA0MSwgMC4zNSk7XG59XG5cbi5oZWFkZXItdHJpZ2dlciB7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MsIHBhZGRpbmcgMHM7XG59XG5cbi50cmlnZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICMxODkwZmY7XG59XG5cbi5zaWRlYmFyLWxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogIzAwMTUyOTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5zaWRlYmFyLWxvZ28gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2lkZWJhci1sb2dvIGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSBOZXVlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5uei1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLmFwcC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMjEsIDQxLCAwLjA4KTtcbn1cblxubnotY29udGVudCB7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuLmlubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.isCollapsed = false;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pages_table_database_table_database_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/table-database/table-database.module */ "./src/app/pages/table-database/table-database.module.ts");
/* harmony import */ var _pages_table_base_charts_table_base_charts_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/table-base-charts/table-base-charts.module */ "./src/app/pages/table-base-charts/table-base-charts.module.ts");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");













Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_9___default.a);

const icons = [
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_12__["MenuFoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_12__["MenuUnfoldOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_12__["DashboardOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_12__["FormOutline"],
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _pages_table_database_table_database_module__WEBPACK_IMPORTED_MODULE_10__["TableDatabaseModule"],
            _pages_table_base_charts_table_base_charts_module__WEBPACK_IMPORTED_MODULE_11__["TableBaseChartsModule"]
        ],
        providers: [
            { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"] },
            { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_ICONS"], useValue: icons },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/table-base-charts/ng-charts/ng-charts.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/table-base-charts/ng-charts/ng-charts.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-grid-tile {\n  background: lightblue;\n}\n\n#Onechartdiv {\n  width: 100%;\n  height: 600px;\n}\n\n#Twochartdiv {\n  width: 100%;\n  height: 600px;\n}\n\n#Threechartdiv {\n  width: 100%;\n  height: 600px;\n}\n\n#Fourchartdiv {\n  width: 100%;\n  height: 600px;\n}\n\n#Fivechartdiv {\n  width: 100%;\n  height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUtYmFzZS1jaGFydHMvbmctY2hhcnRzL0Q6XFxUZXN0X1Byb2dyYW1cXEFuZ3VsYXItRGF0YUJhc2VcXEZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcdGFibGUtYmFzZS1jaGFydHNcXG5nLWNoYXJ0c1xcbmctY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJsZS1iYXNlLWNoYXJ0cy9uZy1jaGFydHMvbmctY2hhcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFibGUtYmFzZS1jaGFydHMvbmctY2hhcnRzL25nLWNoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuI09uZWNoYXJ0ZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4jVHdvY2hhcnRkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbiNUaHJlZWNoYXJ0ZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4jRm91cmNoYXJ0ZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4jRml2ZWNoYXJ0ZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcbiIsIm1hdC1ncmlkLXRpbGUge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG59XG5cbiNPbmVjaGFydGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4jVHdvY2hhcnRkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuI1RocmVlY2hhcnRkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuI0ZvdXJjaGFydGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4jRml2ZWNoYXJ0ZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/table-base-charts/ng-charts/ng-charts.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/table-base-charts/ng-charts/ng-charts.component.ts ***!
  \**************************************************************************/
/*! exports provided: NgChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgChartsComponent", function() { return NgChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");


/* Imports */



/* Chart code */
// Themes begin
_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
let NgChartsComponent = class NgChartsComponent {
    constructor() { }
    ngOnInit() {
        this.Onechartdiv();
        this.Twochartdiv();
        this.Threechartdiv();
        this.Fourchartdiv();
        this.Fivechartdiv();
    }
    Onechartdiv() {
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("Onechartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarChart"]);
        chart.data = [
            {
                country: "USA",
                visits: 2025,
            },
            {
                country: "China",
                visits: 1882,
            },
            {
                country: "Japan",
                visits: 1809,
            },
            {
                country: "Germany",
                visits: 1322,
            },
            {
                country: "UK",
                visits: 1122,
            },
            {
                country: "France",
                visits: 1114,
            },
            {
                country: "India",
                visits: 984,
            },
            {
                country: "Spain",
                visits: 711,
            },
            {
                country: "Netherlands",
                visits: 665,
            },
            {
                country: "Russia",
                visits: 580,
            },
            {
                country: "South Korea",
                visits: 443,
            },
            {
                country: "Canada",
                visits: 441,
            },
        ];
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](40);
        let categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.labels.template.location = 0.5;
        categoryAxis.renderer.grid.template.strokeOpacity = 0.08;
        let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
        valueAxis.renderer.grid.template.strokeOpacity = 0.08;
        chart.seriesContainer.zIndex = -10;
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarColumnSeries"]());
        series.dataFields.categoryX = "country";
        series.dataFields.valueY = "visits";
        series.tooltipText = "{valueY.value}";
        series.columns.template.strokeOpacity = 0;
        series.columns.template.radarColumn.cornerRadius = 5;
        series.columns.template.radarColumn.innerCornerRadius = 0;
        chart.zoomOutButton.disabled = true;
        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", (fill, target) => {
            return chart.colors.getIndex(target.dataItem.index);
        });
        setInterval(() => {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["array"].each(chart.data, (item) => {
                item.visits *= Math.random() * 0.5 + 0.5;
                item.visits += 10;
            });
            chart.invalidateRawData();
        }, 2000);
        categoryAxis.sortBySeries = series;
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarCursor"]();
        chart.cursor.behavior = "none";
        chart.cursor.lineX.disabled = true;
        chart.cursor.lineY.disabled = true;
    }
    Twochartdiv() {
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("Twochartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.padding(40, 40, 40, 40);
        let categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "network";
        categoryAxis.renderer.minGridDistance = 1;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;
        let valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.min = 0;
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.dataFields.categoryY = "network";
        series.dataFields.valueX = "MAU";
        series.tooltipText = "{valueX.value}";
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusBottomRight = 5;
        series.columns.template.column.cornerRadiusTopRight = 5;
        let labelBullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.dx = 10;
        labelBullet.label.text =
            "{values.valueX.workingValue.formatNumber('#.0as')}";
        labelBullet.locationX = 1;
        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        categoryAxis.sortBySeries = series;
        chart.data = [
            {
                network: "Facebook",
                MAU: 2255250000,
            },
            {
                network: "Google+",
                MAU: 430000000,
            },
            {
                network: "Instagram",
                MAU: 1000000000,
            },
            {
                network: "Pinterest",
                MAU: 246500000,
            },
            {
                network: "Reddit",
                MAU: 355000000,
            },
            {
                network: "TikTok",
                MAU: 500000000,
            },
            {
                network: "Tumblr",
                MAU: 624000000,
            },
            {
                network: "Twitter",
                MAU: 329500000,
            },
            {
                network: "WeChat",
                MAU: 1000000000,
            },
            {
                network: "Weibo",
                MAU: 431000000,
            },
            {
                network: "Whatsapp",
                MAU: 1433333333,
            },
            {
                network: "YouTube",
                MAU: 1900000000,
            },
        ];
    }
    Threechartdiv() {
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("Threechartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.data = [
            {
                country: "USA",
                visits: 2025,
            },
            {
                country: "China",
                visits: 1882,
            },
            {
                country: "Japan",
                visits: 1809,
            },
            {
                country: "Germany",
                visits: 1322,
            },
            {
                country: "UK",
                visits: 1122,
            },
            {
                country: "France",
                visits: 1114,
            },
            {
                country: "India",
                visits: 984,
            },
            {
                country: "Spain",
                visits: 711,
            },
            {
                country: "Netherlands",
                visits: 665,
            },
            {
                country: "Russia",
                visits: 580,
            },
            {
                country: "South Korea",
                visits: 443,
            },
            {
                country: "Canada",
                visits: 441,
            },
        ];
        chart.padding(40, 40, 40, 40);
        let categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;
        let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
        //valueAxis.rangeChangeEasing = am4core.ease.linear;
        //valueAxis.rangeChangeDuration = 1500;
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.dataFields.categoryX = "country";
        series.dataFields.valueY = "visits";
        series.tooltipText = "{valueY.value}";
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.cornerRadiusTopLeft = 10;
        //series.interpolationDuration = 1500;
        //series.interpolationEasing = am4core.ease.linear;
        let labelBullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        labelBullet.label.verticalCenter = "bottom";
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";
        chart.zoomOutButton.disabled = true;
        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        setInterval(function () {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["array"].each(chart.data, function (item) {
                item.visits += Math.round(Math.random() * 200 - 100);
                item.visits = Math.abs(item.visits);
            });
            chart.invalidateRawData();
        }, 2000);
        categoryAxis.sortBySeries = series;
    }
    Fourchartdiv() {
        // Create chart instance
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("Fourchartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarChart"]);
        // Add data
        chart.data = [
            {
                category: "Research",
                value: 80,
                full: 100,
            },
            {
                category: "Marketing",
                value: 35,
                full: 100,
            },
            {
                category: "Distribution",
                value: 92,
                full: 100,
            },
            {
                category: "Human Resources",
                value: 68,
                full: 100,
            },
        ];
        // Make chart not full circle
        chart.startAngle = -90;
        chart.endAngle = 180;
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](20);
        // Set number format
        chart.numberFormatter.numberFormat = "#.#'%'";
        // Create axes
        let categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        //categoryAxis.renderer.labels.template.fontWeight = 500;
        categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            return target.dataItem.index >= 0
                ? chart.colors.getIndex(target.dataItem.index)
                : fill;
        });
        categoryAxis.renderer.minGridDistance = 10;
        let valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.max = 100;
        valueAxis.strictMinMax = true;
        // Create series
        let series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarColumnSeries"]());
        series1.dataFields.valueX = "full";
        series1.dataFields.categoryY = "category";
        series1.clustered = false;
        series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["InterfaceColorSet"]().getFor("alternativeBackground");
        series1.columns.template.fillOpacity = 0.08;
        //series1.columns.template.cornerRadiusTopLeft = 20;
        series1.columns.template.strokeWidth = 0;
        series1.columns.template.radarColumn.cornerRadius = 20;
        let series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarColumnSeries"]());
        series2.dataFields.valueX = "value";
        series2.dataFields.categoryY = "category";
        series2.clustered = false;
        series2.columns.template.strokeWidth = 0;
        series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
        series2.columns.template.radarColumn.cornerRadius = 20;
        series2.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        // Add cursor
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarCursor"]();
    }
    Fivechartdiv() {
        // create chart
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("Fivechartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["TreeMap"]);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
        chart.data = [
            {
                name: "First",
                children: [
                    {
                        name: "A1",
                        value: 100,
                    },
                    {
                        name: "A2",
                        value: 60,
                    },
                    {
                        name: "A3",
                        value: 30,
                    },
                ],
            },
            {
                name: "Second",
                children: [
                    {
                        name: "B1",
                        value: 135,
                    },
                    {
                        name: "B2",
                        value: 98,
                    },
                    {
                        name: "B3",
                        value: 56,
                    },
                ],
            },
            {
                name: "Third",
                children: [
                    {
                        name: "C1",
                        value: 335,
                    },
                    {
                        name: "C2",
                        value: 148,
                    },
                    {
                        name: "C3",
                        value: 126,
                    },
                    {
                        name: "C4",
                        value: 26,
                    },
                ],
            },
            {
                name: "Fourth",
                children: [
                    {
                        name: "D1",
                        value: 415,
                    },
                    {
                        name: "D2",
                        value: 148,
                    },
                    {
                        name: "D3",
                        value: 89,
                    },
                    {
                        name: "D4",
                        value: 64,
                    },
                    {
                        name: "D5",
                        value: 16,
                    },
                ],
            },
            {
                name: "Fifth",
                children: [
                    {
                        name: "E1",
                        value: 687,
                    },
                    {
                        name: "E2",
                        value: 148,
                    },
                ],
            },
        ];
        chart.colors.step = 2;
        // define data fields
        chart.dataFields.value = "value";
        chart.dataFields.name = "name";
        chart.dataFields.children = "children";
        chart.zoomable = false;
        let bgColor = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["InterfaceColorSet"]().getFor("background");
        // level 0 series template
        let level0SeriesTemplate = chart.seriesTemplates.create("0");
        let level0ColumnTemplate = level0SeriesTemplate.columns.template;
        level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
        level0ColumnTemplate.fillOpacity = 0;
        level0ColumnTemplate.strokeWidth = 4;
        level0ColumnTemplate.strokeOpacity = 0;
        // level 1 series template
        let level1SeriesTemplate = chart.seriesTemplates.create("1");
        let level1ColumnTemplate = level1SeriesTemplate.columns.template;
        level1SeriesTemplate.tooltip.animationDuration = 0;
        level1SeriesTemplate.strokeOpacity = 1;
        level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
        level1ColumnTemplate.fillOpacity = 1;
        level1ColumnTemplate.strokeWidth = 4;
        level1ColumnTemplate.stroke = bgColor;
        let bullet1 = level1SeriesTemplate.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        bullet1.locationY = 0.5;
        bullet1.locationX = 0.5;
        bullet1.label.text = "{name}";
        bullet1.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#ffffff");
        chart.maxLevels = 2;
    }
};
NgChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-ng-charts",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ng-charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-base-charts/ng-charts/ng-charts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ng-charts.component.scss */ "./src/app/pages/table-base-charts/ng-charts/ng-charts.component.scss")).default]
    })
], NgChartsComponent);



/***/ }),

/***/ "./src/app/pages/table-base-charts/ngx-charts/ngx-charts.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/table-base-charts/ngx-charts/ngx-charts.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#Onechartdiv {\n  width: 100%;\n  height: 500px;\n}\n\n#Twochartdiv {\n  width: 100%;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUtYmFzZS1jaGFydHMvbmd4LWNoYXJ0cy9EOlxcVGVzdF9Qcm9ncmFtXFxBbmd1bGFyLURhdGFCYXNlXFxGcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXHRhYmxlLWJhc2UtY2hhcnRzXFxuZ3gtY2hhcnRzXFxuZ3gtY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJsZS1iYXNlLWNoYXJ0cy9uZ3gtY2hhcnRzL25neC1jaGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlLWJhc2UtY2hhcnRzL25neC1jaGFydHMvbmd4LWNoYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNPbmVjaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbiNUd29jaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn0iLCIjT25lY2hhcnRkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuI1R3b2NoYXJ0ZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/table-base-charts/ngx-charts/ngx-charts.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/table-base-charts/ngx-charts/ngx-charts.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgxChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChartsComponent", function() { return NgxChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");


/* Imports */



/* Chart code */
// Themes begin
_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Themes end
let NgxChartsComponent = class NgxChartsComponent {
    constructor() { }
    ngOnInit() {
        this.Onechartdiv();
        this.Twochartdiv();
    }
    Onechartdiv() {
        // Create chart instance
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("Onechartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"]();
        // Add data
        chart.data = [
            {
                country: "USA",
                visits: 3025,
            },
            {
                country: "China",
                visits: 1882,
            },
            {
                country: "Japan",
                visits: 1809,
            },
            {
                country: "Germany",
                visits: 1322,
            },
            {
                country: "UK",
                visits: 1122,
            },
            {
                country: "France",
                visits: 1114,
            },
            {
                country: "India",
                visits: 984,
            },
            {
                country: "Spain",
                visits: 711,
            },
            {
                country: "Netherlands",
                visits: 665,
            },
        ];
        prepareParetoData();
        function prepareParetoData() {
            let total = 0;
            for (var i = 0; i < chart.data.length; i++) {
                let value = chart.data[i].visits;
                total += value;
            }
            let sum = 0;
            for (var i = 0; i < chart.data.length; i++) {
                let value = chart.data[i].visits;
                sum += value;
                chart.data[i].pareto = (sum / total) * 100;
            }
        }
        // Create axes
        let categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.tooltip.disabled = true;
        let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.minWidth = 50;
        valueAxis.min = 0;
        valueAxis.cursorTooltipEnabled = false;
        // Create series
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;
        series.tooltip.pointerOrientation = "vertical";
        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;
        // on hover, make corner radiuses bigger
        let hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;
        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        let paretoValueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        paretoValueAxis.renderer.opposite = true;
        paretoValueAxis.min = 0;
        paretoValueAxis.max = 100;
        paretoValueAxis.strictMinMax = true;
        paretoValueAxis.renderer.grid.template.disabled = true;
        paretoValueAxis.numberFormatter = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["NumberFormatter"]();
        paretoValueAxis.numberFormatter.numberFormat = "#'%'";
        paretoValueAxis.cursorTooltipEnabled = false;
        let paretoSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        paretoSeries.dataFields.valueY = "pareto";
        paretoSeries.dataFields.categoryX = "country";
        paretoSeries.yAxis = paretoValueAxis;
        paretoSeries.tooltipText = "pareto: {valueY.formatNumber('#.0')}%[/]";
        paretoSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
        paretoSeries.strokeWidth = 2;
        paretoSeries.stroke = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["InterfaceColorSet"]().getFor("alternativeBackground");
        paretoSeries.strokeOpacity = 0.5;
        // Cursor
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        chart.cursor.behavior = "panX";
    }
    Twochartdiv() {
        // Create chart instance
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("Twochartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        let data = [];
        let price1 = 1000, price2 = 1200;
        let quantity = 30000;
        for (var i = 0; i < 360; i++) {
            price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
            data.push({ date1: new Date(2015, 0, i), price1: price1 });
        }
        for (var i = 0; i < 360; i++) {
            price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
            data.push({ date2: new Date(2017, 0, i), price2: price2 });
        }
        chart.data = data;
        let dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#e59165");
        let dateAxis2 = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]());
        dateAxis2.renderer.grid.template.location = 0;
        dateAxis2.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#dfcc64");
        let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#e59165");
        valueAxis.renderer.minWidth = 60;
        let valueAxis2 = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis2.tooltip.disabled = true;
        valueAxis2.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#dfcc64");
        valueAxis2.renderer.minWidth = 60;
        valueAxis2.syncWithAxis = valueAxis;
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series.name = "2015";
        series.dataFields.dateX = "date1";
        series.dataFields.valueY = "price1";
        series.tooltipText = "{valueY.value}";
        series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#e59165");
        series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#e59165");
        //series.strokeWidth = 3;
        let series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series2.name = "2017";
        series2.dataFields.dateX = "date2";
        series2.dataFields.valueY = "price2";
        series2.yAxis = valueAxis2;
        series2.xAxis = dateAxis2;
        series2.tooltipText = "{valueY.value}";
        series2.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#dfcc64");
        series2.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#dfcc64");
        //series2.strokeWidth = 3;
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        chart.cursor.xAxis = dateAxis2;
        let scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChartScrollbar"]();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
        chart.legend.parent = chart.plotContainer;
        chart.legend.zIndex = 100;
        valueAxis2.renderer.grid.template.strokeOpacity = 0.07;
        dateAxis2.renderer.grid.template.strokeOpacity = 0.07;
        dateAxis.renderer.grid.template.strokeOpacity = 0.07;
        valueAxis.renderer.grid.template.strokeOpacity = 0.07;
    }
};
NgxChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-ngx-charts",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngx-charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-base-charts/ngx-charts/ngx-charts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngx-charts.component.scss */ "./src/app/pages/table-base-charts/ngx-charts/ngx-charts.component.scss")).default]
    })
], NgxChartsComponent);



/***/ }),

/***/ "./src/app/pages/table-base-charts/table-base-charts.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/table-base-charts/table-base-charts.module.ts ***!
  \*********************************************************************/
/*! exports provided: TableBaseChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBaseChartsModule", function() { return TableBaseChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _ngx_charts_ngx_charts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngx-charts/ngx-charts.component */ "./src/app/pages/table-base-charts/ngx-charts/ngx-charts.component.ts");
/* harmony import */ var _ng_charts_ng_charts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-charts/ng-charts.component */ "./src/app/pages/table-base-charts/ng-charts/ng-charts.component.ts");
/* harmony import */ var _zorro_charts_zorro_charts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zorro-charts/zorro-charts.component */ "./src/app/pages/table-base-charts/zorro-charts/zorro-charts.component.ts");








const routes = [
    {
        path: "ngx-charts",
        component: _ngx_charts_ngx_charts_component__WEBPACK_IMPORTED_MODULE_5__["NgxChartsComponent"],
    },
    {
        path: "zorro-charts",
        component: _zorro_charts_zorro_charts_component__WEBPACK_IMPORTED_MODULE_7__["ZorroChartsComponent"],
    },
    {
        path: "ng-charts",
        component: _ng_charts_ng_charts_component__WEBPACK_IMPORTED_MODULE_6__["NgChartsComponent"],
    },
];
let TableBaseChartsModule = class TableBaseChartsModule {
};
TableBaseChartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ngx_charts_ngx_charts_component__WEBPACK_IMPORTED_MODULE_5__["NgxChartsComponent"], _ng_charts_ng_charts_component__WEBPACK_IMPORTED_MODULE_6__["NgChartsComponent"], _zorro_charts_zorro_charts_component__WEBPACK_IMPORTED_MODULE_7__["ZorroChartsComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], TableBaseChartsModule);



/***/ }),

/***/ "./src/app/pages/table-base-charts/zorro-charts/zorro-charts.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/table-base-charts/zorro-charts/zorro-charts.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlLWJhc2UtY2hhcnRzL3pvcnJvLWNoYXJ0cy96b3Jyby1jaGFydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/table-base-charts/zorro-charts/zorro-charts.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/table-base-charts/zorro-charts/zorro-charts.component.ts ***!
  \********************************************************************************/
/*! exports provided: ZorroChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZorroChartsComponent", function() { return ZorroChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ZorroChartsComponent = class ZorroChartsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ZorroChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-zorro-charts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./zorro-charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-base-charts/zorro-charts/zorro-charts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./zorro-charts.component.scss */ "./src/app/pages/table-base-charts/zorro-charts/zorro-charts.component.scss")).default]
    })
], ZorroChartsComponent);



/***/ }),

/***/ "./src/app/pages/table-database/ng-database/ng-database.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/table-database/ng-database/ng-database.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Structure */\ntable {\n  width: 100%;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUtZGF0YWJhc2UvbmctZGF0YWJhc2UvRDpcXFRlc3RfUHJvZ3JhbVxcQW5ndWxhci1EYXRhQmFzZVxcRnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFx0YWJsZS1kYXRhYmFzZVxcbmctZGF0YWJhc2VcXG5nLWRhdGFiYXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJsZS1kYXRhYmFzZS9uZy1kYXRhYmFzZS9uZy1kYXRhYmFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBRUE7RUFDSSxXQUFBO0FDQUo7QURHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJsZS1kYXRhYmFzZS9uZy1kYXRhYmFzZS9uZy1kYXRhYmFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0cnVjdHVyZSAqL1xyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi8qIFN0cnVjdHVyZSAqL1xudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/table-database/ng-database/ng-database.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/table-database/ng-database/ng-database.component.ts ***!
  \***************************************************************************/
/*! exports provided: NgDatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDatabaseComponent", function() { return NgDatabaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");



const ELEMENT_DATA = [
    { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
    { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
    { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
    { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
    { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
    { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
    { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
    { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
    { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];
let NgDatabaseComponent = class NgDatabaseComponent {
    constructor() {
        this.displayedColumns = ["position", "name", "weight", "symbol"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() { }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
NgDatabaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-ng-database",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ng-database.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-database/ng-database/ng-database.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ng-database.component.scss */ "./src/app/pages/table-database/ng-database/ng-database.component.scss")).default]
    })
], NgDatabaseComponent);



/***/ }),

/***/ "./src/app/pages/table-database/ngx-database/ngx-database.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/table-database/ngx-database/ngx-database.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}\n@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: initial;\n  }\n}\n.ngx-datatable.scroll-vertical {\n  height: 560px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUtZGF0YWJhc2Uvbmd4LWRhdGFiYXNlL0Q6XFxUZXN0X1Byb2dyYW1cXEFuZ3VsYXItRGF0YUJhc2VcXEZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcdGFibGUtZGF0YWJhc2VcXG5neC1kYXRhYmFzZVxcbmd4LWRhdGFiYXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJsZS1kYXRhYmFzZS9uZ3gtZGF0YWJhc2Uvbmd4LWRhdGFiYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxnQkFBQTtFQ0NGOztFREVBO0lBQ0UsYUFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsYUFBQTtFQ0FGOztFREdBO0lBQ0UsZ0JBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJsZS1kYXRhYmFzZS9uZ3gtZGF0YWJhc2Uvbmd4LWRhdGFiYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZGVza3RvcC1oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbDtcclxuICB9XHJcblxyXG4gIC5tb2JpbGUtaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gIC5kZXNrdG9wLWhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS1oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbDtcclxuICB9XHJcbn1cclxuXHJcbi5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCB7XHJcbiAgaGVpZ2h0OiA1NjBweDtcclxufVxyXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGVza3RvcC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cblxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn1cbi5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCB7XG4gIGhlaWdodDogNTYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/table-database/ngx-database/ngx-database.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/table-database/ngx-database/ngx-database.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NgxDatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatabaseComponent", function() { return NgxDatabaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");



let NgxDatabaseComponent = class NgxDatabaseComponent {
    constructor() {
        this.rows = [];
        this.expanded = {};
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"];
        this.fetch((data) => {
            this.rows = data;
        });
    }
    ngOnInit() { }
    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/data/100k.json`);
        req.onload = () => {
            cb(JSON.parse(req.response));
        };
        req.send();
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }
    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTable', { static: true })
], NgxDatabaseComponent.prototype, "table", void 0);
NgxDatabaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngx-database',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngx-database.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-database/ngx-database/ngx-database.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngx-database.component.scss */ "./src/app/pages/table-database/ngx-database/ngx-database.component.scss")).default]
    })
], NgxDatabaseComponent);



/***/ }),

/***/ "./src/app/pages/table-database/table-database.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/table-database/table-database.module.ts ***!
  \***************************************************************/
/*! exports provided: TableDatabaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDatabaseModule", function() { return TableDatabaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/switch */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-switch.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-divider.js");
/* harmony import */ var _ngx_database_ngx_database_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ngx-database/ngx-database.component */ "./src/app/pages/table-database/ngx-database/ngx-database.component.ts");
/* harmony import */ var _zorro_database_zorro_database_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./zorro-database/zorro-database.component */ "./src/app/pages/table-database/zorro-database/zorro-database.component.ts");
/* harmony import */ var _ng_database_ng_database_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ng-database/ng-database.component */ "./src/app/pages/table-database/ng-database/ng-database.component.ts");
















const routes = [
    {
        path: "ngx-database",
        component: _ngx_database_ngx_database_component__WEBPACK_IMPORTED_MODULE_13__["NgxDatabaseComponent"],
    },
    {
        path: "zorro-database",
        component: _zorro_database_zorro_database_component__WEBPACK_IMPORTED_MODULE_14__["ZorroDatabaseComponent"],
    },
    {
        path: "ng-database",
        component: _ng_database_ng_database_component__WEBPACK_IMPORTED_MODULE_15__["NgDatabaseComponent"],
    },
];
let TableDatabaseModule = class TableDatabaseModule {
};
TableDatabaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ngx_database_ngx_database_component__WEBPACK_IMPORTED_MODULE_13__["NgxDatabaseComponent"],
            _zorro_database_zorro_database_component__WEBPACK_IMPORTED_MODULE_14__["ZorroDatabaseComponent"],
            _ng_database_ng_database_component__WEBPACK_IMPORTED_MODULE_15__["NgDatabaseComponent"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormModule"],
            ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_10__["NzSwitchModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__["NzRadioModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__["NzDividerModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], TableDatabaseModule);



/***/ }),

/***/ "./src/app/pages/table-database/zorro-database/zorro-database.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/table-database/zorro-database/zorro-database.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".components-table-demo-control-bar {\n  margin-bottom: 12px;\n}\n\n.nz-form-item {\n  margin-right: 16px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUtZGF0YWJhc2Uvem9ycm8tZGF0YWJhc2UvRDpcXFRlc3RfUHJvZ3JhbVxcQW5ndWxhci1EYXRhQmFzZVxcRnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFx0YWJsZS1kYXRhYmFzZVxcem9ycm8tZGF0YWJhc2VcXHpvcnJvLWRhdGFiYXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJsZS1kYXRhYmFzZS96b3Jyby1kYXRhYmFzZS96b3Jyby1kYXRhYmFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJsZS1kYXRhYmFzZS96b3Jyby1kYXRhYmFzZS96b3Jyby1kYXRhYmFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnRzLXRhYmxlLWRlbW8tY29udHJvbC1iYXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5uei1mb3JtLWl0ZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuIiwiLmNvbXBvbmVudHMtdGFibGUtZGVtby1jb250cm9sLWJhciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5uei1mb3JtLWl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/table-database/zorro-database/zorro-database.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/table-database/zorro-database/zorro-database.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ZorroDatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZorroDatabaseComponent", function() { return ZorroDatabaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ZorroDatabaseComponent = class ZorroDatabaseComponent {
    constructor() {
        this.listOfData = [];
        this.displayData = [];
        this.bordered = false;
        this.loading = false;
        this.sizeChanger = false;
        this.pagination = true;
        this.header = true;
        this.title = true;
        this.footer = true;
        this.fixHeader = false;
        this.size = "small";
        this.expandable = true;
        this.checkbox = true;
        this.allChecked = false;
        this.indeterminate = false;
        this.simple = false;
        this.noResult = false;
        this.position = "bottom";
    }
    ngOnInit() {
        for (let i = 1; i <= 100; i++) {
            this.listOfData.push({
                name: "John Brown",
                age: `${i}2`,
                address: `New York No. ${i} Lake Park`,
                description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
                checked: false,
                expand: false,
            });
        }
    }
    currentPageDataChange($event) {
        this.displayData = $event;
        this.refreshStatus();
    }
    refreshStatus() {
        const validData = this.displayData.filter((value) => !value.disabled);
        const allChecked = validData.length > 0 &&
            validData.every((value) => value.checked === true);
        const allUnChecked = validData.every((value) => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = !allChecked && !allUnChecked;
    }
    checkAll(value) {
        this.displayData.forEach((data) => {
            if (!data.disabled) {
                data.checked = value;
            }
        });
        this.refreshStatus();
    }
    noResultChange(status) {
        this.listOfData = [];
        if (!status) {
            this.ngOnInit();
        }
    }
};
ZorroDatabaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-zorro-database",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./zorro-database.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/table-database/zorro-database/zorro-database.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./zorro-database.component.scss */ "./src/app/pages/table-database/zorro-database/zorro-database.component.scss")).default]
    })
], ZorroDatabaseComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Test_Program\Angular-DataBase\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map