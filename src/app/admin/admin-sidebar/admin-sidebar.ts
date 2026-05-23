import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: false,
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css',
})
export class AdminSidebar {

  constructor(private router:Router){}

  handleLogout(){
    sessionStorage.clear()
    alert("Logged out from admin panel!!")
    this.router.navigateByUrl('/')
  }

}
