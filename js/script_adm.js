const houseForm = document.getElementById('house-form');
const houseList = document.createElement('ul');
document.querySelector('main').appendChild(houseList);

houseForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('house-name').value;
    const price = document.getElementById('house-price').value;
    const description = document.getElementById('house-description').value;
    const availability = document.getElementById('house-availability').value;

    const house = {
        name,
        price,
        description,
        availability,
    };

    displayHouse(house);
    houseForm.reset();
});

function displayHouse(house) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${house.name}</strong> - R$ ${house.price}<br>${house.description}<br>Disponível em: ${house.availability}`;
    houseList.appendChild(listItem);
}
