import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiInfo } from '../../environments/api-const';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getDepartmentList() {
    let url = apiInfo.baseUrl + apiInfo.department;
    console.log("Url:", url)
    return this.http.get(url)
  }
  getDepartmentById(id) {
    let url = apiInfo.baseUrl + apiInfo.department + "/" + id;
    console.log("Url:", url)
    return this.http.get(url)
  }

  createDepartment(data) {
    let url = apiInfo.baseUrl + apiInfo.department;
    return this.http.post(url, data)
  }
}
