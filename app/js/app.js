const searchInput = document.querySelector('#search_input'),
      searchBtn = document.querySelector('#searchBtn'),
      gallery = document.querySelector('#gallery');


let query = undefined,
    photo = undefined;

// API CALL TO UNSPLASH returning photo object
const getPhoto = () => {
    event.preventDefault(); 

    // GETING INPUT VALUE
    query = searchInput.value;

    // API URL & KEY
    const authorizationKey = '151f9e7d6caaf21b99740ff3a54d19e6e8e585b00b82b44fab109c988c992819';
    const api_URL = `https://api.unsplash.com/photos/random/?client_id=${authorizationKey}&query=${query}`; 

    // API CALL
    fetch(api_URL)
    .then(function (photo) {
        return photo.json();
    })
    .then(function (photo){
    
        gallery.innerHTML = `
        <img src="${photo.urls.regular}" class="randomPhoto"/>
        `;    
    })
}


searchBtn.addEventListener('click', getPhoto);




