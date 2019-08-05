import 'bootstrap/dist/css/bootstrap.min.css';
import {Fetch} from './Fetch';

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

const store = {
    card: []
};

localStorage.setItem('store', JSON.stringify(store));

layout.render('app',layout.createContainer([]));
