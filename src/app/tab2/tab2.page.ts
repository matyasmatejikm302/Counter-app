import { Component, computed, inject } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonNote,
    IonRow,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab2Page {
  readonly counterService = inject(CounterService);

  constructor() {
    addIcons({ trashOutline });
  }

  // Výpočet minimální hodnoty
  readonly minValue = computed(() => {
    const list = this.counterService.counters();
    if (list.length === 0) {
      return null;
    }
    return Math.min(...list.map((c) => c.value));
  });

  // Výpočet maximální hodnoty
  readonly maxValue = computed(() => {
    const list = this.counterService.counters();
    if (list.length === 0) {
      return null;
    }
    return Math.max(...list.map((c) => c.value));
  });

  async removeItem(id: string): Promise<void> {
    await this.counterService.remove(id);
  }

  async clearAll(): Promise<void> {
    await this.counterService.clear();
  }
}
