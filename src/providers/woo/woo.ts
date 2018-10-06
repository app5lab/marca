import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

/*
  Generated class for the WooProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WooProvider {
woo:any
  constructor(public http: HttpClient) {
    console.log('Hello WooProvider Provider');
    this.woo = new WC({
      url: 'https://marca.pk', // Your store URL
      consumerKey: 'ck_e41dcfd99951a5e2f1fe956b4168073b02831647', // Your consumer key
      consumerSecret: 'cs_d033e01fb06fdecad6658ac4952d25cb38057a4c', // Your consumer secret
      wpAPI: true, // Enable the WP REST API integration
      version: 'wc/v2' // WooCommerce WP REST API version
    });


  }

  public wooApi(){
    return this.woo
  }
  
  // ck_e41dcfd99951a5e2f1fe956b4168073b02831647

  // cs_d033e01fb06fdecad6658ac4952d25cb38057a4c
  
}
