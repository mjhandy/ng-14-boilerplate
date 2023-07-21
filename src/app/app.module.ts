import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// custom components
import { CarouselComponent } from './components/pages/carousel/carousel.component';
import { AccordionComponent } from './components/pages/accordion/accordion.component';
import { HeaderComponent } from './components/header/header/header.component';
import { MainNavComponent } from './components/header/main-nav/main-nav.component';
import { GlobalSearchComponent } from './components/header/global-search/global-search.component';
import { SiteLogoComponent } from './components/header/site-logo/site-logo.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { OneColumnTemplateComponent } from './components/pages/one-column-template/one-column-template.component';
import { TwoColumnTemplateSideRailComponent } from './components/pages/two-column-template-side-rail/two-column-template-side-rail.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// material items
import { MaterialModule } from './shared/material/material.module';
import { SvgIconsModule } from './shared/svg-icons/svg-icons.module';
import { FormsComponent } from './components/pages/forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    MainNavComponent,
    GlobalSearchComponent,
    SiteLogoComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    OneColumnTemplateComponent,
    TwoColumnTemplateSideRailComponent,
    AccordionComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SvgIconsModule,
    CarouselComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Meta],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
