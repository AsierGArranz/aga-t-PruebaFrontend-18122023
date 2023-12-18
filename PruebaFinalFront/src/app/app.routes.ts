import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculainfoComponent } from './peliculainfo/peliculainfo.component'
import { SeriesComponent } from './series/series.component';
import { SerieinfoComponent } from './serieinfo/serieinfo.component';


export const routes: Routes = [
    {path: 'app-home', component: HomeComponent},
    {path: 'app-peliculas', component: PeliculasComponent},
    {path: 'app-series', component: SeriesComponent},
    {path: 'app-peliculainfo', component: PeliculainfoComponent},
    {path: 'app-serieinfo', component: SerieinfoComponent}
];
