console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let Audioturn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn ="X";
let isgameOver = false ;

 const changeTurn = () =>{
    return turn ==="X"?"0" : "X"
}

const checkWin =() =>{
    let Boxtext = document.getElementsByClassName('Boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((Boxtext[e[0]].innerText === Boxtext[e[1]].innerText) && (Boxtext[e[2]].innerText === Boxtext[e[1]].innerText) && (Boxtext[e[0]].innerText !== "")){
            document.querySelector('.Info').innerText = Boxtext[e[0]].innerText + " Won"
            isgameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width ="200px";
            document.querySelector('.winLine').style.width = '20vw';
            document.querySelector('.winLine').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Game Logic
//music.play();
let boxes = document.getElementsByClassName("Box");
Array.from(boxes).forEach(element =>{
    let Boxtext = element.querySelector('.Boxtext')
    element.addEventListener('click' , ()=> {
        if(Boxtext.innerText === '' ){
            Boxtext.innerText = turn;
            turn=changeTurn();
            Audioturn.play();
            checkWin();
            if(!isgameOver)
            {
                document.getElementsByClassName("Info")[0].innerText = "Turn for "+turn;
            }
        }
    })
})
Reset.addEventListener('click' , ()=>{
    let Boxtexts = document.querySelectorAll('.Boxtext');
    Array.from(Boxtexts).forEach(element =>{
        element.innerText=""
    });
    turn="X"
    isgameOver = false
    document.querySelector('.winLine').style.width = '0vw';
    document.getElementsByClassName("Info")[0].innerText = "Turn for "+turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width ="0px"
    
}
)