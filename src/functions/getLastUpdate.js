const GetLastUpdate = () => {
    const listMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dateNow = new Date()
    const date = dateNow.getDate()
    const month = listMonth[dateNow.getMonth()]
    const year = dateNow.getFullYear()
    return `${date}-${month}-${year}`
}

export default GetLastUpdate