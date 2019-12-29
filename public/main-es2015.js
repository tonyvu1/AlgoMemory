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
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/bubble-sort/bubble-sort.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/bubble-sort/bubble-sort.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\" [ngStyle]=\"{ marginTop: '2rem' }\">\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\n\n    <ng-template [ngIf]=\"running\" [ngIfElse]=\"readOnlyText\">\n      <textarea\n        placeholder=\"Type code...\"\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\n        [(ngModel)]=\"answer\"\n        autocomplete=\"off\"\n        autocorrect=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"false\"\n      ></textarea>\n    </ng-template>\n\n    <ng-template #readOnlyText>\n      <textarea\n        placeholder=\"Press start to begin...\"\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\n        [(ngModel)]=\"answer\"\n        autocomplete=\"off\"\n        autocorrect=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"false\"\n        readonly=\"true\"\n      ></textarea>\n    </ng-template>\n\n    <div class=\"col-xs-12 col-sm-12 col-md-5 control-panel\">\n      <div class=\"solution\">\n        <!-- Place custom code here-->\n        <div *ngIf=\"!running\" [@hide]>\n          <p>\n            function sort(arr) &#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var i = 0; i < arr.length; i++)\n            &#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var\n            j = 0; j < arr.length - 1; j++) &#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if\n            (arr[j] > arr[j + 1]) &#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var\n            temp = arr[j];<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j]\n            = arr[j + 1];<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j\n            + 1] = temp;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"header\">\n        <h1 class=\"outcome\">Bubble Sort</h1>\n        <p class=\"problem\">\n          Time Complexity: O(n^2). <br> \n          Objective: Write a bubble sort algorithm to arrange elements in an\n          array from smallest to largest.\n        </p>\n      </div>\n\n      <ng-template [ngIf]=\"!checked\" [ngIfElse]=\"notChecked\">\n        <div class=\"summary\">\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\n          <p class=\"outcome\">&nbsp;</p>\n          <br />\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\n        </div>\n      </ng-template>\n\n      <ng-template #notChecked>\n        <div class=\"summary\">\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\n          <p class=\"outcome\">{{ outcome }}</p>\n          <br />\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\n          <h1 class=\"outcome\">\n            <span\n              >{{ minutes < 10 ? \"0\" : \"\" }}{{ minutes }}:{{\n                seconds < 10 ? \"0\" : \"\"\n              }}{{ seconds }}</span\n            >\n          </h1>\n        </div>\n      </ng-template>\n\n      <ng-template [ngIf]=\"running\" [ngIfElse]=\"notRunning\">\n        <button\n          mat-raised-button\n          color=\"accent\"\n          class=\"check-btn\"\n          (click)=\"check()\"\n        >\n          Show Answer\n        </button>\n      </ng-template>\n\n      <ng-template #notRunning>\n        <button\n          mat-raised-button\n          color=\"accent\"\n          class=\"start-btn\"\n          (click)=\"start()\"\n        >\n          Start\n        </button>\n      </ng-template>\n\n      <div class=\"reset-next-btns\">\n        <button\n          mat-raised-button\n          color=\"warn\"\n          class=\"reset-btn\"\n          (click)=\"reset()\"\n          *ngIf=\"!running\"\n          [@hide]\n        >\n          Reset\n        </button>\n\n        <button\n          mat-raised-button\n          color=\"accent\"\n          class=\"next-btn\"\n          (click)=\"refresh()\"\n          *ngIf=\"!running\"\n          [@hide]\n        >\n          Next\n        </button>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/selection-sort/selection-sort.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/selection-sort/selection-sort.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\" [ngStyle]=\"{ marginTop: '2rem' }\">\n      <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\n  \n      <ng-template [ngIf]=\"running\" [ngIfElse]=\"readOnlyText\">\n        <textarea\n          placeholder=\"Type code...\"\n          class=\"col-xs-12 col-sm-12 col-md-5 answer\"\n          [(ngModel)]=\"answer\"\n          autocomplete=\"off\"\n          autocorrect=\"off\"\n          autocapitalize=\"off\"\n          spellcheck=\"false\"\n        ></textarea>\n      </ng-template>\n  \n      <ng-template #readOnlyText>\n        <textarea\n          placeholder=\"Press start to begin...\"\n          class=\"col-xs-12 col-sm-12 col-md-5 answer\"\n          [(ngModel)]=\"answer\"\n          autocomplete=\"off\"\n          autocorrect=\"off\"\n          autocapitalize=\"off\"\n          spellcheck=\"false\"\n          readonly=\"true\"\n        ></textarea>\n      </ng-template>\n  \n      <div class=\"col-xs-12 col-sm-12 col-md-5 control-panel\">\n        <div class=\"solution\">\n          <!-- Place custom code here-->\n          <div *ngIf=\"!running\" [@hide]>\n            <p>\n                function sort(arr) &#123;<br />\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var selected;<br /><br />\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var i = 0; i < arr.length - 1; i++) &#123;<br />\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selected = i;<br /><br />\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var min = arr[selected];<br /><br />\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var j = i; j < arr.length - 1; j++) &#123;<br />\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (min > arr[j + 1]) &#123;<br />\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                min = arr[j + 1];<br />\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                selected = j + 1;<br />\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\n\n\n\n\n\n\n              function sort(arr) &#123;<br />\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var i = 0; i < arr.length; i++)\n              &#123;<br />\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var\n              j = 0; j < arr.length - 1; j++) &#123;<br />\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if\n              (arr[j] > arr[j + 1]) &#123;<br />\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var\n              temp = arr[j];<br />\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j]\n              = arr[j + 1];<br />\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j\n              + 1] = temp;<br />\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />}\n            </p>\n          </div>\n        </div>\n  \n        <div class=\"header\">\n          <h1 class=\"outcome\">Selection Sort</h1>\n          <p class=\"problem\">\n            Bubble Sort O(n^2) <br>\n            Objective: Write a selection sort algorithm to arrange elements in an\n            array from smallest to largest.\n          </p>\n        </div>\n  \n        <ng-template [ngIf]=\"!checked\" [ngIfElse]=\"notChecked\">\n          <div class=\"summary\">\n            <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\n            <p class=\"outcome\">&nbsp;</p>\n            <br />\n            <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\n          </div>\n        </ng-template>\n  \n        <ng-template #notChecked>\n          <div class=\"summary\">\n            <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\n            <p class=\"outcome\">{{ outcome }}</p>\n            <br />\n            <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\n            <h1 class=\"outcome\">\n              <span\n                >{{ minutes < 10 ? \"0\" : \"\" }}{{ minutes }}:{{\n                  seconds < 10 ? \"0\" : \"\"\n                }}{{ seconds }}</span\n              >\n            </h1>\n          </div>\n        </ng-template>\n  \n        <ng-template [ngIf]=\"running\" [ngIfElse]=\"notRunning\">\n          <button\n            mat-raised-button\n            color=\"accent\"\n            class=\"check-btn\"\n            (click)=\"check()\"\n          >\n            Show Answer\n          </button>\n        </ng-template>\n  \n        <ng-template #notRunning>\n          <button\n            mat-raised-button\n            color=\"accent\"\n            class=\"start-btn\"\n            (click)=\"start()\"\n          >\n            Start\n          </button>\n        </ng-template>\n  \n        <div class=\"reset-next-btns\">\n          <button\n            mat-raised-button\n            color=\"warn\"\n            class=\"reset-btn\"\n            (click)=\"reset()\"\n            *ngIf=\"!running\"\n            [@hide]\n          >\n            Reset\n          </button>\n  \n          <button\n            mat-raised-button\n            color=\"accent\"\n            class=\"next-btn\"\n            (click)=\"refresh()\"\n            *ngIf=\"!running\"\n            [@hide]\n          >\n            Next\n          </button>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/string-reversal/string-reversal.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/string-reversal/string-reversal.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\" [ngStyle]=\"{ marginTop: '2rem' }\">\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\n\n    <ng-template [ngIf]=\"running\" [ngIfElse]=\"readOnlyText\">\n      <textarea\n        placeholder=\"Type code...\"\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\n        [(ngModel)]=\"answer\"\n        autocomplete=\"off\"\n        autocorrect=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"false\"\n      ></textarea>\n    </ng-template>\n\n    <ng-template #readOnlyText>\n      <textarea\n        placeholder=\"Press start to begin...\"\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\n        [(ngModel)]=\"answer\"\n        autocomplete=\"off\"\n        autocorrect=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"false\"\n        readonly=\"true\"\n      ></textarea>\n    </ng-template>\n\n    <div class=\"col-xs-12 col-sm-12 col-md-5 control-panel\">\n      <div class=\"solution\">\n        <!-- Place custom code here-->\n        <div *ngIf=\"!running\" [@hide]>\n          <p>\n            function reverse(str) &#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (str === \"\") &#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else &#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return\n            reverse(str.substring(1)) + str.charAt(0);<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\n            }<br /><br />\n          </p>\n        </div>\n      </div>\n\n      <div class=\"header\">\n        <h1 class=\"outcome\">Recursive String Reversal</h1>\n        <p class=\"problem\">\n          Time Complexity: O(n) <br> \n          Objective: Write a recursive algorithm to reverse a string.\n        </p>\n      </div>\n\n      <ng-template [ngIf]=\"!checked\" [ngIfElse]=\"notChecked\">\n        <div class=\"summary\">\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\n          <p class=\"outcome\">&nbsp;</p>\n          <br />\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\n        </div>\n      </ng-template>\n\n      <ng-template #notChecked>\n        <div class=\"summary\">\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\n          <p class=\"outcome\">{{ outcome }}</p>\n          <br />\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\n          <h1 class=\"outcome\">\n            <span\n              >{{ minutes < 10 ? \"0\" : \"\" }}{{ minutes }}:{{\n                seconds < 10 ? \"0\" : \"\"\n              }}{{ seconds }}</span\n            >\n          </h1>\n        </div>\n      </ng-template>\n\n      <ng-template [ngIf]=\"running\" [ngIfElse]=\"notRunning\">\n        <button\n          mat-raised-button\n          color=\"accent\"\n          class=\"check-btn\"\n          (click)=\"check()\"\n        >\n          Show Answer\n        </button>\n      </ng-template>\n\n      <ng-template #notRunning>\n        <button\n          mat-raised-button\n          color=\"accent\"\n          class=\"start-btn\"\n          (click)=\"start()\"\n        >\n          Start\n        </button>\n      </ng-template>\n\n      <div class=\"reset-next-btns\">\n        <button\n          mat-raised-button\n          color=\"warn\"\n          class=\"reset-btn\"\n          (click)=\"reset()\"\n          *ngIf=\"!running\"\n          [@hide]\n        >\n          Reset\n        </button>\n\n        <button\n          mat-raised-button\n          color=\"accent\"\n          class=\"next-btn\"\n          (click)=\"refresh()\"\n          *ngIf=\"!running\"\n          [@hide]\n        >\n          Next\n        </button>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"home\">Home works</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"navbar\" color=\"primary\">\n  <button mat-button [matMenuTriggerFor]=\"dataStructures\">\n    Data Structures\n  </button>\n\n  <mat-menu #dataStructures=\"matMenu\">\n    <button mat-menu-item [matMenuTriggerFor]=\"arrays\">Arrays</button>\n  </mat-menu>\n\n  <mat-menu #arrays=\"matMenu\">\n    <button mat-menu-item>Stacks</button>\n    <button mat-menu-item>Queues</button>\n  </mat-menu>\n\n  <button mat-button [matMenuTriggerFor]=\"algorithms\">\n    Algorithms\n  </button>\n\n  <mat-menu #algorithms=\"matMenu\">\n    <button mat-menu-item [matMenuTriggerFor]=\"sorting\">Sorting</button>\n    <button mat-menu-item [matMenuTriggerFor]=\"recursion\">Recursion</button>\n  </mat-menu>\n\n  <mat-menu #recursion=\"matMenu\">\n    <button mat-menu-item routerLink=\"string-reversal\">String Reversal</button>\n  </mat-menu>\n\n  <mat-menu #sorting=\"matMenu\">\n    <button mat-menu-item routerLink=\"bubble-sort\">Bubble Sort</button>\n    <button mat-menu-item routerLink=\"selection-sort\">Selection Sort</button>\n  </mat-menu>\n\n  <span class=\"fill-remaining-space\"></span>\n\n  <a class=\"logo\" href=\"\">BINARI</a>\n</mat-toolbar>\n\n<mat-toolbar class=\"header-toolbar\" >\n  <mat-toolbar color=\"primary\" [ngStyle]=\"{backgroundColor: '#303030'}\">\n\n  </mat-toolbar>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/stopwatch/stopwatch.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/stopwatch/stopwatch.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <p [ngStyle]=\"{ color: 'white' }\">stopwatch works!</p>\n  <h1 [ngStyle]=\"{ color: 'white' }\">{{ counter }}</h1>\n  <button mat-raised-button color=\"accent\" (click)=\"startTimer()\">\n    {{ startText }}\n  </button>\n  \n  <br/>\n  <br/>\n  <button mat-raised-button color=\"accent\" (click)=\"reset()\">\n    CLEAR\n  </button>\n  <br/>\n  <br/>\n  <button mat-raised-button color=\"accent\" (click)=\"showTime()\">\n    SHOW\n  </button>\n  <h1 [ngStyle]=\"{ color: 'white' }\">minutes: {{ minutes }}</h1>\n  <h1 [ngStyle]=\"{ color: 'white' }\">seconds: {{ seconds }}</h1>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_algorithms_string_reversal_string_reversal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/algorithms/string-reversal/string-reversal.component */ "./src/app/components/algorithms/string-reversal/string-reversal.component.ts");
/* harmony import */ var _components_algorithms_bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/algorithms/bubble-sort/bubble-sort.component */ "./src/app/components/algorithms/bubble-sort/bubble-sort.component.ts");
/* harmony import */ var _components_algorithms_selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/algorithms/selection-sort/selection-sort.component */ "./src/app/components/algorithms/selection-sort/selection-sort.component.ts");







const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "string-reversal", component: _components_algorithms_string_reversal_string_reversal_component__WEBPACK_IMPORTED_MODULE_4__["StringReversalComponent"] },
    { path: "bubble-sort", component: _components_algorithms_bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_5__["BubbleSortComponent"] },
    { path: "selection-sort", component: _components_algorithms_selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_6__["SelectionSortComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
        this.title = 'client';
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _components_algorithms_string_reversal_string_reversal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/algorithms/string-reversal/string-reversal.component */ "./src/app/components/algorithms/string-reversal/string-reversal.component.ts");
/* harmony import */ var _components_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/stopwatch/stopwatch.component */ "./src/app/components/stopwatch/stopwatch.component.ts");
/* harmony import */ var _components_algorithms_bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/algorithms/bubble-sort/bubble-sort.component */ "./src/app/components/algorithms/bubble-sort/bubble-sort.component.ts");
/* harmony import */ var _components_algorithms_selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/algorithms/selection-sort/selection-sort.component */ "./src/app/components/algorithms/selection-sort/selection-sort.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"], _components_algorithms_string_reversal_string_reversal_component__WEBPACK_IMPORTED_MODULE_22__["StringReversalComponent"], _components_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_23__["StopwatchComponent"], _components_algorithms_bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_24__["BubbleSortComponent"], _components_algorithms_selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_25__["SelectionSortComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
        ],
        providers: [_globals__WEBPACK_IMPORTED_MODULE_9__["Globals"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/algorithms/bubble-sort/bubble-sort.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/algorithms/bubble-sort/bubble-sort.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 90%;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #a0a0a0;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #a0a0a0;\n}\n\n.answer {\n  background: #eee;\n  padding: 2rem;\n  height: 80vh;\n  caret-color: white;\n  color: white;\n  background-color: #262626;\n  resize: none;\n  border: none;\n  margin-bottom: 1rem;\n  margin-right: 15px;\n  z-index: 5;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\ntextarea.answer:focus {\n  outline-width: 0;\n}\n\n.solution {\n  height: 40vh;\n  padding: 2rem;\n  border: none;\n  background-color: #262626;\n  color: white;\n  width: 100%;\n  overflow-y: scroll;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.start-btn {\n  position: absolute;\n  bottom: 36px;\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: #00a100;\n  color: white;\n}\n\n.check-btn {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  margin-bottom: 1rem;\n  color: black;\n}\n\n.reset-next-btns {\n  width: 100%;\n  position: absolute;\n  bottom: 35px;\n}\n\n.reset-btn {\n  position: absolute;\n  left: 0;\n  width: 49%;\n  margin-bottom: 1rem;\n  color: white;\n}\n\n.next-btn {\n  position: absolute;\n  right: 0;\n  width: 49%;\n}\n\n.outcome {\n  color: white;\n  font-size: 2rem;\n  margin: 0 0 1rem;\n}\n\n.summary {\n  color: white;\n}\n\n.problem {\n  color: white;\n  margin-bottom: 2rem;\n}\n\n.control-panel {\n  position: relative;\n  height: 80vh;\n  padding: 0;\n}\n\n.header {\n  padding: 10px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL2J1YmJsZS1zb3J0L0M6XFxVc2Vyc1xcdG9ueVxcRGVza3RvcFxcYmluYXJpXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsZ29yaXRobXNcXGJ1YmJsZS1zb3J0XFxidWJibGUtc29ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL2J1YmJsZS1zb3J0L2J1YmJsZS1zb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBREVFO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFaEI7O0FETEU7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0VoQjs7QURMRTtFQUNFLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDRWhCOztBRExFO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFaEI7O0FEQ0U7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUNFSjs7QURDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLHNCQUFBO0VBQ0EsaUNBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7QUNBSjs7QURJRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElFO0VBQ0UsaUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxnb3JpdGhtcy9idWJibGUtc29ydC9idWJibGUtc29ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgXG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XG4gICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xuICB9XG4gIFxuICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICAgIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XG4gIH1cbiAgXG4gIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICAgIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XG4gIH1cbiAgXG4gIC5hbnN3ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgY2FyZXQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHotaW5kZXg6IDU7XG5cbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICB0ZXh0YXJlYS5hbnN3ZXI6Zm9jdXMge1xuICAgIG91dGxpbmUtd2lkdGg6IDA7XG4gIH1cbiAgXG4gIC5zb2x1dGlvbiB7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuc3RhcnQtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE2MSwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuY2hlY2stYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgfVxuICBcbiAgLnJlc2V0LW5leHQtYnRucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMzVweDtcbiAgfVxuICBcbiAgLnJlc2V0LWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG4gIFxuICAubmV4dC1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogNDklO1xuICB9XG4gIFxuICAub3V0Y29tZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xuICB9XG4gIFxuICAuc3VtbWFyeSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgXG4gIH1cbiAgXG4gIC5wcm9ibGVtIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICBcbiAgLmNvbnRyb2wtcGFuZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweCAxcHg7XG4gIH0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogI2EwYTBhMDtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICNhMGEwYTA7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgY29sb3I6ICNhMGEwYTA7XG59XG5cbi5hbnN3ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiAycmVtO1xuICBoZWlnaHQ6IDgwdmg7XG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB6LWluZGV4OiA1O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxudGV4dGFyZWEuYW5zd2VyOmZvY3VzIHtcbiAgb3V0bGluZS13aWR0aDogMDtcbn1cblxuLnNvbHV0aW9uIHtcbiAgaGVpZ2h0OiA0MHZoO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5zdGFydC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoZWNrLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucmVzZXQtbmV4dC1idG5zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNXB4O1xufVxuXG4ucmVzZXQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNDklO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uZXh0LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0OSU7XG59XG5cbi5vdXRjb21lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG5cbi5zdW1tYXJ5IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvYmxlbSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmNvbnRyb2wtcGFuZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODB2aDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/algorithms/bubble-sort/bubble-sort.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/algorithms/bubble-sort/bubble-sort.component.ts ***!
  \****************************************************************************/
/*! exports provided: BubbleSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleSortComponent", function() { return BubbleSortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let BubbleSortComponent = class BubbleSortComponent {
    constructor(globals) {
        this.running = false;
        this.outcome = " ";
        this.answerNoSpaces = "";
        this.answer = "";
        this.checked = false;
        this.minutes = 0;
        this.seconds = 0;
        // Change solution based on problem
        this.solution = 'functionsort(arr){for(vari=0;i<arr.length;i++){for(varj=0;j<arr.length-1;j++){if(arr[j]>arr[j+1]){vartemp=arr[j];arr[j]=arr[j+1];arr[j+1]=temp;}}}}';
        globals.title = "Recursion";
    }
    ngOnInit() { }
    showTime() {
        this.seconds = this.counter % 60;
        this.minutes = Math.floor(this.counter / 60);
    }
    startTimer() {
        if (this.running) {
            const startTime = Math.floor(new Date().getTime() / 1000) - (this.counter || 0);
            this.timerRef = setInterval(() => {
                this.counter = Math.floor(new Date().getTime() / 1000) - startTime;
            });
        }
        else {
            clearInterval(this.timerRef);
        }
    }
    clearTimer() {
        this.running = false;
        this.counter = undefined;
        clearInterval(this.timerRef);
    }
    reset() {
        this.clearTimer();
        this.checked = false;
        this.answer = "";
    }
    ngOnDestroy() {
        clearInterval(this.timerRef);
    }
    start() {
        this.running = !this.running;
        this.startTimer();
        if (this.checked) {
            this.checked = false;
        }
    }
    check() {
        this.running = !this.running;
        this.startTimer();
        this.compare();
        this.checked = true;
        this.showTime();
    }
    refresh() {
        window.location.reload();
    }
    compare() {
        var numOfSpaces = 0;
        var temp = "";
        var str = this.answer;
        var ar = [];
        // Reset answerNoSpaces
        this.answerNoSpaces = "";
        ar = str.split("");
        // Bubble sort algorithm to move all spaces to end of array
        for (var i = 0; i < ar.length; i++) {
            for (var j = 0; j < ar.length - 1; j++) {
                if (ar[j] === " " || ar[j] === "\n" || ar[j] === "\t") {
                    temp = ar[j];
                    ar[j] = ar[j + 1];
                    ar[j + 1] = temp;
                }
            }
        }
        // Count numOfSpaces and then loop through and delete
        for (var i = 0; i < ar.length; i++) {
            if (ar[i] === " " || ar[i] === "\n" || ar[i] === "\t") {
                numOfSpaces++;
            }
        }
        for (var i = 0; i < numOfSpaces; i++) {
            ar.pop();
        }
        for (var i = 0; i < ar.length; i++) {
            this.answerNoSpaces += ar[i];
        }
        if (this.answerNoSpaces === this.solution) {
            this.outcome = "CORRECT!";
        }
        else {
            this.outcome = "INCORRECT";
        }
        console.log(ar);
        console.log(this.answerNoSpaces);
    } // end compare()
};
BubbleSortComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
BubbleSortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-bubble-sort",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bubble-sort.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/bubble-sort/bubble-sort.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("hide", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "0" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("200ms linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "1" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("200ms linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "0" }))])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bubble-sort.component.scss */ "./src/app/components/algorithms/bubble-sort/bubble-sort.component.scss")).default]
    })
], BubbleSortComponent);



/***/ }),

/***/ "./src/app/components/algorithms/selection-sort/selection-sort.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/algorithms/selection-sort/selection-sort.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 90%;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #a0a0a0;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #a0a0a0;\n}\n\n.answer {\n  background: #eee;\n  padding: 2rem;\n  height: 80vh;\n  caret-color: white;\n  color: white;\n  background-color: #262626;\n  resize: none;\n  border: none;\n  margin-bottom: 1rem;\n  margin-right: 15px;\n  z-index: 5;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\ntextarea.answer:focus {\n  outline-width: 0;\n}\n\n.solution {\n  height: 40vh;\n  padding: 2rem;\n  border: none;\n  background-color: #262626;\n  color: white;\n  width: 100%;\n  overflow-y: scroll;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.start-btn {\n  position: absolute;\n  bottom: 36px;\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: #00a100;\n  color: white;\n}\n\n.check-btn {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  margin-bottom: 1rem;\n  color: black;\n}\n\n.reset-next-btns {\n  width: 100%;\n  position: absolute;\n  bottom: 35px;\n}\n\n.reset-btn {\n  position: absolute;\n  left: 0;\n  width: 49%;\n  margin-bottom: 1rem;\n  color: white;\n}\n\n.next-btn {\n  position: absolute;\n  right: 0;\n  width: 49%;\n}\n\n.outcome {\n  color: white;\n  font-size: 2rem;\n  margin: 0 0 1rem;\n}\n\n.summary {\n  color: white;\n}\n\n.problem {\n  color: white;\n  margin-bottom: 2rem;\n}\n\n.control-panel {\n  position: relative;\n  height: 80vh;\n  padding: 0;\n}\n\n.header {\n  padding: 10px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL3NlbGVjdGlvbi1zb3J0L0M6XFxVc2Vyc1xcdG9ueVxcRGVza3RvcFxcYmluYXJpXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsZ29yaXRobXNcXHNlbGVjdGlvbi1zb3J0XFxzZWxlY3Rpb24tc29ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL3NlbGVjdGlvbi1zb3J0L3NlbGVjdGlvbi1zb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBREVFO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFaEI7O0FETEU7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0VoQjs7QURMRTtFQUNFLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDRWhCOztBRExFO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFaEI7O0FEQ0U7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUNFSjs7QURDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUVBLHNCQUFBO0VBQ0EsaUNBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7QUNBSjs7QURJRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElFO0VBQ0UsaUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxnb3JpdGhtcy9zZWxlY3Rpb24tc29ydC9zZWxlY3Rpb24tc29ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgXHJcbiAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgfVxyXG4gIFxyXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbiAgfVxyXG4gIFxyXG4gIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICBjb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xyXG4gIH1cclxuICBcclxuICAuYW5zd2VyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgY2FyZXQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICBcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG5cclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEuYW5zd2VyOmZvY3VzIHtcclxuICAgIG91dGxpbmUtd2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zb2x1dGlvbiB7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuc3RhcnQtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjEsIDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2stYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXNldC1uZXh0LWJ0bnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDM1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXNldC1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZXh0LWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA0OSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdXRjb21lIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbjogMCAwIDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zdW1tYXJ5IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ibGVtIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250cm9sLXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxcHg7XHJcbiAgfSIsIi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIGNvbG9yOiAjYTBhMGEwO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogI2EwYTBhMDtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI2EwYTBhMDtcbn1cblxuLmFuc3dlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGhlaWdodDogODB2aDtcbiAgY2FyZXQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG50ZXh0YXJlYS5hbnN3ZXI6Zm9jdXMge1xuICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuXG4uc29sdXRpb24ge1xuICBoZWlnaHQ6IDQwdmg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnN0YXJ0LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTEwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2hlY2stYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yZXNldC1uZXh0LWJ0bnMge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDM1cHg7XG59XG5cbi5yZXNldC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA0OSU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5leHQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDQ5JTtcbn1cblxuLm91dGNvbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuLnN1bW1hcnkge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9ibGVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY29udHJvbC1wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/algorithms/selection-sort/selection-sort.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/algorithms/selection-sort/selection-sort.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SelectionSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionSortComponent", function() { return SelectionSortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let SelectionSortComponent = class SelectionSortComponent {
    constructor(globals) {
        this.running = false;
        this.outcome = " ";
        this.answerNoSpaces = "";
        this.answer = "";
        this.checked = false;
        this.minutes = 0;
        this.seconds = 0;
        // Change solution based on problem
        this.solution = 'functionsort(arr){for(vari=0;i<arr.length;i++){for(varj=0;j<arr.length-1;j++){if(arr[j]>arr[j+1]){vartemp=arr[j];arr[j]=arr[j+1];arr[j+1]=temp;}}}}';
        globals.title = "Recursion";
    }
    ngOnInit() { }
    showTime() {
        this.seconds = this.counter % 60;
        this.minutes = Math.floor(this.counter / 60);
    }
    startTimer() {
        if (this.running) {
            const startTime = Math.floor(new Date().getTime() / 1000) - (this.counter || 0);
            this.timerRef = setInterval(() => {
                this.counter = Math.floor(new Date().getTime() / 1000) - startTime;
            });
        }
        else {
            clearInterval(this.timerRef);
        }
    }
    clearTimer() {
        this.running = false;
        this.counter = undefined;
        clearInterval(this.timerRef);
    }
    reset() {
        this.clearTimer();
        this.checked = false;
        this.answer = "";
    }
    ngOnDestroy() {
        clearInterval(this.timerRef);
    }
    start() {
        this.running = !this.running;
        this.startTimer();
        if (this.checked) {
            this.checked = false;
        }
    }
    check() {
        this.running = !this.running;
        this.startTimer();
        this.compare();
        this.checked = true;
        this.showTime();
    }
    refresh() {
        window.location.reload();
    }
    compare() {
        var numOfSpaces = 0;
        var temp = "";
        var str = this.answer;
        var ar = [];
        // Reset answerNoSpaces
        this.answerNoSpaces = "";
        ar = str.split("");
        // Bubble sort algorithm to move all spaces to end of array
        for (var i = 0; i < ar.length; i++) {
            for (var j = 0; j < ar.length - 1; j++) {
                if (ar[j] === " " || ar[j] === "\n" || ar[j] === "\t") {
                    temp = ar[j];
                    ar[j] = ar[j + 1];
                    ar[j + 1] = temp;
                }
            }
        }
        // Count numOfSpaces and then loop through and delete
        for (var i = 0; i < ar.length; i++) {
            if (ar[i] === " " || ar[i] === "\n" || ar[i] === "\t") {
                numOfSpaces++;
            }
        }
        for (var i = 0; i < numOfSpaces; i++) {
            ar.pop();
        }
        for (var i = 0; i < ar.length; i++) {
            this.answerNoSpaces += ar[i];
        }
        if (this.answerNoSpaces === this.solution) {
            this.outcome = "CORRECT!";
        }
        else {
            this.outcome = "INCORRECT";
        }
        console.log(ar);
        console.log(this.answerNoSpaces);
    } // end compare()
};
SelectionSortComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
SelectionSortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-selection-sort",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selection-sort.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/selection-sort/selection-sort.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("hide", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "0" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("200ms linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "1" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("200ms linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "0" }))])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selection-sort.component.scss */ "./src/app/components/algorithms/selection-sort/selection-sort.component.scss")).default]
    })
], SelectionSortComponent);



/***/ }),

/***/ "./src/app/components/algorithms/string-reversal/string-reversal.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/algorithms/string-reversal/string-reversal.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 90%;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #a0a0a0;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #a0a0a0;\n}\n\n.answer {\n  background: #eee;\n  padding: 2rem;\n  height: 80vh;\n  caret-color: white;\n  color: white;\n  background-color: #262626;\n  resize: none;\n  border: none;\n  margin-bottom: 1rem;\n  margin-right: 15px;\n  z-index: 5;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\ntextarea.answer:focus {\n  outline-width: 0;\n}\n\n.solution {\n  height: 40vh;\n  padding: 2rem;\n  border: none;\n  background-color: #262626;\n  color: white;\n  width: 100%;\n  overflow-y: scroll;\n  letter-spacing: 0.1rem;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.start-btn {\n  position: absolute;\n  bottom: 36px;\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: #00a100;\n  color: white;\n}\n\n.check-btn {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  margin-bottom: 1rem;\n  color: black;\n}\n\n.reset-next-btns {\n  width: 100%;\n  position: absolute;\n  bottom: 35px;\n}\n\n.reset-btn {\n  position: absolute;\n  left: 0;\n  width: 49%;\n  margin-bottom: 1rem;\n  color: white;\n}\n\n.next-btn {\n  position: absolute;\n  right: 0;\n  width: 49%;\n}\n\n.outcome {\n  color: white;\n  font-size: 2rem;\n  margin: 0 0 1rem;\n}\n\n.summary {\n  color: white;\n}\n\n.problem {\n  color: white;\n  margin-bottom: 2rem;\n}\n\n.control-panel {\n  position: relative;\n  height: 80vh;\n  padding: 0;\n}\n\n.header {\n  padding: 10px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL3N0cmluZy1yZXZlcnNhbC9DOlxcVXNlcnNcXHRvbnlcXERlc2t0b3BcXGJpbmFyaVxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhbGdvcml0aG1zXFxzdHJpbmctcmV2ZXJzYWxcXHN0cmluZy1yZXZlcnNhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL3N0cmluZy1yZXZlcnNhbC9zdHJpbmctcmV2ZXJzYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0VkOztBRExBO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFZDs7QURMQTtFQUNFLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDRWQ7O0FETEE7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0VkOztBRENBO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxzQkFBQTtFQUNBLGlDQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFFQSxzQkFBQTtFQUNBLGlDQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxnb3JpdGhtcy9zdHJpbmctcmV2ZXJzYWwvc3RyaW5nLXJldmVyc2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xufVxuXG4uYW5zd2VyIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgcGFkZGluZzogMnJlbTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBjYXJldC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB6LWluZGV4OiA1O1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG50ZXh0YXJlYS5hbnN3ZXI6Zm9jdXMge1xuICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuXG4uc29sdXRpb24ge1xuICBoZWlnaHQ6IDQwdmg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDM2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTYxLCAwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2hlY2stYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG4ucmVzZXQtbmV4dC1idG5zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNXB4O1xufVxuXG4ucmVzZXQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNDklO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4ubmV4dC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDklO1xufVxuXG4ub3V0Y29tZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG4uc3VtbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2JsZW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jb250cm9sLXBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDFweDtcbn1cbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIGNvbG9yOiAjYTBhMGEwO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogI2EwYTBhMDtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI2EwYTBhMDtcbn1cblxuLmFuc3dlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGhlaWdodDogODB2aDtcbiAgY2FyZXQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG50ZXh0YXJlYS5hbnN3ZXI6Zm9jdXMge1xuICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuXG4uc29sdXRpb24ge1xuICBoZWlnaHQ6IDQwdmg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnN0YXJ0LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTEwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2hlY2stYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yZXNldC1uZXh0LWJ0bnMge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDM1cHg7XG59XG5cbi5yZXNldC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA0OSU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5leHQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDQ5JTtcbn1cblxuLm91dGNvbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuLnN1bW1hcnkge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9ibGVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY29udHJvbC1wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/algorithms/string-reversal/string-reversal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/algorithms/string-reversal/string-reversal.component.ts ***!
  \************************************************************************************/
/*! exports provided: StringReversalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringReversalComponent", function() { return StringReversalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let StringReversalComponent = class StringReversalComponent {
    constructor(globals) {
        this.running = false;
        this.outcome = "";
        this.answerNoSpaces = "";
        this.answer = "";
        this.checked = false;
        this.minutes = 0;
        this.seconds = 0;
        // Change solution based on problem
        this.solution = 'functionreverse(str){if(str===""){return;}else{returnreverse(str.substring(1))+str.charAt(0);}}';
        globals.title = "Recursion";
    }
    ngOnInit() { }
    showTime() {
        this.seconds = this.counter % 60;
        this.minutes = Math.floor(this.counter / 60);
    }
    startTimer() {
        if (this.running) {
            const startTime = Math.floor(new Date().getTime() / 1000) - (this.counter || 0);
            this.timerRef = setInterval(() => {
                this.counter = Math.floor(new Date().getTime() / 1000) - startTime;
            });
        }
        else {
            clearInterval(this.timerRef);
        }
    }
    clearTimer() {
        this.running = false;
        this.counter = undefined;
        clearInterval(this.timerRef);
    }
    reset() {
        this.clearTimer();
        this.checked = false;
        this.answer = "";
    }
    ngOnDestroy() {
        clearInterval(this.timerRef);
    }
    start() {
        this.running = !this.running;
        this.startTimer();
        if (this.checked) {
            this.checked = false;
        }
    }
    check() {
        this.running = !this.running;
        this.startTimer();
        this.compare();
        this.checked = true;
        this.showTime();
    }
    refresh() {
        window.location.reload();
    }
    compare() {
        var numOfSpaces = 0;
        var temp = "";
        var str = this.answer;
        var ar = [];
        // Reset answerNoSpaces
        this.answerNoSpaces = "";
        ar = str.split("");
        // Bubble sort algorithm to move all spaces to end of array
        for (var i = 0; i < ar.length; i++) {
            for (var j = 0; j < ar.length - 1; j++) {
                if (ar[j] === " " || ar[j] === "\n" || ar[j] === "\t") {
                    temp = ar[j];
                    ar[j] = ar[j + 1];
                    ar[j + 1] = temp;
                }
            }
        }
        // Count numOfSpaces and then loop through and delete
        for (var i = 0; i < ar.length; i++) {
            if (ar[i] === " " || ar[i] === "\n" || ar[i] === "\t") {
                numOfSpaces++;
            }
        }
        for (var i = 0; i < numOfSpaces; i++) {
            ar.pop();
        }
        for (var i = 0; i < ar.length; i++) {
            this.answerNoSpaces += ar[i];
        }
        if (this.answerNoSpaces === this.solution) {
            this.outcome = "CORRECT!";
        }
        else {
            this.outcome = "INCORRECT";
        }
        console.log(ar);
        console.log(this.answerNoSpaces);
    } // end compare()
};
StringReversalComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
StringReversalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-string-reversal",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./string-reversal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/string-reversal/string-reversal.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("hide", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "0" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("200ms linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "1" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("200ms linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "0" }))])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./string-reversal.component.scss */ "./src/app/components/algorithms/string-reversal/string-reversal.component.scss")).default]
    })
], StringReversalComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  height: 100%;\n  width: 100%;\n  background-color: #303030;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcdG9ueVxcRGVza3RvcFxcYmluYXJpXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG59IiwiLmhvbWUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-data.service */ "./src/app/services/user-data.service.ts");




let HomeComponent = class HomeComponent {
    constructor(globals, _userDS) {
        this._userDS = _userDS;
        this.usersList = [];
        globals.title = "";
    }
    ngOnInit() {
        this.consoleLogUsers();
    }
    consoleLogUsers() {
        this._userDS.getUsers().subscribe(data => {
            this.usersList = data;
            console.log(this.usersList);
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_3__["UserDataService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  text-decoration: none;\n  color: white;\n}\n\n.navbar {\n  box-shadow: -4px 4px 33px -8px rgba(0, 0, 0, 0.75);\n  border-radius: 0%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #262626;\n}\n\n.fill-remaining-space {\n  flex: 1 1 auto;\n}\n\n.header-toolbar {\n  padding: 4rem 1.6rem;\n  background-color: #303030;\n  text-align: center;\n  justify-content: center;\n}\n\n.header {\n  font-weight: 100;\n  text-align: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvQzpcXFVzZXJzXFx0b255XFxEZXNrdG9wXFxiaW5hcmlcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBR0Usa0RBQUE7RUFFQSxpQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLm5hdmJhciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTRweCA0cHggMzNweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogLTRweCA0cHggMzNweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDMzcHggLThweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuXG4gIGJvcmRlci1yYWRpdXM6IDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhlYWRlci10b29sYmFyIHtcbiAgcGFkZGluZzogNHJlbSAxLjZyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXdlaWdodDogMTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG4iLCIubG9nbyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2YmFyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNHB4IDRweCAzM3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAtNHB4IDRweCAzM3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMzNweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhlYWRlci10b29sYmFyIHtcbiAgcGFkZGluZzogNHJlbSAxLjZyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXdlaWdodDogMTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals */ "./src/app/globals.ts");




let NavComponent = class NavComponent {
    constructor(breakpointObserver, globals) {
        this.breakpointObserver = breakpointObserver;
        this.globals = globals;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 600px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.handSetState = false;
            }
            else {
                this.handSetState = true;
            }
        });
    }
};
NavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcHdhdGNoL3N0b3B3YXRjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/stopwatch/stopwatch.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/stopwatch/stopwatch.component.ts ***!
  \*************************************************************/
/*! exports provided: StopwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopwatchComponent", function() { return StopwatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StopwatchComponent = class StopwatchComponent {
    constructor() {
        this.minutes = 0;
        this.seconds = 0;
        this.running = false;
        this.startText = 'Start';
    }
    ngOnInit() {
    }
    showTime() {
        this.seconds = this.counter % 5;
        this.minutes = Math.floor(this.counter / 5);
    }
    startTimer() {
        this.running = !this.running;
        if (this.running) {
            this.startText = 'Stop';
            const startTime = Math.floor(new Date().getTime() / 1000) - (this.counter || 0);
            this.timerRef = setInterval(() => {
                this.counter = Math.floor(new Date().getTime() / 1000) - startTime;
            });
        }
        else {
            this.startText = 'Resume';
            clearInterval(this.timerRef);
        }
    }
    clearTimer() {
        this.running = false;
        this.startText = 'Start';
        this.counter = undefined;
        clearInterval(this.timerRef);
    }
    ngOnDestroy() {
        clearInterval(this.timerRef);
    }
    reset() {
        this.clearTimer();
        this.startTimer();
    }
};
StopwatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stopwatch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stopwatch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/stopwatch/stopwatch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stopwatch.component.scss */ "./src/app/components/stopwatch/stopwatch.component.scss")).default]
    })
], StopwatchComponent);



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Globals = class Globals {
    constructor() {
        this.title = "Globals provider test";
    }
};
Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Globals);



/***/ }),

/***/ "./src/app/services/user-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");




let UserDataService = class UserDataService {
    constructor(http) {
        this.http = http;
        // Make empty for production http://localhost:5000
        this.serverURL = "http://localhost:5000";
    }
    getUsers() {
        return this.http.get(this.serverURL + "/users").map(res => res.json());
    }
};
UserDataService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserDataService);



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

module.exports = __webpack_require__(/*! C:\Users\tony\Desktop\binari\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);