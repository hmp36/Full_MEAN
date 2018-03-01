import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../user/user.service";
import { ListingService } from "../listing/listing.service";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  private text:String;
  private listings:any;
  
  constructor(private us: UserService, private ls:ListingService,private router:Router){

   }

   ngOnInit() {
        if(!this.us.isValid()) this.router.navigate(["/register"]);
        this.text = "";
        this.ls.all()
    }
      
}
