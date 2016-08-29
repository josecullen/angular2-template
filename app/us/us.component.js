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
var UsComponent = (function () {
    function UsComponent() {
        this.members = new Array();
        this.members.push(new Member('Leonor', 'Mandinga', 'Una licenciada re grossa en todos sus aspectos', 'https://cdn4.iconfinder.com/data/icons/people-std-pack/512/girl-512.png'));
        this.members.push(new Member('Raúl', 'Silva', 'Abogado penalista que trabajó toda su vida en el sur del país vendiendo manzanas y autos usados', 'http://www.freeiconspng.com/uploads/user-login-icon-14.png'));
        this.members.push(new Member('Ernesto', 'Guevara', 'Revolucionario Argentino que combatió por la liberación de Cuba', 'http://www.freeiconspng.com/uploads/user-login-icon-14.png'));
    }
    UsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nosotros',
            template: "\n<div class=\"us\">\n    <h2>Nosotros</h2>\n    <p>Somos constituyentes de 1994</p>\n    <div class=\"team-member w3-card-2\" *ngFor=\"let member of members\">\n        <div class=\"team-member-img\">\n            <img [src]=\"member.imgUrl\">\n        </div>\n        <div class=\"team-member-info\">\n            <h1>{{member.name}} {{member.lastName}}</h1>\n            <p>{{member.shortDescription}}</p>\n        </div>\n    </div>\n</div>\n    \n   \n   \n",
            styleUrls: ['./us.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], UsComponent);
    return UsComponent;
}());
exports.UsComponent = UsComponent;
var Member = (function () {
    function Member(name, lastName, shortDescription, imgUrl) {
        this.name = name;
        this.lastName = lastName;
        this.shortDescription = shortDescription;
        this.imgUrl = imgUrl;
    }
    return Member;
}());
//# sourceMappingURL=us.component.js.map