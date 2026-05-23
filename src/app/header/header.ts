import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  username:string=""

  constructor(){}

  ngOnInit(){
    if(sessionStorage.getItem('token')&&sessionStorage.getItem('uname')){
      this.username=sessionStorage.getItem('uname') || ""
    }
  }

  handleLogout(){
    sessionStorage.clear()
    this.username=""
  }

}
