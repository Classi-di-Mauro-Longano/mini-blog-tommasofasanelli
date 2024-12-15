let item = document.querySelector('.toggle-single');
item.addEventsListener("click", function(){
    item.classList.toggle('toggle-active');
});