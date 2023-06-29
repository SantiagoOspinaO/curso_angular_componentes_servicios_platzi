import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

    @Input() img: string = ''
    @Output() loaded = new EventEmitter<string>()
    imgDefault = '../../../assets/images/default.png'

    constructor() { 
        // Before render
        // No poner cosas asyncronas
        console.log('constructor', 'imgValue =>', this.img)
    }

    ngOnChanges(): void {
        // Before render
        // Changes inputs
        console.log('ngOnChanges', 'imgValue =>', this.img)
    }

    ngOnInit(): void {
        // Before render
        // Acá si podemos correr cosas asyncronas async - fetch
        // Solo se corre una vez
        console.log('ngOnInit', 'imgValue =>', this.img)
    }

    ngAfterViewInit(): void {
        // Corre despues de que todo se este renderizando
        console.log('ngAfterViewInit')
    }

    ngOnDestroy(): void {
        // Cuando se elimina este componente
        console.log('ngOnDestroy')
    }

    imgError() {
        this.img = this.imgDefault
    }

    imgLoaded() {
        console.log('log hijo')
        this.loaded.emit(this.img);
    }
}
