document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("logout").addEventListener("click", function(event) {
      let logout = "file:///C:/Users/Powercoders/Desktop/Code/Js%20projects/simple-login/index.html";
      window.location.replace(logout);
  });

  document.getElementById('users').addEventListener('click', function(event) {
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      createUserCard(data);
    }).catch(function() {
      console.log("Something went wrong! Please try again.");
    });
   

    
  }); 
  
  function createUserCard(data) {
    console.log('createCard', data)
    if (data) {
      for (let i = 0; i < data.length; i++ ) {
        let card = document.getElementById('card');

        let h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.innerHTML = data[i].name;
    
        let p = document.createElement('p');
        p.className = 'card-text';
        p.innerHTML = data[i].email;
    
        let div3 = document.createElement('div');
        div3.className = 'card-body';
        div3.appendChild(h5);
        div3.appendChild(p);
    
        let div2 = document.createElement('div');
        div2.className = 'card-header';
        div2.innerHTML = data[i].id;
        div2.appendChild(div3);
        
        let div1 = document.createElement('div');
        div1.className = 'card text-white bg-success mb-3';
        div1.style.maxWidth = '18rem';
        div1.style.minWidth = '19rem';
        div1.appendChild(div2);
    
        card.appendChild(div1);
      }
    }

  };





});