import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'dialog-with-menu-dialog',
  templateUrl: 'dialog-with-menu-dialog.html',
})
export class DialogWithMenuDialog {
  constructor(public dialogRef: MatDialogRef<DialogWithMenuDialog>) {}

  close(): void {
    this.dialogRef.close();
  }
}
