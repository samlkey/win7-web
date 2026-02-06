import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowType } from './window.enum';

@Component({
  selector: 'comp-window',
  templateUrl: './window.component.html',
  styleUrl: './window.component.css',
  imports: [CommonModule]
})

export class Window {
    title = 'Window';
    @Input() titleBarText = 'My Computer';
    @Input() type: WindowType = WindowType.STANDARD;
    WindowType = WindowType;
    
    @ViewChild('windowDiv') windowDiv!: ElementRef;
    
    private isDragging = false;
    private dragOffsetX = 0;
    private dragOffsetY = 0;
    
    private static globalZIndex = 1000;
    zIndex = Window.globalZIndex;

    onTitleBarMouseDown(event: MouseEvent): void {
        this.isDragging = true;
        const windowElement = this.windowDiv.nativeElement;
        const rect = windowElement.getBoundingClientRect();
        
        // Increment global z-index and apply to this window
        Window.globalZIndex++;
        this.zIndex = Window.globalZIndex;
        windowElement.style.zIndex = this.zIndex.toString();
        
        this.dragOffsetX = event.clientX - rect.left;
        this.dragOffsetY = event.clientY - rect.top;
        
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    onMouseMove = (event: MouseEvent): void => {
        if (!this.isDragging) return;
        
        const windowElement = this.windowDiv.nativeElement;
        const rect = windowElement.getBoundingClientRect();
        
        let newX = event.clientX - this.dragOffsetX;
        let newY = event.clientY - this.dragOffsetY;
        
        // Taskbar height is 50px at the bottom
        const taskbarHeight = 50;
        const maxY = window.innerHeight - taskbarHeight - rect.height;
        
        // Constrain to screen boundaries (excluding taskbar area)
        newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
        newY = Math.max(0, Math.min(newY, maxY));
        
        windowElement.style.left = newX + 'px';
        windowElement.style.top = newY + 'px';
    };

    onMouseUp = (): void => {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    };
}