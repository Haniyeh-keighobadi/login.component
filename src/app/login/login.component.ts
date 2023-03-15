import { TmplAstBoundText } from '@angular/compiler';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core'; // Importing OnInit hook
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Inject} from '@angular/core';
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
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  
   export class LoginComponent  {

    constructor(
      public dialogRef: MatDialogRef<LoginComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
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
 
    dataSource:any;
    dataSourceSelect:any;
    FirstName:string='';
    LastName:string='';
    Gender:string='';
    Email:any;
    Password:any;
    Birthday:any;
    personList:personalinfo[]=[];

    onsubmit(){
      let newperson:personalinfo={
      FirstName:this.FirstName,
      LastName:this.LastName,
      Gender:this.Gender,
      Email:this.Email,
      Password:this.Password,
      Birthday:this.Birthday
    }
    
    this.personList.push(newperson);
this.dialogRef.close(this.personList);
   }

   ondelete():void{
    this.personList=[]
    this.FirstName='';
    this.LastName='';
    this.Gender='';
    this.Email='';
    this.Password='';
    this.Birthday='';
    console.log(this.personList);
   }
     
     }
     export class InputHintExample {}
     export class DatepickerOverviewExample {}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
     //city select box 
  //       valueForAPI: any;
  //   dataSourceSelect: any;
  // dataSource:any;
  
  //    PeriodicElement : any;
  //   constructor(private http: HttpClient) {}
  //   title = 'api-angular';
  //   ngOnInit() {
  //     // API Call
  //     this.valueForAPI = '0';
  //     this.getDataGrid();
  //   }
  
  //   getDataGrid() {
  
  //     const body = { "Code": "Citys", "Columns": [], "Filters": [{"FieldName":"parent","Value":this.valueForAPI}] };
  //     let headers = new HttpHeaders({
  //       'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
  //       'x-rapidapi-key': 'your-api-key',
  //     });
  //     this.http
  //       .post<any>('https://webapi.elesim.ir/DynamicForm/DataPublicQuery', body, {
  //         headers: headers,
  //       })
  //       .subscribe((res) => {
  //         this.dataSource=res.result.items;
  //         console.log(res);
  //         if (this.valueForAPI == '0') {
  //           this.dataSource = res.result.items;
  //         } else {
  //          this.dataSourceSelect = res.result.items;
  //          console.log(res);
  //         }
  //       });
  //   }
  
  
  // export class MyComponent{
  //   submit:any;
  // }
 
