import { NgModule } from '@angular/core';
import { PhotoFormMudule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';


@NgModule({
  imports: [
    PhotoModule,
    PhotoFormMudule,
    PhotoListModule
  ]
})
export class PhotosModule { }
