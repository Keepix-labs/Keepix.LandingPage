
const setup = async () => {
    const setup1 = document.getElementById('setup1');
    const setup1Button = document.getElementById('setup1-button');
    const setup1Error = document.getElementById('setup1-error');
    const setup2Error = document.getElementById('setup2-error');
    const setup2 = document.getElementById('setup2');

    setup1Button.disabled = true;
    setup2Error.style.display = 'none';
    setup1Error.style.display = 'none';

    AbortSignal.timeout ??= function timeout(ms) {
        const ctrl = new AbortController()
        setTimeout(() => ctrl.abort(), ms)
        return ctrl.signal
    }

    let request = undefined;

    try {
        request = await fetch('http://192.168.1.1:9000/app/wifi/list', { signal: AbortSignal.timeout(5000) });
    } catch (e) {
        console.error(e);
    }

    console.log(request);

    if (request?.status == 200) {

        const ssidSelect = document.getElementById('ssid-select');

        const ssids = await request.json();
        const options = ssids.map(x => {
            const option = document.createElement('option');
            option.innerHTML = x;
            option.setAttribute('value', x);
            return option;
        });

        for (let i = 0; i < options.length; i++) {
            ssidSelect.appendChild(options[i]);
        }
        setup1.style.display = 'none';
        setup2.style.display = 'block';
        setup1Button.disabled = false;

    } else {
        setup1.style.display = 'block';
        setup1Error.style.display = 'block';
        setup2.style.display = 'none';
        setup1Button.disabled = false;
    }
};

const apply = async () => {
    const setup2Error = document.getElementById('setup2-error');
    const ssidSelect = document.getElementById('ssid-select');
    const nameElement = document.getElementById('name');
    const passwordElement = document.getElementById('password');

    const name = nameElement.value;
    const ssid = ssidSelect.value;
    const password = passwordElement.value;

    if (name == '' || name == undefined) {
        setup2Error.innerHTML = 'name not found';
        setup2Error.style.display = 'block';
        return ;
    }

    if (ssid == '' || ssid == undefined) {
        setup2Error.innerHTML = 'SSID not found';
        setup2Error.style.display = 'block';
        return ;
    }
    if (password == undefined) {
        setup2Error.innerHTML = 'Password not found';
        setup2Error.style.display = 'block';
        return ;
    }

    let request = undefined;

    try {
        request = await fetch('http://192.168.1.1/app/wifi', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                ssid: ssid,
                password: password
            }),
            signal: AbortSignal.timeout(5000)
        });

        if (request.status == 200) {

            const result = await request.json();

            if (result == false) {
                setup2Error.innerHTML = 'Incorrect Password';
                setup2Error.style.display = 'block';
                return ;
            } else {
                window.location = '/list';
            }
        }
    } catch (e) {

        if (e.message.includes('aborted')) {
            window.location = '/list';
        } else {
            setup2Error.innerHTML = 'Unknown Error';
            setup2Error.style.display = 'block';
        }
    }
}
