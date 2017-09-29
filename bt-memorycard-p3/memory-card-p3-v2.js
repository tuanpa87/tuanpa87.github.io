

var cardArraySource = ['c1.jpg','c2.jpg','c3.jpg','c4.jpg',
                      'c5.jpg','c6.jpg','c7.jpg','c8.jpg',
        	          'c9.jpg','c10.jpg','c11.jpg','c12.jpg',
                      'c13.jpg','c14.jpg','c15.jpg','c16.jpg',
                      'c17.jpg','c18.jpg','c19.jpg','c20.jpg',
                      'c21.jpg','c22.jpg','c23.jpg','c24.jpg'    
                    ] 


// var cardArraySource = ['c1.jpg','c2.jpg','c3.jpg','c4.jpg',
//                 'c1.jpg','c2.jpg','c3.jpg','c4.jpg',
// 	           'c1.jpg','c2.jpg','c3.jpg','c4.jpg'
// ]  //for easy test

  
var current = null;
var timeBarWidth, timeBarWidthRemain;
var timeBarCounter;
var winCount = 0;


//function shuffle card
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}

//function play sound
function playsound(sound) { 
    document.getElementById(sound + '-music').play();
    console.log('play' + sound)
}


//function open modal
function openModal(type) {
    $('.'+ type + '-modal').fadeIn(500);
};

//function close modal
function closeModal(type) {
    $('.'+ type + '-modal').fadeOut(500);
};


//function load game
function loadGame() {   
    //shuffle source and cut a half
    var cardArray = shuffle(cardArraySource).slice(0,12); 

    //Double and shuffle again
    var cardArrayDouble =  cardArray.concat(cardArray);
    var cardArrayShuffle = shuffle(cardArrayDouble);
    //console.log(cardArrayShuffle.sort());

    //re-add card to html
    for (var i = 0; i < cardArrayShuffle.length; i++ ) {
        $('.card' + (i + 1) + '>.front > img').attr('src','img/' + cardArrayShuffle[i]);
        $('.card' + (i + 1)).attr('data-name','' + cardArrayShuffle[i] +'')
    };
};

function reset() {
    //readd cleared cards and flip back all, set to begin condition
    $('.card').removeClass('flip').removeClass('card-clear');
    $('.card').css('pointer-events','auto').css('box-shadow','none');
    current = null;

    //set winCount
    winCount = 0; 
} 
    
//loadGame();

function startGame(mode) {
    loadGame();

    //close Modal('start')
    closeModal('start');

    //play background
    playsound('bg'); 
    document.getElementById("bg-music").loop = true;

    //set timebar
    if (mode == 1) { 
        timeBarWidthRemain = timeBarWidth = 240; //easy mode 240
    } else {
        timeBarWidthRemain = timeBarWidth = 120; //hard mode 120
    };

    timeBarCounter = setInterval(timeBar, 1000);
    timeBar();
}

//startGame();

function timeBar() {	
    if (timeBarWidthRemain == 0) {
        clearInterval (timeBarCounter);
        document.getElementById("bg-music").load();  //stop bg sound
        playsound('lose');
        openModal('lose');
    } else {
        console.log(timeBarWidthRemain);
        timeBarWidthRemain--;
        $('.timer-bar').css('width','' + (timeBarWidthRemain * 100/timeBarWidth) +'%');   //120
    } 
}
//timeBar();


$(function() { 
	//click card function
    $('.card').on('click', function () {
     
        $(this).css('pointer-events', 'none');
        $(this).toggleClass('flip');
        playsound('flip');

        if (!current) {
            current = $(this);
        } else {
            $('.card').css('pointer-events', 'none'); //disable all click

            var cardCompare = $(this); //khong the dung this trong setTimeout vi o trong spoce cua function khac
            if (current.attr('data-name') != $(this).attr('data-name')) {
                
                console.log('khac nhau');
                playsound('wrong');
                setTimeout(function() { 
                         cardCompare.toggleClass('flip');
                         current.toggleClass('flip');
                         current = null;
                         $('.card').not('.card-clear').css('pointer-events', 'auto'); //after 500ms set click pointer again but not include card-clear
                }, 600);        // css transition: all 0.5s ease; phai de o class .card vi de o .flip  khi toggle roi thi khong con hieu ung

            } else {
                console.log('giong nhau');
                cardCompare.css('box-shadow', '0px 0px 12px 8px rgba(128, 194, 230, 0.75)');
                current.css('box-shadow', '0px 0px 12px 8px rgba(128, 194, 230, 0.75)');
                playsound('right');
                winCount++;
                console.log('winCount = '+ winCount);

                setTimeout(function() { //hide card
               		cardCompare.addClass('card-clear');
                	current.addClass('card-clear'); 
                    current=null;
                }, 500);

                if (winCount == 12) {
                    clearInterval (timeBarCounter);
                    document.getElementById("bg-music").load() //stop bg sound
                    $('#snow').hide(500); //stop snow
                    openModal('win');
                    playsound('win'); 
                } else {  
                	 setTimeout(function() { 
                		$('.card').not('.card-clear').css('pointer-events', 'auto'); 
                		//Settimeout function 
                		//same amount of hide card function time 
                		//to get rid the case: click on third card in very short time
                	}, 500);  
                }
            }       
        }
    }); //end onclick function


    // start game
    $('.start-game').on('click', function() {
    	if ($(this).hasClass('normal')) {
            startGame(1);
        } else if ($(this).hasClass('hard')) {
            startGame(2);
        } else { //replay
            closeModal('lose');
            openModal('start');
            reset();  //                        
    	}
   }) //end start game event function

}) //end jquery ready function

openModal('start'); //1st time



