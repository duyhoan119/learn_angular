import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://localhost:3000/products"

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getproducts(){
    return this.http.get(apiUrl)
  }

  getproduct(id : number|undefined){
    return this.http.get(`${apiUrl}/${id}`)
  }

  deleteproduct(id : number){
    return this.http.delete(`${apiUrl}/${id}`)
  }
  createproduct(obj: any){
    return this.http.post(apiUrl,obj)
  }
  updateproduct(id: number, obj: any){
    return this.http.put(`${apiUrl}/${id}`, obj)
  }

}
