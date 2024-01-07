function clickForFamilyImages() {
    function handleLiClick(event) {
      const liURL = event.currentTarget.getAttribute("data-url");
      window.location.href = liURL;
    }
    const lastTestImage = document.querySelectorAll(".family_image");
    lastTestImage.forEach((url) => (url.onclick = handleLiClick));
  }
  clickForFamilyImages();