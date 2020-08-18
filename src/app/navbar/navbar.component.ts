import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public routes : Router, public Service : AppService) { }

  ngOnInit(): void {
  }

  public logout=()=>{
    localStorage.removeItem('auth_Token');
    this.routes.navigate(['login']);

    }
}
