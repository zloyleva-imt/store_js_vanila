import 'bootstrap/dist/css/bootstrap.min.css';
import {cardApi} from './helpers/Card'
// import {Fetch} from './Fetch';

// import {BuilderProduct} from './BuilderProduct';
// import {BuilderLayouts} from './BuilderLayouts';

// const layout = new BuilderLayouts({});

// Fetch.get('https://zloyleva-imt.github.io/store_js_vanila/src/data.json')
//     .then(res => {
//         const htmlArr = res.data.map(el => {
//             return new BuilderProduct(el).createSingleCart()
//         })
//         layout.render('app',layout.createContainer(htmlArr));
      
//     });

// const store = {
//     card: []
// };

// localStorage.setItem('store', JSON.stringify(store));

// layout.render('app',layout.createContainer([]));

const prod1 = {
    name:"Product #1",
    amount: 120,
    price: 54.3
}

const prod2 = {
    name:"Product #2",
    amount: 23,
    price: 36.81
}


// const prepareProductToCard = (product) => {
//     const {amount, ...prod} = product;
//     return prod;
// }

const store = new Map([
    [cardApi.prepareProductToCard(prod1),3],
    [cardApi.prepareProductToCard(prod2),20]
]);

// store.set(prod1, 1);
// store.set(prod2, 10);

cardApi.writeToStorage(store)

cardApi.setStore(store,prod1)

const new_store = cardApi.readFormStorage()

// console.log(store.get(cardApi.prepareProductToCard(prod1)))

cardApi.writeToStorage(store)

for(let item of store){
    const [key, value] = item
    console.log(key, value)
}