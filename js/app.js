//Problem: user when clicking an image it goes to a dead end
//Solution: create an overlay with the large image - Lightbox


/* Plan 
1. Capture the click event on a link to an image
  1.1 Show the overlay
  1.2 Actually update the overlay with the image linked in the link
  1.3 Get childs alt atribute and set caption
  
2. Add overlay
  2.1 An image
  2.2 A caption

3. When overlay is clicked 
  3.1 Hide the overlay  
*/

var $overlay = $('<div id = "overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

//Part 2. Plan is executed out of order.

$overlay.append($caption);
$("body").append($overlay);


//Part 1

$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  
  $image.attr("src", imageLocation);
  
  
  $overlay.show();
  
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){
  $overlay.hide();

});




