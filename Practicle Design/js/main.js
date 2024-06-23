document.addEventListener('DOMContentLoaded', () => {
    // Handle form submissions
    document.getElementById('signup-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle sign-up logic here
    });

    document.getElementById('signin-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle sign-in logic here
    });

    document.getElementById('event-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle event creation/editing logic here
    });

    // Mock event data
    const events = [
        {
            title: "Event 1",
            image: "event1.jpg",
            info: "Short info about event 1...",
            detail: "Detailed description of event 1...",
            date: "2024-06-25",
            time: "18:00",
            location: "Location 1"
        },
        {
            title: "Event 2",
            image: "event2.jpg",
            info: "Short info about event 2...",
            detail: "Detailed description of event 2...",
            date: "2024-06-26",
            time: "19:00",
            location: "Location 2"
        },
        {
            title: "Event 3",
            image: "event3.jpg",
            info: "Short info about event 3...",
            detail: "Detailed description of event 3...",
            date: "2024-06-27",
            time: "20:00",
            location: "Location 3"
        }
    ];

    const eventList = document.querySelector('#event-list');
    if (eventList) {
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'col';
            eventCard.innerHTML = `
                <div class="card h-100">
                    <img src="${event.image}" class="card-img-top" alt="Event Image">
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">${event.info}</p>
                        <a href="event-detail.html" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            `;
            eventList.appendChild(eventCard);
        });
    }
});
