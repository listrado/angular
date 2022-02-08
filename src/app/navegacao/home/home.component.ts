import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  public background: string = "background"
  public bombinha = '/assets/pictures/bombinha.png';
  public bombinha2 = '/assets/pictures/bombinha2.jpg';
  public bombinha3 = '/assets/pictures/bombinha3.jpg';
  public bombinha4 = '/assets/pictures/bombinha4.jpg';
  public explosao = '/assets/pictures/explosao.png';
  public timeLeft: number = 10;
  public danger: boolean = false;

  warning(){
    this.danger = true;
    this.background = "background3";
 }


  startTimer() {
    var id = 0;
    var intervalID = setInterval(() => this.getMessages(intervalID),2000);
  }

  getMessages(id: number){
    alert("explosao em " + this.timeLeft);
    this.timeLeft--;
    if(this.timeLeft == 0){
    clearInterval(1);
    

    } 
  }

  pauseTimer() {
    clearInterval(1);
    this.danger = false;
    this.timeLeft = 10;
    this.background = "background";
  }
}
