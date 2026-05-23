import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {
  
  constructor(private http:HttpClient){

  }

  // base_url="http://localhost:3000"
  base_url="cookspedia-angular-frontend.vercel.app"

  appendHeader(){
    let httpHeader=new HttpHeaders()
    let header=httpHeader.append('Authorization',`Token ${sessionStorage.getItem('token')}`)
    return header
  }

  getAllRecipesApi(){
    return this.http.get(`${this.base_url}/all-recipes`)
  }

  userSignUpApi(data:any){
    return this.http.post(`${this.base_url}/signup`,data)
  }

  userSigninApi(data:any){
    return this.http.post(`${this.base_url}/signin`,data)
  }

  addFeedbackApi(data:any){
    return this.http.post(`${this.base_url}/addfeedback`,data)
  }
  getFeedbacksApi(){
    return this.http.get(`${this.base_url}/getfeedbacks`)
  }

  profileUpdateApi(data:any){
    return this.http.patch(`${this.base_url}/profile-update`,data,{headers:this.appendHeader()})
  }

  getRecipeByIdApi(id:any){
    const headers={
      "Authorization":`Token ${sessionStorage.getItem('token')}`
    }
    return this.http.get(`${this.base_url}/get-recipe/${id}`,{headers:this.appendHeader()})
  }

  downloadRecipeApi(id:any,data:any){
    return this.http.post(`${this.base_url}/add-download/${id}`,data,{headers:this.appendHeader()})
  }

  getDownloadedRecipeApi(){
    return this.http.get(`${this.base_url}/get-downloads`,{headers:this.appendHeader()})
  }
  
  saveRecipeApi(id:any,data:any){
    return this.http.post(`${this.base_url}/save-recipe/${id}`,data,{headers:this.appendHeader()})
  }

  getSavedRecipeApi() {
  return this.http.get(`${this.base_url}/get-savedrecipe`,{ headers: this.appendHeader()})
 }

 deleteSavedRecipeApi(id:any){
  return this.http.delete(`${this.base_url}/delete-savedrecipe/${id}`,{headers:this.appendHeader()})
 }

 //ADMIN
 getAdminRecipes(){
  return this.http.get(`${this.base_url}/admin/allrecipes`,{headers:this.appendHeader()})
 }

 getAdminUsers(){
  return this.http.get(`${this.base_url}/admin/users`,{headers:this.appendHeader()})
 }

 getAdminFeedbacks(){
  return this.http.get(`${this.base_url}/admin/allfeedbacks`,{headers:this.appendHeader()})
 }

 adminDeleteFeedback(id:any){
  return this.http.delete(`${this.base_url}/admin/deletefeedback/${id}`,{headers:this.appendHeader()})
 }

 addRecipeApi(data:any){
  return this.http.post(`${this.base_url}/admin/addrecipe`,data,{headers:this.appendHeader()})
 }

 editRecipeApi(id:any,data:any){
  return this.http.put(`${this.base_url}/admin/update-recipe/${id}`,data,{headers:this.appendHeader()})
 }

 deleteRecipeApi(id:any){
  return this.http.delete(`${this.base_url}/admin/delete-recipe/${id}`,{headers:this.appendHeader()})
 }

}
