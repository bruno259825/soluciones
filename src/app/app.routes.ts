import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { PokemonPage } from './pages/pokemon/pokemon.page';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'pokemon',
        component: PokemonPage
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
