function Ticket (name, time, age) {
  this.movie = name;
  this.time = time;
  this.age = age;
}

Ticket.prototype.ticketSale = function() {
  return this.movie + ", " + this.time + ", " + this.age ;
}

function resetFields() {
    $(".movies").val("");
    $("input.time").val("");
    $("input.custAge").val("");
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var inputtedMovie = parseInt($(".movies").val());
    var inputtedTime = parseInt($("input:radio[name=times]:checked").val());
    var inputtedAge = parseInt($("input:radio[name=age]:checked").val());
    var newTicket = (inputtedMovie + inputtedTime + inputtedAge + "$");

    event.preventDefault();

    $("#ticket").show();

    $("#ticket").text(newTicket);
    $("input#ticket").val("");
  });
});
