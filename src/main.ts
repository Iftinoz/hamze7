import { Application } from '@nativescript/core';
import { AppComponent } from './app/app.component';

Application.run({ create: () => new AppComponent() });
