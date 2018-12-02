window.onload = function() {

    var firstPlayer, secondPlayer, trigger,  startGame, // start game
    startContainer, // game container DELETE?
    checkNames, setname,
    playButton, videoContent, rolik, video, gameIndex, j, nuchya;

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
   
    
    startGame = document.getElementById('playButton');
    startContainer = document.getElementById('startGameContainer');
    
    document.addEventListener('click', function setTrigger() {   
       trigger = document.querySelector('input[name="option"]:checked').value;               
     

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
            } 
            
            else if (!secondPlayer.length > 0){
                alert('Введите именя Игрока № 2 ');
            }            
            else {
                checkNames = true;           

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

            videoContent = document.getElementById('contentElement');
            playButton = document.getElementById('playButton');    
            playButton.addEventListener('click', onPlayButtonClick);
                
            function onPlayButtonClick() {
                videoContent.play();
                  
            }

            startContainer.style.display = "none";
            onPlayButtonClick();
            video.style.left="0";
            setInterval(() => {
                backStyleStart();
            }, 11200);         
            
            document.addEventListener('keypress', function(event){            
                var playerOneKeys   =   ['1','2','3','4','5','6','7','8','9'];
                var playerTwoKeys   =   ['q','w','e','r','t','y','u','i','o'];
        
                if ( playerOneKeys.includes(event.key) ) {
                    document.getElementById(`cell${event.key}`).innerHTML = '+';
                }
        
                if ( playerTwoKeys.includes(event.key) ) {
                    document.getElementById(`cell${playerTwoKeys.indexOf(event.key)+1}`).innerHTML = '-';
                }                        
            });            
        }      
    }

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
     
    }

    /// must be delete this style

    function backStyle() {
        video.style.left="-500%";
        setInterval(() => {
            restart();
        }, 1000);        
    }

    function backStyleStart() {
        video.style.left="-500%";
        gameIndex = document.getElementById('gameIndex');
        gameIndex.style.display = "block";              
    }

    function restart() {
        window.location.reload();                
    }   
    
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
           
            function restart() {
                window.location.reload();                
            }
        }       
    }

    
}





