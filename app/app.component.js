"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.pageStatus = 'splash';
    }
    AppComponent.prototype.togglePageStatus = function () {
        this.pageStatus = this.pageStatus === 'splash' ? 'page' : 'splash';
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "    \n    <div @pageStatus=\"pageStatus\" class=\"splash\">\n        <main>\n            <div class=\"title-box\">\n                <h2 class=\"pre-title\">welcome to</h2>\n                <h1 class=\"title\">My App</h1>\n                <h2 class=\"post-title\">portal</h2>\n                <br>            \n            </div>        \n        </main>\n        <footer>\n            <a class=\"btn-enter\" (click)=\"togglePageStatus()\">Entrar</a>\n        </footer>\n    </div>    \n    \n    <div class=\"page\">\n        <div class=\"left-side\">\n            <a class=\"menu-title\">My App</a>\n        </div>\n        <div class=\"right-side\">\n            <a class=\"link\" routerLink=\"/contact\">Contact</a>\n            <a class=\"link\" routerLink=\"/us\">Us</a>            \n            <a class=\"link\" routerLink=\"/forum\">Forum</a>\n            <a class=\"link\" routerLink=\"/home\">Home</a>\n        </div>\n        \n        <div class=\"content\">\n           <router-outlet></router-outlet>            \n        </div>\n        \n    </div>\n    \n",
            animations: [
                core_1.trigger('pageStatus', [
                    core_1.state('splash', core_1.style({})),
                    core_1.state('page', core_1.style({
                        transform: 'translateY(-100%)'
                    })),
                    core_1.transition('splash <=> page', core_1.animate('500ms ease-in'))
                ])
            ],
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map