import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnailPipe'
})
export class ThumbnailPipe implements PipeTransform {

  transform(imageUrl:string): string {
    // Assuming "assets/tags/" is the common prefix
    const imagePath = imageUrl.replace('assets/restaurants/', 'assets/restaurants/tbn/');
    return imagePath;
  }
  
}
