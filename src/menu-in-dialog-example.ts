import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogWithMenuDialog } from './dialog-with-menu-dialog';
import { MatMenuModule } from '@angular/material/menu';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'menu-in-dialog-example',
  templateUrl: 'menu-in-dialog-example.html',
})
export class MenuInDialogExample {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let matDialogConfig = new MatDialogConfig();
    matDialogConfig.minWidth = '100';
    matDialogConfig.minHeight = '200';

    const dialogRef = this.dialog.open(DialogWithMenuDialog);

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
