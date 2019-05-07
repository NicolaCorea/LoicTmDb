import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { FavoritePage } from './favorite';

@IonicPage(
  {
    name: 'FavoritePage'
  }
  )
@NgModule({
  declarations: [
    FavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritePage),
  ],
})
export class FavoritePageModule {}
