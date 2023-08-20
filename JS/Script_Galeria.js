document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("close-btn");
    const expandedImage = document.querySelector(".expanded-image");
    const expandedTitle = document.querySelector(".expanded-title");
    const expandedDescription = document.querySelector(".expanded-description");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            const title = item.getAttribute("data-title");
            const description = item.getAttribute("data-description");
            const imageUrl = item.getAttribute("data-src");

            expandedImage.src = imageUrl;
            expandedTitle.textContent = title;
            expandedDescription.textContent = description;

            overlay.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", function () {
        overlay.style.display = "none";
    });
});
  
  
  
  
  