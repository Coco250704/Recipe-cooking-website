// Quiz Functionality 
// Pool of 40 questions (Array of question objects, each with question, options, and correct answer)
const questions = [
    { question: "What is the main ingredient in guacamole?", options: ["Tomatoes", "Avocados", "Peppers"], answer: "Avocados" },
    { question: "What temperature is ideal for baking a cake?", options: ["180°C", "150°C", "200°C"], answer: "180°C" },
    { question: "What is a common herb used in pesto?", options: ["Mint", "Coriander", "Basil"], answer: "Basil" },
    { question: "Which oil is traditionally used in Italian cooking?", options: ["Sunflower oil", "Olive oil", "Coconut oil"], answer: "Olive oil" },
    { question: "What type of dough is used for croissants?", options: ["Puff pastry", "Shortcrust pastry", "Filo pastry"], answer: "Puff pastry" },
    { question: "Which fruit is dried to make raisins?", options: ["Apricots", "Grapes", "Figs"], answer: "Grapes" },
    { question: "What is the primary ingredient in risotto?", options: ["Pasta", "Rice", "Barley"], answer: "Rice" },
    { question: "What type of cheese is used in a traditional Greek salad?", options: ["Cheddar", "Feta", "Mozzarella"], answer: "Feta" },
    { question: "What type of flour is used in traditional pasta making?", options: ["All-purpose flour", "Semolina flour", "Bread flour"], answer: "Semolina flour" },
    { question: "Which spice is derived from dried flower buds?", options: ["Cloves", "Saffron", "Cardamom"], answer: "Cloves" },
    { question: "What is traditionally wrapped in grape leaves?", options: ["Dolmas", "Tamales", "Pierogi"], answer: "Dolmas" },
    { question: "What is the main ingredient in hummus?", options: ["Chickpeas", "Lentils", "Beans"], answer: "Chickpeas" },
    { question: "What is the primary ingredient in sushi?", options: ["Rice", "Seaweed", "Fish"], answer: "Rice" },
    { question: "Which country is famous for paella?", options: ["Italy", "Spain", "Greece"], answer: "Spain" },
    { question: "What is the main ingredient in a Caprese salad?", options: ["Tomatoes", "Lettuce", "Carrots"], answer: "Tomatoes" },
    { question: "Which type of rice is used in risotto?", options: ["Basmati", "Jasmine", "Arborio"], answer: "Arborio" },
    { question: "What is the primary ingredient in tzatziki sauce?", options: ["Yogurt", "Sour cream", "Cream cheese"], answer: "Yogurt" },
    { question: "What is miso made from?", options: ["Soybeans", "Chickpeas", "Rice"], answer: "Soybeans" },
    { question: "What type of pastry is used in baklava?", options: ["Filo", "Puff", "Shortcrust"], answer: "Filo" },
    { question: "What is the main ingredient in sauerkraut?", options: ["Cabbage", "Lettuce", "Spinach"], answer: "Cabbage" },
    { question: "Which herb is commonly used in Italian dishes?", options: ["Basil", "Thyme", "Oregano"], answer: "Basil" },
    { question: "What is the main ingredient in a Margherita pizza?", options: ["Mozzarella", "Parmesan", "Cheddar"], answer: "Mozzarella" },
    { question: "Which spice gives curry its yellow color?", options: ["Turmeric", "Cumin", "Coriander"], answer: "Turmeric" },
    { question: "What is the main ingredient in French onion soup?", options: ["Onions", "Garlic", "Leeks"], answer: "Onions" },
    { question: "Which fruit is used to make traditional marmalade?", options: ["Oranges", "Lemons", "Limes"], answer: "Oranges" },
    { question: "What is the main ingredient in Italian gnocchi?", options: ["Potatoes", "Flour", "Semolina"], answer: "Potatoes" },
    { question: "What is the key ingredient in béchamel sauce?", options: ["Milk", "Cream", "Butter"], answer: "Milk" },
    { question: "Which seafood is used in a classic bouillabaisse?", options: ["Shrimp", "Lobster", "Fish"], answer: "Fish" },
    { question: "What is traditionally served with sushi?", options: ["Soy sauce", "Vinegar", "Ketchup"], answer: "Soy sauce" },
    { question: "What is the primary ingredient in tempura batter?", options: ["Flour", "Eggs", "Cornmeal"], answer: "Flour" },
    { question: "What type of wine is commonly used in risotto?", options: ["White wine", "Red wine", "Rosé"], answer: "White wine" },
    { question: "Which vegetable is the main ingredient in ratatouille?", options: ["Zucchini", "Eggplant", "Bell peppers"], answer: "Eggplant" },
    { question: "Which type of rice is commonly used for sushi?", options: ["Short-grain rice", "Basmati rice", "Jasmine rice"], answer: "Short-grain rice" },
    { question: "What is the main ingredient in tzatziki?", options: ["Cucumber", "Zucchini", "Pepper"], answer: "Cucumber" },
    { question: "What is a traditional filling for ravioli?", options: ["Spinach and ricotta", "Mushrooms", "Tomatoes"], answer: "Spinach and ricotta" },
    { question: "Which nut is commonly used in pesto?", options: ["Pine nuts", "Almonds", "Cashews"], answer: "Pine nuts" },
    { question: "Which seafood is the main ingredient in ceviche?", options: ["Fish", "Shrimp", "Octopus"], answer: "Fish" },
    { question: "What is the main ingredient in a Caesar salad dressing?", options: ["Anchovies", "Garlic", "Mustard"], answer: "Anchovies" },
    { question: "Which meat is traditionally used in shepherd's pie?", options: ["Lamb", "Beef", "Chicken"], answer: "Lamb" },
    { question: "What type of cheese is used in a Philly cheesesteak?", options: ["Provolone", "Cheddar", "Mozzarella"], answer: "Provolone" }
];

// Shuffle and pick 10 random questions
function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random()); // Shuffle the questions array randomly
    return shuffled.slice(0, 10); // Select and return the first 10 questions after shuffling
}

// Load quiz questions dynamically
function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container"); // Get the quiz container element
    const randomQuestions = getRandomQuestions(); // Get random 10 questions
    randomQuestions.forEach((q, index) => { // Loop through each question
        const questionDiv = document.createElement("div"); // Create a new div for each question
        questionDiv.classList.add("quiz-question"); // Add a CSS class to the question div
        questionDiv.innerHTML = ` 
            <p><strong>${index + 1}. ${q.question}</strong></p> 
            ${q.options.map((option, i) => ` 
                <input type="radio" id="q${index}a${i}" name="q${index}" value="${option}">
                <label for="q${index}a${i}">${option}</label><br> 
            `).join("")} 
        `; // Add question text and options to the div
        quizContainer.appendChild(questionDiv); // Append the question div to the quiz container
    });
}

// Calculate and display results with correct answers
function calculateScore() {
    const quizContainer = document.getElementById("quiz-container"); // Get the quiz container element
    const questionsDiv = quizContainer.getElementsByClassName("quiz-question"); // Get all question divs
    let score = 0; // Initialize score

    Array.from(questionsDiv).forEach((qDiv, index) => { // Loop through each question div
        const selected = document.querySelector(`input[name="q${index}"]:checked`); // Get the selected answer
        const correctAnswer = questions[index].answer; // Get the correct answer
        const options = qDiv.querySelectorAll("label"); // Get all the options for the question

        // Highlight correct and incorrect answers
        options.forEach((label) => {
            const input = label.previousElementSibling; // Get the associated radio input
            if (input.value === correctAnswer) {
                label.style.color = "green"; // Correct answers in green
            } else if (selected && input.checked && input.value !== correctAnswer) {
                label.style.color = "red"; // Incorrect selections in red
            }
        });

        if (selected && selected.value === correctAnswer) { // If selected answer is correct
            score++; // Increment score
        }
    });

    const resultDiv = document.getElementById("result"); // Get the result div element
    resultDiv.innerHTML = `You scored ${score} out of ${questionsDiv.length}`; // Display the score
}

// Add social media share functionality
function addShareButtons(score, totalQuestions) {
    const resultDiv = document.getElementById("result"); // Get the result div element
    const shareContainer = document.createElement("div"); // Create a div to hold share buttons
    shareContainer.id = "share-container"; // Add an ID to the container
    shareContainer.innerHTML = ` 
        <p>Share your score with your friends!</p> 
        <a id="facebook-share" target="_blank" class="share-button">Share on Facebook</a> 
        <a id="twitter-share" target="_blank" class="share-button">Share on Twitter</a> 
        <a id="whatsapp-share" target="_blank" class="share-button">Share on WhatsApp</a> 
    `; // Add share buttons with appropriate text and target links
    resultDiv.appendChild(shareContainer); // Append the share container to the result div

    const quizUrl = "https://yourwebsite.com/quiz"; // Placeholder URL for quiz page
    const shareText = `I scored ${score} out of ${totalQuestions} on the Coco's Flavour Fusion Culinary Quiz! Think you can beat my score?`; // Share message text

    // Update share links with the dynamic content
    document.getElementById("facebook-share").href =
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quizUrl)}`; // Facebook share link
    document.getElementById("twitter-share").href =
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(quizUrl)}`; // Twitter share link
    document.getElementById("whatsapp-share").href =
        `https://wa.me/?text=${encodeURIComponent(shareText + " " + quizUrl)}`; // WhatsApp share link
}

// Event listener for submitting quiz results
document.getElementById("submit-button").addEventListener("click", calculateScore);

// Initialize quiz when page is loaded
document.addEventListener("DOMContentLoaded", loadQuiz);
