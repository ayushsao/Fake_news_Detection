function checkNews() {
    const headline = document.getElementById('newsHeadline').value;
    const loading = document.getElementById('loading');
    const resultSection = document.getElementById('result');
    const resultText = document.getElementById('resultText');

    if (headline.trim() === "") {
        alert("Please enter a valid news headline.");
        return;
    }

    // Show loading spinner
    loading.classList.remove('hidden');
    resultSection.classList.add('hidden');

    // Simulate API request (2 seconds delay)
    setTimeout(() => {
        loading.classList.add('hidden');

        // Simulate fake news detection logic
        const isFake = Math.random() < 0.5;

        if (isFake) {
            resultText.textContent = "🚨 This news is likely FAKE!";
            resultText.className = "fake";
        } else {
            resultText.textContent = "✅ This news appears to be REAL.";
            resultText.className = "real";
        }

        resultSection.classList.remove('hidden');
    }, 2000);
}
