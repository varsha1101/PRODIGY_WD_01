// Get the navigation bar

var navbar = document.getElementById("navbar");


// Get the offset position of the navbar

var sticky = navbar.offsetTop;


// Function to add scroll event listener

function onScroll()
{
    
if (window.pageYOffset >= sticky) 
{
        
navbar.classList.add("nav-scrolled");

} 
else 
{
        
navbar.classList.remove("nav-scrolled");
   
}

}


// Listen for scroll events

window.onscroll = function() 
{
    
onScroll();

};


// Add hover effects to menu items

var menuItems = document.querySelectorAll("#navbar ul li");


menuItems.forEach(function(item) 
{
    
item.addEventListener("mouseenter", function() 
{
        
this.querySelector("a").style.color = "#ff7f50"; 
// Example hover color
    
});
    
    
item.addEventListener("mouseleave", function() 
{
        
this.querySelector("a").style.color = "#fff"; 
// Revert to original color
    
});

});