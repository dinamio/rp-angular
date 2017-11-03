import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { SearchComponent } from './main/search/search.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './main/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'admin', component: AdminComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    SearchComponent,
    FooterComponent,
    MainComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
