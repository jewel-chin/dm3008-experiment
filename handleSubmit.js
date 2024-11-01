function handleSubmit(event) {

    const button = event.target;
    const button_page_number = button.id.split('Page')[1]; 

    const form = button.closest('form'); 

    if (form) {
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => (formObject[key] = value));
        const valuesArray = Object.values(formObject)[0];

        localStorage.setItem(`formDataPage${button_page_number}`, JSON.stringify(valuesArray));
        // console.log(`formDataPage${button_page_number}`,"Form submitted:", JSON.stringify(valuesArray));
    } 
}

const submitButtons = document.querySelectorAll('.submitButton');
submitButtons.forEach(button => {
    button.addEventListener('click', handleSubmit);
});

document.getElementById('submitButtonPage14').addEventListener('click', (e) => {
    e.preventDefault();
    handleSubmit(e);
    console.log('here');
    const allFormData = {};
    const pages = [1, 2, 3, 6, 7, 8, 11, 12, 13, 14];


    pages.forEach(page => {
        const pageData = localStorage.getItem(`formDataPage${page}`);
    
        if (pageData) {
            allFormData[`page${page}`] = JSON.parse(pageData);
        } 
    });
    
    console.log("All collected form data:", allFormData); 

       // Make the POST request
    fetch('https://api.sheetmonkey.io/form/5Tor8wbQ12X3WmQjK3r88H', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(allFormData), 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Success:', response);
        pages.forEach(page => {
            localStorage.removeItem(`formDataPage${page}`);
        });
        location.href = "page15.html"; 
        return response.json();
    })
}

);
