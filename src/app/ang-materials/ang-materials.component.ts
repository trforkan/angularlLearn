import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-materials',
  templateUrl: './ang-materials.component.html',
  styleUrls: ['./ang-materials.component.css']
})
export class AngMaterialsComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  options: string[] = ["Angular", "React", "Vue"];

  objectOptions = [
    {name: 'React'},
    {name: 'Angular'},
    {name: 'Vue'},
    {name: 'Android'}
  ];


  showSpinner = false;
  sidenavVisibility = false;
  selected = "Racket";
  disableSelect = false;


  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
     this.showSpinner=false;
    }, 5000)
  }

}
