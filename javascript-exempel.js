/* En kommentar
som kan sträcka över flera rader. */

//En kommentar på en rad.

function Uppgift2(){
    alert('Skapad av Jakub 2021/03/23');
}

function Uppgift3(){
    alert('Jakub');
    changeText();
    document.getElementById("demo").style.backgroundColor = "lightblue";
}

function changeText(){
    document.getElementById("demo").innerHTML = "Hello javaScript"
}

function Uppgift4(sw) {
    var pic;
    if (sw == 0) {
      pic = "bild1.jpg"
    } else {
      pic = "Bild2.jpg"
    }
    document.getElementById('myImage').src = pic;
  }