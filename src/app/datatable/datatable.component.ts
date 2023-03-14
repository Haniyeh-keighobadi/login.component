import { TmplAstBoundText } from '@angular/compiler';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core'; // Importing OnInit hook
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import {MatTableModule} from '@angular/material/table';
interface personalinfo{
    FirstName:string;
     LastName:string;
     Gender:string;
     Email:any;
     Password:any;
     Birthday:any;
  }
  export interface DialogData {
    animal: string;
    name: string;
  }
  
@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css']
  })
  
  export class DatatableComponent  {
   
   
    displayedColumns: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
    data: string[] = ['one', 'two', 'three', 'four', 'five'];
   
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(LoginComponent, {});
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed Data',result);
        
      });
    }

    getDataGrid1() {

        let newperson:personalinfo={
          FirstName:this.FirstName,
          LastName:this.LastName,
          Gender:this.Gender,
          Email:this.Email,
          Password:this.Password,
          Birthday:this.Birthday
          
    
        }
        
    
      if(this.FirstName!= "" && this.FirstName != null){
        this.personList.push(newperson);
      }
      
      }
      search(e:any){
       this.getDataGrid1();
      }
      searchtext:any;
      show=false;
      count:number=0;
      dataSource:any;
      dataSourceSelect:any;
      FirstName:string='';
      LastName:string='';
      Gender:string='';
      Email:any;
      Password:any;
      Birthday:any;
      personList:personalinfo[]=[];
     
     
  
     change(e:any){
        // this.valueForAPI=e.Value;
        // this.getDataGrid();
       // this.nameChange(e);
       }
       nameChange(e:any){
      //   if(e.target.value===this.personList.values){
      //   this.personList.filter;
      // }
      // else{
      //   this.FirstName='';
      //   this.LastName='';
      //   this.Gender='';
      //   this.Email='';
      //   this.Password='';
      //   this.Birthday='';
      // }
      
       }
       
       }
       export class TableRowContextExample {
        displayedColumns: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        data: string[] = ['one', 'two', 'three', 'four', 'five'];
      }
      export class InputHintExample {}
      export class InputFormExample {}
      export class ButtonTypesExample {}
       export class GridListOverviewExample {}