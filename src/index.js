import 'bootstrap/dist/css/bootstrap.min.css';

function createNewElement(tag, content=null, classList=null, attr=null){

    const el = document.createElement(tag);
    (content)
        ?(
            typeof col == 'object'?appendChildToParent(el, [content]):el.innerText = content
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


const col = createNewElement('div',null,'col-12');
const row = createNewElement('div',col,'row');
const container = createNewElement('div',row, 'container');

console.log(container)

appendChildToParent(document.getElementById('app'),[container])