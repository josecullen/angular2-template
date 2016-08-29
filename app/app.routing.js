"use strict";
var router_1 = require('@angular/router');
var constitucion_component_1 = require('./constitucion/constitucion.component');
var contacto_component_1 = require('./contacto/contacto.component');
var inicio_component_1 = require('./inicio/inicio.component');
var nosotros_component_1 = require('./nosotros/nosotros.component');
var foro_component_1 = require('./foro/foro.component');
var appRoutes = [
    {
        path: 'inicio',
        component: inicio_component_1.InicioComponent
    },
    {
        path: 'foro',
        component: foro_component_1.ForoComponent
    },
    {
        path: 'contacto',
        component: contacto_component_1.ContactoComponent
    },
    {
        path: 'constitucion',
        component: constitucion_component_1.ConstitucionComponent
    },
    {
        path: 'nosotros',
        component: nosotros_component_1.NosotrosComponent
    }, {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map