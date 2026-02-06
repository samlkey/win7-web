import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'comp-taskbar',
    templateUrl: './taskbar.component.html',
    styleUrl: './taskbar.component.css',
    imports: [CommonModule]
})

export class Taskbar {
    currentTime: string = '';
    
    constructor() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const now = new Date();
        this.currentTime = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
}