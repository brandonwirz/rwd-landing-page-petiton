var modal = document.getElementById('modal-image');

var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

// scroll to content start
$(document).ready(function() {
    $('#arrows-down').click(function(){
        $('html, body').animate({scrollTop:570}, 'medium', 'swing');
        return false;
    });
});
