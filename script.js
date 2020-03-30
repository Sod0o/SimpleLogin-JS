document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("btn").addEventListener("click", function(event) {
        let email = document.getElementById('email');
        let psw = document.getElementById('password');

        if (email.value.trim().length < 1 || psw.value.trim().length < 1 ) {
            alert('Please fill the field!');
        }
        console.log(email.value + ',' + psw.value);
        createTableElement(email.value,psw.value);
        reset(email, psw);
    });

    function createTableElement(email, password) {
        const tbody = document.getElementById('tbody');

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = email;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = password;
        tr.appendChild(td2);

        tbody.appendChild(tr);
        
        return tbody;
        
    }

    function reset(email, password) {
        email.value = '';
        password.value = '';
    }

});


