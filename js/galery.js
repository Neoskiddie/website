$(".clickable-image").removeClass("hidden");

function openModal(src) {
    imageModal.style.display = "block";
    document.getElementById("image-in-modal").src = src;
}

$(function () {
    // opening a modal
    var imageModal = document.getElementById("imageModal");
    var span = document.getElementsByClassName("pseudo-close-btn")[0];
    span.onclick = function () {
        imageModal.style.display = "none";
    }
});