document.addEventListener('DOMContentLoaded', () => {

    // --- Initialize AOS (Animate on Scroll) Library ---
    AOS.init({
        duration: 1000, // animation duration in milliseconds
        once: true,     // whether animation should happen only once - while scrolling down
        offset: 50,     // offset (in px) from the original trigger point
    });

    // --- Dark Mode Toggle ---
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    // Function to set the theme
    const setTheme = (isDarkMode) => {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            themeToggle.checked = true;
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeToggle.checked = false;
            localStorage.setItem('theme', 'light');
        }
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    // If there's a saved theme, apply it. Otherwise, check user's system preference.
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark);
    }

    // Add event listener for the toggle switch
    themeToggle.addEventListener('change', () => {
        setTheme(themeToggle.checked);
    });


    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px
            if (!backToTopButton.classList.contains('show')) {
                backToTopButton.style.display = 'block';
                setTimeout(() => backToTopButton.classList.add('show'), 10);
            }
        } else {
            if (backToTopButton.classList.contains('show')) {
                backToTopButton.classList.remove('show');
                setTimeout(() => backToTopButton.style.display = 'none', 300);
            }
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
