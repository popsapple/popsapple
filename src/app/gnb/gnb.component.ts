import { Component} from '@angular/core';
import { LoadTemplateScript } from '../loadjs/loadscript.service';
@Component({
  selector: 'gnb',
  templateUrl: './gnb.component.html',
  styleUrls: ['./../../assets/css/gnb.component.compact.css'],
  providers: [LoadTemplateScript]
})
export class GnbComponent {
  gnb_script = new LoadTemplateScript().setScript('./../../assets/js/gnbnav.js');
}
