import { Component } from '@angular/core';
import { Api } from '../../Service/api';

@Component({
  selector: 'app-admin-recipelist',
  standalone: false,
  templateUrl: './admin-recipelist.html',
  styleUrl: './admin-recipelist.css',
})
export class AdminRecipelist {

  recipeList:any[]=[]
  searchKey:string=""

  ngOnInit(){
    this.getData()
  }

  constructor(private api:Api){}

  getData(){
    this.api.getAdminRecipes().subscribe({
      next:(res:any)=>{
        this.recipeList=res
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  handleDeleteRecipe(id:any){
    this.api.deleteRecipeApi(id).subscribe({
      next:(res:any)=>{
        this.getData()
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

}
