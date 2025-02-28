document.addEventListener("DOMContentLoaded", () => {
    const worksContainer = document.getElementById("worksContainer")
    const showMoreBtn = document.getElementById("showMoreBtn")
    let isExpanded = false
  
    if (showMoreBtn && worksContainer) {
      showMoreBtn.addEventListener("click", () => {
        isExpanded = !isExpanded
        if (isExpanded) {
          worksContainer.classList.add("expanded")
          showMoreBtn.textContent = "Show Less"
        } else {
          worksContainer.classList.remove("expanded")
          showMoreBtn.textContent = "Show More"
        }
      })
    }
  
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })
  })
  
  