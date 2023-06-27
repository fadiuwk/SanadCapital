import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Aos from 'aos';

// import AOS from "aos";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    Aos.init();
  }
}
