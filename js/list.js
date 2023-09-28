const main = () => {
    const list = document.getElementById('list');

    for (let i = 20; i < 100; i++) {
        try {
            fetch(`http://192.168.1.${i}/app`, { signal: AbortSignal.timeout(5000) }).then((request) => {
                if (request.status == 200) {

                    const keepixDiv = document.createElement('div');
    
                    const aElement = document.createElement('a');
                    aElement.innerHTML = `Keepix ${i}`;
                    aElement.setAttribute('href', `http://192.168.1.${i}`);
                    keepixDiv.appendChild(aElement);
                    list.appendChild(keepixDiv);
                }
            })
        } catch (e) {

        }
    }
};

document.addEventListener("DOMContentLoaded", main);