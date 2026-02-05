import { Component } from '@angular/core';
import { Window } from '../modules/Window/window.component';
import { Taskbar } from '../modules/Taskbar/taskbar.component';
import { CommonModule } from '@angular/common';
import "7.css/dist/7.css";

@Component({
  selector: 'app-root',
  imports: [Window, Taskbar, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'win7-web';
  menuVisible = false;
  menuX = 0;
  menuY = 0;

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.menuX = event.clientX;
    this.menuY = event.clientY;
    this.menuVisible = true;
  }

  hideMenu() {
    this.menuVisible = false;
  }
}
