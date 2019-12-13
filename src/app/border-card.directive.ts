import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[pkmnBorderCard]'
})

export class BorderCardDirective {
    constructor(private el: ElementRef) {
        this.setBorder('#f5f5f5');
        this.setBackground('#ffffff');
        this.setHeight(180);
        this.setCursor("pointer");
    }

    @Input('pkmnBorderCard') borderColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || '#003090');
        this.setBackground('#dff9fc');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5');
        this.setBackground('#ffffff');
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setBackground(color: string) {
        let background = color;
        this.el.nativeElement.style.background = background;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }

    private setCursor(cursor: string) {
        this.el.nativeElement.style.cursor = 'pointer';
    }

}