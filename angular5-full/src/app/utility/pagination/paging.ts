export class Paging {
    lowerPage(total, currentPage, max): number {
        return total > 0 ? (currentPage - 1) * max + 1 : 0;
    }

    makePaging(pagings, totalPage): void {
        pagings = [];
        for (var i = 1; i <= totalPage; i++) {
            pagings.push(i);
        }
    }

    statPage(currentPage, max): number {
        return (currentPage * max) - max;
    }

    totalPage(total, max): number {
        return Math.ceil(total / max);
    }

    upperPage(total, currentPage, max): number {
        return Math.min(total, (currentPage * max));
    }
}