import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardContent, IonCard, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption, IonLabel, IonRange, IonIcon, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCardContent, IonCard, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption, IonLabel, IonRange, IonIcon, IonButtons]
})
export class ProductosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
