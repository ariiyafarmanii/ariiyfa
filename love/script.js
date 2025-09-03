function checkLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (user === "fatemeh" && pass === "4321") {
    window.location.href = "surprise.html";
  } else {
    const funnyMsgs = [
      "❌ رمز اشتباهه! دوباره امتحان کن 😆",
      "😂 این که پسورد من نیست!",
      "🤨 داری منو سرکار می‌ذاری؟",
      "🙃 برو ازم بپرس رمز چیه!"
    ];
    msg.textContent = funnyMsgs[Math.floor(Math.random() * funnyMsgs.length)];
  }
}
