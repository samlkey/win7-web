import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import "7.css/dist/7.css";

import { Window } from '../modules/Window/window.component';
import { Taskbar } from '../modules/Taskbar/taskbar.component';
import { ContextMenu } from '../modules/ContextMenu/contextmenu.component';
import { WindowType } from '../modules/Window/window.enum';

@Component({
  selector: 'app-root',
  imports: [Window, Taskbar, ContextMenu, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'win7-web';
  WindowType = WindowType;
}
