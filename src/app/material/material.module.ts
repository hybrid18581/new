import { NgModule } from '@angular/core';

import { MatTabsModule }  from '@angular/material/tabs';

const MaterialComponent = [
  MatTabsModule,
]

  
@NgModule({
  
  imports: [
    MaterialComponent
  ],
  exports: [MaterialComponent]
})
export class MaterialModule { }
