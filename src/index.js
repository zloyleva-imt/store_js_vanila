import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import {BuilderProduct} from './BuilderProduct';
import {BuilderLayouts} from './BuilderLayouts';

const layout = new BuilderLayouts({});

axios.get('https://zloyleva-imt.github.io/store_js_vanila/src/data.json')
    .then(res => {
        const htmlArr = res.data.map(el => {
            return new BuilderProduct(el).createSingleCart()
        })
        layout.render('app',layout.createContainer(htmlArr))
    })

layout.render('app',layout.createContainer([]))