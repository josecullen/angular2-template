/**
 * Created by josecullen on 28/08/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstitucionComponent} from './constitucion/constitucion.component'
import { ContactoComponent} from './contacto/contacto.component'
import { InicioComponent} from './inicio/inicio.component'
import { NosotrosComponent} from './nosotros/nosotros.component'
import { ForoComponent} from './foro/foro.component'

const appRoutes: Routes = [
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'foro',
        component: ForoComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'constitucion',
        component: ConstitucionComponent
    },
    {
        path: 'nosotros',
        component: NosotrosComponent
    },{
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'

    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
