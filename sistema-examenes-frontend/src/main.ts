// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http'; // <-- IMPORT THIS
// If you have interceptors, you might also need:
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Your root routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(), // <-- ADD THIS LINE to provide HttpClient globally
    // If you have interceptors, you'd provide them here too:
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
}).catch(err => console.error(err));