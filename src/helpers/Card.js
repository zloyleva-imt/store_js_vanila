import {STORE} from '../config';

export const cardApi = {

    prepareProductToCard(product){
        const {amount, ...prod} = product;
        return JSON.stringify(prod);
    },

    writeToStorage(store){
        localStorage.setItem(STORE, JSON.stringify([...store]))
    },

    readFormStorage(){
        return new Map(JSON.parse(localStorage.getItem(STORE)))
    },

    setStore(store, product){
        const key = this.prepareProductToCard(product);
        
        if( store.has(key) ){
            console.log(key);
            store.set(key, store.get(key) + 1);
        }
    }
}