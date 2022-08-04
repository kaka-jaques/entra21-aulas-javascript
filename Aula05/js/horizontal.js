$("body").attr("class", "container mt-4");

$("<header>", { class: "row" })
    .append(
        $("<section>", { class: "col" }).append(
            $("<div>", { class: "card" }).append(
                $("<div>", { class: "card-body text-center" }).append(
                    $("<h1>", { text: "Horizontal Option" }),
                    $("<a>", { href: "/aula05/html/vertical.html", text: "Vertical Option" }),
                    $("<a>", { href: "/aula05/html/crud.html", text: "CRUD", target: "_blank" })
                )
            )
        )
    )
    .appendTo("body");

$("header .card-body a").attr("class", "btn btn-outline-primary me-2");

$("<main>", { class: "row mt-4" })
    .append(
        $("<section>", { class: "col" }).append(
            $("<div>", { class: "card" }).append(
                $("<div>", { class: "card-body" }),
                $("<div>", { class: "card-footer", text: "Exercise using jQuery" })
            )
        )
    )
    .appendTo("body");


$("main .card-body").append(
    $("<table>", { class: "table table-bordered table-striped table-hover" }).append(
        $("<thead>").append(
            $("<th>", { text: "Name" }),
            $("<th>", { text: "Age" }),
            $("<th>", { text: "City" }),
        ),
        $("<tbody>").append(
            $("<tr>").append(
                $("<td>", { text: "Ozzy Osbourne" }),
                $("<td>", { text: "73" }),
                $("<td>", { text: "Birmingham" }),
            ),
            $("<tr>").append(
                $("<td>", { text: "James Hetfield" }),
                $("<td>", { text: "59" }),
                $("<td>", { text: "Downey" }),
            ),
            $("<tr>").append(
                $("<td>", { text: "Matt Shadows" }),
                $("<td>", { text: "40" }),
                $("<td>", { text: "California" }),
            ),
        )
    )
)