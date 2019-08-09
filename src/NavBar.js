import {Builder} from './Builder'

const builder = new Builder();

const text1 = builder.createNewElement('span','Card Amount');
const text2 = builder.createNewElement('span',' Total');
const badgeAmount = builder.createNewElement('span','10','badge badge-primary');
const badgeTotal = builder.createNewElement('span','250.36','badge badge-primary');

const homeLink = builder.createNewElement('a','Home','nav-link',[{name:'href',value:'#'}]);
const cardLink = builder.createNewElement('a',[text1,badgeAmount,text2,badgeTotal],'nav-link',[{name:'href',value:'#'}]);

const liItem1 = builder.createNewElement('li',[homeLink],'nav-item');
const liItem2 = builder.createNewElement('li',[cardLink],'nav-item');

const ul = builder.createNewElement('ul',[liItem1,liItem2],'navbar-nav');

const collapse = builder.createNewElement('div',[ul],'collapse navbar-collapse',[{name:'id',value:'navbarSupportedContent'}]);

const navbarTogglerIcon = builder.createNewElement('span',null,'navbar-toggler-icon');
const button = builder.createNewElement('button',[navbarTogglerIcon],'navbar-toggler',[
    {name:'data-toggle',value:'collapse'},
    {name:'data-target',value:'#navbarSupportedContent'},
    {name:'aria-controls',value:'navbarSupportedContent'},
    {name:'aria-expanded',value:'false'},
    {name:'aria-label',value:'Toggle navigation'},
]);

const brandLink = builder.createNewElement('a','Logo','navbar-brand',[{name:'href',value:'#'}]);

export const nav = builder.createNewElement('nav',[brandLink, button, collapse],'navbar navbar-expand-lg navbar-light bg-light');
