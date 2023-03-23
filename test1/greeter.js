function greeter(person) {
    return "Hello, ".concat(person.firstName, " ").concat(person.lastName);
}
var user = {
    firstName: "testFirstName",
    lastName: "testLastName",
};
document.body.textContent = greeter(user);
