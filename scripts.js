document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".timeline-dot");
    const tooltip = document.getElementById("tooltip");

    // Add event listener for each dot
    dots.forEach(dot => {
        // Hover effect: show tooltip and make the dot bigger
        dot.addEventListener("mouseover", function (event) {
            const date = dot.getAttribute("data-date");
            const location = dot.getAttribute("data-location");

            // Show the tooltip with date and location
            tooltip.innerHTML = `${date} - ${location}`;
            tooltip.style.display = "block";

            // Get the position of the dot and position the tooltip just above it
            const rect = dot.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`; // 5px gap above

            // Make the dot bigger
            dot.style.transform = "scale(1.3)";
        });

        // Mouse leave: Hide tooltip and revert dot size
        dot.addEventListener("mouseleave", function () {
            tooltip.style.display = "none";
            dot.style.transform = "scale(1)";
        });

        // Click: Redirect to the corresponding section on the same page
        dot.addEventListener("click", function () {
            const targetSectionId = dot.getAttribute("data-url"); // Use data-url for target section ID
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});


function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}