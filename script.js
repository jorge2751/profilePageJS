console.log("page loaded...");

function removeCardListItem(event) {
    var cardListItem = event.target.closest('.card-list-item');
    cardListItem.parentNode.removeChild(cardListItem);
    
    var badges = document.querySelectorAll('.badge');
    badges[0].textContent = parseInt(badges[0].textContent) - 1;
    badges[1].textContent = parseInt(badges[1].textContent) + 1;
}

var icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('click', removeCardListItem);
});

var editLink = document.querySelector('.edit');

editLink.addEventListener('click', function() {
var oldName = document.querySelector('.profile-name');
var newName = prompt("Enter the new name:");
oldName.textContent = newName;
});