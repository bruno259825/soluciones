import { Component } from '@angular/core';
import { LoaderComponent } from '../components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, LoaderComponent]
})
export class HomePage {

  loading = false;

  constructor() { }

  showLoader() {
    this.loading = true;
  }
}
