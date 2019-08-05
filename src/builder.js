
export function createNewElement(tag, content=null, classList=null, attr=null){

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

export function appendChildToParent(parent, arrayOfChildren){
    arrayOfChildren.map(child => parent.appendChild(child));
    return parent;
}

export const createSingleCart = () => {
    const h5 = createNewElement('h5','Card title','card-title');
    const p = createNewElement('p','text','card-text');
    const price = createNewElement('p','$100.36','card-text');
    const a = createNewElement('a','Buy','btn btn-primary',[{name:'href',value:'#'}]);
    
    const cardBody = createNewElement('div',[h5,p,price,a],'card-body');
    
    const img = createNewElement('img',null,'card-img-top',[{name:'src',value:'http://lorempixel.com/640/480/'}]);
    
    return createNewElement('div',[img,cardBody],'card');
}