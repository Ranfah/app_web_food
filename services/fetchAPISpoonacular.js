
const url = `https://api.spoonacular.com/recipes/b1f76d3354624d418fb431f18347a082/information`

const fetchAPIFood = ()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data))
}

module.exports = fetchAPIFood