import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, linkedSignal } from '@angular/core';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'linked-signal-demo';
  shippingOptions = signal(['Ground', 'Air', 'Sea']); // Available shipping methods.
  selectedOption = linkedSignal(() => this.shippingOptions()[0]); // Automatically defaults to the first option.

  changeShipping(newOptionIndex: number) {
    this.selectedOption.set(this.shippingOptions()[newOptionIndex]); // User can change the selection.
  }

  testLinkedSignal() {
    this.shippingOptions.set(['Email', 'Will Call']);
    console.log(this.selectedOption()); // Automatically updates to 'Email'.
  }

  ngOnInit() {
    this.testLinkedSignal();
  } 
}


