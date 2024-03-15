
window.onload = function () {
    var liItems = document.querySelectorAll("#destinations > li");
    console.log(liItems);

    liItems.forEach(function (li) {
        console.log(li);
    });

    var destinations = document.querySelector("#destinations");
    console.log(destinations);
    console.dir(destinations);

    var lsitItem = destination.children;

    console.log(destinations.children);

    for (var i in liItems) {
        if (typeof listItem[i] !== "function") {
            console.log(">", lsitItem[i]);
            console.log(">>", lsitItem[i].innerText)

        }
    }
    // lsitItem.forEach(function (li) {
    //     console.log(li);
    //     console.log(li.innerText);
    // });
}