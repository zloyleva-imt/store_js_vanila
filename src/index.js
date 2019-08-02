import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function createNewElement(tag, content=null, classList=null, attr=null){

    const el = document.createElement(tag);
    (content)
        ?(
            typeof content == 'object'?appendChildToParent(el, content):el.innerText = content
        ):'';

    
    el.className = classList?classList:'';

    if(attr && attr.length > 0){
        attr.map(at => el.setAttribute(at.name, at.value));
    }

    return el;
}

function appendChildToParent(parent, arrayOfChildren){
    arrayOfChildren.map(child => parent.appendChild(child));
    return parent;
}

axios.get('https://zloyleva-imt.github.io/store_js_vanila/src/data.json')
    .then(res => {
        console.log(res.data)
        //render(res);
    })

//render([]);
const h5 = createNewElement('h5','Card title','card-title');
const p = createNewElement('p','text','card-text');
const price = createNewElement('p','$100.36','card-text');
const a = createNewElement('a','Buy','btn btn-primary',[{name:'href',value:'#'}]);

const cardBody = createNewElement('div',[h5,p,price,a],'card-body');

const img = createNewElement('img',null,'card-img-top',[{name:'src',value:'http://lorempixel.com/640/480/'}]);

const card = createNewElement('div',[img,cardBody],'card');

const col = createNewElement('div',[card],'col-12 col-sm-6 col-md-4 col-lg-3');
const row = createNewElement('div',[col],'row');
const container = createNewElement('div',[row], 'container');

console.log(container)

appendChildToParent(document.getElementById('app'),[container])