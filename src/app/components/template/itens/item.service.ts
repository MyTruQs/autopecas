import { Injectable } from '@angular/core';
import { Item } from './Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itens : Item[]


  constructor() { 
    this.itens = [
      new Item(1,"1",22,40,40),
      new Item(2,"2",30,40,10),
      new Item(3,"3",200,420,20),
      new Item(4,"4",222,140,30),
      new Item(5,"5",222,140,44),
      new Item(6,"6",222,140,2)
    ]
  }


  getItens(){
    return this.itens;
  }





  getItem(i:number){
    return this.itens[i]
  }

  addItem(codigo:number, peca:string, estoque:number, maxEstoque:number,minEstoque:number){
    this.itens.push(new Item(codigo,peca,estoque,maxEstoque,minEstoque))
  }

  editItem(i:number, estoque: number, add: number){
    this.itens[i].estoque = estoque + add
  }
  subItem(i:number, estoque: number, sub: number){
    this.itens[i].estoque = estoque - sub
  }


}
