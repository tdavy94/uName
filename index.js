




   document.addEventListener('mouseover', function(e) {

      e.preventDefault();
       e = e || window.event;
       var target = e.target || e.srcElement,
           text = target.textContent || target.innerText;

           if( e.target.href == undefined) {


           }
           else if (e.srcElement || e.target == "a")  {
           //   // alert('link')
              console.log(e.target.href)
          
           //
       } else {

       }
           // }
            // target.style.visibility = "hidden"

   }, false);


//})
