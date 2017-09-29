import { IResto } from './../../../models/resto';
import { PageService } from './page.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { IPage } from './../../../models/pages';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css']
})
export class PagesComponent {
    pages: FirebaseListObservable<IPage[]>;
    restos: FirebaseListObservable<IResto[]>;
    newList: string;
    restoVal: string;

    private types = this.pageService.getTypes();

    constructor(private pageService: PageService) {
        this.pages = this.pageService.getPages();
        this.restos = this.pageService.getRestos();

        this.pages.subscribe(x => console.log(x));
        this.restos.subscribe(x => console.log(x));
    }

    deletePage($key: string) {
        this.pages.remove($key);
    }

    addPage(name: string) {
        const page: IPage = {
            name: name
        };
        this.pages.push(page);
        this.newList = '';
        setTimeout(() => {
            this.toggleMenu();
        }, 500);
    }

    editPage(page: IPage) {
        this.pageService.update(this.types.PAGES, page.$key, page);
    }

    addResto(name: string) {
        const resto: IResto = {
            name: name,
            visited: false,
            created: new Date()
        };
        this.restos.push(resto);
    }

    addRestoToList(resto: IResto, page: IPage) {
        if (!page.hasOwnProperty('restos')) {
            page.restos = [];
        }
        page.restos.push(resto.$key);
        this.editPage(page);
    }

    isSearchTerm(name: string) {
        return this.restoVal === undefined || this.restoVal === '' ? true : name.toLowerCase().indexOf(this.restoVal) < 0;
    }

    getSectionClass(i) {
        switch (i) {
            case 0:
                return 'one';
            case 1:
                return 'two';
            case 2:
                return 'three';
            case 3:
                return 'four';
        }
    }

    toggleMenu() {
        document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
    }

    goToPage(page) {
        page += 1;
        const wrapper = document.getElementsByClassName('wrapper')[0];
        const sections = document.getElementsByTagName('section');
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove('before', 'after');
            if (i > page) {
                sections[i].classList.add('after');
            }
        }
        wrapper.classList.remove('menu-open', 'page-one', 'page-two');
        wrapper.classList.add('page-' + this.pages[page]);
    }
}
