import { Component, OnInit} from '@angular/core';
import { MainVisualService } from '../main_visual/mainvisual.service';
import { LoadTemplateScript } from './../../lib/loadjs/loadscript.service';
@Component({
  selector: 'visual-item',
  templateUrl: './mainvisualitem.component.html',
  styleUrls: ['./../../../assets/css/mainvisual.component.compact.css'],
  providers: [MainVisualService,LoadTemplateScript]
})
export class MainVisualItemComponent implements OnInit {
  main_visual_item01:Object;
  main_visual_item02:Object;
  main_visual_script:any;
  main_visual_items:Array<any> = [];
  constructor(){}
  ngOnInit(){
    this.main_visual_item01 = new MainVisualService().getImages('./../../assets/image/visual/main_visual01.jpg', '데스크탑 위에서 작업 중인 사진입니다', '자신의 일을 개선시키려면 불가능을 시도해라', 'Attempt the Inpossible in order to improve your work');
    this.main_visual_item02 = new MainVisualService().getImages('./../../assets/image/visual/main_visual02.jpg', '데스크탑 위에서 작업 중인 사진입니다', '자신의 일을 개선시키려면 불가능을 시도해라', 'Attempt the Inpossible in order to improve your work');
    this.main_visual_items.push(this.main_visual_item01);
    this.main_visual_items.push(this.main_visual_item02);
    this.main_visual_script = new LoadTemplateScript().setScript('./../../assets/js/mainvisual.js');
  }
}
