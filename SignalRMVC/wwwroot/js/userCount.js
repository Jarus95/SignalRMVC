
//create connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();
//connect methods that hub invokes aka receive notifications from hub
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
})
//invoke hub methods aka send notification to hub

function newWindowsOnLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}

function fullfilled() {
    console.log("Успешно подключено");
    newWindowsOnLoadedOnClient();
}

function rejectfilled() {
    console.log("не Успешно подключено");
}
//start connection
connectionUserCount.start().then(fullfilled, rejectfilled);