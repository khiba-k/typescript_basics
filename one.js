function MyName() {
    var name = "Khiba";
    return (name);
}
;
function MyAge() {
    var age = 19;
    return (age);
}

var MyNameIs = document.getElementById("name");

var MyAgeIs = document.getElementById("age");

MyNameIs.innerHTML = MyName();
MyAgeIs.innerHTML = MyAge();