import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface JuegoData {  // Crea la interfaz
  texto: string;
  texto2: string;
}

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {
  imageUrl: string;  // linea para la imagen
  texto: string;    //linea para el texto
  texto2: string;

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.getImageUrl();
    this.getTexto();
  }
  
  getImageUrl() {
    let filePath = 'gs://product-admin-app-35331.appspot.com/juego/juego.jpg';
    let ref = this.storage.refFromURL(filePath);
    ref.getDownloadURL().subscribe((url) => {
      this.imageUrl = url;
    });
  }

  getTexto() {
    this.firestore.collection('juego').doc<JuegoData>('F5Q7CfvzUYgXaIyFyUsZ').valueChanges().subscribe(data => {  
      this.texto = data.texto;
      this.texto2 = data.texto2;
    });
    
  }
}
