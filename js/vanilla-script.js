window.onload = function () {

    let trigger, // start game
        playButton, videoContent, rolik, video, gameIndex, resetHandlers;

    let playerS = {
        playerOne: {
            name: 'name1',
            score: 0
        },
        playerTwo: {
            name: 'name2',
            score: 0
        }
    };

    const startGame = document.getElementById('playButton');
    const startContainer = document.getElementById('startGameContainer');

    function initGame(event) {
        const firstPlayer = document.getElementById('firstPlayer').value;
        const secondPlayer = document.getElementById('secondPlayer').value;       
        

        if (checkNames(firstPlayer, secondPlayer)) {
            playVideo();
            setPlayerNames(firstPlayer, secondPlayer);
            createCells();
            resetHandlers = bindGameControlsEvents();
        }
    }

    function initEntryScreen() {
        document.addEventListener('click', function setTrigger() {
            trigger = document.querySelector('input[name="option"]:checked').value;

            if (trigger == 0) {
                //change second label
                document.getElementById('secondPlayerLabel').innerHTML = 'X';
            } else {
                document.getElementById('secondPlayerLabel').innerHTML = '0';
            }
        });

        startGame.onclick = initGame;
    }

    function checkNames(firstPlayer, secondPlayer) {
        if ((!firstPlayer.length > 0)) {
            alert('Введите именя Игрока № 1 ');            
            document.getElementById('firstPlayer').style.border = "thick solid red";
            return false;
        } else if (!secondPlayer.length > 0) {
            alert('Введите именя Игрока № 2 ');
            document.getElementById('firstPlayer').style.border = "none";
            document.getElementById('secondPlayer').style.border = "thick solid red";
            return false;
        }
               

        return true;
    }

    function setPlayerNames(firstPlayer, secondPlayer) {
        if (trigger === 'x') {
            document.getElementById("playerOneName").innerHTML = firstPlayer;
            document.getElementById("playerTwoName").innerHTML = secondPlayer;
        }
        else {
            document.getElementById("playerOneName").innerHTML = secondPlayer;
            document.getElementById("playerTwoName").innerHTML = firstPlayer;
        }
    }

    function createCells() {
        for (var cell = 1; cell < 10; cell++) {
            document.getElementById('game').innerHTML += `<div id="cell${cell}" class="cell" tabindex="1" ></div>`
        }
    }

    function isWinner(playerSymbol) {
        const cells = document.getElementsByClassName('cell');

        return (cells[0].innerHTML === playerSymbol && cells[1].innerHTML === playerSymbol && cells[2].innerHTML === playerSymbol)
            ||
            (cells[3].innerHTML === playerSymbol && cells[4].innerHTML === playerSymbol && cells[5].innerHTML === playerSymbol)
            ||
            (cells[6].innerHTML === playerSymbol && cells[7].innerHTML === playerSymbol && cells[8].innerHTML === playerSymbol)
            ||
            (cells[0].innerHTML === playerSymbol && cells[3].innerHTML === playerSymbol && cells[6].innerHTML === playerSymbol)
            ||
            (cells[1].innerHTML === playerSymbol && cells[4].innerHTML === playerSymbol && cells[7].innerHTML === playerSymbol)
            ||
            (cells[2].innerHTML === playerSymbol && cells[5].innerHTML === playerSymbol && cells[8].innerHTML === playerSymbol)
            ||
            (cells[0].innerHTML === playerSymbol && cells[4].innerHTML === playerSymbol && cells[8].innerHTML === playerSymbol)
            ||
            (cells[2].innerHTML === playerSymbol && cells[4].innerHTML === playerSymbol && cells[6].innerHTML === playerSymbol)
    }

    function calc() {
        // line horizint x
        if (isWinner('x')) {
            const scoreSpan = document.querySelector("#playerOneScore span");
            const score = scoreSpan.innerHTML;
            scoreSpan.innerHTML = parseInt(score) + 1;          

            // setTimeout(() => {                
            //     alert('Krestiki Победители');
            // }, 500);

            function stylePlayerOne() {
                let element = document.getElementById("myDIV1");
                let controls = document.getElementById("bR1");
                element.classList.add("mystyle");
                controls.classList.add("showBlock");
            }
            stylePlayerOne();

            
        }

        if (isWinner('0')) {
            const scoreSpan = document.querySelector("#playerTwoScore span");
            const score = scoreSpan.innerHTML;
            scoreSpan.innerHTML = parseInt(score) + 1;

            // setTimeout(() => {                
            //     alert('Noliki Победители');
            // }, 500);

            function stylePlayerTwo() {
                let element = document.getElementById("myDIV2");
                let controls = document.getElementById("bR1");
                element.classList.add("mystyle");
                controls.classList.add("showBlock");
            }
            stylePlayerTwo();
        }
    }

    function isPlayerXturn(turn) {
        return turn % 2 !== 0;
    }

    function renderPlayerTurn(selectedCell, turn) {
        if (isPlayerXturn(turn)) {
            selectedCell.innerHTML = 'x';
            selectedCell.style.backgroundColor = '#0099ff';
        } else {
            selectedCell.innerHTML = '0';
            selectedCell.style.backgroundColor = '#ffff00';
        }
    }

    // third screen
    function bindGameControlsEvents() {
        let turn = 1;
        let ties = 10;

        function handleTurns() {
            turn++;
            ties--;

            if (ties == 0) {
                alert('последний ход');
            }
        }
        

        function handleKeyDown(event) {
            var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            console.log(event);

            if (event.key === 'Escape') {
                window.location.reload();
            }

            if ( event.key === " " ) {
                document.getElementById('restartGame').click();
                                
            }  

            if (keys.includes(event.key)) {
                const selectedCell = document.getElementById(`cell${event.key}`);

                if (selectedCell.innerText === '') {
                    renderPlayerTurn(selectedCell, turn);
                    handleTurns();
                    calc();
                } else {
                    alert('Поле занято');
                }
            }
        }

        function handleMouseClick(event) {
            if (event.target.className == 'cell') {
                const selectedCell = event.target;
                console.log(selectedCell.innerText === '');
                console.log(selectedCell.innerText);
                if (selectedCell.innerText === '') {
                    renderPlayerTurn(selectedCell, turn);
                    handleTurns();
                    calc();
                }
                else {
                    alert('Поле занято');
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown, true);
        document.getElementById('game').addEventListener('click', handleMouseClick, true);

        function resetHandlers() {
            document.removeEventListener('keydown', handleKeyDown, true);
            document.getElementById('game').removeEventListener('click', handleMouseClick, true);
        }

        return resetHandlers;
    }

    function playVideo() {
        videoContent = document.getElementById('contentElement');
        playButton = document.getElementById('playButton');
        playButton.addEventListener('click', onPlayButtonClick);

        function onPlayButtonClick() {
            videoContent.play();
        } 
        
        startContainer.style.display = "none";
        onPlayButtonClick();
        video.style.left = "0";
        setTimeout(() => {            
            backStyleStart();
        }, 6700);
    }

   

    // INIT GAME
    initEntryScreen();


    document.getElementById("playerOneScore").innerHTML =
        "<br>Score " + '<span>' + playerS.playerOne.score + '</span>';

    document.getElementById("playerTwoScore").innerHTML =
    "<br>Score " + '<span>' + playerS.playerTwo.score + '</span>';

    videoContent2 = document.getElementById('contentElement2');
    restartGame = document.getElementById('restartGame');
    restartGame.addEventListener('click', onPlayButtonClick2);

    function onPlayButtonClick2() {
        video.style.left = "0";
        videoContent.style.display = 'none';
        videoContent2.style.display = 'block';
        videoContent2.play();
        console.log('PLAY second');
    }

    rolik = document.getElementById('restartGame');
    video = document.getElementById('mainContainer');

    rolik.onclick = function (event) {
        onPlayButtonClick2();
        setTimeout(() => {
            videoContent2.pause();
            backStyle();
        }, 4050);

    }

    /// must be delete this style

    function backStyle() {
        video.style.left = "-500%";
        resetCellsToDefaultValues();
    }

    function backStyleStart() {
        video.style.left = "-500%";
        gameIndex = document.getElementById('gameIndex');
        gameIndex.style.display = "block";
    }

    function resetCellsToDefaultValues() {
        // document.getElementsByClassName('cell').forEach;
        var game = document.getElementById('game');

        while (game.firstChild) {
            game.removeChild(game.firstChild);
        }
        createCells();
        resetHandlers();
        resetHandlers = bindGameControlsEvents();

        //reset controls style
        const controls = document.getElementById("bR1");
        controls.classList.remove("showBlock");
    }

    //correct Enter key
    correctEnterButton();
    function correctEnterButton() {
        let enter = 0;
        const body = document.getElementById('body');        

        if ( enter == 0) {          

            document.addEventListener('keypress',
            function(event){
                //console.log(event);
                const firstPlayer = document.getElementById('firstPlayer').value;
                const secondPlayer = document.getElementById('secondPlayer').value;    

                //console.log(event.target); 
                
                if ( (event.key == "Enter") && ( enter == 0) && (checkNames(firstPlayer,secondPlayer)) ) {
                    document.getElementById('playButton').click();
                    enter++;
                //    console.log('i close event enter');
                }        
        });     
        }      
    }
}







