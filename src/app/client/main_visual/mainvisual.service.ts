import { Injectable } from '@angular/core';
@Injectable()
export class MainVisualService {
  getImages(main_visual_img_mobile:string,main_visual_img:string,main_visual_desc:string,main_visual_title_md:string,main_visual_title:string,main_visual_title_eng:string){
    return {
      main_visual_img_mobile : main_visual_img_mobile,
      main_visual_img : main_visual_img,
      main_visual_desc : main_visual_desc,
      main_visual_title_md : main_visual_title_md,
      main_visual_title : main_visual_title,
      main_visual_title_eng : main_visual_title_eng
    }
  }
}
