import { Component } from '@nativescript/core';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Welcome to NativeScript';
  message: string = 'Your Android app is ready!';
  
  constructor() {
    console.log('AppComponent initialized');
  }

  onButtonTap(): void {
    alert('Button tapped!');
  }
}
