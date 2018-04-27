
export default {
    unixToDate : function(unix) {
        let date = new Date(unix);

        return date.getDate + "/" + date.getMonth + "/" + date.getFullYear;
    },
    dateToUnix : function(date) {
        return Math.round(date.getTime() / 1000);
    }
}