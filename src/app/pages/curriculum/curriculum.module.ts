import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurriculumPage } from './curriculum.page';

import { CurriculumPageRoutingModule } from './curriculum-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CurriculumPageRoutingModule,
    SharedModule
  ],
  declarations: [CurriculumPage]
})
export class CurriculumPageModule {}
