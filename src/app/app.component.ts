import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

import { OnInit } from '@angular/core'; // Importing OnInit hook
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatHint } from '@angular/material/form-field';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Implementing OnInit
  showLoding:boolean=false;
  valueForAPI: any;
  dataSourceSelect: any;
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'productTypeTitle',
    'companyCode',
  ];
  dataSource: PeriodicElement[] = [];
  constructor(private http: HttpClient) {}
  title = 'api-angular';
  sellprice: any;
  compName: any;
  compCode: any;
  ngOnInit() {
    this.dataSource = [ ];

    // API Call
    this.valueForAPI = '0';
    this.getDataGrid();
  }

  getDataGrid() {

    var filterItem=[]

  if(this.compCode!= "" && this.compCode != null){
    filterItem.push({FieldName:"companyCode",Value:this.compCode})
  }

  if(this.compName!= "" && this.compName != null){
    filterItem.push({FieldName:"companyName",Value:this.compName})
  }

  if(this.sellprice!= "" && this.sellprice != null){
    filterItem.push({FieldName:"sellPrice",Value:this.sellprice})
  }



    const body = { Code: 'Products2', Columns: [], Filters: filterItem };
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
      'x-rapidapi-key': 'your-api-key',
    });
    this.showLoding=true;
    this.http
      .post<any>('https://webapi.elesim.ir/DynamicForm/DataPublicQuery', body, {
        headers: headers,
      })
      .subscribe((res) => {
        this.showLoding=false;
        if (this.valueForAPI == '0') {
          this.dataSource = res.result.items;
        } else {
         // this.dataSource = res.result.items;
        //  console.log(res);
        }
      });
  }
  //sell price
  sell(b: any) {
    this.sellprice = b.target.value;
    console.log("sellprice",this.sellprice)
  }
  //company name
  companyName(b: any) {
    this.compName = b.target.value;
    console.log("compName",this.compName)
  }
  //company code
  companyCode(b: any) {
   
    this.compCode = b.target.value;
    console.log("compCode",this.compCode)
  }
//select box
  change(e: any) {
    this.valueForAPI = e.value.toString();
    this.getDataGrid();
  }

  //click event
  filterchange(a: any) {
    // const filvalue=a.target.value;
    // this.dataSourceSelect.filter=filvalue;
    this.getDataGrid();
  }
}
// export class MyComponent {
//   selectedValue: any;
// }

// export class SelectNoRippleExample {}
// export class InputHintExample {}
// export class ButtonTypesExample {}
// export class ProgressSpinnerOverviewExample {}
