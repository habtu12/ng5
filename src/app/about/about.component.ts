import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

import {AboutService} from './about.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public values: any[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private aboutService: AboutService,
              private _toastr: ToastrService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this.aboutService
      .getAll<any[]>()
      .subscribe(
        (data: any[]) => {
          this.values = data;
          this._handleSuccess();
        },
        error => {
          this._handleError(error);
        });
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

  private _handleError(error) {
    console.log(error);
    this._toastr.error('could not process request', 'Ops!');
  }

  private _handleSuccess() {
    this._toastr.success('Success!');
  }
}
