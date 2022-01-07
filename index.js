const fetchData = async (searchTerm) => {
    const config = {
        params: {
            apikey: '2dfc1309',
            s: searchTerm
        }
    }
    const response = await axios.get('http://www.omdbapi.com/', config);
    console.log(response.data);
};

const input = document.querySelector('input');




const onInput =event => {
    fetchData(event.target.value);
};
input.addEventListener('input', debounce(onInput,500));