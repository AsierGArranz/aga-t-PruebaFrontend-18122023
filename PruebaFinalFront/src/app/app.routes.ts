import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculainfoComponent } from './peliculainfo/peliculainfo.component'
import { SeriesComponent } from './series/series.component';
import { SerieinfoComponent } from './serieinfo/serieinfo.component';
import { logedGuard } from './guards/loged.guard';


export const routes: Routes = [
    {path: 'app-home',
        component: HomeComponent
        //canActivate: [logedGuard]
    },
    {path: 'app-peliculas', 
        component: PeliculasComponent
        //canActivate: [logedGuard]
    },
    {path: 'app-series', 
        component: SeriesComponent
        //canActivate: [logedGuard]
    },
    {path: 'app-peliculainfo', 
        component: PeliculainfoComponent
        //canActivate: [logedGuard]
    },
    {path: 'app-serieinfo', 
        component: SerieinfoComponent
        //canActivate: [logedGuard]
    }
];
