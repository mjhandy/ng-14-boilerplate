import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './components/header/header/header.component';
import { MainNavComponent } from './components/header/main-nav/main-nav.component';
import { GlobalSearchComponent } from './components/header/global-search/global-search.component';
import { SiteLogoComponent } from './components/header/site-logo/site-logo.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { OneColumnTemplateComponent } from './components/pages/one-column-template/one-column-template.component';
import { TwoColumnTemplateSideRailComponent } from './components/pages/two-column-template-side-rail/two-column-template-side-rail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './components/pages/accordion/accordion.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
