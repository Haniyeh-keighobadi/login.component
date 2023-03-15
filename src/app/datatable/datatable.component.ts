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
   // FirstName:string;
    // LastName:string;
    // Gender:string;
    // Email:any;
   //  Password:any;
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
   
   
    displayedColumns: string[] = [ 'LastName', 'Gender', 'Email', 'Password', 'Birthday', 'odd'];
    data: any[] = [{LastName: 1, Gender: 'Hydrogen', Email: 1.0079, Password: 'H',Birthday:2032020},
    {LastName: 2, Gender: 'Helium', Email: 4.0026, Password: 'He'}]
   
   
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(LoginComponent, {});
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed Data',result);
        this.data.push(result);
      });
    }

    getDataGrid1() {

        let newperson:personalinfo={
         // FirstName:this.FirstName,
        //  LastName:this.LastName,
         // Gender:this.Gender,
         // Email:this.Email,
         // Password:this.Password,
          Birthday:this.Birthday
          
    
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
      //FirstName:string='';
      //LastName:string='';
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
        displayedColumns: string[] = [ 'LastName', 'count', 'first', 'last', 'even', 'odd'];
        data: any[] = [{LastName: 1, count: 'Hydrogen', first: 1.0079, last: 'H'},
        {LastName: 2, count: 'Helium', first: 4.0026, last: 'He'},
        {LastName: 3, count: 'Lithium', first: 6.941, last: 'Li'},
        {LastName: 4, count: 'Beryllium', first: 9.0122, last: 'Be'},
        {LastName: 5, count: 'Boron', first: 10.811, last: 'B'},
        {LastName: 6, count: 'Carbon', first: 12.0107, last: 'C'},
        {LastName: 7, count: 'Nitrogen', first: 14.0067, last: 'N'},
        {LastName: 8, count: 'Oxygen', first: 15.9994, last: 'O'},
        {LastName: 9, count: 'Fluorine', first: 18.9984, last: 'F'},
        {LastName: 10, count: 'Neon', first: 20.1797, last: 'Ne'}];

      }
      export class InputHintExample {}
      export class InputFormExample {}
      export class ButtonTypesExample {}
       export class GridListOverviewExample {}