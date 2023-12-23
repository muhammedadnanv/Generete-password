function generatePassword() {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
    var passwordLength = document.getElementById("password-length").value;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    document.getElementById("password-display").innerText = password;
    document.getElementById("feedback-message").innerText = "Password generated!";
  }

  function copyToClipboard() {
    var passwordDisplay = document.getElementById("password-display");
    var passwordText = passwordDisplay.innerText;

    if (passwordText) {
      navigator.clipboard.writeText(passwordText);
      document.getElementById("feedback-message").innerText = "Password copied to clipboard!";
    } else {
      document.getElementById("feedback-message").innerText = "Generate a password first!";
    }
  }

  function updatePasswordLength(value) {
    document.getElementById("password-length-value").innerText = value;
  }
