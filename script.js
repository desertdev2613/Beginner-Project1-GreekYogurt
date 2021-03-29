const order = () => {
    let quantity = prompt("How many cups would you like?"); 
    let name = prompt("What is your first name?");
    let email = prompt("What is your email?");

    alert("Thanks" + " " +  name + "! " + " You ordered " + quantity + " cartons of Greek yogurt. Details of your purchase will be sent to " + email + ". Feel free to contact us if you have any questions hello@contactsupport.com");
}

document.getElementById("order").addEventListener("click", order); 