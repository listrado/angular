import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public timeLeft: number = 10;
  public danger: boolean = false;

  warning(){
    this.danger = true;
 }


  startTimer() {
    var id = 0;
    var intervalID = setInterval(() => this.getMessages(intervalID),5000);
  }

  getMessages(id: number){
    alert("warning " + this.timeLeft);
    this.timeLeft--;
  }

  pauseTimer() {
    clearInterval(1);
  }
}
