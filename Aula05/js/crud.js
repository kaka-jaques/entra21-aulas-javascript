$("#update").hide();

var people = [];
var update = null;
writeTable();

$("form").on("submit", function (event) {
    event.preventDefault();
    let dice = getDice();

    if($("#add").is(":visible")){
        people.push(dice);

        console.log("Added");
    }else{
        people[people.indexOf(update)] = dice;
        $("#add").toggle();
        $("#update").toggle();
        console.log("Updated!");
    }
    writeTable();
    $("#clean").click();
});

$("#clean").on("click", function () {
    $("#add").show();
    $("#update").hide();
});

function getDice() {
    let name = $("#name").val();
    let age = $("#age").val();
    let city = $("#city").val();

    return{
        name: name,
        age: age,
        city: city,
    };
}

function writeTable() {
    $("tbody").empty();

    people.forEach((person) => {
        $("tbody").append(
            $("<tr>").append(
                $("<td>", {text: person.name}),
                $("<td>", {text: person.age}),
                $("<td>", {text: person.city}),
                $("<td>").append(
                    $("<button>", {
                        text: "Edit",
                        class: "btn btn-outline-primary",
                        click: function () {
                            update = person;
                            $("#name").val(person.name);
                            $("#age").val(person.age);
                            $("#add").toggle();
                            $("#update").toggle();
                        },
                    }),
                    $("<button>",{
                        text: "Delete",
                        class: "btn btn-outline-danger",
                        click: function(){
                            people.slice(people.indexOf(person), 1);
                            writeTable();
                        }
                    })
                )
            )
        )
    });
}
