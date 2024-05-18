var small = false
      function caps(){
        if(!small){
          for(i=97;i<=122;i++){
            var ele = document.getElementById("alphabet"+String.fromCharCode(i))
            ele.setAttribute("value",String.fromCharCode(i))
            ele.setAttribute("onclick",("display.value += '" + String.fromCharCode(i) + "'"))
            small = true
          }
        }else{  
          for(i=65;i<=90;i++){
            var ele = document.getElementById("alphabet"+String.fromCharCode(i+32))
            ele.setAttribute("value",String.fromCharCode(i))
            ele.setAttribute("onclick",("display.value += '" + String.fromCharCode(i) + "'"))
            small = false
          }
        }
      }
      var alpha = false
      var symb = [33,59,34,35,38,37,94,38,62,42,40,41,94,44,91,93,43,61,64,47,60,58,95,39,94,45]
      function symbols()
        {
          
          if(!alpha){
            for(i=97;i<=122;i++){
              var ele = document.getElementById("alphabet"+String.fromCharCode(i))
              ele.setAttribute("value",String.fromCharCode(symb[i-97]))
              ele.setAttribute("onclick",("display.value += '" + String.fromCharCode(symb[i-97]) + "'"))
              alpha = true
            }
          }else{  
            for(i=65;i<=90;i++){
              var ele = document.getElementById("alphabet"+String.fromCharCode(i+32))
              ele.setAttribute("value",String.fromCharCode(i))
              ele.setAttribute("onclick",("display.value += '" + String.fromCharCode(i) + "'"))
              alpha = false
            }
          }
      }


      

      document.querySelector('.switcher-button').onclick = () => {
        document.getElementsByClassName('.color-switcher').classList.toggle('active'); 
    };
    
    let themebuttons = document.querySelectorAll('.theme-button'); 
    themebuttons.forEach(color => {
        color.addEventListener('click', () => {
            let dataColor = color.getAttribute('data-color');
            document.querySelector(':root').style.setProperty('--main-color', dataColor);
            //document.body.style.background = dataColor;
            //document.getElementsByClassName("onboard")[0].style.background = dataColor;
            //document.getElementsByClassName("keyboard")[0].style.background = dataColor;
            // document.getElementById("area").style.background = dataColor;

            if(dataColor == "#000000"){
              console.log("black");
              let a = document.getElementsByClassName("ccolor");
              for(i=0;i<43;i++){
                a[i].style.color = "white";
                a[i].style.borderColor = "white";
              }
              // document.getElementsByClassName("headline")[0].style.color = "white";
              // document.getElementById("area").style.borderColor = "white";
              // document.getElementsByClassName("keyboard")[0].style.boxShadow = "0 0 50px rgba(255, 255, 255, 0.6)"
            }else{
              console.log("black");
              let a = document.getElementsByClassName("ccolor");
              for(i=0;i<43;i++){
                a[i].style.color = "black";
                a[i].style.borderColor = "black";
              }
              // document.getElementsByClassName("headline")[0].style.color = "black";
              // document.getElementById("area").style.borderColor = "black";
              // document.getElementsByClassName("keyboard")[0].style.boxShadow = "0 0 50px rgba(0, 0, 0, 0.6)"
            }
        });
    });

    let theme_buttons = document.querySelectorAll('.theme-button'); 
    themebuttons.forEach(color => {
        color.addEventListener('click', () => {
            let dataColor = color.getAttribute('data-color');
            document.querySelector(':root').style.setProperty('--color', dataColor);})})



    function nightmode(){
      var element = document.getElementById('keyboard')
      element.classList.toggle("keyboard_dm");
      var element2 = document.getElementById('alphabetq')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetw')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabete')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetr')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabett')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabety')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetu')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabeti')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabeto')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetp')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabeta')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabets')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetd')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetf')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetg')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabeth')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetj')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetk')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetl')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetz')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetx')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetc')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetv')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetb')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetn')
      element2.classList.toggle("keys_dm")
      var element2 = document.getElementById('alphabetm')
      element2.classList.toggle("keys_dm")

      var element3 =document.getElementById('slightwide1')
      element3.classList.toggle('slightwide_dm')
      var element3 =document.getElementById('slightwide2')
      element3.classList.toggle('slightwide_dm')
      var element3 =document.getElementById('slightwide3')
      element3.classList.toggle('slightwide_dm')
      var element3 =document.getElementById('slightwide4')
      element3.classList.toggle('slightwide_dm')
      var element3 =document.getElementById('slightwide5')
      element3.classList.toggle('slightwide_dm')
      var element3 =document.getElementById('slightwide6')
      element3.classList.toggle('slightwide_dm')
      var element3 =document.getElementById('slightwide7')
      element3.classList.toggle('slightwide_dm')
      var element3 =document.getElementById('slightwide8')
      element3.classList.toggle('slightwide_dm')
      var element3 =document.getElementById('slightwide9')
      element3.classList.toggle('slightwide_dm')
      var element3 =document.getElementById('slightwide0')
      element3.classList.toggle('slightwide_dm')

      var element3 =document.getElementById('wide1')
      element3.classList.toggle('wide_dm')
      var element3 =document.getElementById('wide2')
      element3.classList.toggle('wide_dm')
      var element3 =document.getElementById('wide3')
      element3.classList.toggle('wide_dm')
      var element3 =document.getElementById('wide4')
      element3.classList.toggle('wide_dm')

      var element3 =document.getElementById('key1')
      element3.classList.toggle('keys_dm')
      var element3 =document.getElementById('key2')
      element3.classList.toggle('extra-wide_dm')
      var element3 =document.getElementById('key3')
      element3.classList.toggle('keys_dm')

      var element4 = document.body
      element4.classList.toggle('dm')

      var element5 =document.getElementById('area')
      element5.classList.toggle('area_dm')

      var element6 =document.getElementsByClassName('ccolor')
      element6.classList.toggle('ccolor_dm')
    }
