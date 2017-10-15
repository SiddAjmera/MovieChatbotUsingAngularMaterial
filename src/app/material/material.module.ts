import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconModule, MatInputModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [ BrowserAnimationsModule, MatIconModule, MatInputModule, MatListModule ],
  exports: [ BrowserAnimationsModule, MatIconModule, MatInputModule, MatListModule ]
})
export class MaterialModule { }
