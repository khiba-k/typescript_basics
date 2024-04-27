function PrintName(): HTMLElement | null {
    let GetName = document.getElementById("name");
    return(GetName);
}

let PrintHere = document.getElementById("print");
PrintFunction = PrintName();

if (PrintFunction !== null)
PrintHere.innerHTML = PrintName();