import {
    Component} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'nosotros',
    template: `
<div class="us">
    <h2>Nosotros</h2>
    <p>Somos constituyentes de 1994</p>
    <div class="team-member w3-card-2" *ngFor="let member of members">
        <div class="team-member-img">
            <img [src]="member.imgUrl">
        </div>
        <div class="team-member-info">
            <h1>{{member.name}} {{member.lastName}}</h1>
            <p>{{member.shortDescription}}</p>
        </div>
    </div>
</div>
    
   
   
`,
    styleUrls: ['./nosotros.component.css']

})
export class NosotrosComponent {

    members:Array<Member> = new Array();

    constructor(){
        this.members.push(new Member(
            'Leonor',
            'Mandinga',
            'Una licenciada re grossa en todos sus aspectos',
            'https://cdn4.iconfinder.com/data/icons/people-std-pack/512/girl-512.png'))
        this.members.push(new Member(
            'Raúl',
            'Silva',
            'Abogado penalista que trabajó toda su vida en el sur del país vendiendo manzanas y autos usados',
            'http://www.freeiconspng.com/uploads/user-login-icon-14.png'))
        this.members.push(new Member(
            'Ernesto',
            'Guevara',
            'Revolucionario Argentino que combatió por la liberación de Cuba',
            'http://www.freeiconspng.com/uploads/user-login-icon-14.png'))
    }



}


class Member{
    constructor(
      public name:string,
      public lastName:string,
      public shortDescription:string,
      public imgUrl:string
    ){}
}
