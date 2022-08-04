$("body").attr("class", "container")

$("<main>", { class: "row" }).append(
    $("<section>", { class: "col" }).append(
        $("<div>", { class: "card" }).append(
            $("<div>", { class: "card-body" }).append(
                $("<ul>").append(
                    $("<li>").append(
                        $("<a>", { href: "/aula05/html/horizontal.html", text: "Horizontal Option" })
                    ),
                    $("<li>").append(
                        $("<a>", { href: "/aula05/html/vertical.html", text: "Vertical Option" })
                    ),
                )
            )
        )
    )
).appendTo("body")