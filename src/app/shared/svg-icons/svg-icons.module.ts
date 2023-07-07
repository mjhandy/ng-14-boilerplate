import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { MaterialModule } from '../material/material.module';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
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
      // font awesome
      .addSvgIcon(
        'fa_regular_user',
        this.setPath(`${this.faPath}/regular/user.svg`)      
      )
      .addSvgIcon(
        'fa_solid_user',
        this.setPath(`${this.faPath}/solid/user.svg`)
      )
      .addSvgIcon(
        'fa_info',
        this.setPath(`${this.faPath}/solid/info.svg`)
      )
      .addSvgIcon(
        'fa_chevron_right',
        this.setPath(`${this.faPath}/solid/chevron-right.svg`)
      )
      .addSvgIcon(
        'fa_forward',
        this.setPath(`${this.faPath}/solid/forward.svg`)
      )
      .addSvgIcon(
        'fa_edit',
        this.setPath(`${this.faPath}/solid/pen.svg`)
      )          
      // bootstrap icons      
      .addSvgIcon(
        'ba_person',
        this.setPath(`${this.baPath}/person.svg`)      
      )
      .addSvgIcon(
        'ba_person_fill',
        this.setPath(`${this.baPath}/person-fill.svg`)      
      )
      .addSvgIcon(
        'ba_edit',
        this.setPath(`${this.baPath}/pencil.svg`)      
      )
      .addSvgIcon(
        'ba_plus_circle',
        this.setPath(`${this.baPath}/plus-circle.svg`)      
      )             
  }

  private setPath(url: string): SafeResourceUrl { 
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url); 
   }
}
