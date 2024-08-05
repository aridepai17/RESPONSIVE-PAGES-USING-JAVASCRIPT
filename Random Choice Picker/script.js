const tagElements = document.getElementById("tags");
const textarea = document.getElementById("textarea");

const createTags = (input) => {
    const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());
    
    tagElements.innerHTML = "";

    tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.classList.add("tag");
        tagElement.innerText = tag;
        tagElements.appendChild(tagElement);
    });
};

const pickRandomTag = () => {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
    tag.classList.add("highlight");
};

const unhighlightTag = (tag) => {
    tag.classList.remove("highlight");
};

const randomSelect = () => {
    const times = 30;
    const initialDelay = Math.floor(Math.random() * 500); // Initial delay up to 500ms
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        const highlightTime = Math.floor(Math.random() * 200) + 50; // Highlight time between 50ms and 250ms

        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag);
        }, highlightTime);

    }, Math.floor(Math.random() * 100) + 50); // Interval time between 50ms and 150ms

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100 + initialDelay); // Adding initial delay to the total duration
};

textarea.focus();
textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
            randomSelect();
        }, 10);
    }
});
