


export class User {
    id: String ;
	genre: String ;
	nom : String ;
	prenom : String ;
	email : String ;
	dateNaissance : Date ;
	age : Number ;
    statut : String ;
    role :  String ;
	documents : Document[] ;

}

export class Document {

	id: String ;
   titre: String  ;
	 ref: String   ;
	 image: Image   ;
	 User : User   ;
}
export class Image {
    id : Number ;
    type_Image : String ; 
}



