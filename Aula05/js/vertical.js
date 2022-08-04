$("body").attr("class", "container-fluid mt-4");

$("<header>", { class: "row" })
    .append(
        $("<section>", { class: "col" }).append(
            $("<div>", { class: "card" }).append(
                $("<div>", { class: "card-body text-center" }).append(
                    $("<h1>", { text: "Vertical Option" })
                )
            )
        )
    )
    .appendTo("body");

$("body")
    .append(
        $("<section>", { class: "row" }).append(
            $("<aside>", { class: "col-3 mt-4" }).append(
                $("<section>", { class: "col" }).append(
                    $("<div>", { class: "card" }).append(
                        $("<div>", { class: "card-body" }).append(
                            $("<nav>").append(
                                $("<a>", { href: "/aula05/html/horizontal.html", text: "Horizontal" }),
                                $("<a>", { href: "/aula05/html/crud.html", text: "CRUD", target: "_blank" })
                            )
                        )
                    )
                )
            ),
            $("<main>", { class: "col mt-4" }).append(
                $("<section>", { class: "col" }).append(
                    $("<div>", { class: "card" }).append(
                        $("<div>", { class: "card-body" }),
                        $("<div>", { class: "card-footer", text: "Exercise using jQuery" })
                    )
                )
            )
        )
    )
    .appendTo("body");

$("aside nav a").attr(
    "class",
    "btn btn-outline-primary mb-1 btn-block form-control"
);

$("main .card-body").append(
    $("<table>", {
        class: "table table-bordered table-striped table-hover",
    }).append(
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
);