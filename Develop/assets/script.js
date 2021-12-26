// display date
var date = new Date()

function displayDate() {
    $("#currentDay").html(moment(date).format('MMMM Do YYYY, h:mm a'));
}
setInterval(displayDate(), 60*1000);

// update color of time blocks based on the time
function updateCards() {
    var currentHour = moment().hour();
    $(".time-block").each(function() {
        var timeBlock = $(this).attr("id");
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

//create and load local storage for tasks
$("#7 .task").val(localStorage.getItem("7"));
$("#8 .task").val(localStorage.getItem("8"));
$("#9 .task").val(localStorage.getItem("9"));
$("#10 .task").val(localStorage.getItem("10"));
$("#11 .task").val(localStorage.getItem("11"));
$("#12 .task").val(localStorage.getItem("12"));
$("#13 .task").val(localStorage.getItem("13"));
$("#14 .task").val(localStorage.getItem("14"));
$("#15 .task").val(localStorage.getItem("15"));
$("#16 .task").val(localStorage.getItem("16"));
$("#17 .task").val(localStorage.getItem("17"));
$("#18 .task").val(localStorage.getItem("18"));

//save task
$(".saveBtn").on("click", function () {
    var task = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, task);
});