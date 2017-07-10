import { Component} from '@angular/core';
import { MainProfileMeService } from '../main_profile/mainprofile.service';
import { LoadTemplateScript } from '../loadjs/loadscript.service';
@Component({
  selector: 'profile-me',
  templateUrl: './mainprofile.component.html',
  styleUrls: ['./../../assets/css/mainprofile.component.compact.css'],
  providers: [MainProfileMeService,LoadTemplateScript]
})
export class MainProfileMe {

}
