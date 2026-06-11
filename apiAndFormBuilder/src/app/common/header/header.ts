import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private toast: ToastrService) {}
  ngOnInit() {
    // this.toast.error('Product Already Exists...!!');
    // this.toast.success('Product Added Successfully....!!');
  }
}
