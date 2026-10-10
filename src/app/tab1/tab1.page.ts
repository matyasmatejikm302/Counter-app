import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class Tab1Page {
  counterName: string = 'Moje počítadlo';
  count: number = 0;
  step: number = 1;

  increment(amount: number = 1): void {
    const safeAmount = Math.max(1, Number(amount) || 1);
    this.count += safeAmount;
  }

  decrement(amount: number = 1): void {
    const safeAmount = Math.max(1, Number(amount) || 1);
    this.count = Math.max(0, this.count - safeAmount);
  }

  reset(): void {
    this.count = 0;
  }

  resetAll(): void {
    this.count = 0;
    this.counterName = '';
    this.step = 1;
  }
}
