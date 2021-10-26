import { Component, OnInit } from '@angular/core';
import { Document } from '../models/model';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

   public documents : Document[] ;

  constructor(private documentService : DocumentService ) { }

  ngOnInit(): void {
    this.fg()
  }
  
  fg(){
    this.documentService.getDocumentList().subscribe((data)=>{
      this.documents=data
    console.log(data)})
  }
}
