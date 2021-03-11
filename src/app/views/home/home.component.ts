import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selected = 'option0';
  public files: any[];
  constructor() { this.files = []; }

  ngOnInit(): void {
  }

  onFileChanged(event: any) {
    this.files = event.target.files;
  }
  
  onUpload() {
    const formData = new FormData();
    for (const file of this.files) {
        formData.append(name, file, file.name);
    }
    // this.http.post('url', formData).subscribe(x => ....);
  }

}

