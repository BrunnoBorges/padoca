import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsDetails: any;

  constructor() { 
    this.productsDetails = [
      {
        product: 'Ovos', 
        qtd: 12, 
        type: 'Duzia', 
        weight:'1', 
        image: '../../../assets/img/one.jpg', 
        description: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun'
      },
      {
        product: 'Farinha', 
        qtd: 30, 
        type: 'Kg', 
        weight:'10', 
        image: '../../../assets/img/padocaTree.jpg', 
        description: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun'
      },
      {
        product: 'Paes', 
        qtd: 40, 
        type: 'Unidade', 
        weight:'1', 
        image: '../../../assets/img/tree.jpg', 
        description: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun'
      },
      {
        product: 'Ovos', 
        qtd: 12, 
        type: 'Duzia', 
        weight:'1', 
        image: '../../../assets/img/one.jpg', 
        description: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun'
      },
      {
        product: 'Farinha', 
        qtd: 30, 
        type: 'Kg', 
        weight:'10', 
        image: '../../../assets/img/padocaTree.jpg', 
        description: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun'
      },
      {
        product: 'Paes', 
        qtd: 40, 
        type: 'Unidade', 
        weight:'1', 
        image: '../../../assets/img/tree.jpg', 
        description: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun lorem ipsun'
      },
    ]
  }

  ngOnInit(): void {
  }

}
