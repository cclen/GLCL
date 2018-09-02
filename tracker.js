let tracker = () => {

	let plus5 = document.getElementById('plus-5')
	let counter = document.getElementById('counter');
	let totalTime = 0;
	const timeInADAy = 1440;
	plus5.addEventListener('click', ()=>{
		if(totalTime < timeInADAy) {
			totalTime += 5;
			counter.innerHTML = totalTime;
		}
	});

	let minus5 = document.getElementById('minus-5')
	minus5.addEventListener('click', ()=>{
		if (totalTime > 0) {
			totalTime -= 5;
			counter.innerHTML = totalTime;
		}
	});




	console.log(min5);
};

document.addEventListener('DOMContentLoaded', tracker, false);
