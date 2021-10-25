import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private documentsUrl = "http://localhost:8080/DocumentApi";


  constructor(private http :HttpClient) {
   
   }
   public getDocumentList () : Observable<Document[]> {

    return this.http.get<Document[]>(this.documentsUrl);
   }

   public getDocument (id : Number) : Observable<Document>  {

    return this.http.get<Document>(this.documentsUrl+'/documents/document/${id}').pipe(
      catchError(() => throwError('Document not found'))
    );
   }
}
