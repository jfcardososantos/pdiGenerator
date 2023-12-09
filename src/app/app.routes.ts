import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromptComponent } from './prompt/prompt.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'prompt', component: PromptComponent },



];
