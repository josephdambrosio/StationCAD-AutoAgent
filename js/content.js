chrome.runtime.sendMessage({ function: "getDefaults" }, function (response) {
    const username = response.username;
    const password = response.password;
    const url = window.location.href.toLowerCase();

    if (url.includes("/account/login")) {
        const userBox = document.querySelector('#Email');
        const passBox = document.querySelector('#Password');
        const form = document.querySelector('form');

        if (userBox && passBox && form) {
            userBox.value = username;
            passBox.value = password;

            // Trigger form submission after setting values
            setTimeout(() => {
                form.submit();
            }, 500); // slight delay to ensure DOM updates
        } else {
            console.warn("Login form elements not found.");
        }
    }
});
