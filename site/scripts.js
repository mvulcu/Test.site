document.addEventListener('DOMContentLoaded', function() {
    let terms = [];
    let currentIndex = 0;

    // Получение терминов из текстового файла
    function fetchTerms() {
        fetch('terms.json')
            .then(response => response.json())
            .then(data => {
                terms = data;
                updateTerm();
            })
            .catch(error => console.error('Error fetching terms:', error));
    }

    // Обновление отображаемого термина
    function updateTerm() {
        if (terms.length > 0) {
            const termTitleElement = document.getElementById('term-title');
            const termDescriptionElement = document.getElementById('term-description');

            termTitleElement.textContent = terms[currentIndex].title;
            termDescriptionElement.textContent = terms[currentIndex].description;

            currentIndex = (currentIndex + 1) % terms.length;
        }
    }

    // Обновлять термин каждые 5
    setInterval(updateTerm, 5000);

    // Изначально получить термины и установить первый термин
    fetchTerms();
});
