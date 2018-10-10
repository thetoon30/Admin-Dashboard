export class PagingManage {
    currentPage1: number = 1;
    totalPage1: number;
    max1: number = 10;
    start1: number = (this.currentPage1 * this.max1) - this.max1;
    total1: number;
}