var ball ;
var	box ;
var paddle1;
var paddle2;
var player1Y;
var player2Y;
var number;

var vx, vy;
var ballY, ballX;

window.onload = Init;

function Init(){
	ball = document.getElementById('ball');
	box = document.getElementById('box');
	paddle1 = document.getElementById('paddle1');
	paddle2 = document.getElementById('paddle2');
	ballX = (box.offsetWidth/2) - (ball.offsetWidth/2);
	ballY =  (box.offsetHeight/2) - (ball.offsetHeight/2);
	player2Y = (box.offsetHeight / 2) - (paddle2.offsetHeight / 2);
	player1Y = (box.offsetHeight / 2) - (paddle1.offsetHeight / 2);
	paddle1.style.left = 0 + 'px';
	paddle1.style.top = player1Y + 'px';
	paddle2.style.left = box.offsetWidth - (paddle2.offsetWidth) + 'px';
	paddle2.style.top = player2Y + 'px';
	ball.style.left = ballX + 'px';
	ball.style.top = ballY + 'px';
}

var paddle1 = document.getElementById('paddle1');
var paddle2 = document.getElementById('paddle2');
document.body.addEventListener('keydown',function(event){
	if(event.key == 'ArrowDown' && paddle2.getBoundingClientRect().bottom < box.offsetHeight){
		paddle2.style.top = (parseFloat(paddle2.style.top.slice(0,-2)) + 50 ) + 'px';
	}
	if(event.key == 'ArrowUp' && paddle2.getBoundingClientRect().top > 0){
		paddle2.style.top = (parseFloat(paddle2.style.top.slice(0,-2)) - 50 ) + 'px';
	}
	if(event.key == 's'&& paddle1.getBoundingClientRect().bottom < box.offsetHeight){
		paddle1.style.top = (parseFloat(paddle1.style.top.slice(0,-2)) + 50 ) + 'px';
	}
	if(event.key == 'w'&& paddle1.getBoundingClientRect().top > 0){
		paddle1.style.top = (parseFloat(paddle1.style.top.slice(0,-2)) - 50 ) + 'px';
	}
});
function Start(){
	vx = Math.random() * 3 + 2;
	vy = Math.random() * 3 + 2;
	msg.innerHTML = '';
	iID = setInterval(function(){
		ballX += vx;
		ballY += vy;
		if(ballX < 0){
			clearInterval(iID);
			Init();
			msg.innerHTML = '<h2>Player 2 Win!</h2>';
		}
		if((ballX + ball.offsetWidth) > box.offsetWidth){
			clearInterval(iID);
			Init();
			msg.innerHTML = '<h2>Player 1 Win!</h2>';
		}
		if(ballY < 0 || ((ballY + ball.offsetHeight) > box.offsetHeight))
			vy = -vy;
		if(ballX < (paddle1.offsetWidth)){
			if(((ballY + ball.offsetHeight) > paddle1.getBoundingClientRect().top) && ballY < (paddle1.getBoundingClientRect().top + paddle1.offsetHeight)){
				vx = -vx+1;
			}
		}
		if((ballX + ball.offsetWidth+10) > box.offsetWidth){
			if(((ballY + ball.offsetHeight) > paddle2.getBoundingClientRect().top) && ballY < (paddle2.getBoundingClientRect().top + paddle2.offsetHeight)){
				vx = -vx-1;
			}
		}
		ball.style.left = ballX + 'px';
		ball.style.top = ballY + 'px';
		}, 10);
}
