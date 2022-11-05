const sendInput = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');

function addItems() {
    const itemText = sendInput.value;
    const newItem = document.createElement('div');
    newItem.classList.add('items');
    newItem.textContent = itemText;
    newItem.addEventListener('click', function() { newItem.classList.toggle('done') });
    itemsContainer.append(newItem);
    /* Пустые элементы не должны добавляться */
    if (itemText != '') {
        itemsContainer.append(newItem);
    }
    /* Очищать input после добавления нового элемента в список */
    sendInput.value = '';

}

/* Новые элементы должны добавляться в список по нажатию на Enter */

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        addItems();
    }
})

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */