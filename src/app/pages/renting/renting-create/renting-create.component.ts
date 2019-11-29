import { Component, OnInit } from '@angular/core';
import { Renting } from 'src/app/models/renting';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RentingHttpService } from 'src/app/core/services/renting/http/renting-http.service';

@Component({
  selector: 'app-renting-create',
  templateUrl: './renting-create.component.html',
  styleUrls: ['./renting-create.component.scss']
})
export class RentingCreateComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
              private messageService: MessageService,
              private renService: RentingHttpService,
              private router: Router
  ) { }

  model: Renting;
  price: number;
  apId: number;
  ngOnInit() {
    this.model = {};
    this.activeRoute.queryParams.subscribe((data) => {
      this.price = data.p;
    });
    this.activeRoute.params.subscribe((data) => {
      this.apId = data.id;
      console.log(this.apId);
    });
  }

  onAccept(): void {
    if (this.model.date_from > this.model.date_to) {
      this.showError('Data początkowa musi być młodsza niż data końcowa');
      return;
    }
    this.renService.addRenting(this.apId, this.model).subscribe((data) => {
      if (data.UploadStatus === 1) {
        this.router.navigate(['apartment', this.apId, 'renting', 'edit']);
      } else {
        this.showError('Błąd w trakcie dodawania wynajmu :(');
      }
    });
  }

  showError(msg: string) {
    this.messageService.add({ severity: 'error', summary: msg, detail: 'Renting failed' });
  }
}
