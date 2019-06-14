import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Products } from '../../products';
 
@Component({
    selector: 'app-product-detail',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
    product;
    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.product = Products[+params.get('productId')];
        });
    }
}