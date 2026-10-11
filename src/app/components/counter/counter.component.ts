import { Component, OnInit, input, output } from '@angular/core'; // 1. přidán OnInit
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
} from '@ionic/angular';
import { SavedCounter } from '../../models/saved-counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [FormsModule, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput],
})
export class CounterComponent implements OnInit {
  // 2. implements OnInit
  readonly heading = input('Nové počítadlo');
  readonly initialValue = input(0);

  readonly saved = output<SavedCounter>();

  counterName = '';
  count = 0;

  ngOnInit(): void {
    // Inicializace výchozí hodnotou
    this.count = Number(this.initialValue()) || 0;
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset(): void {
    // Reset na výchozí hodnotu
    this.count = Number(this.initialValue()) || 0;
  }

  save(): void {
    const name = this.counterName.trim();

    if (!name) {
      return;
    }

    this.saved.emit({
      id: crypto.randomUUID(),
      name,
      value: this.count,
    });

    this.counterName = '';
    this.count = Number(this.initialValue()) || 0;
  }
}
