import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent{

  public search: string= 'a';

  onSearch(search: string) {
    this.search = search;
  }

}
