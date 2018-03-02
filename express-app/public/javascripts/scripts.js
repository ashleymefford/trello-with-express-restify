$(document).ready(function() {
    $('.addSwimLane').on("click", function() {
        let swimlane =
            '<div class="swimlane">' +
            '<div class="swimlaneTitle">Add Swimlane Title</div>' +
            '<button class="addCard">Add Card</button>' +
            '<button class="removeSwimlane">Remove</button>' +
            '</div>';
        $('.container').append(swimlane);
    });

    $('.container').on('click', '.swimlaneTitle', function(){
        let swimlaneTitle= prompt('What is the Swimlane title?');
        $(this).closest('.swimlaneTitle').text(swimlaneTitle);


        $.ajax({
            method: "GET",
            url: "http://localhost:8080/swimLanes",
            data: swimLanes
            })
            .done(function(data) {
                console.log(data);
        });

        $.ajax({
            method: "POST",
            url: "http://localhost:8080/swimLanes",
            data: swimLanes
            })
            .done(function(data) {
                console.log("Data Saved: " + data);
            });

    });

    $('.container').on('click', '.removeSwimlane', function() {
        $(this).closest('.swimlane').remove();
    });

    $('.container').on('click', '.addCard', function() {
        let taskCard =
            '<div class="taskCard">' +
            '<button class="removeCard">X</button>' +
            '<div class="cardTitle">Add Card Title</div>' +
            '<div class="cardDescription">Add Card Description</div>' +
            '</div>';
        $(this).closest('.swimlane').append(taskCard);
    });

    $('.container').on('click', '.cardTitle', function(){
        let cardTitle= prompt('What is the card title?');
        $(this).closest('.cardTitle').text(cardTitle);
    });

    $('.container').on('click', '.cardDescription', function(){
        let cardDescription= prompt('What is the card description?');
        $(this).closest('.cardDescription').text(cardDescription);
    });

    $('.container').on('click', '.removeCard', function() {
        $(this).closest('.taskCard').remove();
    });

    var swimLanes = {
        swimlaneTitle: $(".swimlaneTitle").val(),
        // cardTitle: $(".cardTitle").val,
        // cardDescription: $(".cardDescription").val(),

    }

    //


});