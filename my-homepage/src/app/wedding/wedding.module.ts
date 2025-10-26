import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingRoutingModule } from './wedding-routing.module';
import { WeddingComponent } from './wedding.component';
import { CeremonyComponent } from './ceremony/ceremony.component';
import { ReceptionComponent } from './reception/reception.component';
import { VenueComponent } from './venue/venue.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    WeddingComponent,
    CeremonyComponent,
    ReceptionComponent,
    VenueComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    WeddingRoutingModule
  ]
})
export class WeddingModule { }
