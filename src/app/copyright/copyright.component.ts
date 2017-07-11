import { Component, OnInit} from '@angular/core';
import { CopyrightMailService } from './copyright_mail.service';
import { LoadTemplateScript } from '../loadjs/loadscript.service';
@Component({
  selector: 'copyright-item',
  templateUrl: './copyright.component.html',
  styleUrls: ['./../../assets/css/copyright.component.compact.css'],
  providers: [CopyrightMailService,LoadTemplateScript]
})
export class CopyrightComponent {

}
