import { Segment } from './../../models/segment';
import { GithubService } from './../../services/github.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { IonContent, IonSegment } from '@ionic/angular';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-curriculum',
  templateUrl: 'curriculum.page.html',
  styleUrls: ['curriculum.page.scss']
})
export class CurriculumPage implements OnInit, OnDestroy{

  @ViewChild(IonContent, { static: false }) content: IonContent;
  
  languages: string[];
  selectedLanguage: string;
  projectList: Project[];
  observerList: IntersectionObserver[] = [];
  segmentList: string[] = [
    "intro",
  "projects",
  "contact"
];

  segment: string = "intro"
  constructor(
    private translate: TranslateService,
    private github: GithubService
  ) {
   
  }
  

  ngOnInit() {
     //Temporal
     this.selectedLanguage = this.translate.getDefaultLang();
    this.languages = this.translate.getLangs();
    this.getRepos();
    this.segmentList.forEach(seg => {
      let observer = new IntersectionObserver(entries => {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].isIntersecting === true && this.segment !== seg)
        console.log("Entrando en " + seg);
        this.segment = seg;
      }, { threshold: [0] });
      observer.observe(document.querySelector("#" + seg));
      this.observerList.push(observer);
    })
    

     
  }
  ngOnDestroy() {
    this.observerList.forEach(obs => {
      obs.disconnect();
    });
  }

  scrollToLabel(label) {
    var titleELe = document.getElementById(label);
    this.content.scrollToPoint(0, titleELe.offsetTop, 1500);
  }

  changeLanguage(ev: any) {
    this.translate.use(ev.target.value);
  }

  getRepos() {
    this.github.getRepos().subscribe(data => {
      this.projectList = data;
    });
    
  }

  segmentChanged(seg: any) {
    this.scrollToLabel(seg);
  }

  

  checkScrolling(ev:any) {
    /*
    this.segmentList.forEach(seg => {
      var elem = document.getElementById(seg);
      if(elem.offsetParent !== null) {
        console.log("Segmento: " + seg);
        this.segment = seg;
        return;
      }
      
      if(elem.offsetTop > ev.detail.currentY && elem.offsetTop + elem.offsetHeight > ) {
        console.log("Segmento: " + seg);
        console.log("Y: " + elem.offsetTop);
        
        this.segment = seg;
        
      
    });
     }*/
  }
}
