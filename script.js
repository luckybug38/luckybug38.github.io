document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    // Add click event listener to each image in the gallery
    gallery.addEventListener("click", function(event) {
        if (event.target.tagName === "IMG") {
            const largeImageSrc = event.target.dataset.large;
            if (largeImageSrc) {
                modal.style.display = "block";
                modalImg.src = largeImageSrc;
            }
        }
    });

    // Close the modal when the close button is clicked
    modal.querySelector(".close").addEventListener("click", function() {
        modal.style.display = "none";
    });
});
