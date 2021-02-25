I denna mapp placeras js-dokument.


<script>======js för slide show

<img class="mySlides">                                     bilder finns o de e de jag ska visa

var myIndex = 0;                                                            ?
carousel();                                                     funktion finns

function carousel() {                                                funktion körs
  var i;                                                                   ?
  var x = document.getElementsByClassName("mySlides");         bilder blir till x
  for (i = 0; i < x.length; i++) {                                         ?
    x[i].style.display = "none";                                           ?
  }                                                                        ?
  myIndex++;                                                               ?
  if (myIndex > x.length) {myIndex = 1}                                    ?
  x[myIndex-1].style.display = "block";                                    ?
  setTimeout(carousel, 2000);                                   bilden byter efetr 2 sec
}


 




</script>