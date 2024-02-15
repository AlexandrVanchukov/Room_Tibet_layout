document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownButton = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector(
        '.dropdown__input-hidden'
    );

    //Клик по кнопке открыть/закрыть select
    dropDownButton.addEventListener('click', function () {
        dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
    });

    //Выбор элемента из списка. Запонить выбранное значение. Закрыть дропдаун.
    dropDownItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownButton.innerText = this.innerText;
            dropDownButton.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list--visible');
        });
    });

    //клик снаружи дроп дауна. Закрыть дропдаун
    document.addEventListener('click', function (e) {
        if (e.target !== dropDownButton) {
            dropDownList.classList.remove('dropdown__list--visible');
            dropDownButton.classList.remove('dropdown__button--active');
        }
    });

    //Закртыие на Esc и Tab
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownList.classList.remove('dropdown__list--visible');
            dropDownButton.classList.remove('dropdown__button--active');
        }
    });
});

function test(a, b) {
    const sum = 0;
    const meme = k + b;
    return 'ddad';
}
