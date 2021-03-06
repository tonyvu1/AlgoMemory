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
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/bubble-sort/bubble-sort.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/bubble-sort/bubble-sort.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\" [ngStyle]=\"{ marginTop: '2rem' }\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\r\n\r\n    <div class=\"col-xs-12 col-sm-12 col-md-5 control-panel\">\r\n      <div class=\"solution\">\r\n        <!-- Place custom code here-->\r\n        <div *ngIf=\"!running\" [@hide]>\r\n          <p>\r\n            function sort(arr) &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var i = 0; i < arr.length; i++)\r\n            &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var\r\n            j = 0; j < arr.length - 1; j++) &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if\r\n            (arr[j] > arr[j + 1]) &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var\r\n            temp = arr[j];<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j]\r\n            = arr[j + 1];<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j\r\n            + 1] = temp;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />}\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"header\">\r\n        <h1 class=\"outcome\">Bubble Sort</h1>\r\n        <p class=\"problem\">\r\n          Time Complexity: O(n^2). <br> \r\n          Objective: Write a bubble sort algorithm to arrange elements in an\r\n          array from smallest to largest.\r\n        </p>\r\n      </div>\r\n\r\n      <ng-template [ngIf]=\"!checked\" [ngIfElse]=\"notChecked\">\r\n        <div class=\"summary\">\r\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\r\n          <p class=\"outcome\">&nbsp;</p>\r\n          <br />\r\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p><br/>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template #notChecked>\r\n        <div class=\"summary\">\r\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\r\n          <p class=\"outcome\">{{ outcome }}</p>\r\n          <br />\r\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\r\n          <h1 class=\"outcome\">\r\n            <span\r\n              >{{ minutes < 10 ? \"0\" : \"\" }}{{ minutes }}:{{\r\n                seconds < 10 ? \"0\" : \"\"\r\n              }}{{ seconds }}</span\r\n            >\r\n          </h1>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template [ngIf]=\"running\" [ngIfElse]=\"notRunning\">\r\n        <button\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          class=\"check-btn\"\r\n          (click)=\"check()\"\r\n        >\r\n          Show Answer\r\n        </button>\r\n      </ng-template>\r\n\r\n      <ng-template #notRunning>\r\n        <button\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          class=\"start-btn\"\r\n          (click)=\"start()\"\r\n        >\r\n          Start\r\n        </button>\r\n      </ng-template>\r\n\r\n      <div class=\"reset-next-btns\">\r\n        <button\r\n          mat-raised-button\r\n          color=\"warn\"\r\n          class=\"reset-btn\"\r\n          (click)=\"reset()\"\r\n          *ngIf=\"!running\"\r\n        >\r\n          Reset\r\n        </button>\r\n\r\n        <button\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          class=\"next-btn\"\r\n          (click)=\"refresh()\"\r\n          *ngIf=\"!running\"\r\n        >\r\n          Next\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template [ngIf]=\"running\" [ngIfElse]=\"readOnlyText\">\r\n      <textarea\r\n        placeholder=\"Type code...\"\r\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\r\n        [(ngModel)]=\"answer\"\r\n        autocomplete=\"off\"\r\n        autocorrect=\"off\"\r\n        autocapitalize=\"off\"\r\n        spellcheck=\"false\"\r\n      ></textarea>\r\n    </ng-template>\r\n\r\n    <ng-template #readOnlyText>\r\n      <textarea\r\n        placeholder=\"Press start to begin...\"\r\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\r\n        [(ngModel)]=\"answer\"\r\n        autocomplete=\"off\"\r\n        autocorrect=\"off\"\r\n        autocapitalize=\"off\"\r\n        spellcheck=\"false\"\r\n        readonly=\"true\"\r\n      ></textarea>\r\n    </ng-template>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/insertion-sort/insertion-sort.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/insertion-sort/insertion-sort.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\" [ngStyle]=\"{ marginTop: '2rem' }\">\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\n\n    <div class=\"col-xs-12 col-sm-12 col-md-5 control-panel\">\n      <div class=\"solution\">\n        <!-- Place custom code here-->\n        <div *ngIf=\"!running\" [@hide]>\n          <p>\n            function sort(arr) &#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var insertElement;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var insertPosition;<br /><br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var i = 0; i < arr.length; i++)\n            &#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;insertElement\n            = arr[i];<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;insertPosition\n            = i;<br /><br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var\n            j = insertPosition - 1; j >= 0; j--) &#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if\n            (insertElement < arr[j])&#123;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j\n            + 1] = arr[j];<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;insertPosition--;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[insertPosition]\n            = insertElement;<br />\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"header\">\n        <h1 class=\"outcome\">Insertion Sort</h1>\n        <p class=\"problem\">\n          Time Complexity: O(n) Best-case, O(n^2) Worst-case <br />\n          Objective: Write an insertion sort algorithm to arrange elements in an\n          array from smallest to largest.\n        </p>\n      </div>\n\n      <ng-template [ngIf]=\"!checked\" [ngIfElse]=\"notChecked\">\n        <div class=\"summary\">\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\n          <p class=\"outcome\">&nbsp;</p>\n          <br />\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\n          <br />\n        </div>\n      </ng-template>\n\n      <ng-template #notChecked>\n        <div class=\"summary\">\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\n          <p class=\"outcome\">{{ outcome }}</p>\n          <br />\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\n          <h1 class=\"outcome\">\n            <span\n              >{{ minutes < 10 ? \"0\" : \"\" }}{{ minutes }}:{{\n                seconds < 10 ? \"0\" : \"\"\n              }}{{ seconds }}</span\n            >\n          </h1>\n        </div>\n      </ng-template>\n\n      <ng-template [ngIf]=\"running\" [ngIfElse]=\"notRunning\">\n        <button\n          mat-raised-button\n          color=\"accent\"\n          class=\"check-btn\"\n          (click)=\"check()\"\n        >\n          Show Answer\n        </button>\n      </ng-template>\n\n      <ng-template #notRunning>\n        <button\n          mat-raised-button\n          color=\"accent\"\n          class=\"start-btn\"\n          (click)=\"start()\"\n        >\n          Start\n        </button>\n      </ng-template>\n\n      <div class=\"reset-next-btns\">\n        <button\n          mat-raised-button\n          color=\"warn\"\n          class=\"reset-btn\"\n          (click)=\"reset()\"\n          *ngIf=\"!running\"\n        >\n          Reset\n        </button>\n\n        <button\n          mat-raised-button\n          color=\"accent\"\n          class=\"next-btn\"\n          (click)=\"refresh()\"\n          *ngIf=\"!running\"\n        >\n          Next\n        </button>\n      </div>\n    </div>\n\n    <ng-template [ngIf]=\"running\" [ngIfElse]=\"readOnlyText\">\n      <textarea\n        placeholder=\"Type code...\"\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\n        [(ngModel)]=\"answer\"\n        autocomplete=\"off\"\n        autocorrect=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"false\"\n      ></textarea>\n    </ng-template>\n\n    <ng-template #readOnlyText>\n      <textarea\n        placeholder=\"Press start to begin...\"\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\n        [(ngModel)]=\"answer\"\n        autocomplete=\"off\"\n        autocorrect=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"false\"\n        readonly=\"true\"\n      ></textarea>\n    </ng-template>\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/selection-sort/selection-sort.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/selection-sort/selection-sort.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\" [ngStyle]=\"{ marginTop: '2rem' }\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\r\n\r\n    <div class=\"col-xs-12 col-sm-12 col-md-5 control-panel\">\r\n      <div class=\"solution\">\r\n        <!-- Place custom code here-->\r\n        <div *ngIf=\"!running\" [@hide]>\r\n          <p>\r\n            function sort(arr) &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var selected;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var min;<br /><br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var i = 0; i < arr.length - 1;\r\n            i++) &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selected\r\n            = i;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min\r\n            = arr[selected];<br /><br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (var\r\n            j = i; j < arr.length - 1; j++) &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if\r\n            (min > arr[j + 1]) &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            min = arr[j + 1];<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            selected = j + 1;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br /><br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (i != selected) &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var temp = arr[i];<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i] = arr[selected];<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[selected] = temp;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />}\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"test\">\r\n        <div class=\"header\">\r\n          <h1 class=\"outcome\">Selection Sort</h1>\r\n          <p class=\"problem\">\r\n            Time Complexity: O(n^2) <br />\r\n            Objective: Write a selection sort algorithm to arrange elements in\r\n            an array from smallest to largest.\r\n          </p>\r\n        </div>\r\n\r\n        <ng-template [ngIf]=\"!checked\" [ngIfElse]=\"notChecked\">\r\n          <div class=\"summary\">\r\n            <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\r\n            <p class=\"outcome\">&nbsp;</p>\r\n            <br />\r\n            <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\r\n            <br />\r\n          </div>\r\n        </ng-template>\r\n\r\n        <ng-template #notChecked>\r\n          <div class=\"summary\">\r\n            <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\r\n            <p class=\"outcome\">{{ outcome }}</p>\r\n            <br />\r\n            <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\r\n            <h1 class=\"outcome\">\r\n              <span\r\n                >{{ minutes < 10 ? \"0\" : \"\" }}{{ minutes }}:{{\r\n                  seconds < 10 ? \"0\" : \"\"\r\n                }}{{ seconds }}</span\r\n              >\r\n            </h1>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <ng-template [ngIf]=\"running\" [ngIfElse]=\"notRunning\">\r\n          <button\r\n            mat-raised-button\r\n            color=\"accent\"\r\n            class=\"check-btn\"\r\n            (click)=\"check()\"\r\n          >\r\n            Show Answer\r\n          </button>\r\n        </ng-template>\r\n\r\n        <ng-template #notRunning>\r\n          <button\r\n            mat-raised-button\r\n            color=\"accent\"\r\n            class=\"start-btn\"\r\n            (click)=\"start()\"\r\n          >\r\n            Start\r\n          </button>\r\n        </ng-template>\r\n\r\n        <div class=\"reset-next-btns\">\r\n          <button\r\n            mat-raised-button\r\n            color=\"warn\"\r\n            class=\"reset-btn\"\r\n            (click)=\"reset()\"\r\n            *ngIf=\"!running\"\r\n          >\r\n            Reset\r\n          </button>\r\n\r\n          <button\r\n            mat-raised-button\r\n            color=\"accent\"\r\n            class=\"next-btn\"\r\n            (click)=\"refresh()\"\r\n            *ngIf=\"!running\"\r\n          >\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template [ngIf]=\"running\" [ngIfElse]=\"readOnlyText\">\r\n      <textarea\r\n        placeholder=\"Type code...\"\r\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\r\n        [(ngModel)]=\"answer\"\r\n        autocomplete=\"off\"\r\n        autocorrect=\"off\"\r\n        autocapitalize=\"off\"\r\n        spellcheck=\"false\"\r\n      ></textarea>\r\n    </ng-template>\r\n\r\n    <ng-template #readOnlyText>\r\n      <textarea\r\n        placeholder=\"Press start to begin...\"\r\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\r\n        [(ngModel)]=\"answer\"\r\n        autocomplete=\"off\"\r\n        autocorrect=\"off\"\r\n        autocapitalize=\"off\"\r\n        spellcheck=\"false\"\r\n        readonly=\"true\"\r\n      ></textarea>\r\n    </ng-template>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/string-reversal/string-reversal.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/string-reversal/string-reversal.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\" [ngStyle]=\"{ marginTop: '2rem' }\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\r\n\r\n    <div class=\"col-xs-12 col-sm-12 col-md-5 control-panel\">\r\n      <div class=\"solution\">\r\n        <!-- Place custom code here-->\r\n        <div *ngIf=\"!running\" [@hide]>\r\n          <p>\r\n            function reverse(str) &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (str === \"\") &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else &#123;<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return\r\n            reverse(str.substring(1)) + str.charAt(0);<br />\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />\r\n            }<br /><br />\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"header\">\r\n        <h1 class=\"outcome\">Recursive String Reversal</h1>\r\n        <p class=\"problem\">\r\n          Time Complexity: O(n) <br />\r\n          Objective: Write a recursive algorithm to reverse a string.\r\n        </p>\r\n      </div>\r\n\r\n      <ng-template [ngIf]=\"!checked\" [ngIfElse]=\"notChecked\">\r\n        <div class=\"summary\">\r\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\r\n          <p class=\"outcome\">&nbsp;</p>\r\n          <br />\r\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\r\n          <br />\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template #notChecked>\r\n        <div class=\"summary\">\r\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Outcome</p>\r\n          <p class=\"outcome\">{{ outcome }}</p>\r\n          <br />\r\n          <p [ngStyle]=\"{ textDecoration: 'underline' }\">Elapsed Time</p>\r\n          <h1 class=\"outcome\">\r\n            <span\r\n              >{{ minutes < 10 ? \"0\" : \"\" }}{{ minutes }}:{{\r\n                seconds < 10 ? \"0\" : \"\"\r\n              }}{{ seconds }}</span\r\n            >\r\n          </h1>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template [ngIf]=\"running\" [ngIfElse]=\"notRunning\">\r\n        <button\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          class=\"check-btn\"\r\n          (click)=\"check()\"\r\n        >\r\n          Show Answer\r\n        </button>\r\n      </ng-template>\r\n\r\n      <ng-template #notRunning>\r\n        <button\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          class=\"start-btn\"\r\n          (click)=\"start()\"\r\n        >\r\n          Start\r\n        </button>\r\n      </ng-template>\r\n\r\n      <div class=\"reset-next-btns\">\r\n        <button\r\n          mat-raised-button\r\n          color=\"warn\"\r\n          class=\"reset-btn\"\r\n          (click)=\"reset()\"\r\n          *ngIf=\"!running\"\r\n        >\r\n          Reset\r\n        </button>\r\n\r\n        <button\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          class=\"next-btn\"\r\n          (click)=\"refresh()\"\r\n          *ngIf=\"!running\"\r\n        >\r\n          Next\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template [ngIf]=\"running\" [ngIfElse]=\"readOnlyText\">\r\n      <textarea\r\n        placeholder=\"Type code...\"\r\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\r\n        [(ngModel)]=\"answer\"\r\n        autocomplete=\"off\"\r\n        autocorrect=\"off\"\r\n        autocapitalize=\"off\"\r\n        spellcheck=\"false\"\r\n      ></textarea>\r\n    </ng-template>\r\n\r\n    <ng-template #readOnlyText>\r\n      <textarea\r\n        placeholder=\"Press start to begin...\"\r\n        class=\"col-xs-12 col-sm-12 col-md-5 answer\"\r\n        [(ngModel)]=\"answer\"\r\n        autocomplete=\"off\"\r\n        autocorrect=\"off\"\r\n        autocapitalize=\"off\"\r\n        spellcheck=\"false\"\r\n        readonly=\"true\"\r\n      ></textarea>\r\n    </ng-template>\r\n\r\n    <div class=\"col-xs-12 col-sm-12 col-md-1\"></div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-bubble-sort></app-bubble-sort>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"navbar\" color=\"primary\">\r\n  <button\r\n    type=\"button\"\r\n    aria-label=\"Toggle sidenav\"\r\n    mat-icon-button\r\n    (click)=\"showPanel()\"\r\n    *ngIf=\"handSetState\"\r\n  >\r\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n  </button>\r\n  <button\r\n    mat-button\r\n    [ngStyle]=\"{ fontSize: '2.5rem' }\"\r\n    routerLink=\"\"\r\n    *ngIf=\"handSetState\"\r\n    (click)=\"panelState = false\"\r\n  >\r\n    BASICS\r\n  </button>\r\n  \r\n  <div class=\"container\" *ngIf=\"!handSetState\">\r\n\r\n\r\n    <button\r\n      mat-button\r\n      [ngStyle]=\"{ fontSize: '2.5rem' }\"\r\n      class=\"logo\"\r\n      routerLink=\"\"\r\n    >\r\n      BASICS\r\n    </button>\r\n\r\n    <button\r\n      mat-button\r\n      [matMenuTriggerFor]=\"dataStructures\"\r\n      class=\"nav-btn\"\r\n      [ngStyle]=\"{ marginLeft: '11rem' }\"\r\n    >\r\n      Data Structures\r\n      <i\r\n        class=\"fas fa-sort-down\"\r\n        [ngStyle]=\"{ marginBottom: '.6rem', marginLeft: '.6rem' }\"\r\n      ></i>\r\n    </button>\r\n\r\n    <mat-menu #dataStructures=\"matMenu\">\r\n      <button mat-menu-item [matMenuTriggerFor]=\"arrays\">Arrays</button>\r\n    </mat-menu>\r\n\r\n    <mat-menu #arrays=\"matMenu\">\r\n      <button mat-menu-item>Stacks</button>\r\n      <button mat-menu-item>Queues</button>\r\n    </mat-menu>\r\n\r\n    <button mat-button [matMenuTriggerFor]=\"algorithms\" class=\"nav-btn\">\r\n      Algorithms\r\n      <i\r\n        class=\"fas fa-sort-down\"\r\n        [ngStyle]=\"{ marginBottom: '.6rem', marginLeft: '.6rem' }\"\r\n      ></i>\r\n    </button>\r\n\r\n    <mat-menu #algorithms=\"matMenu\">\r\n      <button mat-menu-item [matMenuTriggerFor]=\"sorting\">Sorting</button>\r\n      <button mat-menu-item [matMenuTriggerFor]=\"recursion\">Recursion</button>\r\n    </mat-menu>\r\n\r\n    <mat-menu #recursion=\"matMenu\">\r\n      <button mat-menu-item routerLink=\"string-reversal\">\r\n        String Reversal\r\n      </button>\r\n    </mat-menu>\r\n\r\n    <mat-menu #sorting=\"matMenu\">\r\n      <button mat-menu-item routerLink=\"bubble-sort\">Bubble Sort</button>\r\n      <button mat-menu-item routerLink=\"insertion-sort\">Insertion Sort</button>\r\n      <button mat-menu-item routerLink=\"selection-sort\">Selection Sort</button>\r\n    </mat-menu>\r\n\r\n    <span class=\"fill-remaining-space\"></span>\r\n<!--     <button mat-button routerLink=\"profile\" class=\"profile nav-btn\">\r\n      <i\r\n        class=\"fas fa-user-circle\"\r\n        [ngStyle]=\"{\r\n          fontSize: '2rem',\r\n          marginRight: '.6rem',\r\n          marginBottom: '.2rem'\r\n        }\"\r\n      ></i>\r\n      Profile\r\n    </button> -->\r\n    <button mat-button (click)=\"auth.login()\" *ngIf=\"!auth.loggedIn\"  class=\"profile nav-btn\">Log In</button>\r\n    <button mat-button (click)=\"auth.logout()\" *ngIf=\"auth.loggedIn\"  class=\"profile nav-btn\">Log Out</button>\r\n\r\n  </div>\r\n\r\n<!--   <button\r\n    mat-button\r\n    routerLink=\"profile\"\r\n    class=\"profile nav-btn\"\r\n    *ngIf=\"handSetState\"\r\n    (click)=\"panelState = false\"\r\n  >\r\n    <i\r\n      class=\"fas fa-user-circle\"\r\n      [ngStyle]=\"{\r\n        fontSize: '2rem',\r\n        marginRight: '.6rem',\r\n        marginBottom: '.2rem'\r\n      }\"\r\n    ></i>\r\n    Profile\r\n  </button> -->\r\n\r\n  \r\n</mat-toolbar>\r\n\r\n<div class=\"nav-panel\" *ngIf=\"panelState\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Data Structures\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Arrays\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <a class=\"nav-panel-link\">Stacks</a><br/><br/>\r\n        <a class=\"nav-panel-link\">Queues</a>\r\n      </mat-expansion-panel>\r\n    </mat-expansion-panel>\r\n    \r\n    \r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Algorithms\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <mat-expansion-panel class=\"mat-elevation-z0\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Sorting\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <a class=\"nav-panel-link\" routerLink=\"bubble-sort\" (click)=\"panelState = false\">Bubble Sort</a><br/><br/>\r\n        <a class=\"nav-panel-link\" routerLink=\"selection-sort\" (click)=\"panelState = false\">Selection Sort</a>\r\n      </mat-expansion-panel>\r\n      <mat-expansion-panel class=\"mat-elevation-z0\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Recursion\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <a class=\"nav-panel-link\" routerLink=\"string-reversal\" (click)=\"panelState = false\">String Reversal</a><br/><br/>\r\n        <a class=\"nav-panel-link\">Queues</a>\r\n      </mat-expansion-panel>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n  \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<pre *ngIf=\"auth.userProfile$ | async as profile\">\n    <code>{{ profile | json }}</code>\n    </pre>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/stopwatch/stopwatch.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/stopwatch/stopwatch.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <p [ngStyle]=\"{ color: 'white' }\">stopwatch works!</p>\r\n  <h1 [ngStyle]=\"{ color: 'white' }\">{{ counter }}</h1>\r\n  <button mat-raised-button color=\"accent\" (click)=\"startTimer()\">\r\n    {{ startText }}\r\n  </button>\r\n  \r\n  <br/>\r\n  <br/>\r\n  <button mat-raised-button color=\"accent\" (click)=\"reset()\">\r\n    CLEAR\r\n  </button>\r\n  <br/>\r\n  <br/>\r\n  <button mat-raised-button color=\"accent\" (click)=\"showTime()\">\r\n    SHOW\r\n  </button>\r\n  <h1 [ngStyle]=\"{ color: 'white' }\">minutes: {{ minutes }}</h1>\r\n  <h1 [ngStyle]=\"{ color: 'white' }\">seconds: {{ seconds }}</h1>\r\n\r\n</div>\r\n");

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
/* harmony import */ var _components_algorithms_insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/algorithms/insertion-sort/insertion-sort.component */ "./src/app/components/algorithms/insertion-sort/insertion-sort.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");










const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: "string-reversal", component: _components_algorithms_string_reversal_string_reversal_component__WEBPACK_IMPORTED_MODULE_4__["StringReversalComponent"] },
    { path: "bubble-sort", component: _components_algorithms_bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_5__["BubbleSortComponent"] },
    { path: "selection-sort", component: _components_algorithms_selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_6__["SelectionSortComponent"] },
    { path: "insertion-sort", component: _components_algorithms_insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_7__["InsertionSortComponent"] }
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
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_algorithms_insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/algorithms/insertion-sort/insertion-sort.component */ "./src/app/components/algorithms/insertion-sort/insertion-sort.component.ts");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"], _components_algorithms_string_reversal_string_reversal_component__WEBPACK_IMPORTED_MODULE_22__["StringReversalComponent"], _components_stopwatch_stopwatch_component__WEBPACK_IMPORTED_MODULE_23__["StopwatchComponent"], _components_algorithms_bubble_sort_bubble_sort_component__WEBPACK_IMPORTED_MODULE_24__["BubbleSortComponent"], _components_algorithms_selection_sort_selection_sort_component__WEBPACK_IMPORTED_MODULE_25__["SelectionSortComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"], _components_algorithms_insertion_sort_insertion_sort_component__WEBPACK_IMPORTED_MODULE_27__["InsertionSortComponent"]],
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

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AuthGuard = class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.auth.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(loggedIn => {
            if (!loggedIn) {
                this.auth.login(state.url);
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/components/algorithms/bubble-sort/bubble-sort.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/algorithms/bubble-sort/bubble-sort.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 90%;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #a0a0a0;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #a0a0a0;\n}\n\n.answer {\n  background: #eee;\n  padding: 2rem;\n  height: 80vh;\n  caret-color: white;\n  color: white;\n  background-color: #262626;\n  resize: none;\n  border: none;\n  margin-bottom: 1rem;\n  margin-left: 15px;\n  z-index: 5;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n@media (max-width: 991px) {\n  .answer {\n    margin-top: 15px;\n    margin-left: 0px;\n  }\n}\n\ntextarea.answer:focus {\n  outline-width: 0;\n}\n\n.solution {\n  height: 80vh;\n  padding: 2rem;\n  border: none;\n  background-color: #262626;\n  color: white;\n  width: 100%;\n  overflow-y: scroll;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.start-btn {\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: #00a100;\n  color: white;\n}\n\n.check-btn {\n  width: 100%;\n  margin-bottom: 1rem;\n  margin-top: 4.8rem;\n  color: black;\n}\n\n.reset-next-btns {\n  width: 100%;\n}\n\n.reset-btn {\n  width: 49%;\n  margin-bottom: 1rem;\n  color: white;\n}\n\n.next-btn {\n  position: absolute;\n  right: 0;\n  width: 49%;\n}\n\n.outcome {\n  color: white;\n  font-size: 2rem;\n  margin: 0 0 1rem;\n}\n\n.summary {\n  color: white;\n  margin-bottom: 4rem;\n}\n\n.problem {\n  color: white;\n  margin-bottom: 2rem;\n}\n\n.control-panel {\n  height: auto;\n  padding: 0;\n}\n\n.header {\n  padding: 10px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL2J1YmJsZS1zb3J0L0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxcYmFzaWNzXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsZ29yaXRobXNcXGJ1YmJsZS1zb3J0XFxidWJibGUtc29ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL2J1YmJsZS1zb3J0L2J1YmJsZS1zb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFZDs7QURMQTtFQUNFLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDRWQ7O0FETEE7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0VkOztBRExBO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFZDs7QURDQTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBRUEsc0JBQUE7RUFDQSxpQ0FBQTtBQ0FGOztBREVFO0VBakJGO0lBa0JJLGdCQUFBO0lBQ0EsZ0JBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUVFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FESUE7RUFFRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsZ29yaXRobXMvYnViYmxlLXNvcnQvYnViYmxlLXNvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICBjb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xyXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICBjb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICBjb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xyXG59XHJcblxyXG4uYW5zd2VyIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIHotaW5kZXg6IDU7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxudGV4dGFyZWEuYW5zd2VyOmZvY3VzIHtcclxuICBvdXRsaW5lLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uc29sdXRpb24ge1xyXG4gIGhlaWdodDogODB2aDtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnN0YXJ0LWJ0biB7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE2MSwgMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2hlY2stYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDQuOHJlbTtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4ucmVzZXQtbmV4dC1idG5zIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5yZXNldC1idG4ge1xyXG5cclxuICB3aWR0aDogNDklO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IFxyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5uZXh0LWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiA0OSU7XHJcbn1cclxuXHJcbi5vdXRjb21lIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbjogMCAwIDFyZW07XHJcbn1cclxuXHJcbi5zdW1tYXJ5IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxufVxyXG5cclxuLnByb2JsZW0ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uY29udHJvbC1wYW5lbCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMXB4O1xyXG59XHJcblxyXG4udGVzdCB7XHJcblxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6ICNhMGEwYTA7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIEZpcmVmb3ggKi9cbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjYTBhMGEwO1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiAjYTBhMGEwO1xufVxuXG4uYW5zd2VyIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgcGFkZGluZzogMnJlbTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBjYXJldC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB6LWluZGV4OiA1O1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYW5zd2VyIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cblxudGV4dGFyZWEuYW5zd2VyOmZvY3VzIHtcbiAgb3V0bGluZS13aWR0aDogMDtcbn1cblxuLnNvbHV0aW9uIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5zdGFydC1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTEwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2hlY2stYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDQuOHJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucmVzZXQtbmV4dC1idG5zIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZXNldC1idG4ge1xuICB3aWR0aDogNDklO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uZXh0LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA0OSU7XG59XG5cbi5vdXRjb21lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG5cbi5zdW1tYXJ5IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4ucHJvYmxlbSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmNvbnRyb2wtcGFuZWwge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDFweDtcbn0iXX0= */");

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

/***/ "./src/app/components/algorithms/insertion-sort/insertion-sort.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/algorithms/insertion-sort/insertion-sort.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 90%;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #a0a0a0;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #a0a0a0;\n}\n\n.answer {\n  background: #eee;\n  padding: 2rem;\n  height: 80vh;\n  caret-color: white;\n  color: white;\n  background-color: #262626;\n  resize: none;\n  border: none;\n  margin-bottom: 1rem;\n  margin-left: 15px;\n  z-index: 5;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n@media (max-width: 991px) {\n  .answer {\n    margin-top: 15px;\n    margin-left: 0px;\n  }\n}\n\ntextarea.answer:focus {\n  outline-width: 0;\n}\n\n.solution {\n  height: 80vh;\n  padding: 2rem;\n  border: none;\n  background-color: #262626;\n  color: white;\n  width: 100%;\n  overflow-y: scroll;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.start-btn {\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: #00a100;\n  color: white;\n}\n\n.check-btn {\n  width: 100%;\n  margin-bottom: 1rem;\n  margin-top: 4.8rem;\n  color: black;\n}\n\n.reset-next-btns {\n  width: 100%;\n}\n\n.reset-btn {\n  width: 49%;\n  margin-bottom: 1rem;\n  color: white;\n}\n\n.next-btn {\n  position: absolute;\n  right: 0;\n  width: 49%;\n}\n\n.outcome {\n  color: white;\n  font-size: 2rem;\n  margin: 0 0 1rem;\n}\n\n.summary {\n  color: white;\n  margin-bottom: 4rem;\n}\n\n.problem {\n  color: white;\n  margin-bottom: 2rem;\n}\n\n.control-panel {\n  height: auto;\n  padding: 0;\n}\n\n.header {\n  padding: 10px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL2luc2VydGlvbi1zb3J0L0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxcYmFzaWNzXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsZ29yaXRobXNcXGluc2VydGlvbi1zb3J0XFxpbnNlcnRpb24tc29ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL2luc2VydGlvbi1zb3J0L2luc2VydGlvbi1zb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBREVFO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFaEI7O0FETEU7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0VoQjs7QURMRTtFQUNFLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDRWhCOztBRExFO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFaEI7O0FEQ0U7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUNFSjs7QURDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLHNCQUFBO0VBQ0EsaUNBQUE7QUNBSjs7QURFSTtFQWpCRjtJQWtCSSxnQkFBQTtJQUNBLGdCQUFBO0VDQ0o7QUFDRjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQ0o7O0FERUU7RUFFRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtBQ0FKOztBRElFO0VBRUUsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDRko7O0FES0U7RUFDRSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL2luc2VydGlvbi1zb3J0L2luc2VydGlvbi1zb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICBcclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgXHJcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxuICB9XHJcbiAgXHJcbiAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbnN3ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBjYXJldC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgei1pbmRleDogNTtcclxuICBcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyBcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEuYW5zd2VyOmZvY3VzIHtcclxuICAgIG91dGxpbmUtd2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zb2x1dGlvbiB7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuc3RhcnQtYnRuIHtcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjEsIDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2stYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDQuOHJlbTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXNldC1uZXh0LWJ0bnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5yZXNldC1idG4ge1xyXG4gIFxyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07IFxyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcbiAgXHJcbiAgLm5leHQtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICB9XHJcbiAgXHJcbiAgLm91dGNvbWUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnN1bW1hcnkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2JsZW0ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRyb2wtcGFuZWwge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDFweDtcclxuICB9XHJcbiAgXHJcbiIsIi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIGNvbG9yOiAjYTBhMGEwO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogI2EwYTBhMDtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI2EwYTBhMDtcbn1cblxuLmFuc3dlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGhlaWdodDogODB2aDtcbiAgY2FyZXQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgei1pbmRleDogNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmFuc3dlciB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG59XG5cbnRleHRhcmVhLmFuc3dlcjpmb2N1cyB7XG4gIG91dGxpbmUtd2lkdGg6IDA7XG59XG5cbi5zb2x1dGlvbiB7XG4gIGhlaWdodDogODB2aDtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoZWNrLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiA0LjhyZW07XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnJlc2V0LW5leHQtYnRucyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVzZXQtYnRuIHtcbiAgd2lkdGg6IDQ5JTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmV4dC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDklO1xufVxuXG4ub3V0Y29tZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG4uc3VtbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLnByb2JsZW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jb250cm9sLXBhbmVsIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/algorithms/insertion-sort/insertion-sort.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/algorithms/insertion-sort/insertion-sort.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InsertionSortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertionSortComponent", function() { return InsertionSortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let InsertionSortComponent = class InsertionSortComponent {
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
InsertionSortComponent.ctorParameters = () => [
    { type: _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
InsertionSortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-insertion-sort",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./insertion-sort.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/algorithms/insertion-sort/insertion-sort.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])("hide", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":enter", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "0" }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("200ms linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "1" }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])("200ms linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: "0" }))])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./insertion-sort.component.scss */ "./src/app/components/algorithms/insertion-sort/insertion-sort.component.scss")).default]
    })
], InsertionSortComponent);



/***/ }),

/***/ "./src/app/components/algorithms/selection-sort/selection-sort.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/algorithms/selection-sort/selection-sort.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 90%;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #a0a0a0;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #a0a0a0;\n}\n\n.answer {\n  background: #eee;\n  padding: 2rem;\n  height: 80vh;\n  caret-color: white;\n  color: white;\n  background-color: #262626;\n  resize: none;\n  border: none;\n  margin-bottom: 1rem;\n  margin-left: 15px;\n  z-index: 5;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n@media (max-width: 991px) {\n  .answer {\n    margin-top: 15px;\n    margin-left: 0px;\n  }\n}\n\ntextarea.answer:focus {\n  outline-width: 0;\n}\n\n.solution {\n  height: 80vh;\n  padding: 2rem;\n  border: none;\n  background-color: #262626;\n  color: white;\n  width: 100%;\n  overflow-y: scroll;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.start-btn {\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: #00a100;\n  color: white;\n}\n\n.check-btn {\n  width: 100%;\n  margin-bottom: 1rem;\n  margin-top: 4.8rem;\n  color: black;\n}\n\n.reset-next-btns {\n  width: 100%;\n}\n\n.reset-btn {\n  width: 49%;\n  margin-bottom: 1rem;\n  color: white;\n}\n\n.next-btn {\n  position: absolute;\n  right: 0;\n  width: 49%;\n}\n\n.outcome {\n  color: white;\n  font-size: 2rem;\n  margin: 0 0 1rem;\n}\n\n.summary {\n  color: white;\n  margin-bottom: 4rem;\n}\n\n.problem {\n  color: white;\n  margin-bottom: 2rem;\n}\n\n.control-panel {\n  height: auto;\n  padding: 0;\n}\n\n.header {\n  padding: 10px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL3NlbGVjdGlvbi1zb3J0L0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxcYmFzaWNzXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsZ29yaXRobXNcXHNlbGVjdGlvbi1zb3J0XFxzZWxlY3Rpb24tc29ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL3NlbGVjdGlvbi1zb3J0L3NlbGVjdGlvbi1zb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBREVFO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFaEI7O0FETEU7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0VoQjs7QURMRTtFQUNFLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDRWhCOztBRExFO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFaEI7O0FEQ0U7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUNFSjs7QURDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLHNCQUFBO0VBQ0EsaUNBQUE7QUNBSjs7QURFSTtFQWpCRjtJQWtCSSxnQkFBQTtJQUNBLGdCQUFBO0VDQ0o7QUFDRjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQ0o7O0FERUU7RUFFRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtBQ0FKOztBRElFO0VBRUUsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDRko7O0FES0U7RUFDRSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL3NlbGVjdGlvbi1zb3J0L3NlbGVjdGlvbi1zb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICBcclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgXHJcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxuICB9XHJcbiAgXHJcbiAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICAgIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbnN3ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBjYXJldC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgei1pbmRleDogNTtcclxuXHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7IFxyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYS5hbnN3ZXI6Zm9jdXMge1xyXG4gICAgb3V0bGluZS13aWR0aDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnNvbHV0aW9uIHtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGFydC1idG4ge1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjEsIDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2stYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDQuOHJlbTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXNldC1uZXh0LWJ0bnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIH1cclxuICBcclxuICAucmVzZXQtYnRuIHtcclxuXHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgXHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuICBcclxuICAubmV4dC1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gIH1cclxuICBcclxuICAub3V0Y29tZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuc3VtbWFyeSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIH1cclxuICBcclxuICAucHJvYmxlbSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udHJvbC1wYW5lbCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMXB4O1xyXG4gIH1cclxuXHJcbi50ZXN0IHtcclxuXHJcbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogI2EwYTBhMDtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICNhMGEwYTA7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgY29sb3I6ICNhMGEwYTA7XG59XG5cbi5hbnN3ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiAycmVtO1xuICBoZWlnaHQ6IDgwdmg7XG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHotaW5kZXg6IDU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5hbnN3ZXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuXG50ZXh0YXJlYS5hbnN3ZXI6Zm9jdXMge1xuICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuXG4uc29sdXRpb24ge1xuICBoZWlnaHQ6IDgwdmg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnN0YXJ0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMTAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jaGVjay1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogNC44cmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yZXNldC1uZXh0LWJ0bnMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJlc2V0LWJ0biB7XG4gIHdpZHRoOiA0OSU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5leHQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDQ5JTtcbn1cblxuLm91dGNvbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuLnN1bW1hcnkge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5wcm9ibGVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY29udHJvbC1wYW5lbCB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMXB4O1xufSJdfQ== */");

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
        this.solution = 'functionsort(arr){varselected;varmin;for(vari=0;i<arr.length-1;i++){selected=i;min=arr[selected];for(varj=i;j<arr.length-1;j++){if(min>arr[j+1]){min=arr[j+1];selected=j+1;}}if(i!=selected){vartemp=arr[i];arr[i]=arr[selected];arr[selected]=temp;}}}';
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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 90%;\n}\n\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #a0a0a0;\n}\n\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #a0a0a0;\n}\n\n.answer {\n  background: #eee;\n  padding: 2rem;\n  height: 80vh;\n  caret-color: white;\n  color: white;\n  background-color: #262626;\n  resize: none;\n  border: none;\n  margin-bottom: 1rem;\n  margin-left: 15px;\n  z-index: 5;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n@media (max-width: 991px) {\n  .answer {\n    margin-top: 15px;\n    margin-left: 0px;\n  }\n}\n\ntextarea.answer:focus {\n  outline-width: 0;\n}\n\n.solution {\n  height: 80vh;\n  padding: 2rem;\n  border: none;\n  background-color: #262626;\n  color: white;\n  width: 100%;\n  overflow-y: scroll;\n  letter-spacing: 0.1rem;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.start-btn {\n  width: 100%;\n  margin-bottom: 1rem;\n  background-color: #00a100;\n  color: white;\n}\n\n.check-btn {\n  width: 100%;\n  margin-bottom: 1rem;\n  margin-top: 4.8rem;\n  color: black;\n}\n\n.reset-next-btns {\n  width: 100%;\n}\n\n.reset-btn {\n  width: 49%;\n  margin-bottom: 1rem;\n  color: white;\n}\n\n.next-btn {\n  position: absolute;\n  right: 0;\n  width: 49%;\n}\n\n.outcome {\n  color: white;\n  font-size: 2rem;\n  margin: 0 0 1rem;\n}\n\n.summary {\n  color: white;\n  margin-bottom: 4rem;\n}\n\n.problem {\n  color: white;\n  margin-bottom: 2rem;\n}\n\n.control-panel {\n  height: auto;\n  padding: 0;\n}\n\n.header {\n  padding: 10px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL3N0cmluZy1yZXZlcnNhbC9DOlxcVXNlcnNcXEJPU1NcXERlc2t0b3BcXGJhc2ljc1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhbGdvcml0aG1zXFxzdHJpbmctcmV2ZXJzYWxcXHN0cmluZy1yZXZlcnNhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGdvcml0aG1zL3N0cmluZy1yZXZlcnNhbC9zdHJpbmctcmV2ZXJzYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0VkOztBRExBO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7QUNFZDs7QURMQTtFQUNFLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FDRWQ7O0FETEE7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQ0VkOztBRENBO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFFQSxzQkFBQTtFQUNBLGlDQUFBO0FDQUY7O0FERUU7RUFqQkY7SUFrQkksZ0JBQUE7SUFDQSxnQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBREVBO0VBRUUsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURJQTtFQUVFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxnb3JpdGhtcy9zdHJpbmctcmV2ZXJzYWwvc3RyaW5nLXJldmVyc2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxufVxyXG5cclxuLmFuc3dlciB7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGhlaWdodDogODB2aDtcclxuICBjYXJldC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB6LWluZGV4OiA1O1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHsgXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbnRleHRhcmVhLmFuc3dlcjpmb2N1cyB7XHJcbiAgb3V0bGluZS13aWR0aDogMDtcclxufVxyXG5cclxuLnNvbHV0aW9uIHtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zdGFydC1idG4ge1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNjEsIDApO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNoZWNrLWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tdG9wOiA0LjhyZW07XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuLnJlc2V0LW5leHQtYnRucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4ucmVzZXQtYnRuIHtcclxuXHJcbiAgd2lkdGg6IDQ5JTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyBcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4ubmV4dC1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogNDklO1xyXG59XHJcblxyXG4ub3V0Y29tZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDAgMCAxcmVtO1xyXG59XHJcblxyXG4uc3VtbWFyeSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbn1cclxuXHJcbi5wcm9ibGVtIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmNvbnRyb2wtcGFuZWwge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDFweDtcclxufVxyXG5cclxuLnRlc3Qge1xyXG5cclxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIGNvbG9yOiAjYTBhMGEwO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogI2EwYTBhMDtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI2EwYTBhMDtcbn1cblxuLmFuc3dlciB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGhlaWdodDogODB2aDtcbiAgY2FyZXQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgei1pbmRleDogNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmFuc3dlciB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG59XG5cbnRleHRhcmVhLmFuc3dlcjpmb2N1cyB7XG4gIG91dGxpbmUtd2lkdGg6IDA7XG59XG5cbi5zb2x1dGlvbiB7XG4gIGhlaWdodDogODB2aDtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGExMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoZWNrLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tdG9wOiA0LjhyZW07XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnJlc2V0LW5leHQtYnRucyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVzZXQtYnRuIHtcbiAgd2lkdGg6IDQ5JTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmV4dC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDklO1xufVxuXG4ub3V0Y29tZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG4uc3VtbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLnByb2JsZW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jb250cm9sLXBhbmVsIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxcHg7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: relative;\n}\n\n.logo {\n  position: absolute;\n}\n\n.navbar {\n  box-shadow: -4px 4px 33px -8px rgba(0, 0, 0, 0.75);\n  border-radius: 0%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #262626;\n}\n\n.fill-remaining-space {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.header-toolbar {\n  padding: 4rem 1.6rem;\n  background-color: #303030;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.header {\n  font-weight: 100;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.nav-btn:hover {\n  background-color: #303030;\n}\n\n.profile {\n  position: absolute;\n  right: 0;\n}\n\n.nav-panel-link:hover {\n  cursor: pointer;\n}\n\n.nav-panel {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvQzpcXFVzZXJzXFxCT1NTXFxEZXNrdG9wXFxiYXNpY3NcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBR0Usa0RBQUE7RUFFQSxpQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDREY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IC00cHggNHB4IDMzcHggLThweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogLTRweCA0cHggMzNweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMzNweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcclxufVxyXG5cclxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmhlYWRlci10b29sYmFyIHtcclxuICBwYWRkaW5nOiA0cmVtIDEuNnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ubmF2LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2LXBhbmVsLWxpbms6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdi1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufSIsIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmF2YmFyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNHB4IDRweCAzM3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAtNHB4IDRweCAzM3B4IC04cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMzNweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmhlYWRlci10b29sYmFyIHtcbiAgcGFkZGluZzogNHJlbSAxLjZyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXdlaWdodDogMTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmF2LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG59XG5cbi5wcm9maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLm5hdi1wYW5lbC1saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn0iXX0= */");

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





let NavComponent = class NavComponent {
    constructor(breakpointObserver, globals, auth) {
        this.breakpointObserver = breakpointObserver;
        this.auth = auth;
        this.globals = globals;
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(['(min-width: 800px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.handSetState = false;
                this.panelState = false;
            }
            else {
                this.handSetState = true;
            }
        });
    }
    showPanel() {
        this.panelState = !this.panelState;
    }
};
NavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  color: white;\n  font-size: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL0M6XFxVc2Vyc1xcQk9TU1xcRGVza3RvcFxcYmFzaWNzXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbn0iLCJwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")).default]
    })
], ProfileComponent);



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

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default()({
            domain: "binari.auth0.com",
            client_id: "lwQvVjP54PTP1G9fD7Ee52MNF6YEH1Qq",
            redirect_uri: `${window.location.origin}`
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err)));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.isAuthenticated())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => this.loggedIn = res));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.handleRedirectCallback())));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = null;
        // On initial load, check authentication state with authorization server
        // Set up local auth streams if user is already authenticated
        this.localAuthSetup();
        // Handle redirect from Auth0 login
        this.handleAuthCallback();
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    getUser$(options) {
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getUser(options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(user => this.userProfileSubject$.next(user)));
    }
    localAuthSetup() {
        // This should only be called on app initialization
        // Set up local authentication streams
        const checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((loggedIn) => {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(loggedIn);
        }));
        checkAuth$.subscribe();
    }
    login(redirectPath = '/') {
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log in
            client.loginWithRedirect({
                redirect_uri: `${window.location.origin}`,
                appState: { target: redirectPath }
            });
        });
    }
    handleAuthCallback() {
        // Call when app reloads after user logs in with Auth0
        const params = window.location.search;
        if (params.includes('code=') && params.includes('state=')) {
            let targetRoute; // Path to redirect to after login processsed
            const authComplete$ = this.handleRedirectCallback$.pipe(
            // Have client, now call method to handle auth callback redirect
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(cbRes => {
                // Get and set target redirect route from callback results
                targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(() => {
                // Redirect callback complete; get user and login status
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                    this.getUser$(),
                    this.isAuthenticated$
                ]);
            }));
            // Subscribe to authentication completion observable
            // Response will be an array of user and login status
            authComplete$.subscribe(([user, loggedIn]) => {
                // Redirect to target route after callback processing
                this.router.navigate([targetRoute]);
            });
        }
    }
    logout() {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log out
            client.logout({
                client_id: "lwQvVjP54PTP1G9fD7Ee52MNF6YEH1Qq",
                returnTo: `${window.location.origin}`
            });
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



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
        this.serverURL = "";
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

module.exports = __webpack_require__(/*! C:\Users\BOSS\Desktop\basics\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map