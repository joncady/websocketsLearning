(function () {

    let ws;

    window.onload = function () {
        ws = new WebSocket("ws://localhost:8080");
        ws.addEventListener("message", ((ev) => {
            console.log(ev);
        })); 

        document.getElementById("clickMe").addEventListener("click", () => {
            ws.send("Hello!");
        })
    }



})();