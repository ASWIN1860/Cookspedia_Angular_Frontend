import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsers } from './admin-users/admin-users';
import { AdminAddrecipe } from './admin-addrecipe/admin-addrecipe';
import { AdminRecipelist } from './admin-recipelist/admin-recipelist';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminFeedbacks } from './admin-feedbacks/admin-feedbacks';

const routes: Routes = [
  {path:'',component:AdminDashboard,title:'Admin-Dashboard'},
  {path:'recipes',component:AdminRecipelist,title:'Admin-RecipeList'},
  {path:'add-recipe',component:AdminAddrecipe,title:'Admin-AddRecipe'},
  {path:'user',component:AdminUsers,title:'Admin-Users'},
  {path:'feedback',component:AdminFeedbacks,title:'Admin-Feedback'},
  {path:'edit-recipe/:id',component:AdminAddrecipe,title:'Admin-EditRecipe'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
