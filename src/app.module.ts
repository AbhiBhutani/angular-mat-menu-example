import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { MenuInDialogExample } from './menu-in-dialog-example';
import { DialogWithMenuDialog } from './dialog-with-menu-dialog';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, MenuInDialogExample, DialogWithMenuDialog],
  entryComponents: [MenuInDialogExample, DialogWithMenuDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
