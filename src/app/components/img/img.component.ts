import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

    img: string = '';

    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('img')
    set changeImg(newImg: string) {
        this.img = newImg;
        // console.log('change just img =>',  this.img);
    }
    @Input() alt: string = '';
    @Output() loaded = new EventEmitter<string>()
    imgDefault = '../../../assets/images/default.png';
    // counter = 0;
    // counterFn: number | undefined;

    constructor() { 
        // Before render
        // No poner cosas asyncronas
        // console.log('constructor', 'imgValue =>', this.img)
    }

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnChanges(changes: SimpleChanges): void {
        // Before render
        // Changes inputs
        // console.log('ngOnChanges', 'imgValue =>', this.img)
        // console.log('changes', changes)
    }

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {
        // Before render
        // Acá si podemos correr cosas asyncronas async - fetch
        // Solo se corre una vez
        // console.log('ngOnInit', 'imgValue =>', this.img)
        // this.counterFn = window.setInterval(() => {
        //     this.counter += 1
        //     console.log('run counter')
        // }, 1000); 
    }

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngAfterViewInit(): void {
        // Corre despues de que todo se este renderizando
        // console.log('ngAfterViewInit')
    }

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnDestroy(): void {
        // Cuando se elimina este componente
        // console.log('ngOnDestroy')
        // window.clearInterval(this.counterFn);
    }

    imgError() {
        this.img = this.imgDefault
    }

    imgLoaded() {
        // console.log('log hijo')
        this.loaded.emit(this.img);
    }
}
