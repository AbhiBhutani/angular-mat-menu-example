import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

const modules: any[] = [MatButtonModule, MatDialogModule, MatMenuModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
