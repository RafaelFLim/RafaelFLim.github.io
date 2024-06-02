const form = document.getElementById('clothes-form');
const clothesList = document.getElementById('clothes');
const clearListButton = document.getElementById('clear-list-button');
const selectImageButton = document.getElementById('select-image-button');
const image = document.getElementById('image');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (image.files.length) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const li = document.createElement('li');
      li.style.color = '#C71585';
      li.style.fontSize= '14px'
      li.style.fontFamily = 'roboto';
      li.innerHTML = `
        <strong>${document.getElementById('name').value}</strong> - Tamanho: ${document.getElementById('size').value} - Descrição: ${document.getElementById('description').value} - Preço: R$ ${document.getElementById('price').value}
        <br>
        <img src="${e.target.result}" style="max-width: 100px; max-height: 100px;">
      `;
      clothesList.appendChild(li);

      form.reset();
    };

    reader.readAsDataURL(image.files[0]);
  }
});

selectImageButton.addEventListener('click', function() {
  image.click();
});

clearListButton.addEventListener('click', function() {
  clothesList.innerHTML = '';
});