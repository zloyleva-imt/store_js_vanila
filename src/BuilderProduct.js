import {Builder} from './Builder'
export class BuilderProduct extends Builder{

    constructor(product){
        super();
        this.product = product

        this.col = 'col-12 col-sm-6 col-md-4 col-lg-3 my-2';
    }

    createSingleCart(){
        const h5 = this.createNewElement('h5',this.product.name,'card-title');
        const p = this.createNewElement('p',this.product.description,'card-text');
        const pAmount = this.createNewElement('p',`Amount: ${this.product.amount}`,'card-text');
        const priceHtml = this.createNewElement('p',`$${this.product.price}`,'card-text');
        const a = this.createNewElement('a','Buy','btn btn-primary',[{name:'href',value:'#'}]);
        
        a.addEventListener('click', e => {
            e.preventDefault();
            console.log(this.product);
        })

        const cardBody = this.createNewElement('div',[h5,p,pAmount,priceHtml,a],'card-body');
        
        const img = this.createNewElement('img',null,'card-img-top',[{name:'src',value:`http://lorempixel.com/640/480/food/${this.product.id}`}]);
        
        const card = this.createNewElement('div',[img,cardBody],'card')
        return this.createNewElement('div',[card],this.col);
    }
}
