const form = document.getElementById('userForm');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbyVPErQp0bdD1D0NNEjCcDKF26IQPe56Vf-7woBW0GFafFFbrSgb02KQ3gYsOc-wUB4Fg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => {
        alert('Form submitted successfully!');
        form.reset();
    }).catch(error => {
        alert('There was an error submitting the form.');
        console.error(error);
    });
});
