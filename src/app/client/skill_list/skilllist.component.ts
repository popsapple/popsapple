import { Component} from '@angular/core';
import { MainSkillListService } from './skilllist.service';
import { LoadTemplateScript } from './../../lib/loadjs/loadscript.service';
@Component({
  selector: 'skill-list',
  templateUrl: './skilllist.component.html',
  styleUrls: ['./../../../assets/css/skilllist.component.compact.css'],
  providers: [MainSkillListService,LoadTemplateScript]
})
export class MainSkillList {

}
