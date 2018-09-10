var modal = document.getElementById('modal-image');

var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};

// scroll to sign petition button
$(document).ready(function() {
    $('#sign').click(function(){
        $('html, body').animate({scrollTop: $("#cta1").offset().top
      }, 'slow', 'swing');
    });
});

// scroll to sign petition button mobile
$(document).ready(function() {
    $('#sign1').click(function(){
        $('html, body').animate({scrollTop: $("#cta1").offset().top
      }, 'slow', 'swing');
    });
});

// scroll to content start
$(document).ready(function() {
    $('#arrows-down').click(function(){
        $('html, body').animate({scrollTop: $("#my-content").offset().top
      }, 'slow', 'swing');
    });
});
