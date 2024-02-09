let dropdownButton = document.querySelector(".dropdown__button");
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItems = document.querySelectorAll('.dropdown__list-item');
let dropdownInput = document.querySelector('dropdown__input-hidden');

//Клик по кнопке открыть/закрыть select
dropdownButton.addEventListener('click', function (){
    dropdownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
    
})

//Выбор элемента из списка. Запонить выбранное значение. Закрыть дропдаун.
dropdownItems.forEach(function(listItem){
    listItem.addEventListener('click', function(){
        dropdownButton.innerText = this.innerText;
        dropdownButton.focus();
        console.log(this.dataset.value);
        dropdownInput.value = this.dataset.value;
        
        dropdownList.classList.remove('dropdown__list--visible');
    })
})