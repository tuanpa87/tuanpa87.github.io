

var cardArray = ['c1.jpg','c2.jpg','c3.jpg','c4.jpg',
                'c5.jpg','c6.jpg','c7.jpg','c8.jpg',
			     'c9.jpg','c10.jpg','c11.jpg','c12.jpg'
] 
  
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

cardArrayShuffle = shuffle(cardArray);

for (var i = 0; i < cardArrayShuffle.length; i++ ) {
	$('.card' + (i + 1) + '>.front > img').attr('src','img/' + cardArrayShuffle[i]);
}

cardArrayShuffle = shuffle(cardArray);
for (var i = 0; i < cardArrayShuffle.length; i++ ) {
    $('.card' + (i + 13) + '>.front > img').attr('src','img/' + cardArrayShuffle[i]);
}

$('.card').on('click', function () {
	$(this).addClass('flip');
	$(this).css('pointer-events', 'none');
}); 


