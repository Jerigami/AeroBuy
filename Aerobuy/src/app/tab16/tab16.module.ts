import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab16PageRoutingModule } from './tab16-routing.module';

import { Tab16Page } from './tab16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab16PageRoutingModule
  ],
  declarations: [Tab16Page]
})
export class Tab16PageModule {}
