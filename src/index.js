import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import {createNewElement, appendChildToParent, createSingleCart} from './builder';

axios.get('https://zloyleva-imt.github.io/store_js_vanila/src/data.json')
    .then(res => {
        console.log(res.data)
        //render(res);
    })

//render([]);

const col = createNewElement('div',[createSingleCart()],'col-12 col-sm-6 col-md-4 col-lg-3');
const row = createNewElement('div',[col],'row');
const container = createNewElement('div',[row], 'container');

console.log(container)

appendChildToParent(document.getElementById('app'),[container])