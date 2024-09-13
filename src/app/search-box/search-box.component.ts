import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Output() searchTerm = new EventEmitter<string>();

  onSearchTermChanged(event: any) {
    this.searchTerm.emit(event.target.value);
  }
}
