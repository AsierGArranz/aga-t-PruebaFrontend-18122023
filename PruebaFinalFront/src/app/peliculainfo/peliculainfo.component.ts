import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-peliculainfo',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './peliculainfo.component.html',
  styleUrl: './peliculainfo.component.css'
})
export class PeliculainfoComponent {

  constructor(private route: ActivatedRoute, private http: HttpClient){}
  protected pelicula_id: any;
  protected pelicula: any;
  protected loaded:boolean = false;
  valor: number = 0;

  
  
  randomNum(){
    this.valor = Math.trunc(Math.random()*826)+1;
  }


  ngOnInit():void{
    this.randomNum();
    this.route.paramMap.subscribe(params => {
      this.pelicula_id = params.get('id');
      let url : string = "https://api.themoviedb.org/3/movie/"+this.valor+"?api_key=04ecf8b1f956242de7d8e38ef702586e"
      this.http.get(url).subscribe(result =>{
        this.pelicula=result;
        console.log(result)
        this.loaded=true
      })
    })
  }
  
  
}
