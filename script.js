
async function run() {
    const data = await fetch('data.csv').then(function (response) {
        return response.text();
    }).then(function (data) {
        const lines = data.split('\n');
        return lines.map(l => l.split('\t'));
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });

    function setGlove(glove) {
        document.getElementById('gloveId').value = glove[0];
        document.getElementById('nftImage').src = glove[1];
        document.getElementById('marketplacelink').href = glove[2];
    }

    function randomize() {
        gloveId = document.getElementById('gloveId').value
        all_else = data.filter(row => row[0] !== gloveId)
        const glove = all_else[Math.floor(Math.random()*all_else.length)]
        setGlove(glove);
    }

    function search() {
        gloveId = document.getElementById('gloveId').value
        let glove = data.filter(row => row[0] === gloveId);
        setGlove(glove);
    }

    document.getElementById('randomize').addEventListener('click', randomize)
    document.getElementById('search').addEventListener('click', search)

    randomize()
}

window.addEventListener('load', run);



