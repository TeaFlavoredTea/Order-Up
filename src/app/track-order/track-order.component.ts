import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  timeLeft: number = 3;
  interval: any;
  subscribeTimer: any;
  phases = ['your food is being cooked', 'your food is being picked up', 'your food has been delivered']
  phaseIndex = 0
  status = this.phases[this.phaseIndex]

  constructor(private router: Router) { }

  ngOnInit(): void {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      this.subscribeTimer = this.timeLeft - val;
    });

    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;

      } else {
        this.timeLeft = 3;
        
        // manage phases
        this.phaseIndex++
        if (this.phaseIndex == this.phases.length ) {
          clearInterval(this.interval); // stop the timer
          this.timeLeft = 0
        }
        else {
          this.status = this.phases[this.phaseIndex]
        }
      }
    },1000)
  }

  goHome(){
    this.router.navigate(['home'])
  }
}
