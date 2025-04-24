import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-menu',
  imports:[MatToolbarModule,MatButtonModule,MatIconModule,RouterLink,CommonModule,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  clearLocalStorage() {
    localStorage.clear();
    
    // Opcionalmente podrías usar un servicio de notificación en lugar de alert
  }

}
