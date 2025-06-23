function copyEmail() {
      const email = "vibinwebdesigner@gmail.com";
      const emailElement = document.getElementById("emailText");

      // Copy to clipboard
      navigator.clipboard.writeText(email);

      // Change text to "Copied!"
      emailElement.textContent = "Copied!";

      // Restore original email after 1.5 seconds
      setTimeout(() => {
        emailElement.textContent = email;
      }, 1500);
    }