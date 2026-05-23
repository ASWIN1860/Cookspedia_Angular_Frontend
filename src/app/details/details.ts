import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../Service/api';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-details',
  imports: [Header,Footer],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  recipeId:any=""
  recipeData:any=""

  constructor(private ar:ActivatedRoute,private api:Api){
    this.ar.params.subscribe((res:any)=>{
      console.log(res)
      this.recipeId=res?.id
    })
  }

  ngOnInit(){
    this.getRecipeDetails()
  }

  getRecipeDetails(){
    this.api.getRecipeByIdApi(this.recipeId).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.recipeData=res
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  handleDownload(){
    const doc=new jsPDF();

    const headingRow=["Name","Cuisine","Cooking Time","Incredients","Instructions"]
    const bodyRow=[this.recipeData?.name,this.recipeData?.cuisine,this.recipeData?.cookTimeMinutes,this.recipeData?.incredients,this.recipeData?.instructions]

    autoTable(doc,{
      head:[headingRow],
      body:[bodyRow]
    })
    const reqbody={recipeName:this.recipeData.name,recipeImage:this.recipeData.image,recipeCuisine:this.recipeData.cuisine}
    this.api.downloadRecipeApi(this.recipeId,reqbody).subscribe((res:any)=>{
      doc.save("recipe.pdf")
      console.log(res)
    })
    
  }

  handleRecipeSave(){
    const body={
      recipeName:this.recipeData?.name,recipeImage:this.recipeData?.image
    }
    this.api.saveRecipeApi(this.recipeId,body).subscribe({
      next:(res:any)=>{
        alert("Recipe Saved")
      },
      error:(err:any)=>{
        console.log(err)
        alert("Recipe Saving Failed!!")
        if(err.error){
          alert(err.error)
        }
      }
    })
  }

}
