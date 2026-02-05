import { Component } from "@angular/core";

@Component({
    selector: 'comp-taskbar',
    templateUrl: './taskbar.component.html',
    styleUrl: './taskbar.component.css'
})

export class Taskbar {
    currentTime: string = '';
    openWindows = [
        { id: 1, title: 'My Computer', icon: '🗁' },
        { id: 2, title: 'Recycle Bin', icon: '🗑' },
    ];

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