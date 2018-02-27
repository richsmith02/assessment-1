document.getElementById("bg1").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url('imgs/i1.jpg')";
    document.getElementById("ch2").style.backgroundImage = "url('imgs/i2.jpg')";
    document.getElementById("ch3").style.backgroundImage = "url('imgs/i3.jpg')";
    
   document.getElementById("ch1").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i1.jpg')";
       });
        
   document.getElementById("ch2").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i2.jpg')";
        });
    
   document.getElementById("ch3").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i3.jpg')";
       });
});

document.getElementById("bg2").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url('imgs/i4.jpg')";
    document.getElementById("ch2").style.backgroundImage = "url('imgs/i5.jpg')";
    document.getElementById("ch3").style.backgroundImage = "url('imgs/i6.jpg')";
    
       document.getElementById("ch1").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i4.jpg')";
       });
        
   document.getElementById("ch2").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i5.jpg')";
        });
    
   document.getElementById("ch3").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i6.jpg')";
       });
});

document.getElementById("bg3").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url('imgs/i7.jpg')";
    document.getElementById("ch2").style.backgroundImage = "url('imgs/i8.jpg')";
    document.getElementById("ch3").style.backgroundImage = "url('imgs/i9.jpg')";
    
       document.getElementById("ch1").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i7.jpg')";
       });
        
   document.getElementById("ch2").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i8.jpg')";
        });
    
   document.getElementById("ch3").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i9.jpg')";
       });
});

document.getElementById("bg4").addEventListener("click", function(){
    document.getElementById("ch1").style.backgroundImage = "url('imgs/i10.jpg')";
    document.getElementById("ch2").style.backgroundImage = "url('imgs/i11.jpg')";
    document.getElementById("ch3").style.backgroundImage = "url('imgs/i12.jpg')";
    
       document.getElementById("ch1").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i10.jpg')";
       });
        
   document.getElementById("ch2").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i11.jpg')";
        });
    
   document.getElementById("ch3").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = "url('imgs/i12.jpg')";
       });
});

document.getElementById("makebg").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = document.getElementById("zoom").style.backgroundImage;
});

document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = "none";
});

document.getElementById("showapp").addEventListener("click", function(){
    document.getElementById("app1").style.display = "block";
});

document.getElementById("hideapp").addEventListener("click", function(){
    document.getElementById("app1").style.display = "none";
});

document.getElementById("zoom").addEventListener("click", function(){
    document.getElementById("zoomcontrols").style.display = "block";
});



document.getElementById("plus").addEventListener("click", function (){
    document.getElementById("zoom").style.width = "110%";
    document.getElementById("zoom").style.height = "107%";

});

document.getElementById("minus").addEventListener("click", function (){
    document.getElementById("zoom").style.width = "90%";
    document.getElementById("zoom").style.height = "93%";

});
