//dat ra ngoai 
var j = 0;


function press(x) {
	//chon sai
	//gan anh wrong vao day

	

	if (x !== quiz[j].Answer ) {
		for (var i =0; i < 4; i++) {
	 	document.querySelectorAll('div img')[i].style.visibility = 'hidden'
	 	};

		var img = document.querySelector ('#anh' + x)
		img.style.visibility = 'visible';



	
 	document.querySelector('#status').textContent = 'Đáp án chưa chính xác. Xin mời chọn đáp án khác';
 	} 
 	else {
 	
 			j = j + 1;
 	//chon dung
 	//gan anh right vao day
 		if (j < quiz.length)  { 

 		for (var i =0; i < 4; i++) {
	 	document.querySelectorAll('div img')[i].style.visibility = 'hidden'
	 	};

		var img = document.querySelector ('#anh' + x);
		img.src = 'img/right.png';
		img.style.visibility = 'visible';
	
 	
 


	//gan anh right vao
	
 	document.querySelector('#status').textContent = 'Hãy chọn một đáp án đúng:';
 	document.getElementById('question').innerText = quiz[j].question;
 	document.getElementById('A').innerHTML = quiz[j].A;
 	document.getElementById('B').innerHTML = quiz[j].B;
 	document.getElementById('C').innerHTML = quiz[j].C;
 	document.getElementById('D').innerHTML = quiz[j].D; 
 		}  else { 
 			window.location.href = 'chucmung.html' } 
 	
};

};	




var Quiz0 = {
	question:  'Sông MêKông chảy qua bao nhiêu quốc gia? ' ,
	A: 'A. 4   ',
	B: 'B. 5   ',
	C: 'C. 6   ',
	D: 'D. 7   ',
	Answer: 'B'
}

var Quiz1 = {
	question:  'Ai được coi là ông tổ của binh pháp thế giới?',
	A: "A. Tôn Tẫn    <img id = 'anhA' src = 'img/wrong.png' />",
	B: "B. Gia Cát Lượng   <img id = 'anhB' src = 'img/wrong.png' />",
	C: "C. Tôn Tử   <img id = 'anhC' src = 'img/wrong.png' />",
	D: "D. Tào Tháo   <img id = 'anhD' src = 'img/wrong.png' />",
	Answer: 'C'
}

var Quiz2 = {
	question:  'Quê hương của lễ hội Carnaval?',
	A: "A. Costa Rica    <img id = 'anhA' src = 'img/wrong.png' />",
	B: "B. Jamaica   <img id = 'anhB' src = 'img/wrong.png' />",
	C: "C. Uruquay   <img id = 'anhC' src = 'img/wrong.png' />",
	D: "D. Brazil   <img id = 'anhD' src = 'img/wrong.png' />",
	Answer: 'D'
}

var Quiz3 = {
	question:  'Hiện vật tiêu biểu cho nền văn hóa Đông Sơn ?',
	A: "A. Tranh sơn dầu   <img id = 'anhA' src = 'img/wrong.png' />",
	B: "B. Cồng chiêng   <img id = 'anhB' src = 'img/wrong.png' />",
	C: "C. Trống đồng   <img id = 'anhC' src = 'img/wrong.png' />",
	D: "D. Đáp án khác   <img id = 'anhD' src = 'img/wrong.png' />",
	Answer: 'C'
}

var Quiz4 = {
	question:  'Bản giao hưởng “Anh hùng” là của tác giả nào? ',
	A: "A. Mozart   <img id = 'anhA' src = 'img/wrong.png' />",
	B: "B. Franz Schubert  <img id = 'anhB' src = 'img/wrong.png' />",
	C: "C. Johannes Brahms  <img id = 'anhC' src = 'img/wrong.png' />" ,
	D: "D. Beethoven  <img id = 'anhD' src = 'img/wrong.png' />" ,
	Answer: 'D'
}

var quiz = [Quiz0, Quiz1, Quiz2, Quiz3, Quiz4];




var i = 0;
function themechange() {
i = i + 1;
if (i%2 === 0) {

$('body' ).css({
	'background-image': 'url("img/background.jpg")',
	'background-repeat': 'no-repeat',
 	'background-attachment': 'fixed',
 	'background-position': 'center' ,
})



$('h1, h2').css('color', '#005555')

$('#question, #A, #B, #C, #D' ).css({
	'background': '#80e7f2',
	'background-image': '-webkit-linear-gradient(top, #80e7f2, #3a7ea6)',
	'background-image': 'linear-gradient(to bottom, #80e7f2, #3a7ea6)',
	'font-family': 'Arial',
	'color': '#005555',
})

$('#question, #A, #B, #C, #D').hover(function(){ //mouse enter
$(this).css({
'background': '#46aff0',
'background-image': 'linear-gradient(to bottom, #3cf6fc, #3498db)',
})


}, function(){  //mouse leave

$(this).css({
	'background': '#80e7f2',
	'background-image': '-webkit-linear-gradient(top, #80e7f2, #3a7ea6)',
	'background-image': 'linear-gradient(to bottom, #80e7f2, #3a7ea6)',
})

}

) //end hover
	




} else {
$('body' ).css({
	'background-image': 'url("img/background 2.jpg")',
	'background-repeat': 'no-repeat',
 	'background-attachment': 'fixed',
 	'background-position': 'center' 
})

$('h1, h2').css('color', '#2E8B57')

$('#question, #A, #B, #C, #D' ).css({
	'background': '#92f05b',
	'background-image': '-webkit-linear-gradient(top, #92f05b, #ddf2b5)',
	'background-image': 'linear-gradient(to bottom, #92f05b, #ddf2b5)',
	'font-family': 'Verdana',
	'color': ' #2E8B57',

})

// .hover(xử lý mouse enter,xử lý mouse leave)

$('#question, #A, #B, #C, #D').hover(function(){ //mouse enter
$(this).css({
'background': '#42f55d',
'background-image': 'linear-gradient(to bottom, #42f55d, #5bf23d)'
})


}, function(){  //mouse leave

$(this).css({
	'background': '#92f05b',
	'background-image': '-webkit-linear-gradient(top, #92f05b, #ddf2b5)',
	'background-image': 'linear-gradient(to bottom, #92f05b, #ddf2b5)',
})

}

) //end hover
	

} //end esle

} // end functiom
