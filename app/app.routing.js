"use strict";
var router_1 = require('@angular/router');
var contact_component_1 = require('./contact/contact.component');
var home_component_1 = require('./home/home.component');
var us_component_1 = require('./us/us.component');
var forum_component_1 = require('./forum/forum.component');
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'forum',
        component: forum_component_1.ForumComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'us',
        component: us_component_1.UsComponent
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map