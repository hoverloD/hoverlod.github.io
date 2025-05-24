const container = document.getElementById('calendar');
for (let i = 0; i < 3912; i++) {
	const block = document.createElement('div');
	const passedWeeks = Math.floor((new Date() - new Date("May 7, 2001 00:00:00"))/604800000)
	block.className = 'block ' + (i < passedWeeks ? 'passed' : 'future');
	container.appendChild(block);
}