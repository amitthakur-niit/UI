import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatTooltipModule, MatButtonToggleModule } from '@angular/material';


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { HowToApplyComponent } from './forms/how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './forms/mortgage-options/mortgage-options.component';
import { ValuationComponent } from './forms/valuation/valuation.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< Updated upstream
import { AuthModule } from './auth/auth.module';
import { FormsListModule } from './forms/forms-list.module';
import { MaterialDesignModule } from './materialDesign/material-design.module';
import { CoreService } from './core/core.service';
import { HttpClientModule } from '@angular/common/http';
=======
import { PropertyDetailsComponent } from './forms/property-details/property-details.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< Updated upstream
    ContentComponent
 
=======
    ContentComponent,
    HowToApplyComponent,
    MortgageOptionsComponent,
    ValuationComponent,
    PropertyDetailsComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    /* MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatInputModule, */
    FormsModule,
    ReactiveFormsModule,
<<<<<<< Updated upstream
    AuthModule,
    FormsListModule,
    MaterialDesignModule
=======
    MatCardModule,
    MatTooltipModule,
    MatButtonToggleModule,


>>>>>>> Stashed changes
  ],
/*   exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< Updated upstream
  ], */
=======
    MatTooltipModule,
    MatButtonToggleModule,
  ],
>>>>>>> Stashed changes
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
