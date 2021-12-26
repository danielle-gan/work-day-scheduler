// display date
var date = new Date()

function displayDate() {
    $("#currentDay").html(moment(date).format('MMMM Do YYYY, h:mm a'));
    setInterval(displayDate, 60*1000);
};
displayDate();

// update color of time blocks based on the time
function updateCards() {
    currentHour = date.getHours();
    for(let i=0; i<12;i++)
        if (currentHour === document.querySelector(".id")) {
            console.log(".id")
        }
        else {
            console.log("not the current hour")
        }
};
// updateCards();

//create local storage for tasks

//add task when you click on a time card

//save task when you click on the checkmark