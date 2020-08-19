import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Images_base_Url='http://macho-cart.com/maven-server/';
  constructor(public service : AppService ) { }

  @ViewChild('htmlInsideModal' , {static : false}) mymodal ;

  public dataModal ;
  public p : any;
  public searchText : any;
  public getCommodities=[];
  ngOnInit(): void {

    this.getAllCommodities()

  }


  public getAllCommodities=()=>{

   let data = {
       user_id : localStorage.getItem('user_id'),
       auth_token : localStorage.getItem('auth_Token')
    }

    this.service.getAllCommodities(data).subscribe((res : any)=>{

      console.log(res);
      (this.getCommodities = res.data);

    });

  }

  public openModal=(data)=>{

    this.mymodal.open();
    this.dataModal = data;

  }


}
