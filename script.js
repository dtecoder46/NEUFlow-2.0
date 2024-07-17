import { exec } from 'child_process';

const app = Vue.createApp({
  data() {
    return {
      message: "Hello World!",
      logo: "logo.png",
      menu: "menu_button.png",
      box: "box.png",
      custom: "custom.jpg",
      money: "money.jpg",
      gmail: "gmail.png",
      twitter: "twitter.png",
    }
  }
})

app.mount('#app')

exec('g++ -o main main.cpp',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

exec('./main',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
