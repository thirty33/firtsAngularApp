import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Products } from '../../products';
import { CartService } from '../../services/cart/cart.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
    product;
    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.product = Products[+params.get('productId')];
        });
    }

    addToCart(product) {
        this.cartService.addToCart(product);
        window.alert('your product has been added to the cart');
    }

}