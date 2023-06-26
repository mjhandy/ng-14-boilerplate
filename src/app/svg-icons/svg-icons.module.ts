import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomSanitizer } from '@angular/platform-browser';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  bootstrap: [   
    MatIconRegistry
  ]
})
export class SvgIconsModule { 
  private faPath = '../../assets/images/icons/fontawesome';
  private baPath = '../../assets/images/icons/bootstrap-icons';

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
  ){
    this.matIconRegistry
      .addSvgIcon(
        'fa_regular_user',
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.faPath}/regular/user.svg`)      
      )
      .addSvgIcon(
        'fa_solid_user',
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.faPath}/solid/user.svg`)
      )
      .addSvgIcon(
        'fa_info',
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.faPath}/solid/info.svg`)
      )      
      .addSvgIcon(
        'ba_person',
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.baPath}/person.svg`)      
      )
      .addSvgIcon(
        'ba_person_fill',
        this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.baPath}/person-fill.svg`)      
      ) 
  }
}
