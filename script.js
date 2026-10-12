function calculateTicket() {

    const name = document.getElementById("passenger").value.trim();

    const quantity = Number(
        document.getElementById("quantity").value
    );

    const payment = Number(
        document.getElementById("payment").value
    );

    const ticketPrice = 25;

    const result = document.getElementById("result");

    if (name === "") {
        result.innerHTML = "<h3>Please enter passenger name.</h3>";
        return;
    }

    if (
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 99
    ) {
        result.innerHTML = "<h3>Enter tickets between 1 and 99.</h3>";
        return;
    }

    if (
        document.getElementById("payment").value.trim() === "" ||
        !Number.isFinite(payment) ||
        payment < 0
    ) {
        result.innerHTML = "<h3>Please enter a valid payment amount.</h3>";
        return;
    }

    const total = ticketPrice * quantity;

    let message = `
        <h3>🎫 Ticket Summary</h3>
        <p><strong>Passenger:</strong> ${escapeHTML(name)}</p>
        <p><strong>Ticket Price:</strong> ₹${ticketPrice}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Total Fare:</strong> ₹${total}</p>
        <p><strong>Payment:</strong> ₹${payment}</p>
    `;

    if (payment >= total) {
        const change = payment - total;

        message += `
            <p><strong>Change:</strong> ₹${change}</p>
            <p>✅ Ticket calculation successful!</p>
        `;
    } else {
        const due = total - payment;

        message += `
            <p><strong>Remaining Amount:</strong> ₹${due}</p>
            <p>⚠️ Please pay the remaining amount.</p>
        `;
    }

    result.innerHTML = message;
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function (char) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[char];
    });
}
