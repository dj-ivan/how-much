webpackJsonp([0],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetFrequency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CacheItems; });
var BudgetFrequency;
(function (BudgetFrequency) {
    BudgetFrequency[BudgetFrequency["WEEKLY"] = 7] = "WEEKLY";
    BudgetFrequency[BudgetFrequency["BIWEEKLY"] = 14] = "BIWEEKLY";
    BudgetFrequency[BudgetFrequency["MONTHLY"] = 31] = "MONTHLY";
})(BudgetFrequency || (BudgetFrequency = {}));
var CacheItems;
(function (CacheItems) {
    CacheItems[CacheItems["BUDGET"] = 0] = "BUDGET";
    CacheItems[CacheItems["EXPENSES"] = 1] = "EXPENSES";
    CacheItems[CacheItems["ACCOUNT"] = 2] = "ACCOUNT";
})(CacheItems || (CacheItems = {}));
//# sourceMappingURL=budget-model.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowMuch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_animations_index__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_budget_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_budget_model__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__overview_overview__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HowMuch = /** @class */ (function () {
    function HowMuch(navCtrl, formBuilder, budgetService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.budgetService = budgetService;
        this.submitAttempt = false;
        this.textBoxVisible = false;
        setTimeout(function () {
            _this.showTextBox();
        }, 2000);
        this.userForm = this.formBuilder.group({
            budgetAmount: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            budgetLength: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    HowMuch.prototype.showTextBox = function () {
        this.textBoxVisible = true;
    };
    HowMuch.prototype.submitForm = function () {
        this.submitAttempt = true;
        if (!this.userForm.valid) {
            return;
        }
        var strippedDollarSign = this.userForm.value.budgetAmount.toString().replace('$', '');
        var strippedValue = strippedDollarSign.replace(',', '');
        this.budgetService.setNewStartingBudget(+strippedValue);
        switch (this.userForm.value.budgetLength) {
            case 'w':
                this.budgetService.setBudgetFrequency(__WEBPACK_IMPORTED_MODULE_5__models_budget_model__["a" /* BudgetFrequency */].WEEKLY);
                break;
            case 'bi':
                this.budgetService.setBudgetFrequency(__WEBPACK_IMPORTED_MODULE_5__models_budget_model__["a" /* BudgetFrequency */].BIWEEKLY);
                break;
            case 'm':
                this.budgetService.setBudgetFrequency(__WEBPACK_IMPORTED_MODULE_5__models_budget_model__["a" /* BudgetFrequency */].MONTHLY);
                break;
            default:
                break;
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__overview_overview__["a" /* OverviewPage */]);
    };
    HowMuch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',
            animations: [__WEBPACK_IMPORTED_MODULE_2__app_animations_index__["a" /* fadeInAnimation */]],template:/*ion-inline-start:"/Users/ivanmendoza/Documents/Repos/how-much/src/pages/how-much/how-much.html"*/'<ion-content class="get-started-container">\n  <img class="header-img" src="./../../assets/imgs/cutback-name-white.png" padding>\n  <h1 class="create-budget">Create a budget</h1>\n  <div class="budget-inputs-outer-container">\n      <div class="budget-inputs-inner-container">\n        <form [formGroup]="userForm" (ngSubmit)="submitForm()" class="form-container">\n          <div class="budget-length-title">How long would you like to budget your money?</div>\n          <ion-segment class="frequency-container" formControlName="budgetLength">\n            <ion-segment-button class="segment-button" [value]="\'w\'">\n              Weekly\n            </ion-segment-button>\n            <ion-segment-button [value]="\'bi\'">\n              Bi-Weekly\n            </ion-segment-button>\n          </ion-segment>\n          <div class="budget-amount-title">How much money would you like to spend?</div>\n            <ion-input class="budget-amount-input" [class.invalid]="!userForm.controls.budgetAmount.valid && (userForm.controls.budgetAmount.dirty || submitAttempt)" type="tel" placeholder="$0.00" [brmasker]="{len:11, money: true, type: \'num\', decimalCaracter: \'.\', thousand: \',\'}" formControlName="budgetAmount"></ion-input>\n            <div class="error" *ngIf="!userForm.controls.budgetAmount.valid && (userForm.controls.budgetAmount.dirty || submitAttempt)">\n                Amount is required.\n              </div>\n        </form>\n      </div>\n  </div>\n\n  <button ion-button *ngIf="userForm.valid" class="cta-button" (click)="submitForm()">\n    Create Budget\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/ivanmendoza/Documents/Repos/how-much/src/pages/how-much/how-much.html"*/,
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__services_budget_service__["a" /* BudgetService */]])
    ], HowMuch);
    return HowMuch;
}());

//# sourceMappingURL=how-much.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddExpenseModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_budget_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { parse } from 'date-fns';
var AddExpenseModal = /** @class */ (function () {
    function AddExpenseModal(viewCtrl, budgetService, params, formBuilder) {
        this.viewCtrl = viewCtrl;
        this.budgetService = budgetService;
        this.params = params;
        this.formBuilder = formBuilder;
        this.name = '';
        this.amount = '';
        this.id = '';
        this.categories = this.budgetService.getCategories();
        this.selectedCategory = this.categories[0];
        this.submitAttempt = false;
        var editExpense = this.params.get('expense');
        this.name = editExpense && editExpense.name ? editExpense.name : '';
        this.amount = editExpense && editExpense.amount ? editExpense.amount : '';
        this.id = editExpense && editExpense.id ? editExpense.id : '';
        this.selectedCategory =
            editExpense && editExpense.category ? editExpense.category : null;
        // this.selectedDate =
        //   editExpense && editExpense.date ? editExpense.date : parse(new Date().toISOString()).toISOString();
        this.userForm = this.formBuilder.group({
            expenseName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            expenseCategory: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            expenseAmount: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    AddExpenseModal.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Expense Modal');
    };
    AddExpenseModal.prototype.addExpense = function () {
        this.submitAttempt = true;
        if (!this.userForm.valid) {
            return;
        }
        var strippedDollarSign = this.userForm.value.expenseAmount
            .toString()
            .replace('$', '');
        var strippedValue = strippedDollarSign.replace(',', '');
        var expense = {
            id: this.id ? this.id : '',
            amount: +strippedValue,
            date: new Date(),
            name: this.name,
            category: this.selectedCategory
        };
        this.budgetService.addExpense(expense);
        console.log('Expense sent to Budget Service!');
        this.dismiss();
    };
    AddExpenseModal.prototype.removeExpense = function () {
        this.budgetService.removeExpense(this.id);
        console.log('Remove Expense sent to Budget Service!', this.id);
        this.dismiss();
    };
    AddExpenseModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddExpenseModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'add-expense',template:/*ion-inline-start:"/Users/ivanmendoza/Documents/Repos/how-much/src/pages/modals/add-expense-modal/add-expense-modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Add Expense\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <form [formGroup]="userForm" (ngSubmit)="submitForm()" class="form-container">\n        <ion-item [class.invalid]="!userForm.controls.expenseName.valid && (userForm.controls.expenseName.dirty || submitAttempt)">\n          <ion-label floating>Name</ion-label>\n          <ion-input formControlName="expenseName" type="text" [(ngModel)]="name"></ion-input>\n        </ion-item>\n        <div class="error" *ngIf="!userForm.controls.expenseName.valid && (userForm.controls.expenseName.dirty || submitAttempt)">\n            Name is required.\n          </div>\n        <ion-item [class.invalid]="!userForm.controls.expenseAmount.valid && (userForm.controls.expenseAmount.dirty || submitAttempt)" >\n          <ion-label floating>Amount</ion-label>\n          <ion-input formControlName="expenseAmount" type="tel" [(ngModel)]="amount" [brmasker]="{len:11, money: true, type: \'num\', decimalCaracter: \'.\', thousand: \',\'}"></ion-input>\n        </ion-item>\n        <div class="error" *ngIf="!userForm.controls.expenseAmount.valid && (userForm.controls.expenseAmount.dirty || submitAttempt)">\n            Amount is required.\n          </div>\n          <ion-item [class.invalid]="!userForm.controls.expenseCategory.valid && (userForm.controls.expenseCategory.dirty || submitAttempt)">\n              <ion-label>Category</ion-label>\n              <ion-select formControlName="expenseCategory" [(ngModel)]="selectedCategory" [placeholder]="selectedCategory !== null ? selectedCategory.name : \'\'">\n                <div *ngFor="let category of categories">\n                  <ion-option [value]="category">{{category.name}}</ion-option>\n                </div>\n              </ion-select>\n            </ion-item>\n            <div class="error" *ngIf="!userForm.controls.expenseCategory.valid && (userForm.controls.expenseCategory.dirty || submitAttempt)">\n                Category is required.\n              </div>\n        <!-- <ion-item>\n          <ion-label>Date</ion-label>\n          <ion-datetime displayFormat="DDDD MMM D, YYYY" [(ngModel)]="selectedDate"></ion-datetime>\n        </ion-item> -->\n      </form>\n  </ion-list>\n  <div>\n    <button *ngIf="id !== \'\'" class="remove-expense" ion-button color="danger" (click)="removeExpense()">Remove Expense</button>\n    <button class="add-expense" ion-button (click)="addExpense()">Add Expense</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ivanmendoza/Documents/Repos/how-much/src/pages/modals/add-expense-modal/add-expense-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_budget_service__["a" /* BudgetService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AddExpenseModal);
    return AddExpenseModal;
}());

//# sourceMappingURL=add-expense-modal.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};


var StoreService = /** @class */ (function () {
    function StoreService(storage) {
        this.storage = storage;
    }
    // JSON "set" example
    StoreService.prototype.setObject = function (id, object) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set(id, JSON.stringify({ id: id, object: object }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // JSON "get" example
    StoreService.prototype.getObject = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.storage.get(id)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    StoreService.prototype.setItem = function (id, object) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set(id, object)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreService.prototype.getItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StoreService.prototype.removeItem = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreService.prototype.getKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.keys()];
                    case 1:
                        keys = _a.sent();
                        return [2 /*return*/, keys];
                }
            });
        });
    };
    StoreService.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.clear()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StoreService);
    return StoreService;
}());

//# sourceMappingURL=store-service.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__how_much_how_much__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cache_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overview_overview__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_budget_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, cache, events, budget) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.cache = cache;
        this.events = events;
        this.budget = budget;
        this.loading = true;
        this.events.subscribe('cache:BudgetCacheLoaded', function (budget) {
            console.log('HOME:cache loaded', budget);
            if (!budget || budget == null) {
                _this.loading = false;
                _this.budget.startNewBudget();
            }
            else {
                _this.navigateToOverview();
            }
        });
        this.cache.getBudgetFromCache();
    }
    HomePage.prototype.goToSlide = function (idx) {
        this.slides.slideTo(idx, 500);
    };
    HomePage.prototype.navigateToSetup = function () {
        // navigate to the new page if it is not the current page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__how_much_how_much__["a" /* HowMuch */]);
    };
    HomePage.prototype.navigateToOverview = function () {
        // navigate to the new page if it is not the current page
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__overview_overview__["a" /* OverviewPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ivanmendoza/Documents/Repos/how-much/src/pages/home/home.html"*/'<ion-content>\n  <img class="header-logo" src="./../../assets/imgs/cutback-name-white.png">\n  <!-- Slide Content -->\n  <ion-slides class="home-slide-container" pager>\n    <ion-slide class="slide-one">\n      <div class="slide-text-container">\n        <h1 class="slide-header">Fast easy budgeting <br> to track spending</h1>\n        <p class="slide-sub-text">You choose how much you want to spend and for how long, then CutBack will help you maintain\n          your budget.</p>\n      </div>\n      <button class="next-button" ion-button (click)="goToSlide(1)">Learn More</button>\n    </ion-slide>\n\n    <ion-slide class="slide-two">\n      <div class="slide-text-container">\n        <h1 class="slide-header">No Time <br> No Problem</h1>\n        <p class="slide-sub-text">Quickly log your expenses and Cutback will show you how much you have left to spend.</p>\n      </div>\n      <button class="next-button" ion-button (click)="goToSlide(2)">Learn More</button>\n    </ion-slide>\n\n    <ion-slide class="slide-three">\n      <div class="slide-text-container">\n        <h1 class="slide-header">Your information <br> Is private</h1>\n        <p class="slide-sub-text">We store everything to only your device. Not even Uncle Sam can get to it.</p>\n      </div>\n      <button class="next-button" ion-button (click)="navigateToSetup()">Create Budget</button>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ivanmendoza/Documents/Repos/how-much/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_cache_service__["a" /* CacheService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_5__services_budget_service__["a" /* BudgetService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/ivanmendoza/Documents/Repos/how-much/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ivanmendoza/Documents/Repos/how-much/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(287);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_modals_add_expense_modal_add_expense_modal__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_how_much_how_much__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_cache_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_store_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_overview_overview__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_budget_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_input_mask__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_how_much_how_much__["a" /* HowMuch */],
                __WEBPACK_IMPORTED_MODULE_14__pages_overview_overview__["a" /* OverviewPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_modals_add_expense_modal_add_expense_modal__["a" /* AddExpenseModal */],
                __WEBPACK_IMPORTED_MODULE_16__directives_input_mask__["a" /* BrMaskerIonic3 */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_how_much_how_much__["a" /* HowMuch */],
                __WEBPACK_IMPORTED_MODULE_14__pages_overview_overview__["a" /* OverviewPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_modals_add_expense_modal_add_expense_modal__["a" /* AddExpenseModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__services_cache_service__["a" /* CacheService */],
                __WEBPACK_IMPORTED_MODULE_15__services_budget_service__["a" /* BudgetService */],
                __WEBPACK_IMPORTED_MODULE_13__services_store_service__["a" /* StoreService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_overview_overview__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_how_much_how_much__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cache_service__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, cache) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.cache = cache;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] },
            { title: 'How Much', component: __WEBPACK_IMPORTED_MODULE_7__pages_how_much_how_much__["a" /* HowMuch */] },
            { title: 'Overview', component: __WEBPACK_IMPORTED_MODULE_0__pages_overview_overview__["a" /* OverviewPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.resetBudget = function () {
        this.cache.nukeData();
        this.nav.setRoot(this.rootPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ivanmendoza/Documents/Repos/how-much/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item (click)="resetBudget()">\n        Reset Budget\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/ivanmendoza/Documents/Repos/how-much/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__services_cache_service__["a" /* CacheService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cache_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_budget_model__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BudgetService = /** @class */ (function () {
    function BudgetService(cache, events) {
        this.cache = cache;
        this.events = events;
    }
    BudgetService.prototype.getCategories = function () {
        return [
            {
                name: 'Fast Food',
                categoryId: 1
            },
            {
                name: 'Restaurants',
                categoryId: 2
            },
            {
                name: 'Shopping',
                categoryId: 3
            },
            {
                name: 'Transportation',
                categoryId: 4
            },
            {
                name: 'Entertainment',
                categoryId: 5
            },
            {
                name: 'Personal Care',
                categoryId: 6
            },
            {
                name: 'Groceries',
                categoryId: 7
            },
            {
                name: 'Utilities',
                categoryId: 8
            },
            {
                name: 'Household Items',
                categoryId: 9
            }
        ];
    };
    BudgetService.prototype._publishUpdatedExpenses = function () {
        console.log('PUBLISHED: budget:updatedExpenses');
        this.events.publish('budget:updatedExpenses', this.cache.budget.expenses, Date.now());
    };
    BudgetService.prototype._publishUpdatedBudget = function () {
        console.log('PUBLISHED: budget:updatedBudget');
        this.events.publish('budget:updatedBudget', this.cache.budget, Date.now());
    };
    BudgetService.prototype.addExpense = function (expense) {
        if (expense.id === '') {
            expense.id = Object(__WEBPACK_IMPORTED_MODULE_4_uuid__["v4"])();
            console.log('budgetService: Adding new expense', expense);
            this.cache.budget.expenses.push(expense);
            this._publishUpdatedExpenses();
        }
        else {
            this.editExpense(expense);
        }
        this._updateBudget();
    };
    BudgetService.prototype.removeExpense = function (expenseId) {
        console.log('budgetService: Removing expense', expenseId);
        var oldExpenses = this.cache.budget.expenses;
        var updatedExpenses = oldExpenses.filter(function (e) { return e.id !== expenseId; });
        this.cache.budget.expenses = updatedExpenses;
        this._publishUpdatedExpenses();
        this._updateBudget();
    };
    BudgetService.prototype.startNewBudget = function () {
        console.log('budgetService: Creating New Budget');
        var budget = {
            budgetEndDate: new Date(),
            budgetFrequency: __WEBPACK_IMPORTED_MODULE_3__models_budget_model__["a" /* BudgetFrequency */].WEEKLY,
            budgetStartingDate: new Date(),
            expenses: [],
            income: 0,
            remainingBudget: 0,
            startingBudget: 0,
            totalAmountSpent: 0,
            remainingDays: 0
        };
        this.cache.budget = budget;
        this.events.publish('budget:NewBudgetCreated', budget);
    };
    BudgetService.prototype.editExpense = function (modifiedExpense) {
        console.log('budgetService: Editing Expense', modifiedExpense);
        var expenses = this.cache.budget.expenses;
        var updatedExpenses = expenses.map(function (oldExpense) {
            if (oldExpense.id === modifiedExpense.id)
                return Object.assign({}, oldExpense, modifiedExpense);
            return oldExpense;
        });
        this.cache.budget.expenses = updatedExpenses;
        this._publishUpdatedExpenses();
        this._updateBudget();
    };
    BudgetService.prototype.setNewStartingBudget = function (startingBudget) {
        console.log('budgetService: Setting New Starting Budget', startingBudget);
        this.cache.budget.startingBudget = startingBudget;
        this._updateBudget();
    };
    BudgetService.prototype.setBudgetFrequency = function (freq) {
        console.log('budgetService: Setting New Budget Frequency', freq);
        var budget = this.cache.budget;
        budget.budgetFrequency = freq;
        budget.budgetEndDate = this._calculateBudgetEndDate(budget);
        this.cache.budget = budget;
        this._updateBudget();
    };
    BudgetService.prototype.getBudget = function () {
        this._updateBudget();
        return this.cache.budget;
    };
    BudgetService.prototype._updateBudget = function () {
        console.log('budgetService: Updating Budget');
        var budget = this.cache.budget;
        var totalAmountSpent = this._calculateTotalSpent(budget);
        var daysLeft = this._calculateDaysLeft(budget.budgetEndDate);
        budget.remainingDays = daysLeft;
        budget.totalAmountSpent = totalAmountSpent;
        budget.remainingBudget = budget.startingBudget - totalAmountSpent;
        this.cache.storeToCache(__WEBPACK_IMPORTED_MODULE_3__models_budget_model__["b" /* CacheItems */].BUDGET, this.cache.budget);
        console.log('budgetService: Budget Updated', budget);
        this._publishUpdatedBudget();
    };
    BudgetService.prototype._calculateBudgetEndDate = function (budget) {
        var endDate = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["addDays"])(budget.budgetStartingDate, budget.budgetFrequency);
        return endDate;
    };
    BudgetService.prototype._calculateDaysLeft = function (budgetEndDate) {
        var endDate = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["format"])(budgetEndDate, 'MM/DD/YYYY');
        var currentDate = Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["format"])(new Date(), 'MM/DD/YYYY');
        return Object(__WEBPACK_IMPORTED_MODULE_5_date_fns__["differenceInCalendarDays"])(endDate, currentDate);
    };
    BudgetService.prototype._calculateTotalSpent = function (budget) {
        return budget.expenses.reduce(function (prev, cur) {
            return prev + cur.amount;
        }, 0);
    };
    BudgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cache_service__["a" /* CacheService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */]])
    ], BudgetService);
    return BudgetService;
}());

//# sourceMappingURL=budget-service.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__ = __webpack_require__(447);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_in_out_animation__ = __webpack_require__(448);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(65);

var fadeInAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }))
    ]),
]);
//# sourceMappingURL=fade-in.animation.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export slideInOutAnimation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(65);

var slideInOutAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('slideInOutAnimation', [
    // end state styles for route container (host)
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // start with the content positioned off the right of the screen, 
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // transition the right position to 0 which slides the content into view
            right: 0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),
    // route 'leave' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);
//# sourceMappingURL=slide-in-out.animation.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonic3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrMaskModel = /** @class */ (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
    }
    return BrMaskModel;
}());

var BrMaskerIonic3 = /** @class */ (function () {
    function BrMaskerIonic3(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.brmasker = new BrMaskModel();
    }
    BrMaskerIonic3_1 = BrMaskerIonic3;
    BrMaskerIonic3.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.writeValue(value);
        event.target.value = value;
    };
    BrMaskerIonic3.prototype.inputOnblur = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.inputFocus = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonic3.prototype.writeValue = function (fn) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', fn);
    };
    BrMaskerIonic3.prototype.registerOnChange = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.registerOnTouched = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'true');
        }
        else {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'false');
        }
    };
    BrMaskerIonic3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonic3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonic3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonic3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        var retVal = this.moneyMask(value, config);
        retVal = retVal == '0.00' ? '' : '$' + retVal;
        return retVal;
    };
    BrMaskerIonic3.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var v = value;
            if (this.brmasker.type == 'alfa') {
                v = v.replace(/\d/gi, '');
            }
            if (this.brmasker.type == 'num') {
                v = v.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                var retVal = this.moneyMask(this.onInput(v), this.brmasker);
                retVal = retVal == '0.00' ? '' : '$' + retVal;
                return retVal;
            }
            if (this.brmasker.phone) {
                return this.phoneMask(v);
            }
            if (this.brmasker.person) {
                return this.peapollMask(v);
            }
            if (this.brmasker.percent) {
                return this.percentMask(v);
            }
            return this.onInput(v);
        }
        else {
            return '';
        }
    };
    BrMaskerIonic3.prototype.percentMask = function (v) {
        var tmp = v;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    BrMaskerIonic3.prototype.phoneMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.peapollMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 18;
            this.brmasker.mask = '99.999.999/9999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1/$2');
            n = n.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
            n = n.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value.replace('$', '');
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonic3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
        // if (ret) {
        //   this.element.nativeElement.value = ret;
        // }
    };
    BrMaskerIonic3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", BrMaskModel)
    ], BrMaskerIonic3.prototype, "brmasker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BrMaskerIonic3.prototype, "inputKeyup", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('ionBlur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BrMaskerIonic3.prototype, "inputOnblur", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('ionFocus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BrMaskerIonic3.prototype, "inputFocus", null);
    BrMaskerIonic3 = BrMaskerIonic3_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[brmasker]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                    useExisting: BrMaskerIonic3_1,
                    multi: true
                }]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], BrMaskerIonic3);
    return BrMaskerIonic3;
    var BrMaskerIonic3_1;
}());

//# sourceMappingURL=input-mask.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_budget_model__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CacheService = /** @class */ (function () {
    function CacheService(storeService, events) {
        this.storeService = storeService;
        this.events = events;
        this.getBudgetFromCache();
    }
    CacheService.prototype.getBudgetFromCache = function () {
        var _this = this;
        if (!this.budget) {
            this.storeService.getObject('budget').then(function (e) {
                if (!e) {
                    _this.budget = null;
                }
                else {
                    _this.budget = e.object;
                }
                _this.events.publish('cache:BudgetCacheLoaded', _this.budget);
                return _this.budget;
            });
        }
        else {
            return this.budget;
        }
    };
    CacheService.prototype.storeToCache = function (dataTypeToCache, dataToCache) {
        switch (dataTypeToCache) {
            case __WEBPACK_IMPORTED_MODULE_0__models_budget_model__["b" /* CacheItems */].ACCOUNT:
                this.storeService.setObject('account', dataToCache);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__models_budget_model__["b" /* CacheItems */].BUDGET:
                this.storeService.setObject('budget', dataToCache);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__models_budget_model__["b" /* CacheItems */].EXPENSES:
                this.storeService.setObject('expenses', dataToCache);
                break;
        }
    };
    CacheService.prototype.nukeData = function () {
        this.budget = null;
        this.storeService.clear();
    };
    CacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* Events */]])
    ], CacheService);
    return CacheService;
}());

//# sourceMappingURL=cache-service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* unused harmony export BudgetStatus */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_budget_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_add_expense_modal_add_expense_modal__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OverviewPage = /** @class */ (function () {
    function OverviewPage(navCtrl, navParams, _budgetService, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._budgetService = _budgetService;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.remainingAmount = 0;
        this.startingBudget = 0;
        this.daysLeft = 0;
        this.totalSpent = 0;
        this.expenses = [];
        this.budgetStatus = BudgetStatus.GOOD;
        this.buildBudgetDashboard();
        this.events.subscribe('budget:updatedBudget', function (budget) {
            _this.buildBudgetDashboard(budget);
            console.log('Recieved new expenses!');
        });
    }
    OverviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OverviewPage');
    };
    OverviewPage.prototype.buildBudgetDashboard = function (budget) {
        this.budget =
            budget !== undefined ? budget : this._budgetService.getBudget();
        this.budgetFrequency = this.budget.budgetFrequency;
        this.remainingAmount = this.budget.remainingBudget;
        this.startingBudget = this.budget.startingBudget;
        this.daysLeft = this.budget.remainingDays;
        this.totalSpent = this.budget.totalAmountSpent;
        this.sortExpensesDesc();
        this.updateBudgetStatus();
    };
    OverviewPage.prototype.showExpenseModal = function (expense) {
        var modal = expense
            ? this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_add_expense_modal_add_expense_modal__["a" /* AddExpenseModal */], { expense: expense })
            : this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_add_expense_modal_add_expense_modal__["a" /* AddExpenseModal */]);
        modal.present();
    };
    OverviewPage.prototype.sortExpensesDesc = function () {
        var sortedExpenses = this.budget.expenses.sort(function (x, y) {
            return Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["compareDesc"])(x.date, y.date);
        });
        sortedExpenses.forEach(function (e) { return e.date = new Date(e.date); });
        this.expenses = sortedExpenses;
    };
    OverviewPage.prototype.firstDateIsOlder = function (firstDate, secondDate) {
        var first = Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["format"])(firstDate, 'MM/DD/YYYY');
        var second = Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["format"])(secondDate, 'MM/DD/YYYY');
        return Object(__WEBPACK_IMPORTED_MODULE_4_date_fns__["compareDesc"])(first, second);
    };
    OverviewPage.prototype.updateBudgetStatus = function () {
        var cautionRange = this.startingBudget * 0.35;
        var dangerRange = this.startingBudget * 0.15;
        if (this.remainingAmount > cautionRange) {
            this.budgetStatus = BudgetStatus.GOOD;
        }
        else if (this.remainingAmount > dangerRange &&
            this.remainingAmount <= cautionRange) {
            this.budgetStatus = BudgetStatus.CAUTION;
        }
        else {
            this.budgetStatus = BudgetStatus.DANGER;
        }
        console.log('OverviewComponent: Updated budget status', this.budgetStatus, cautionRange, dangerRange);
    };
    OverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-overview',template:/*ion-inline-start:"/Users/ivanmendoza/Documents/Repos/how-much/src/pages/overview/overview.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Overview</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showExpenseModal()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card class="budget" [ngClass]="budgetStatus">\n    <ion-card-header class="card-header">\n      LEFT TO SPEND\n    </ion-card-header>\n    <ion-card-content>\n      <div>\n        <div class="amount-remaining">{{remainingAmount | currency}} </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <div id="income" class="status-badge">\n          <div class="badge-header">{{daysLeft}}</div>\n          <div class="badge-body">DAYS LEFT</div>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div id="budget" class="status-badge">\n          <div class="badge-header">{{startingBudget | currency}}</div>\n          <div class="badge-body">BUDGET</div>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <div id="spent" class="status-badge">\n          <div class="badge-header">{{totalSpent | currency}}</div>\n          <div class="badge-body">SPENT</div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class="expenses-container">\n    <div class="expenses-header">Expenses</div>\n    <ion-row>\n      <ion-item-group class="add-expense-cta">\n        <button class="add-expense-button" ion-button (click)="showExpenseModal()">Add Expense</button>\n      </ion-item-group>\n    </ion-row>\n    <ion-row *ngIf="expenses.length > 0">\n      <ion-col col-12>\n        <div class="expenses">\n          <ion-item-group>\n            <div *ngFor="let expense of expenses; let idx = index;">\n              <ion-list-header color="light" *ngIf="idx === 0 || firstDateIsOlder(expenses[idx].date, expenses[idx-1].date)">{{expense.date\n                | date:\'EEEE, MMMM d\'}}</ion-list-header>\n              <ion-item class="expense-item" (click)="showExpenseModal(expense)">\n                <ion-label ion-text ion-start>{{expense.amount | currency}} - {{expense.name}}</ion-label>\n                <button ion-button outline item-end>Edit</button>\n              </ion-item>\n            </div>\n          </ion-item-group>\n        </div>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="expenses.length === 0">Lets Add Some Expenses</div>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/ivanmendoza/Documents/Repos/how-much/src/pages/overview/overview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__services_budget_service__["a" /* BudgetService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */]])
    ], OverviewPage);
    return OverviewPage;
}());

var BudgetStatus;
(function (BudgetStatus) {
    BudgetStatus["GOOD"] = "good-status";
    BudgetStatus["CAUTION"] = "caution-status";
    BudgetStatus["DANGER"] = "danger-status";
})(BudgetStatus || (BudgetStatus = {}));
//# sourceMappingURL=overview.js.map

/***/ })

},[264]);
//# sourceMappingURL=main.js.map