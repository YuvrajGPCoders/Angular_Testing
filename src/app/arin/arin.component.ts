import { Component } from '@angular/core';

@Component({
  selector: 'app-arin',
  template: ` <h2 class="custom">arin works! --inline-style --inline-template</h2> `,
  styles: [
    `
      .custom {
        color: red;
      }
    `,
  ],
})
export class ArinComponent {
  
}
