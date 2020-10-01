import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor(public testService: DevicesService) { }
  data: any = '';
  status: boolean = false;
  ngOnInit(): void {
    this.testService.getData().subscribe(data => {
      this.status = true;
      this.data = data.data;
    })
  }


}
