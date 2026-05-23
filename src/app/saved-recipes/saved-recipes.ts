import { Component } from '@angular/core';
import { Api } from '../Service/api';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-recipes',
  imports: [Header, Footer],
  templateUrl: './saved-recipes.html',
  styleUrl: './saved-recipes.css'
})
export class SavedRecipes {

  savedRecipes: any[] = []

  constructor(private api: Api,private router:Router) {}

  ngOnInit() {
    this.getSavedData()
  }

  getSavedData() {
    this.api.getSavedRecipeApi().subscribe({
      next: (res: any) => {
        console.log(res)
        this.savedRecipes = res
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  gotoDetails(id:any){
    if(sessionStorage.getItem('token')){
      this.router.navigateByUrl(`/details/${id}`)
    }
    else{
      alert("Please Login First")
    }
  }

  handleDelete(id:any){
    this.api.deleteSavedRecipeApi(id).subscribe((res:any)=>{
      alert("Recipe deleted successfully.")
      this.getSavedData()
    })
  }

}