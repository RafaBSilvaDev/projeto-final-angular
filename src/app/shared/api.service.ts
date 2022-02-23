import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  postJogo(data : any)
  {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res=>{
      return res;
    })))
  }
  getJogo(data : any) {
    return this._http.get<any>("http://localhost:3000/posts", data)
    .pipe(map((res=>{
      return res;
    })))
  }
  putJogo(data : any,id:number) {
    return this._http.put<any>("http://localhost:3000/posts/" + id, data)
    .pipe(map((res=>{
      return res;
    })))
  }
  deletarJogo(id:number)
  {
    return this._http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res:any)=> {
      return res
    }))
  }
}
