// Function to show the result and hide the others
function showResult(algorithm) {
    // Hide all results
    const results = document.querySelectorAll('.result');
    results.forEach(result => {
        result.style.display = 'none';
    });

    // Show the selected algorithm's result
    const selectedResult = document.getElementById(algorithm);
    if (selectedResult) {
        selectedResult.style.display = 'block';
    }
}
