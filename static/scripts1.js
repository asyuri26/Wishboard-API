document.getElementById("add-data").addEventListener("click", function() {
    const newItem = {
        name: "New Item",
        description: "This is a new item",
        price: 10.0,
        tax: 1.0
    };

    fetch("/send-data/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    }).then(response => response.json())
    .then(data => {
        alert("Data added: " + JSON.stringify(data));
        location.reload();
    });
});

document.getElementById("modify-data").addEventListener("click", function() {
    const modifiedItem = {
        name: "Modified Item",
        description: "This is a modified item",
        price: 20.0,
        tax: 2.0
    };

    const index = prompt("Enter the index of the item to modify:");

    fetch("/modify-data/?index=" + index, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(modifiedItem)
    }).then(response => response.json())
    .then(data => {
        alert(data.message);
        location.reload();
    });
});

document.getElementById("save-data").addEventListener("click", function() {
    fetch("/save-data/", {
        method: "POST"
    }).then(response => response.json())
    .then(data => {
        alert(data.message);
    });
});
