import { Component, OnInit } from '@angular/core';

const BOARD: any = [];

for (let i = 1; i <= 8; i++) {
  if (i % 2 === 0) {
      BOARD.push({color: 'white', place: i, disc: false});
  } else {
    BOARD.push({color: 'black', place: i, disc: 'disc_white'});
  }
}

for (let i = 9; i <= 16; i++) {
  if (i % 2 === 0) {
    BOARD.push({color: 'black', place: i, disc: 'disc_white'});
  } else {
    BOARD.push({color: 'white', place: i, disc: false});
  }
}

for (let i = 17; i <= 24; i++) {
  if (i % 2 === 0) {
    BOARD.push({color: 'white', place: i, disc: false});
  } else {
    BOARD.push({color: 'black', place: i, disc: 'disc_white'});
  }
}

for (let i = 25; i <= 32; i++) {
  if (i % 2 === 0) {
    BOARD.push({color: 'black', place: i, disc: false});
  } else {
    BOARD.push({color: 'white', place: i, disc: false});
  }
}

for (let i = 33; i <= 40; i++) {
  if (i % 2 === 0) {
    BOARD.push({color: 'white', place: i, disc: false});
  } else {
    BOARD.push({color: 'black', place: i, disc: false});
  }
}

for (let i = 41; i <= 48; i++) {
  if (i % 2 === 0) {
    BOARD.push({color: 'black', place: i, disc: 'disc_black'});
  } else {
    BOARD.push({color: 'white', place: i, disc: false});
  }
}

for (let i = 49; i <= 56; i++) {
  if (i % 2 === 0) {
    BOARD.push({color: 'white', place: i, disc: false});
  } else {
    BOARD.push({color: 'black', place: i, disc: 'disc_black'});
  }
}

for (let i = 57; i <= 64; i++) {
  if (i % 2 === 0) {
    BOARD.push({color: 'black', place: i, disc: 'disc_black'});
  } else {

    BOARD.push({color: 'white', place: i, disc: false});
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fields = BOARD;
  move_left: any;
  move_right: any;
  vm: any = this;
  move(field) {
      console.log(field.place);

      // console.log(field);
      // console.log(this.fields[field.place + 8]);
      if (this.fields[field.place + 8].disc !== false && field.disc === 'disc_white') {
            this.move_left = false;
      } else if (field.disc === 'disc_white') {
            this.move_left = field.place + 7;
      } else {
            this.move_left = field.place - 7;
      }
      if (this.fields[field.place + 10].disc !== false && field.disc === 'disc_white') {
          this.move_right = false;
      } else if (field.disc === 'disc_white') {
          console.log('move_left');
          this.move_right = field.place + 9;
      } else {
          this.move_right = field.place - 9;
      }

      // console.log(this.move_right);
      // console.log(this.move_left);
  }
}


