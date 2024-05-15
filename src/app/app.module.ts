import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagComponent } from './tag/tag.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CarouselComponent } from './shared/general/carousel/carousel.component';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';
import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    RestaurantsComponent,
    WelcomePageComponent,
    CarouselComponent,
    ThumbnailPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    provideClientHydration(),
    ThumbnailPipe,
     {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
     } 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
