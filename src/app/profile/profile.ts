import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../Service/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [Header,Footer,FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
   
  downloadList:any[]=[]
  profile:string="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
  username:string=""
  constructor(private api:Api){}

  ngOnInit(){
    this.getDownloads()
    if(sessionStorage.getItem('uname')){
      this.username=sessionStorage.getItem('uname')||""
      if(sessionStorage.getItem('profile')){
        this.profile=sessionStorage.getItem('profile')||"https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
      }
    }
  }



  getDownloads(){
    this.api.getDownloadedRecipeApi().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.downloadList=res
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  getFile(e:any){
    const file=e?.target?.files[0]
    const fr=new FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      console.log(event.target.result)
      this.profile=event.target.result
    }
  }

  handleProfileUpdate(){
    if(!this.username||!this.profile){
      alert("Please enter valid inputs!!")
    }
    else{
      this.api.profileUpdateApi({username:this.username,profile:this.profile}).subscribe({
        next:(res:any)=>{
          alert("Profile Updated")
          sessionStorage.setItem('uname',this.username)
          sessionStorage.setItem('profile',this.profile)
        },
        error:(err:any)=>{
          alert("Profile updation failed")
          this.profile=sessionStorage.getItem('profile')||"https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"
          this.username=sessionStorage.getItem('uname')||""
        }
      })
    }
  }

}
