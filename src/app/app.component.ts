import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
    showImg = true;
    title: any;

    onLoaded(img: string) {
        // console.log('log padre', img)
    }

    toggleImg() {
        this.showImg = !this.showImg;
    }
}
