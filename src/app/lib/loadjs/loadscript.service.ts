import { Injectable } from '@angular/core';
@Injectable()
export class LoadTemplateScript {
  setScript(url:string){
    let node = document.createElement('script');
    node.src = url;
    node.type = 'application/x-javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
