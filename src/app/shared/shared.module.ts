import { ProjectDetailPageModule } from './../modals/project-detail/project-detail.module';
import { GithubService } from './../services/github.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  }),
  ],
  providers : [
    GithubService
  ],
  exports: [
    TranslateModule,
  ]
})
export class SharedModule { }
