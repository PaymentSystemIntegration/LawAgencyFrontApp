import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-same-bank',
  templateUrl: './same-bank.component.html',
  styleUrls: ['./same-bank.component.css']
})
export class SameBankComponent implements OnInit {
  form: FormGroup;
  user: any = {} as any;
  product: any;
  card: any;
  id: any;

  constructor(
    private formBuilder : FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService   
  ) { 

    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
      }
    );

    this.form = this.formBuilder.group({
      acquirerOrderId: [''],
      acquirerTimestamp: ['']
    
    });

  }

  ngOnInit(): void {
    this.api.current().subscribe((response:any) => {
      this.user = response;
  });

  this.api.loadOneCard(this.id).subscribe((response:any) => {
    this.card = response;
    console.log(response)
  

    this.form.setValue({
      acquirerOrderId: this.card.acquirerOrderId, 
      acquirerTimestamp: this.product.acquirerTimestamp
    
    });

  });
  }

  onSave(){
     const acquirerOrderId = this.form.get('acquirerOrderId')?.value;
      const acquirerTimestamp = this.form.get('acquirerTimestamp')?.value;
    

      let data = {
        acquirerOrderId: acquirerOrderId,
        acquirerTimestamp: acquirerTimestamp
       
      }

    this.api.editCard(this.id, data).subscribe((response:any) => {
      this.product = response;
      if( response != null){
        location.reload();
        
      } else if(response == null){
        alert("You have successfully finished payment")
      }
  });
  }
 


 logout(): void{
  localStorage.clear();
}
}
