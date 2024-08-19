document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('itinerary-form');
    const destinationInput = document.getElementById('destination');
    const dateInput = document.getElementById('date');
    const itineraryList = document.getElementById('itinerary-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const destination = destinationInput.value;
        const date = dateInput.value;

        if (destination && date) {
            addItemToList(destination, date);
            destinationInput.value = '';
            dateInput.value = '';
        }
    });

    function addItemToList(destination, date) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${destination} - ${date}
            <button class="remove-btn">Remove</button>
        `;

        li.querySelector('.remove-btn').addEventListener('click', () => {
            li.remove();
        });

        itineraryList.appendChild(li);
    }
});