/**
 * Created by josecullen on 28/08/16.
 */
import {
    Component} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'contact',
    template: `
<div class="contact">
    <div class="input-form">
        <label>From</label>
        <br>
        <input>
    </div>
    <div class="input-form">
        <label>Title</label>  
        <br>
        <input>
    </div>
    <div class="input-form">
        <label>Message</label>  
        <br>
        <textarea rows="10"></textarea>
    </div>
    <a class="btn-send" href="#">Send</a>
</div>
`,
    styleUrls: ['./contact.component.css']


})
export class ContactComponent {

}

