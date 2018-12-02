<script>

window.onload = function() {
    console.log('load ok'); // для меня это ответ 200, удобно и привычка 
    
    

var j = 1;
var nuchya = 9;

    // loopipng cell 
    for (var cell=0; cell<9; cell++) {
        document.getElementById('game').innerHTML+='<div class="cell"></div>'
    }

    document.getElementById('game').onclick = function(event) {
        console.log(event);       
      
        if ( event.target.className == 'cell')     {
            //this.innerHTML = '0';            
            if (event.target.innerHTML == '') {
                if (j%2==0) {
                    event.target.innerHTML = '0';
                    event.target.style.backgroundColor = '#ffff00';    
                }    else {
                    event.target.innerHTML = 'x';           
                    event.target.style.backgroundColor = '#0099ff';    
                }     
              
                j++;
                nuchya--;

                if ( nuchya == 0) {
                    alert ('последний ход');
                }
                
                calc();
            }
            else {
                alert ('Поле занято');
            }               
        }

        function calc() {
            var myarray = document.getElementsByClassName('cell') ;
            console.log(myarray);

            // line horizint x

            if ( 
                (myarray[0].innerHTML== 'x' && myarray[1].innerHTML=='x' && myarray[2].innerHTML == 'x') 
                ||
                (myarray[3].innerHTML== 'x' && myarray[4].innerHTML=='x' && myarray[5].innerHTML == 'x') 
                ||  
                (myarray[6].innerHTML== 'x' && myarray[7].innerHTML=='x' && myarray[8].innerHTML == 'x')
                ||
                (myarray[0].innerHTML== 'x' && myarray[3].innerHTML=='x' && myarray[6].innerHTML == 'x')
                ||   
                (myarray[1].innerHTML== 'x' && myarray[4].innerHTML=='x' && myarray[7].innerHTML == 'x')
                ||
                (myarray[2].innerHTML== 'x' && myarray[5].innerHTML=='x' && myarray[8].innerHTML == 'x')
                ||
                (myarray[0].innerHTML== 'x' && myarray[4].innerHTML=='x' && myarray[8].innerHTML == 'x')
                ||
                (myarray[2].innerHTML== 'x' && myarray[4].innerHTML=='x' && myarray[6].innerHTML == 'x')
            ) 
            {
                document.getElementById('scorePlayerOneData').value++;
                
                function func() {
                    alert( 'Krestiki Победители' );
                } 

                setTimeout(func, 500);

                // timer not see delay, why
                //http://plnkr.co/edit/Sh2ovcaQkcNb44TnYZyX?p=preview
           
                function myFunction1() {
                    var element = document.getElementById("myDIV1");
                    element.classList.add("mystyle");
                }
                myFunction1();                
            }
            
            else if (                    
            //line jorizont 0
            (myarray[0].innerHTML== '0' && myarray[1].innerHTML=='0' && myarray[2].innerHTML == '0')
            ||
            (myarray[3].innerHTML== '0' && myarray[4].innerHTML=='0' && myarray[5].innerHTML == '0')
            ||
            (myarray[6].innerHTML== '0' && myarray[7].innerHTML=='0' && myarray[8].innerHTML == '0')
            ||
            //line vertical 0
            (myarray[0].innerHTML== '0' && myarray[3].innerHTML=='0' && myarray[6].innerHTML == '0') 
            ||
            (myarray[1].innerHTML== '0' && myarray[4].innerHTML=='0' && myarray[7].innerHTML == '0') 
            ||
            (myarray[2].innerHTML== '0' && myarray[5].innerHTML=='0' && myarray[8].innerHTML == '0')
            ||
            //diag 0
            (myarray[0].innerHTML== '0' && myarray[4].innerHTML=='0' && myarray[8].innerHTML == '0')
            ||
            (myarray[2].innerHTML== '0' && myarray[4].innerHTML=='0' && myarray[6].innerHTML == '0')
            )
            {
                document.getElementById('scorePlayerTwoData').value++;

                function func() {
                    alert( 'Noliki Победители' );
                }

                setTimeout(func, 500);

                function myFunction2() {
                    var element = document.getElementById("myDIV2");
                    element.classList.add("mystyle");
                }                
                myFunction2();                
            }    
            
        

            function restart() {
                window.location.reload();                
            }
        }       
    }
}
</script>

<style>
/**
* нормализация цсс, минимальная
* авторизация - общий стиль  
* панель навигации -
* моделька игры -
* 
**/
/*нормализация*/

/*общий стиль */

/*авторизация*/


/* панель навигации*/

.body {
    position: relative;
}


/* моделька игры*/

#game {
    display: block;
    margin: auto;
    width: 300px;
    height: 300px;
    background: #ccc;
}

.cell {
    width: 100px;
    height: 100px;
    display: inline-block;
    vertical-align: top;    
    border: 1px solid black;
    box-sizing: border-box;
    text-align: center;
    font-size:60px;
    text-transform: uppercase; 
}

.card {
    display: inline-flex!important;
}

.card img  {
    display:inline-block;
    vertical-align: top;
    width:100%;
    max-width:135px;
    justify-content: flex-start;
}

.card-body {
    display: inline-block;
    vertical-align: top;
    width: 44%;
}

.card-body input {
    width: 100%;
    max-width: 30px;
    border: none;
    outline: none;
    cursor: none;
}

.scoreLabel {
    display: inline-flex;
    justify-content: center;
}

.scoreStat {
    display: inline-flex;
    justify-content: center;
}

.myRating {
    padding: .2rem 1.5rem;
}

.buttonRestart button {
    margin: auto;
    display: block;
    margin-top: 3em;
}

.mystyle {
    background: gold;
   

}

.myPhoto {
    display: inline-block;
    vertical-align: top;

}


.myVideoContainer {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0px;
    background: red;
    z-index: 10;
    left: -500%;
    
  }
  
  #content, #adContainer {
    /* position: absolute;
    top: 0px;
    left: 0px; */
    /* width: 640px;
    height: 360px; */
  }
  
  #contentElement {
    /* width: 640px;
    height: 360px; */
    overflow: hidden;
  }
  
  #playButton {
    margin-top:10px;
    vertical-align: top;
    width: 350px;
    height: 60px;
    padding: 0;
    font-size: 22px;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #2c3e50;
    border: 0;
    border-bottom: 2px solid #22303f;
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px #22303f;
    box-shadow: inset 0 -2px #22303f;
  }
  
  #gameIndex {
     /* display: none;*/
  }

  .gameIndexBlock {
    display: block;
  }
  </style>
<div id="game"></div>