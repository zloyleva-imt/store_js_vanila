export class Builder{
    createNewElement(tag, content=null, classList=null, attr=null){

        const el = document.createElement(tag);
        (content)
            ?(
                typeof content == 'object'?this.appendChildToParent(el, content):el.innerText = content
            ):'';
    
        
        el.className = classList?classList:'';
    
        if(attr && attr.length > 0){
            attr.map(at => el.setAttribute(at.name, at.value));
        }
    
        return el;
    }
    
    appendChildToParent(parent, arrayOfChildren){
        arrayOfChildren.map(child => parent.appendChild(child));
        return parent;
    }
}