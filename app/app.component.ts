import {
    Component,
    trigger,
    state,
    style,
    transition,
    animate} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `    
    <div @pageStatus="pageStatus" class="splash">
        <main>
            <div class="title-box">
                <h2 class="pre-title">welcome to</h2>
                <h1 class="title">My App</h1>
                <h2 class="post-title">portal</h2>
                <br>            
            </div>        
        </main>
        <footer>
            <a class="btn-enter" (click)="togglePageStatus()">Entrar</a>
        </footer>
    </div>    
    
    <div class="page">
        <div class="left-side">
            <a class="menu-title">My App</a>
        </div>
        <div class="right-side">
            <a class="link" routerLink="/contact">Contact</a>
            <a class="link" routerLink="/us">Us</a>            
            <a class="link" routerLink="/forum">Forum</a>
            <a class="link" routerLink="/home">Home</a>
        </div>
        
        <div class="content">
           <router-outlet></router-outlet>            
        </div>
        
    </div>
    
`,
    animations:[
        trigger('pageStatus', [
            state('splash', style({

            })),
            state('page',   style({
                transform: 'translateY(-100%)'
            })),
            transition('splash <=> page', animate('500ms ease-in'))

        ])
    ],
    styleUrls: ['./app.component.css']

})
export class AppComponent {
    pageStatus:string = 'splash'

    togglePageStatus(){
        this.pageStatus = this.pageStatus === 'splash' ? 'page' : 'splash'
    }

}

