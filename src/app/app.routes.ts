import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Recipes } from './recipes/recipes';
import { Details } from './details/details';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Reg } from './reg/reg';
import { SavedRecipes } from './saved-recipes/saved-recipes';
import { Profile } from './profile/profile';
import { routeGuard } from './guards/route-guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
    //lazy loading module path 
    {path:'admin',loadChildren:()=>import('./admin/admin-module').then(module=>module.AdminModule),canActivate:[adminGuard]},
    {path:'',component:Home,title:'Cookspedia-Home'},
    {path:'recipes',component:Recipes,title:'Cookspedia-Recipes'},
    {path:'details/:id',component:Details,title:'Cookspedia-Recipe Details',canActivate:[routeGuard]},
    {path:'about',component:About,title:'Cookspedia-About'},
    {path:'contact',component:Contact,title:'Cookspedia-Contact'},
    {path:'signin',component:Login,title:'Cookspedia-Sign In'},
    {path:'signup',component:Reg,title:'Cookspedia-Sign Up'},
    {path:'saved-recipes',component:SavedRecipes,title:'Cookspedia-Saved Recipes',canActivate:[routeGuard]},
    {path:'profile',component:Profile,title:'Cookspedia-Profile',canActivate:[routeGuard]},
];
