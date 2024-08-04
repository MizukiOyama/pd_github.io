document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = e.target;
    var formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Your message has been sent!');
            form.reset();
        } else {
            alert('There was a problem with the submission.');
        }
    }).catch(error => {
        alert('There was a problem with the submission.');
    });
});

document.querySelectorAll('.input-text').forEach(input => {
    input.addEventListener('focus', function() {
        this.classList.add('not-empty');
    });
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.classList.remove('not-empty');
        }
    });
});
