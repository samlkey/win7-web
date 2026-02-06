import { Component, HostListener } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'comp-contextmenu',
    templateUrl: './contextmenu.component.html',
    styleUrl: './contextmenu.component.css',
    imports: [CommonModule]
})

export class ContextMenu {
    title = 'Context Menu';
    menuVisible = false;
    menuX = 0;
    menuY = 0;

    @HostListener('document:contextmenu', ['$event'])
    onContextMenu(event: MouseEvent) {
        event.preventDefault();
        this.menuX = event.clientX;
        this.menuY = event.clientY;
        this.menuVisible = true;
    }

    @HostListener('document:click')
    hideMenu() {
        this.menuVisible = false;
    }
}