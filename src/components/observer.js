
export default class Observer {
    constructor() {
        this._observers = [];
    }
    subscribe(fn) {
        this._observers.push(fn);
    }
    unsubscribe(fn) {
        this._observers = this._observers.filter((subscriber) => subscriber !== fn);
    }
    broadcast(data) {
        this.observers.forEach((subscriber) => subscriber(data));
    }
}
