const refs = {
    input: document.querySelector("#name-input"),
    nameTitle: document.querySelector("#name-output"),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameTitle.textContent = event.currentTarget.value;

    if(refs.input.value) {
        refs.nameTitle.textContent = refs.input.value;
    }

    else  {
        refs.nameTitle.textContent = "Anonymous";
    }
};