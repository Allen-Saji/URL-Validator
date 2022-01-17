const urlField = document.querySelector('#validate_URL');
const checkURL = document.querySelector('#check_URL');
const form = document.querySelector('form');

checkURL.addEventListener('click' , e=>{
    const url = urlField.value;

    const regExp = /^((ftp|http|https):\/\/)([a-zA-Z0-9]+\.)?([a-zA-Z0-9]+)\.([a-zA-Z]{2,})$/;

    let markup = ``;

    if(regExp.test(url)){
        markup = `<div class="alert alert-success" role="alert"><b>${url} is a valid URL!</b></div>`;
        form.insertAdjacentHTML('beforebegin',markup);
    }else{
        markup = `<div class="alert alert-danger" role="alert"><b>${url} is not a valid URL!</b></div>`;
        form.insertAdjacentHTML('beforebegin',markup);
    }

    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },2000);
});

form.addEventListener("submit" , e=>{
    e.preventDefault();
});