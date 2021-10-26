import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private documentsUrl = "http://localhost:8080/DocumentApi";


  constructor(private http :HttpClient) {
   
   }
   public getDocumentList() : Observable<any>   {
   

    return this.http.get<any>(this.documentsUrl+'/documents');
   }

}
