import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../Service/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name: String = '';
  email: String = '';
  feedback: String = '';

  constructor(private api: Api) {}

  handleFeedbackSubmit() {
    if (!this.name || !this.email || !this.feedback) {
      alert('Enter valid inputs!!');
    } else {
      this.api
        .addFeedbackApi({ name: this.name, email: this.email, feedback: this.feedback })
        .subscribe({
          next: (res: any) => {
            alert('Feedback added!!');
            this.name = '';
            this.email = '';
            this.feedback = '';
          },
          error: (err: any) => {
            alert('Feedback adding failed!!');
            err.error ? alert(err.error) : console.log(err);
          },
        });
    }
  }
}
