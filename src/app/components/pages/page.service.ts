import { IResto } from './../../../models/resto';
import { IPage } from './../../../models/pages';
import { DatabaseService } from './../../../services/database.service';
import { Injectable } from '@angular/core';

const TYPES = {
    PAGES: 'pages',
    RESTOS: 'restos'
};

@Injectable()
export class PageService {
    constructor(private dbService: DatabaseService) {
    }

    public getPages(): any {
        return this.dbService.publicList(TYPES.PAGES);
    }

    public getRestos(): any {
        return this.dbService.publicList(TYPES.RESTOS);
    }

    public update(type: string, key: string, page: IPage): void {
        this.dbService.updateObject(type, key, page);
    }

    public getTypes() {
        return TYPES;
    }
}
