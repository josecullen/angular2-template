/**
 * Created by josecullen on 28/08/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent} from './contact/contact.component'
import { HomeComponent} from './home/home.component'
import { UsComponent} from './us/us.component'
import { ForumComponent} from './forum/forum.component'

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'forum',
        component: ForumComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'us',
        component: UsComponent
    },{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'

    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
