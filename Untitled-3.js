// ==========================================
// Accessible Interactive Photo Gallery
// ==========================================

/**
 * Function called when page loads
 * Adds tabindex attributes to all gallery images for keyboard accessibility
 */
function addTabFocus() {
    console.log("Page loaded - addTabFocus function triggered!");
    
    // Get all preview images
    var previews = document.querySelectorAll('.preview');
    
    console.log("Found " + previews.length + " images to add tabindex to");
    
    // Loop through each image and add tabindex="0"
    for (var i = 0; i < previews.length; i++) {
        previews[i].setAttribute('tabindex', '0');
        console.log("Added tabindex to image " + (i + 1) + ": " + previews[i].alt);
    }
    
    console.log("Tabindex attributes added successfully!");
}

/**
 * Function called on mouseover or focus event
 * Updates the main display area with the selected image
 * @param {HTMLElement} previewPic - The image element being hovered or focused
 */
function upDate(previewPic) {
    // Verify event is triggering
    console.log("upDate function triggered!");
    
    // Log information about the previewPic for debugging
    console.log("Alt text:", previewPic.alt);
    console.log("Source URL:", previewPic.src);
    
    // Get the display element
    var displayDiv = document.getElementById("image");
    
    // Change the text to the alt text of the hovered/focused image
    displayDiv.innerHTML = previewPic.alt;
    
    // Change the background image to the source of the hovered/focused image
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Visual feedback - change text color to white when image is showing
    displayDiv.style.color = "#ffffff";
    displayDiv.style.textShadow = "2px 2px 4px rgba(0,0,0,0.8)";
    
    // Add ARIA label for screen readers
    displayDiv.setAttribute('aria-label', previewPic.alt);
    
    console.log("Update complete - displaying: " + previewPic.alt);
}

/**
 * Function called on mouseout or blur event
 * Resets the main display area to original state
 */
function undo() {
    // Verify event is triggering
    console.log("undo function triggered!");
    
    // Get the display element
    var displayDiv = document.getElementById("image");
    
    // Reset background image to empty
    displayDiv.style.backgroundImage = "url('')";
    
    // Reset text to original message
    displayDiv.innerHTML = "Hover over or focus on an image below to display here.";
    
    // Reset text styling
    displayDiv.style.color = "#a0a0a0";
    displayDiv.style.textShadow = "none";
    
    // Reset ARIA label
    displayDiv.setAttribute('aria-label', 'Main display area for selected image');
    
    console.log("Undo complete - reset to default state");
}

// ==========================================
// Event Listeners
// ==========================================

// Add onload event listener to automatically add tabindex when page loads
window.addEventListener('load', addTabFocus);

// Alternative: Use onload attribute on body tag (as requested in assignment)
// <body onload="addTabFocus()">
// But addEventListener is preferred for better separation of concerns

console.log("JavaScript loaded successfully - waiting for page load event");