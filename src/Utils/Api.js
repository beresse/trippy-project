const config = {
    host: "http://localhost:3002"
}

const getHomeData = () => {
    return fetch("http://localhost:3002/api/home")
        .then(response => response.json())
}

export default getHomeData