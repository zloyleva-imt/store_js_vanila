import 'bootstrap/dist/css/bootstrap.min.css';
import {cardApi} from './helpers/Card'
import {Fetch} from './Fetch';
import {nav} from './NavBar'

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

layout.render('app',nav);



const someEvent = new Event('someEvent')

document.addEventListener('someEvent', () => {
    console.log('someEvent')
})

document.dispatchEvent(someEvent)