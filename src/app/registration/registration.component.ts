import { Component, OnInit } from '@angular/core';
import { CreateSuperuserService } from '../create-superuser.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public testService: CreateSuperuserService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  form: any = '';
  content: any = '';
  status: boolean = false;
  status1: boolean = true;
  response: string = '';
  closeResult: string;
  create(form, content) {
    this.status = true;
    this.status1 = false;
    const rowData = JSON.stringify({
      IMEINumber: form.value.roleName
    })
    console.log(rowData);

    this.testService.create(rowData).subscribe(data => {
      if (data.status == 201) {
        this.open(content)
        this.response = data.data;
        form.reset();
      }
      this.status = false;
      this.status1 = true;
    })
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
