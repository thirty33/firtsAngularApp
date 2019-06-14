export class ProductListComponent {
    products = [
        {name: 'productOne', description: 'Product description', price: 900},
        {name: 'productOne', description: 'Product description', price: 900},
        {name: 'productOne', description: 'Product description', price: 900},
        {name: 'productOne', description: 'Product description', price: 900}
    ];

    share() {
        window.alert('the product has been shared');
    }

    onNotify() {
        window.alert('Button Clicked');
    }
}