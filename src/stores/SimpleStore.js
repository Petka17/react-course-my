import { EventEmitter } from 'events';

import DataWrapper from './DataWrapper';

export default class SimpleStore extends EventEmitter {
    constructor(initialData, stores) {
        super();

        this.bindThisToMethods();

        this.__items = {};
        this.__stores = stores;

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

    getStore(relation) {
        return this.__stores[relation];
    }

    getAll() {
        return Object.keys(this.__items).map(this.getById);
    }

    getById(id) {
        return this.__items[id];
    }

    __add(item) {
        this.__items[item.id] = new DataWrapper(item, this);
    }

    __delete(id) {
        delete this.__items[id];
    }

    bindThisToMethods() {
        this.__emitChange = this.__emitChange.bind(this);
        this.addChangeListner = this.addChangeListner.bind(this);
        this.removeChangeListner = this.removeChangeListner.bind(this);

        this.getStore = this.getStore.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);

        this.__add = this.__add.bind(this);
        this.__delete = this.__delete.bind(this);
    }
}

