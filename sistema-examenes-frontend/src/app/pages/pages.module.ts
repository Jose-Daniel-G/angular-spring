// src/app/pages/signup.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Already there, good!
import { FormsModule } from '@angular/forms'; // Already there, good!

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field'; // Already there, good!
import { MatInputModule } from '@angular/material/input';         // Already there, good!
import { MatButtonModule } from '@angular/material/button';       // Already there, good!
import { MatSnackBarModule } from '@angular/material/snack-bar';   // Already there, good!
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
// import { authInterceptorProviders } from './services/auth.interceptor';
// import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
// import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
// Routing Module for this feature
import { PagesRoutingModule } from './pages-routing.module'; // <-- Import the routing module

// Components declared in this module
// import { NavbarComponent } from '../components/navbar/navbar.component'; // Check if NavbarComponent is standalone or part of its own module
// import { LoginComponent } from './login/login.component'; // Assuming this component is also declared in this module
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Provides ngModel
    PagesRoutingModule, // <-- Add this!
    MatFormFieldModule,  // Provides mat-form-field, mat-label, mat-hint
    MatInputModule,      // Provides matInput directive
    MatButtonModule,     // Provides mat-button
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    // BrowserAnimationsModule, // Only needed in root module, not feature modules usually.
                            // If you encounter issues later, check if it's imported in app.module.ts (if you have one)
  ],
  // No need for 'exports' if this module is only lazy-loaded and not directly imported by other modules.
})
export class PagesModule { }