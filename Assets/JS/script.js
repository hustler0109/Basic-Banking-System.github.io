let myAccountBalance = parseFloat(document.getElementById("myAccountBalance").innerText); // Changed parseInt to parseFloat for potential decimal values

function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseFloat(document.getElementById("enterAmount").value); // Changed parseInt to parseFloat for potential decimal values

    if (enterAmount > 10000) {
        alert("Insufficient Balance.");
    } else {
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseFloat(document.getElementById(findUserBankAccount).innerHTML) + enterAmount; // Changed parseInt to parseFloat for potential decimal values
        var newMyAccountBalance = myAccountBalance - enterAmount; // Renamed variable to avoid confusion with global variable
        document.getElementById("myAccountBalance").innerText = newMyAccountBalance.toFixed(2); // Using toFixed(2) to display only two decimal places
        document.getElementById(findUserBankAccount).innerHTML = finalAmount.toFixed(2); // Using toFixed(2) to display only two decimal places
        alert(`Successful Transaction !! $${enterAmount.toFixed(2)} is sent to ${enterName}@gmail.com.`); // Using toFixed(2) to display only two decimal places

        // transaction history 
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`$${enterAmount.toFixed(2)} is sent to recipient with Email-id ${enterName}@gmail.com on ${new Date()}.`); // Changed Date() to new Date() to create a new Date object
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}
