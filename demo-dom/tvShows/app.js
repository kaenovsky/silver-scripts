const form = document.querySelector('#searchForm');
const input = document.querySelector('input');
const container = document.querySelector('#container');

// get user input search
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // clear container
    container.innerHTML = '';
    // search
    const searchTerm = form.elements.query.value;
    getShows(searchTerm);           
})

// get tv shows with axios

const getShows = async (search) => {
    const url = `https://api.tvmaze.com/search/shows?q=${search}`;
    try {
        const res = await axios.get(url);
        const shows = res.data;
        for (s of shows) {
            const img = document.createElement('IMG');
            img.src = s.show.image.medium;
            img.title = s.show.name;
            container.append(img);
    }        
    } catch (error) {
        console.log('There was an error: ', error);
        const errMsg = document.createElement('p');
        errMsg.classList.add('errMsg');
        errMsg.innerText = `There was an error. Some shows may not display: \ ${error}`;
        container.append(errMsg);
    }    
}
