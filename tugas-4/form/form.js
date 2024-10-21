function nambah() {
    const inputBaru = document.getElementById('inputBaru');

    const newDiv = document.createElement('div');
    
    const newLabel = document.createElement('label');
    newLabel.innerHTML = 'Nama :';

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Nama';
    newInput.onblur = function() {
        this.value = this.value.toUpperCase();
    };

    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);

    inputBaru.appendChild(newDiv);
}

//buat sendiri
// function submitForm() {
//     alert("Selamat data telah berhasil disimpan");
//     location.reload();
// }


//ini pake sweetalert 
function submitForm() {
    Swal.fire({
        title: "Good job!",
        text: "Selamat data telah berhasil di simpan",
        icon: "success"
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    });
}


function updateJam() {
    const jamElement = document.getElementById('jam');
    const now = new Date();
    jamElement.innerHTML = now.toLocaleTimeString();
}

setInterval(updateJam, 1000); 
updateJam(); 
