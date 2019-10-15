import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  logs: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRout: ActivatedRoute
    ){ }

  ngOnInit(): void {

    const userName = this.activatedRout.snapshot.params.username;

    this.photoService
        .listFromUser(userName)
        .subscribe(logs => this.logs = logs);
  }

}
