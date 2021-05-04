function openMenu(){

    var menu = window.document.getElementById('myMenu');
    var btnBars = window.document.getElementById('btn-hamburguer');

    if(menu.className == "box-menu_header")
        {
            menu.className = "responsive";
        }
    else{
        menu.className = "box-menu_header";
    }
}
