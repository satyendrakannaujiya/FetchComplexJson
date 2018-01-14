import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  users: any;
  constructor(public navCtrl: NavController, private http: Http) {}
  loadjson() {
    this.http
      .get("https://randomuser.me/api/?results=10")
      .map(val => {
        val = val.json();
        console.log("map  " + val);
      })
      .subscribe(
        res => {
          console.log("subscribe " + res);
          this.users = res;
        },
        err => {
          console.log("failed");
        }
      );
    console.log(this.users);
  }
}
