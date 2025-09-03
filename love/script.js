function checkLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (user === "fatemeh" && pass === "1234") {
    window.location.href = "surprise.html";
  } else {
    msg.textContent = "❌ رمز یا نام کاربری اشتباهه! دوباره امتحان کن 😆";
  }
}
