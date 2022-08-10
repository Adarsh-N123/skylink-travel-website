            var displayone = document.getElementById("navone");
            var loader = document.getElementById("welcome");
            var displaytwo = document.getElementById('display');
            setTimeout(function(){
                loader.style.display="none";
                displaytwo.style.display="block";
                displayone.style.display="block";
            },1000)