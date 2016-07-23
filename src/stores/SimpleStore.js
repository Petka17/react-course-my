import { EventEmitter } from 'events';

export default class SimpleStore extends EventEmitter {
    constructor(initialData) {
        super();

        this.bindThisToMethods();

        this.__items = {};

        if (initialData) initialData.forEach(this.__add);
    }

    __emitChange() {
        this.emit('CHANGE');
    }

    addChangeListner(callback) {
        this.on('CHANGE', callback);
    }

    removeChangeListner(callback) {
        this.removeListner('CHANGE', callback);
    }

    getAll() {
        return Object.keys(this.__items).map(this.getById);
    }

    getById(id) {
        return this.__items[id];
    }

    __add(item) {
        this.__items[item.id] = item;
    }

    __delete(id) {
        delete this.__items[id];
    }

    bindThisToMethods() {
        this.__emitChange = this.__emitChange.bind(this);
        this.addChangeListner = this.addChangeListner.bind(this);
        this.removeChangeListner = this.removeChangeListner.bind(this);

        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);

        this.__add = this.__add.bind(this);
        this.__delete = this.__delete.bind(this);
    }
}

