// List of text items
const texts = [
    "Boilerplate",
    "Start Your Web Project",
    "Create Modern Websites",
    "Build with Ease and Efficiency",
    "Transform Your Ideas into Reality",
    "Follow & Star @BlindByte98 On GitHub",
    "Follow @BlindByte On X",
    "Elevate Your Web Development",
    "Streamline Your Project Workflow",
    "Empower Your Coding Journey",
    "Your Next Project Begins Here",
    "Design and Develop Seamlessly",
    "Optimize Your Development Process",
    "Unlock New Possibilities with Our Boilerplate",
    "Kickstart Your Web Project Effortlessly",
    "Craft Beautiful Websites with Precision",
    "Simplify Your Development Approach",
    "Enhance Your Web Development Toolkit",
    "Get Started with Confidence",
    "Achieve More with Our Web Starter Kit"
];

// Function to change text with animation
function changeText(element, texts, interval) {
    let currentIndex = 0;
    const fadeDuration = 1000; // Duration of fade effect in milliseconds
    const intervalDuration = interval - fadeDuration; // Time between text changes
    
    function fadeOut() {
        return new Promise(resolve => {
            element.style.transition = `opacity ${fadeDuration / 1000}s ease-in-out`;
            element.style.opacity = '0';
            setTimeout(resolve, fadeDuration);
        });
    }

    function fadeIn(newText) {
        return new Promise(resolve => {
            element.textContent = newText;
            element.style.transition = `opacity ${fadeDuration / 1000}s ease-in-out`;
            element.style.opacity = '1';
            setTimeout(resolve, fadeDuration);
        });
    }

    async function animateText() {
        while (true) {
            await fadeOut();
            currentIndex = (currentIndex + 1) % texts.length;
            await fadeIn(texts[currentIndex]);
            await new Promise(resolve => setTimeout(resolve, intervalDuration));
        }
    }

    animateText();
}

// Apply the function to the <h1> element
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.style.opacity = '1'; // Ensure text is visible initially
    heading.style.transition = 'opacity 1s ease-in-out'; // Set initial transition style
    changeText(heading, texts, 4000); // Change text every 4 seconds
});


