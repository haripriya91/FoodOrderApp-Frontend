import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingModule } from 'angular-star-rating';



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
import { SubHeaderComponent } from './shared/sub-header/sub-header.component';
import { ScrollDirective } from './scroll.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CommonModalComponent } from './shared/general/common-modal/common-modal.component';  
import { InfoModalComponent } from './shared/general/info-modal/info-modal.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

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
    SubHeaderComponent,
    ScrollDirective,
    CommonModalComponent,
    InfoModalComponent,
    SearchBoxComponent,
    FoodDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,  
    MatInputModule,
    InfiniteScrollModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    ThumbnailPipe,
     {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
     },
     provideAnimationsAsync() 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
