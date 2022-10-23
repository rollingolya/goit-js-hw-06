const refs = {
    input: document.querySelector('#validation-input'),
};
const symbolLength = refs.input.getAttribute('data-length');

refs.input.addEventListener('blur', onInputFocus);

function onInputFocus(event) {
if(event.currentTarget.value.length == symbolLength) {
refs.input.classList.add('valid');
refs.input.classList.remove('invalid');
} else {
    refs.input.classList.add('invalid');
    refs.input.classList.remove('valid');
}
};

