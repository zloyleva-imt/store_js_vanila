import 'bootstrap/dist/css/bootstrap.min.css';
import {cardApi} from './helpers/Card'
import {Fetch} from './Fetch';
import {store} from './store'

import {BuilderProduct} from './BuilderProduct';
import {BuilderLayouts} from './BuilderLayouts';

const layout = new BuilderLayouts({});

Fetch.get('https://zloyleva-imt.github.io/store_js_vanila/src/data.json')
    .then(res => {
        const htmlArr = res.data.map(el => {
            return new BuilderProduct(el).createSingleCart()
        })
        layout.render('app',layout.createContainer(htmlArr));
      
    });

const initialStore = [];

cardApi.writeToStorage(initialStore)

layout.render('app',layout.createContainer([]));

// const prod1 = {
//     name:"Product #1",
//     amount: 120,
//     price: 54.3
// }

// const prod2 = {
//     name:"Product #2",
//     amount: 23,
//     price: 36.81
// }

// const store = new Map([
//     [cardApi.prepareProductToCard(prod1),3],
//     [cardApi.prepareProductToCard(prod2),20]
// ]);

// cardApi.writeToStorage(store)

// cardApi.setStore(store,prod1)

// const new_store = cardApi.readFormStorage()

// // console.log(store.get(cardApi.prepareProductToCard(prod1)))

// cardApi.writeToStorage(store)

// for(let item of store){
//     const [key, value] = item
//     console.log(key, value)
// }

// function Observeble(){
//     let observers = [];

//     this.sendMsg = (msg) => {
//         observers.map(el => {
//             el.notify(msg)
//         })
//     }

//     this.addObserver = (observer) =>observers.push(observer);
// }

// function Observer(behavior){
//     this.notify = (msg) => {
//         behavior(msg)
//     }
// }

// const observer1 = new Observer(msg => {
//     console.log("1: " + msg)
// })

// const observer2 = new Observer(msg => {
//     const str = "2: " + msg;
//     console.log(str);
// })

// const observeble = new Observeble()

// observeble.addObserver(observer1);
// observeble.addObserver(observer2)

// observeble.sendMsg("MSG")

const someEvent = new Event('someEvent')

document.addEventListener('someEvent', () => {
    console.log('someEvent')
})

document.dispatchEvent(someEvent)