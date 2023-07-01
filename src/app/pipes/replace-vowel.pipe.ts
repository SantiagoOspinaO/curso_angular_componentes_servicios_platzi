import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceVowel'
})
export class ReplaceVowelPipe implements PipeTransform {

    transform(value: string,): string {

        let newString = value.replace(/a/gi, '4');
        newString = newString.replace(/e/gi, '3');
        newString = newString.replace(/i/gi, '1');
        newString = newString.replace(/o/gi, '0');
        newString = newString.replace(/u/gi, 'u');
        return newString;
    }
}