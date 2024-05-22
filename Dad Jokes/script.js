const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJoke = async () => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeElement.innerHTML = data.joke;
}

generateJoke();

jokeBtn.addEventListener('click', () => generateJoke());
