export const setDate = (timestamp: number) => {
    let date = new Date( timestamp );
        let year = date.getUTCFullYear()
        let month = date.getMonth()
        let days = date.getDate()
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
    return days + '-' + month + '-' + year + '  ' + hours + ':' + minutes + ':' + seconds;
}