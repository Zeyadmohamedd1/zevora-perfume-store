let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let toastElement = document.getElementById("loginToast");
    let toastMessage = document.getElementById("loginToastMessage");
    let toast = new bootstrap.Toast(toastElement);
    if (email === "" || password === "") {
        toastMessage.textContent = "Please enter email and password";
        toastElement.classList.add("text-bg-danger");
        toast.show();
    } else {
        toastMessage.textContent = "Login successful ✅";
        toastElement.classList.remove("text-bg-danger");
        toastElement.classList.add("text-bg-success");
        toast.show();
        setTimeout(function () {
        window.location.href = "index.html";
    }, 1500);
    }
});