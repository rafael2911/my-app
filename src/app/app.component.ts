import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Agendamentos';

  photos = [
    /* {
      url: 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg',
      description: 'Dory'
    },
    {
      url:'https://1.bp.blogspot.com/-xZzaQxjUB5o/TfvlTB97yEI/AAAAAAAAAJA/IUPq7iUQW9Q/s1600/nemo.jpg',
      description:'Nemo'
    },
    {
      url:'https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2017/07/Marlon.jpg',
      description:'marllin'
    } */
  ];

  logs: Photo[] = [];

  constructor(private photoService: PhotoService){ }

  ngOnInit(): void {
    this.photoService
        .listFromUser('teste')
        .subscribe(logs => this.logs = logs);
  }
}
