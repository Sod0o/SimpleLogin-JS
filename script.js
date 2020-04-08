document.addEventListener("DOMContentLoaded", function(event) {

    let users = [
        {email:"sodababashiri@gmail.com", password:"aaa"},
        {email:"rahimalizada@gmail.com", password:"bbb"},
        {email:"sumanthini@gmail.com", password:"ccc"},
        {email:"helen@gmail.com", password:"ddd"},
        {email:"chayma.besuda@gmail.com", password:"eee"},
    ];

    document.getElementById("btn").addEventListener("click", function(event) {
        let email = document.getElementById('email');
        let psw = document.getElementById('password');

        if (email.value.trim().length < 1 || psw.value.trim().length < 1 ) {
            alert('Please fill the field!');
        }
        
        for (let user = 0; user < users.length; user++) {
            if (users[user].email == email.value && users[user].password == psw.value) {
                let homepage = "file:///C:/Users/Powercoders/Desktop/Code/Js%20projects/simple-login/homepage.html";
                window.location.replace(homepage);  
                // createTableElement(email.value,psw.value);
            } else {
                let error = document.getElementById('userError');
                error.style.display = 'block';
            }
        }

        // createTableElement(email.value,psw.value);
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


