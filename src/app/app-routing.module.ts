import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'blog', component: BlogComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
