window.onscroll = function() {myFunction()};
        
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
        
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function openPopup(type) {
    var popupId = 'popup-' + type;
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}