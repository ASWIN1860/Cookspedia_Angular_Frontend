import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../Service/api';

@Component({
  selector: 'app-home',
  imports: [Header,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  popularRecipes:any[]=[]
  feedbackList:any[]=[]

  constructor(private api:Api){

  }
  ngOnInit(){
    this.getPopularRecipes()
    this.getFeedbacks()
  }

  getPopularRecipes(){
    this.api.getAllRecipesApi().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.popularRecipes=res?.slice(0,6)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  getFeedbacks(){
    this.api.getFeedbacksApi().subscribe({
      next:(res:any)=>{
        this.feedbackList=res
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

}
