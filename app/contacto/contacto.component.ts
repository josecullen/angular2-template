/**
 * Created by josecullen on 28/08/16.
 */
import {
    Component} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'contacto',
    template: `
<div class="contact">
    <div class="input-form">
        <label>De</label>
        <br>
        <input>
    </div>
    <div class="input-form">
        <label>Título</label>  
        <br>
        <input>
    </div>
    <div class="input-form">
        <label>Mensaje</label>  
        <br>
        <textarea rows="10"></textarea>
    </div>
    <a class="btn-send" href="#">Enviar</a>
</div>
`,
    styleUrls: ['./contacto.component.css']


})
export class ContactoComponent {

}

