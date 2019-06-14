import { Component, OnInit } from '@angular/core';
import { Products } from '../../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products = Products;

    ngOnInit() {

    }

    share() {
        window.alert('the product has been shared');
    }

    onNotify() {
        window.alert('Button Clicked');
    }
}