import { Project } from 'src/app/models/project';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage implements OnInit {

  project: Project;

  constructor(
    private nav: NavParams
  ) { }

  ngOnInit() {
    this.project = this.nav.get('project');
  }

  openPage(url: string) {
    window.open(url, '_blank');
  }

}
