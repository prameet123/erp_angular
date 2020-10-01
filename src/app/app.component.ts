import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'erp';
  private pramQuery:any='';     
  constructor(private activatedRoute:ActivatedRoute) {    
   
      this.activatedRoute.params.subscribe(data=>{
        this.pramQuery=data.id;
      });
  }          
  ngOnChanges() {    
    
  }      
  ngOnInit() {    
    
  } 
}
