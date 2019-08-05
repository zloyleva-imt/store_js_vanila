import {Builder} from './Builder';

export class BuilderLayouts extends Builder{

    constructor({row,container}){
        super();
        this.row = row || 'row';
        this.container = container || 'container';
    }

    createContainer(col=''){
        // const col = this.createNewElement('div',colContent,this.col);
        const row = this.createNewElement('div',col,this.row);
        return this.createNewElement('div',[row], this.container);
    }

    render(idHtml, html){
        this.appendChildToParent(document.getElementById(idHtml),[html])
    }
}