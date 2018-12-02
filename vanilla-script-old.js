window.onload = function() {

    var 
    firstPlayer,
    secondPlayer,
    trigger,    
    startGame, // start game
    startContainer, // game container DELETE?
    
    checkNames,    
    setname,

    playButton,
    videoContent,
    rolik,
    video,
    gameIndex,
    j,
    nuchya;

    checkNames = false;


    var playerS = new Object();   
    playerS = {
        playerOne : {
            name : 'name1',
            score : 0
        },
        playerTwo : {
            name : 'name2',
            score : 0
        }
    };
    console.log('playerOne ' + playerS.playerOne.name + ' playerTwo '+ playerS.playerTwo.name);
    
    startGame = document.getElementById('playButton');
    startContainer = document.getElementById('startGameContainer');
    
    document.addEventListener('click', function setTrigger() {   
       trigger = document.querySelector('input[name="option"]:checked').value;                
        // var trig = document.getElementById('option').value;
        // var trig2 = document.getElementById('option').value;
        console.log(trigger );//trig + trig2);

        if ( trigger == 0) {
            //change second label
            document.getElementById('secondPlayerLabel').innerHTML = 'X';
        } else {
            document.getElementById('secondPlayerLabel').innerHTML = '0';
        }
    });
    
    //trigger = 
    
    // first screen
    startGame.onclick = function(event) {
        firstPlayer = document.getElementById('firstPlayer').value;
        secondPlayer = document.getElementById('secondPlayer').value;     


        
        function checkNames() {
            console.log('101');
            if ( (!firstPlayer.length > 0)   ) {
                alert('Введите именя Игрока № 1 ');
                console.log('102');
            } 
            
            else if (!secondPlayer.length > 0){
                alert('Введите именя Игрока № 2 ');
            }            
            else {
                checkNames = true;
                console.log('103 ' + checkNames);

                
                


                if ( trigger == 'x') {
                    document.getElementById("playerOneName").innerHTML = firstPlayer;
                    document.getElementById("playerTwoName").innerHTML = secondPlayer;
                }
                else {
                    document.getElementById("playerOneName").innerHTML = secondPlayer;
                    document.getElementById("playerTwoName").innerHTML = firstPlayer;
                }
                
            }            
        }        
        checkNames();

        
       

        if ( checkNames == true)  {
            console.log('true' + checkNames);

            videoContent = document.getElementById('contentElement');
                playButton = document.getElementById('playButton');    
                playButton.addEventListener('click', onPlayButtonClick);
                
                function onPlayButtonClick() {
                    videoContent.play();
                    console.log('PLAY first');
                }


            startContainer.style.display = "none";
            onPlayButtonClick();
            video.style.left="0";
            setInterval(() => {
                backStyleStart();
            }, 11200);
           
            console.log('backStyleStart start');
            
            document.addEventListener('keypress', function(event){
                console.log(event);
        
                console.log(event.target);
        
                var playerOneKeys   =   ['1','2','3','4','5','6','7','8','9'];
                var playerTwoKeys   =   ['q','w','e','r','t','y','u','i','o'];
        
                if ( playerOneKeys.includes(event.key) ) {
                    document.getElementById(`cell${event.key}`).innerHTML = '+';
                }
        
                if ( playerTwoKeys.includes(event.key) ) {
                    document.getElementById(`cell${playerTwoKeys.indexOf(event.key)+1}`).innerHTML = '-';
                }   
        
                // if ( event.key == "1" ) {
                //     document.getElementById('cell0').innerHTML = "+";
                // }   
                // if ( event.key == "2" ) {
                //     document.getElementById('cell1').innerHTML = "+";
                // }             
                // if ( event.key == "q" ) {
                //     document.getElementById('cell0').innerHTML = "-";
                // }    
                // if ( event.key == "w" ) {
                //     document.getElementById('cell1').innerHTML = "-";
                // }    
            });
            
        }       
        
        console.log('player 1 ' + firstPlayer + 'player 2' + secondPlayer);
        //focusMethod();
    }

    console.log('income ' + firstPlayer);
  
   

    // document.getElementById("dataTwo").innerHTML =
    // secondPlayer;

    document.getElementById("playerOneScore").innerHTML =
    "<br>Score " + playerS.playerOne.score;

    
    document.getElementById("playerTwoScore").innerHTML =
    "<br>Score " + playerS.playerTwo.score;   

    
    
    videoContent2 = document.getElementById('contentElement2');    
    playButton2 = document.getElementById('playButton2');    
    playButton2.addEventListener('click', onPlayButtonClick2);

    function onPlayButtonClick2() {
        video.style.left="0";
        videoContent2.play();
        console.log('PLAY second');
    }
 

    rolik = document.getElementById('playButton2');
    video = document.getElementById('mainContainer');
    
    rolik.onclick = function(event) {
        onPlayButtonClick2();
        
        setInterval(() => {
            backStyle();
        }, 21000);
       
        console.log('rolik.onclick');
    }

    function backStyle() {
        video.style.left="-500%";
        setInterval(() => {
            restart();
        }, 1000);
        console.log('backStyle');
    }

    function backStyleStart() {
        video.style.left="-500%";
        gameIndex = document.getElementById('gameIndex');
        gameIndex.style.display = "block";
       
        console.log('backStyleStart func');

    }

    function restart() {
        window.location.reload();                
    }   

    //setTimeout(backStyle(), 5000); 
   
    
    // focusMethod = function getFocus() {           
    //     document.getElementById("game").focus();
    //   }

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
                  //START OF GAME//
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////


    j = 1;
    nuchya = 10;

    // loopipng cell 
    for (var cell=1; cell<10; cell++) {
        
        document.getElementById('game').innerHTML+=`<div id="cell${cell}" class="cell" tabindex="1" ></div>`
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

        ////////////////////////////////
            // Calculation of click
        ////////////////////////////////

        function calc() {
            let myarray = document.getElementsByClassName('cell') ;
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
                document.getElementById("playerOneScore").innerHTML = 1;
                
                function func() {
                    alert( 'Krestiki Победители' );
                } 

                setTimeout(func, 500);

                // timer not see delay, why
                //http://plnkr.co/edit/Sh2ovcaQkcNb44TnYZyX?p=preview
           
                function myFunction1() {
                    let element = document.getElementById("myDIV1");
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
                document.getElementById("playerTwoScore").innerHTML = 1;

                function func() {
                    alert( 'Noliki Победители' );
                }

                setTimeout(func, 500);

                function myFunction2() {
                    let element = document.getElementById("myDIV2");
                    element.classList.add("mystyle");
                }                
                myFunction2();                
            }    
            
            // x1 = false;
            // x2 = false;
            // x3 = false;          

            // function stylemekrestiline1() {
            //     myarray[0].style.textDecoration = "line-through";
            //     myarray[1].style.textDecoration = "line-through";
            //     myarray[2].style.textDecoration = "line-through";
            //     //event.target.style.textDecoration = "line-through";
            // }

            // function stylemekrestiline2() {
            //     myarray[3].style.textDecoration = "line-through";
            //     myarray[4].style.textDecoration = "line-through";
            //     myarray[5].style.textDecoration = "line-through";
            //     //event.target.style.textDecoration = "line-through";
            // }

            // function stylemekrestiline3() {
            //     myarray[6].style.textDecoration = "line-through";
            //     myarray[7].style.textDecoration = "line-through";
            //     myarray[8].style.textDecoration = "line-through";
            //     //event.target.style.textDecoration = "line-through";
            // }

            function restart() {
                window.location.reload();                
            }
        }       
    }

    
}





