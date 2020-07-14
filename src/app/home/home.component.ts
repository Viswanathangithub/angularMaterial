import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  algorithm : string;
  data: string;
  publicExp: string;
  publicKey: string;
  base64Encode: string;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : '*',
    'Access-Control-Allow-Headers' : '*'});
    let options = { headers: headers };
  
    console.log("Data "+this.algorithm + this.data + this.publicExp + this.publicKey + this.base64Encode);

    let signInfo = { algorithm : this.algorithm, data: this.data, publicExp : this.publicExp, 
      publicKey: this.publicKey, base64Encode : this.base64Encode };

    return this.http.post("http://192.168.0.18:8080/validate", signInfo, options).subscribe(data => {
      console.log(data);
  });
}
}
