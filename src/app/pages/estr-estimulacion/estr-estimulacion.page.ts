import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface EstData {  // Crea la interfaz
  escuchar1: string;
  esperar1: string;
  iniciativa: string;
  mirelo_a_la_cara1: string;
  mirelo_a_la_cara2: string;
  mirelo_a_la_cara3: string;
  mirelo_a_la_cara4: string;
  mirelo_a_la_cara5: string;
  mirelo_a_la_cara6: string;
  mirelo_a_la_cara7: string;
  observar1: string;
}


@Component({
  selector: 'app-estr-estimulacion',
  templateUrl: './estr-estimulacion.page.html',
  styleUrls: ['./estr-estimulacion.page.scss'],
})
export class EstrEstimulacionPage implements OnInit {
  Imagen1: string;  // linea para la imagen
  Imagen2: string;
  Imagen3: string;
  Imagen4: string;
  escuchar1: string;
  esperar1: string;
  iniciativa: string;
  mirelo_a_la_cara1: string;
  mirelo_a_la_cara2: string;
  mirelo_a_la_cara3: string;
  mirelo_a_la_cara4: string;
  mirelo_a_la_cara5: string;
  mirelo_a_la_cara6: string;
  mirelo_a_la_cara7: string;
  observar1: string;

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.getImageUrl();
    this.getTexto();
  }
  
  getImageUrl() {
    let filePath = 'gs://product-admin-app-35331.appspot.com/estrategias_estimulacion/Imagen1.png';
    let filePath2 = 'gs://product-admin-app-35331.appspot.com/estrategias_estimulacion/Imagen2.png';
    let filePath3 = 'gs://product-admin-app-35331.appspot.com/estrategias_estimulacion/Imagen3.png';
    let filePath4 = 'gs://product-admin-app-35331.appspot.com/estrategias_estimulacion/Imagen4.png';
    let ref = this.storage.refFromURL(filePath);
    let ref2 = this.storage.refFromURL(filePath2);
    let ref3 = this.storage.refFromURL(filePath3);
    let ref4 = this.storage.refFromURL(filePath4);
    ref.getDownloadURL().subscribe((url) => {
      this.Imagen1 = url;
    });
    ref2.getDownloadURL().subscribe((url2) => {
      this.Imagen2 = url2;
    });
    ref3.getDownloadURL().subscribe((url3) => {
      this.Imagen3 = url3;
    });
    ref4.getDownloadURL().subscribe((url4) => {
      this.Imagen4 = url4;
    });
  }

  getTexto() {
    this.firestore.collection('estrategias_estimulacion').doc<EstData>('th9lkYtGY3oEuPkQVNZi').valueChanges().subscribe(data => {  
      this.escuchar1 = data.escuchar1;
      this.esperar1 = data.esperar1;
      this.iniciativa = data.iniciativa;
      this.mirelo_a_la_cara1 = data.mirelo_a_la_cara1;
      this.mirelo_a_la_cara2 = data.mirelo_a_la_cara2;
      this.mirelo_a_la_cara3 = data.mirelo_a_la_cara3;
      this.mirelo_a_la_cara4 = data.mirelo_a_la_cara4;
      this.mirelo_a_la_cara5 = data.mirelo_a_la_cara5;
      this.mirelo_a_la_cara6 = data.mirelo_a_la_cara6;
      this.mirelo_a_la_cara7 = data.mirelo_a_la_cara7;
      this.observar1 = data.observar1;
    });
    
  }

}
