import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products = [
        {name: 'productOne', description: 'Product description', price: 900},
        {name: 'productOne', description: 'Product description', price: 900},
        {name: 'productOne', description: 'Product description', price: 900},
        {name: 'productOne', description: 'Product description', price: 900}
    ];

    ngOnInit() {

    }

    share() {
        window.alert('the product has been shared');
    }

    onNotify() {
        window.alert('Button Clicked');
    }
}