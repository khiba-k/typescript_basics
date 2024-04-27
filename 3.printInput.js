/*function PrintName(): HTMLElement | null {
    let GetName = document.getElementById("name");
    return GetName;
}

function display() {
    let PrintHere = document.getElementById("print");
    let PrintElement = PrintName();

    if (PrintElement !== null)
        PrintHere.innerHTML = PrintElement.textContent;

}*/
/*function text(): string {
    var txt: string = "Hello World";
    return txt;
}*/
function display() {
    var GetInsert = document.getElementById("insertValue");
    var GetLocation = document.getElementById("printLocation");
    if (GetLocation != null && GetInsert !== null)
        GetLocation.textContent = GetInsert.value;
}
