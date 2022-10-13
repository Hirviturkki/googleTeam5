function boxa(){
  element = document.getElementById("place1")
  element.style.visibility = "hidden"
  element = document.getElementById("place2")
  element.style.visibility = "hidden"
  element = document.getElementById("place3")
  element.style.visibility = "hidden"
  document.getElementById("backMat").style.backgroundImage = "url(./box1.png)"
}
function boxb(){
  element = document.getElementById("place1")
  element.style.visibility = "hidden"
  element = document.getElementById("place2")
  element.style.visibility = "hidden"
  element = document.getElementById("place3")
  element.style.visibility = "hidden"
  element.style.backgroundImage = "url(./box2.png)"
  document.getElementById("backMat").style.backgroundImage = "url(./box2.png)"
}
function boxc(){
  element = document.getElementById("place1")
  element.style.visibility = "hidden"
  element = document.getElementById("place2")
  element.style.visibility = "hidden"
  element = document.getElementById("place3")
  element.style.visibility = "hidden"
  vid1
  document.getElementById("backMat").style.backgroundImage = "url(./box3.png)"
  document.getElementById("vid1").style.visibility = "visible"
  document.getElementById("titles").style.visibility = "visible"
}






window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  document.getElementById('leftArrow').style.visibility = 'visible';
  document.getElementById('rightArrow').style.visibility = 'visible';
  document.getElementById('reviews').style.visibility = 'visible';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  document.getElementById('leftArrow').style.visibility = 'hidden';
  document.getElementById('rightArrow').style.visibility = 'hidden';
  document.getElementById('reviews').style.visibility = 'hidden';
  lightBoxVideo.pause();
  lightBoxVideo.pause();
}

