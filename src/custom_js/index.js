document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const flashMsg = document.getElementById('flashMsg');
    const successMsg = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
             Thank you for your message!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    const errorMsg =  `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Oops! something went wrong
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(form);

      fetch('https://formspree.io/f/meojgzep', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        flashMsg.innerHTML = successMsg;
        form.reset();
      })
      .catch(error => {
        flashMsg.innerHTML = errorMsg;
        console.error('Error:', error);
      });
    });
  });


let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}