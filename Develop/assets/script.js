// display date
var date = new Date()

function displayDate() {
    $("#currentDay").html(moment(date).format('MMMM Do YYYY, h:mm a'));
    setInterval(displayDate, 60*1000);
};
displayDate();

// update color of time blocks based on the time
function updateCards() {
    var currentHour = moment().hour();
    $(".time-block").each(function() {
        var timeBlock = $(this).attr("id");
        console.log(timeBlock, currentHour);
        if (timeBlock < currentHour) {
            $(this).addClass("past");
        }
        else if (timeBlock == currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
};
window.onload = updateCards();

//create local storage for tasks


//save task when you click on the checkmark