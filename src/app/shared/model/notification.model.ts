export class Notification {
    
    constructor(
        public id: number,
        public type: string,
        public title: string,
        public message: string,
        public closable = false,
        public autoCloseTime = 0
    ) {}
}