import {observable,action,decorate} from 'mobx';
import obj from './text';

let letters = obj.text.split(' ').map((letter)=> ({letter:letter , defaultColor: true}));
let title = 'Use laser to change text color'.split('').map((letter)=> ({letter:letter, defaultColor: true}));

class MainStore {
    text = letters;
    title = title;
    changeTextLetterColor = (i) => {
        this.text[i].defaultColor = false;
    };

    changeTitleLetterColor = (i) => {
        this.title[i].defaultColor = false;
    };
};

decorate(MainStore, {
    text: observable,
    title: observable,
    changeTitleLetterColor: action,
    changeTextLetterColor: action,
});

const mainStore = new MainStore();

export default mainStore;