document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    let params = new URLSearchParams();
    
    for (let pair of formData.entries()) {
        params.append(pair[0], pair[1]);
    }
    
    window.location.href = 'result.html?' + params.toString();
});