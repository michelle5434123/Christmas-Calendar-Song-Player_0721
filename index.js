const calendarEl=document.getElementById('calendar');
const messageEl=document.getElementById('message');
const audioEl=document.getElementById('xmas-audio');
const countEl=document.getElementById('count');

let attemptCount=0;// Initialize count

calendarEl.addEventListener("change", function() {
    attemptCount++; // Increment count
    countEl.textContent = `You have tried: ${attemptCount} time${attemptCount > 1 ? 's' : ''}`;

    const selectedDate = new Date(this.value);
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();

    if(month === 12 && day === 25){
        messageEl.textContent="🎄 Merry Christmas! Playing song...";
        audioEl.play();
    } else {
        messageEl.textContent = "This is not the X'mas";
        audioEl.pause();
    }
});