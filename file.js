document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const storiesContainer = document.getElementById("stories-container");
    
    const loadStories = () => {
        const stories = JSON.parse(localStorage.getItem("stories")) || [];
        storiesContainer.innerHTML = stories.map((story, index) => `
            <div class="story">
                <h3>${story.title}</h3>
                <p>${story.content}</p>
                <button onclick="editStory(${index})">Edit</button>
                <button onclick="deleteStory(${index})">Delete</button>
            </div>
        `).join("");
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = form.querySelector("[name='title']").value;
        const content = form.querySelector("[name='content']").value;
        const stories = JSON.parse(localStorage.getItem("stories")) || [];
        
        stories.push({ title, content });
        localStorage.setItem("stories", JSON.stringify(stories));
        loadStories();
    });

    window.editStory = (index) => {
        const stories = JSON.parse(localStorage.getItem("stories"));
        const story = stories[index];
        form.querySelector("[name='title']").value = story.title;
        form.querySelector("[name='content']").value = story.content;
        stories.splice(index, 1); // Remove o item para re-inserir
        localStorage.setItem("stories", JSON.stringify(stories));
        loadStories();
    };

    window.deleteStory = (index) => {
        const stories = JSON.parse(localStorage.getItem("stories"));
        stories.splice(index, 1);
        localStorage.setItem("stories", JSON.stringify(stories));
        loadStories();
    };

    loadStories();
});
