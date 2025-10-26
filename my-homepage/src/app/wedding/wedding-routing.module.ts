import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingComponent } from './wedding.component';
import { CeremonyComponent } from './ceremony/ceremony.component';
import { ReceptionComponent } from './reception/reception.component';
import { VenueComponent } from './venue/venue.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    component: WeddingComponent,
    children: [
      {
        path: '',
        redirectTo: 'ceremony',
        pathMatch: 'full'
      },
      {
        path: 'ceremony',
        component: CeremonyComponent
      },
      {
        path: 'reception',
        component: ReceptionComponent
      },
      {
        path: 'venue',
        component: VenueComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingRoutingModule { }
