import { TmplAstBoundText } from '@angular/compiler';
import { Component,Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { OnInit,ChangeDetectorRef  } from '@angular/core'; // Importing OnInit hook
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import { PeriodicElement } from '../app.component';
interface personalinfo{
   // FirstName:string;
    // LastName:string;
    // Gender:string;
    // Email:any;
   //  Password:any;
    // Birthday:any;
  }
  export interface DialogData {}
  
@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css']
  })
  
  export class DatatableComponent  {

    displayedColumns: string[] = [ 'Email','FirstName','Gender','LastName','Password'];
   // data: any[] = []
    data = [{Birthday:'',
      Email
      : 
      "sdfsdf",
      FirstName
      : 
      "sdfsd",
      Gender
      : 
      "Male",
      LastName
      : 
      "sdfsdf",
      Password
      : 
      "sdfs"}];

      @ViewChild(MatTable) table: MatTable<any>;

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
      const dialogRef = this.dialog.open(LoginComponent, {});
  
      dialogRef.afterClosed().subscribe(result => {
        debugger
        console.log('The dialog was closed Data',result);
        this.data.push(result[0]);
     
       
          this.table.renderRows();
       
      });
    }

     // dataSource:any;
   //   dataSourceSelect:any;
      //FirstName:string='';
      //LastName:string='';
    //  Gender:string='';
    //  Email:any;
    //  Password:any;
    //  Birthday:any;
   //   personList:personalinfo[]=[];
       
       }
     //  export class TableRowContextExample {}
     // export class InputHintExample {}
     // export class InputFormExample {}
    //  export class ButtonTypesExample {}
     //  export class GridListOverviewExample {}