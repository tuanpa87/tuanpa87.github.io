
var cardArray = ['c1.jpg','c2.jpg','c3.jpg','c4.jpg',
              'c5.jpg','c6.jpg','c7.jpg','c8.jpg',
	         'c9.jpg','c10.jpg','c11.jpg','c12.jpg'
] 

  
var current = null;
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
}
document.getElementById("bg-music").loop = true;
playsound('bg')


var winCount = 0

$(function(){
    //re-add card to html
    var cardArrayDouble = cardArray.concat(cardArray);
    var cardArrayShuffle = shuffle(cardArrayDouble);
    for (var i = 0; i < cardArrayShuffle.length; i++ ) {
        $('.card' + (i + 1) + '>.front > img').attr('src','img/' + cardArrayShuffle[i]);
        $('.card' + (i + 1)).attr('data-name','' + cardArrayShuffle[i] +'')
    }

//click card 
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
                playsound('wrong')
                setTimeout(function() { 
                        cardCompare.toggleClass('flip');
                        current.toggleClass('flip');      
                        current = null;
                         $('.card').css('pointer-events', 'auto'); //after 500ms set click pointer again 
                }, 600);        // css transition: all 0.5s ease; phai de o class .card vi de o .flip  khi toggle roi thi khong con hieu ung

          

            } else {
              
                console.log('giong nhau');
                cardCompare.css('box-shadow', '0px 0px 12px 8px rgba(128, 194, 230, 0.75)')
                current.css('box-shadow', '0px 0px 12px 8px rgba(128, 194, 230, 0.75)')
                playsound('right')
                winCount++;

                if (winCount == 12) {
                    clearInterval (timeBarCounter);         
                    setTimeout(function() { 
                        cardCompare.css('opacity', '0');
                        current.css('opacity', '0');
                    }, 500);
                    //alert('win')

                } else {          
                    setTimeout(function() {
                       
                        cardCompare.css('opacity', '0');
                        current.css('opacity', '0');
                        current = null;
                       $('.card').css('pointer-events', 'auto');        
                    }, 500);

           
                }
            }
       
        }
    }); //end onclick function

});


