import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-material-descargable',
  templateUrl: './material-descargable.page.html',
  styleUrls: ['./material-descargable.page.scss'],
})
export class MaterialDescargablePage implements OnInit {
  gallina: string = 'assets/images/gallina.jpg';
  leon: string = 'assets/images/leon.jpg';
  tortuga: string = 'assets/images/tortuga.jpg';

  constructor(private storage: AngularFireStorage, private http: HttpClient) {}

  ngOnInit() {
    this.getImageUrl();
  }

  getImageUrl() {
    this.getImageUrlFromFirebase('material_descargable/gallina.jpg').subscribe((url) => {
      this.gallina = url;
    });

    this.getImageUrlFromFirebase('material_descargable/leon.jpg').subscribe((url) => {
      this.leon = url;
    });

    this.getImageUrlFromFirebase('material_descargable/tortuga.jpg').subscribe((url) => {
      this.tortuga = url;
    });
  }

  getImageUrlFromFirebase(filePath: string) {
    return this.storage.ref(filePath).getDownloadURL();
  }

  downloadImage(url: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'imagen_descargada.jpg';
    document.body.appendChild(link); // Agregar el enlace al DOM para que funcione en algunos navegadores
    link.click();
    document.body.removeChild(link); // Eliminar el enlace del DOM después de hacer clic
  }
  
}
