import { Component, AfterViewInit, OnInit} from '@angular/core';
import { MainVisualService } from '../main_visual/mainvisual.service';
import { LoadTemplateScript } from './../../lib/loadjs/loadscript.service';
@Component({
  selector: 'visual-item',
  templateUrl: './mainvisualitem.component.html',
  styleUrls: ['./../../../assets/css/mainvisual.component.compact.css'],
  providers: [MainVisualService,LoadTemplateScript]
})
export class MainVisualItemComponent implements AfterViewInit {
  main_visual_item01:Object;
  main_visual_item02:Object;
  main_visual_script:any;
  main_visual_items:Array<any> = [];
  main_visual_width:any;
  constructor(){
    this.main_visual_item01 = new MainVisualService().getImages('./../../assets/image/visual/main_visual01_m.jpg','./../../assets/image/visual/main_visual01.jpg', '데스크탑 위에서 작업 중인 사진입니다', "자신의 일을 개선시키려면 불가능을 시도해라", "불가능을 시도해라", 'Attempt the Inpossible in order to improve your work');
    this.main_visual_item02 = new MainVisualService().getImages('./../../assets/image/visual/main_visual02_m.jpg','./../../assets/image/visual/main_visual02.jpg', '데스크탑 위에서 작업 중인 사진입니다', "자신의 일을 개선시키려면 불가능을 시도해라", "불가능을 시도해라", 'Attempt the Inpossible in order to improve your work');
    this.main_visual_items.push(this.main_visual_item01);
    this.main_visual_items.push(this.main_visual_item02);
  }
  ngOnInit(){
    if(window.innerWidth > 319){ // 망할 파이어폭스가 angular 안에 있는 picure 랜더링에 문제가 있음.
      this.main_visual_width = 'xs'
    }
    if(window.innerWidth > 767){
      this.main_visual_width = 'sm'
    }
    if(window.innerWidth > 992){
      this.main_visual_width = 'md'
    }
    if(window.innerWidth > 1199){
      this.main_visual_width = 'lg'
    }
  }
  ngAfterViewInit(){
    this.main_visual_script = new LoadTemplateScript().setScript('./../../assets/js/mainvisual.js');
  }
}
