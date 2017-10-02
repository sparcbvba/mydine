import { ILinkedResto } from './linkedResto';
import { IResto } from './resto';

export interface IPage {
    name: string;
    restos: ILinkedResto[];
    $key?: string;
}
