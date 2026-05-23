import { Component } from '@angular/core';
import { Api } from '../../Service/api';

@Component({
  selector: 'app-admin-users',
  standalone: false,
  templateUrl: './admin-users.html',
  styleUrl: './admin-users.css',
})
export class AdminUsers {
  userList: any[] = [];

  constructor(private api: Api) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.api.getAdminUsers().subscribe({
      next: (res: any) => {
        this.userList = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
