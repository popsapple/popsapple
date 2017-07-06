import { Component, Input } from '@angular/core';
import { LoadTemplateScript } from '../loadjs/loadscript.service';
@Component({
  selector: 'portfolio-list',
  templateUrl: './portfolio_list.component.html',
  styleUrls: ['./../../assets/css/portfolio_list.component.compact.css'],
  providers: [LoadTemplateScript]
})
export class PortfolioListComponent {
  portfolio:Object = {
    'portfolio_list':[
      {
        "url": "http://popsapple.herokuapp.com/",
        "thumnail": "./../../assets/image/portfolio/my_site.jpg",
        "title": "개인 홈페이지",
        "date": "2017-07-04",
        "des_percent": 100,
        "publ_percent": 100,
        "dev_percent": 100
      },{
        "url": "http://ceramic.or.kr/korean/",
        "thumnail": "./../../assets/image/portfolio/seed.jpg",
        "title": "시드아키텍건축사무소",
        "date": "2017-07-04",
        "des_percent": 80,
        "publ_percent": 0,
        "dev_percent": 0
      },{
        "url": "http://kitocommu.herokuapp.com/",
        "thumnail": "./../../assets/image/portfolio/kitocommu.jpg",
        "title": "키토제닉커뮤니티",
        "date": "2017-07-04",
        "des_percent": 100,
        "publ_percent": 100,
        "dev_percent": 100
      },{
        "url": "http://kitocommu.herokuapp.com/",
        "thumnail": "./../../assets/image/portfolio/camp.jpg",
        "title": "아름드리캠핑장",
        "date": "2017-07-04",
        "des_percent": 100,
        "publ_percent": 100,
        "dev_percent": 100
      },{
        "url": "http://벨리나웨딩.com/",
        "thumnail": "./../../assets/image/portfolio/baelina.jpg",
        "title": "벨리나웨딩",
        "date": "2017-07-04",
        "des_percent": 100,
        "publ_percent": 80,
        "dev_percent": 0
      },{
        "url": "http://www.seilpt.com/html/dh/main",
        "thumnail": "./../../assets/image/portfolio/seilpt.jpg",
        "title": "세일정밀",
        "date": "2017-07-04",
        "des_percent": 80,
        "publ_percent": 0,
        "dev_percent": 0
      },{
        "url": "http://namuhana.com/namuhana/",
        "thumnail": "./../../assets/image/portfolio/namuhana.jpg",
        "title": "나무하나",
        "date": "2017-07-04",
        "des_percent": 100,
        "publ_percent": 100,
        "dev_percent": 0
      },{
        "url": "http://green-star.or.kr/",
        "thumnail": "./../../assets/image/portfolio/green-star.jpg",
        "title": "환경문화시민연대",
        "date": "2017-07-04",
        "des_percent": 100,
        "publ_percent": 80,
        "dev_percent": 0
      },{
        "url": "http://ceramic.or.kr/korean/",
        "thumnail": "./../../assets/image/portfolio/ceramic.jpg",
        "title": "이천도자기축제",
        "date": "2017-07-04",
        "des_percent": 100,
        "publ_percent": 70,
        "dev_percent": 0
      },{
        "url": "http://tantan.kr/main.html",
        "thumnail": "./../../assets/image/portfolio/tantan.jpg",
        "title": "탄탄",
        "date": "2017-07-04",
        "des_percent": 100,
        "publ_percent": 80,
        "dev_percent": 0
      },{
        "url": "http://duremna.com/main/",
        "thumnail": "./../../assets/image/portfolio/dure.jpg",
        "title": "두레컨스콘",
        "date": "2017-07-04",
        "des_percent": 100,
        "publ_percent": 80,
        "dev_percent": 0
      },{
        "url": "https://www.ycsudo.go.kr/main.html",
        "thumnail": "./../../assets/image/portfolio/yssudo.jpg",
        "title": "연천군맑은물관리사업소",
        "date": "2017-07-04",
        "des_percent": 100,
        "publ_percent": 80,
        "dev_percent": 0
      }
    ]
  }

  portfolio_list_flex_script = new LoadTemplateScript().setScript('./../../assets/js/movefollitem.js');
}
