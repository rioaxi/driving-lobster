document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".timeline-dot");
    const tooltip = document.getElementById("tooltip");

    dots.forEach(dot => {
        const lobsterImg = document.createElement("img");
        lobsterImg.src = "lobster.png";
        lobsterImg.classList.add("lobster-icon");
        lobsterImg.style.position = "absolute";
        lobsterImg.style.width = "40px";
        lobsterImg.style.height = "40px";
        lobsterImg.style.display = "none"; 
        dot.appendChild(lobsterImg);

        dot.addEventListener("mouseover", function (event) {
            const date = dot.getAttribute("data-date");
            const location = dot.getAttribute("data-location");

            tooltip.innerHTML = `${date} - ${location}`;
            tooltip.style.display = "block";

            const rect = dot.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;

            lobsterImg.style.display = "block";
            lobsterImg.style.left = "50%";
            lobsterImg.style.transform = "translateX(-50%)";
            lobsterImg.style.top = "25px";

            dot.style.transform = "scale(1.3)";
        });

        dot.addEventListener("mouseleave", function () {
            tooltip.style.display = "none";
            dot.style.transform = "scale(1)";
            lobsterImg.style.display = "none";
        });

        dot.addEventListener("click", function () {
            const targetSectionId = dot.getAttribute("data-url");
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    document.querySelectorAll('.carousel-wrapper').forEach(container => {
        let index = 0;
        const carousel = container.querySelector('.carousel');
        const images = container.querySelectorAll('.carousel img');
        const totalImages = images.length;
        const leftArrow = container.querySelector('.prev');
        const rightArrow = container.querySelector('.next');    
    
        function nextImage() {
            index = (index + 1) % totalImages; 
            updateCarousel();
        }
    
        function prevImage() {
            index = (index - 1 + totalImages) % totalImages; 
            updateCarousel();
        }
    
        function updateCarousel() {
            const imageWidth = images[0].clientWidth + 15; 
            carousel.style.transform = `translateX(${-index * imageWidth}px)`;
        }

        leftArrow.addEventListener('click', () => {
            prevImage();
            resetInterval();
        });
    
        rightArrow.addEventListener('click', () => {
            nextImage();
            resetInterval();
        });
    });
});
