$(document).ready(function() {
  const $container = $("#container");
  $.getJSON("http://localhost:3000/fishes").then(function(fishes) {
    fishes.forEach(function(fish) {
      let $newFish = $("<li>", {
        html: `
              ${fish.name} ${fish.type}
              <button id=${fish.name} class="delete">X</button>
          `
      });
      $container.append($newFish);
    });
  });
  const $crocodile_container = $("#crocodile_container");
  $.getJSON("http://localhost:3000/crocodile").then(function(crocodiles) {
    crocodiles.forEach(function(crocodile) {
      let $newCrocodile = $("<li>", {
        html: `
              ${crocodile.name}
          `
      });
      $crocodile_container.append($newCrocodile);
    });
  });

  $("#new-fish-form").on("submit", function(e) {
    e.preventDefault();
    const name = $("#name").val();
    const type = $("#type").val();
    $.post("http://localhost:3000/fishes", { name, type }).then(function(fish) {
      let $newFish = $("<li>", {
        html: `
              ${fish.name} ${fish.type}
              <button class="delete">X</button>
          `,
        "data-id": `${fish.id}`
      });
      $container.append($newFish);
      $("#new-fish-form").trigger("reset");
    });
  });
  $("#new-form").on("submit", function(e) {
    e.preventDefault();
  
    const username = $("#name_name").val();
    const password = $("#pass").val();
    
    $.post("http://localhost:3000/login", { username,password }).then(function(accessToken) {
 
    //  localStorage.setItem('accessToken',accessToken);
    if(accessToken !== "Username or password incorrect"){
    alert("success");
    localStorage.setItem("access",JSON.stringify(accessToken))
    }
    else{
      alert("failure")
    }
    });
  });
  $("#new-crocodile-form").on("submit", function(e) {
    e.preventDefault();
    const name = $("#name_cro").val();
    $.post("http://localhost:3000/crocodile", { name }).then(function(fish) {
      let $newCrocodile = $("<li>", {
        html: `
              ${fish.name} ${fish.type}
              <button class="delete">X</button>
          `,
        "data-id": `${fish.id}`
      });
      $container.append($newCrocodile);
      $("#new-fish-form").trigger("reset");
    });
  });

  $container.on("click", ".delete", function(e) {
    e.preventDefault();
    const id = $(e.target)
      .parent()
      .data("id");
    const type = $.ajax({
      method: "DELETE",
      url: `http://localhost:3000/fishes/${e.target.id}`
    }).then(function() {
      $(e.target)
        .parent()
        .remove();
    });
  });
});
const $crocodile_container = $("#crocodile_container",{
  
});
$.ajax({
  method: "GET",
  url: `http://localhost:3000/books`,
  headers: {
    "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NzkxNTE5MTJ9.c45_PPRCfDYcV-RLGcnnrbFhTG91OvkmWG_oXcrn08k"
  },
}).then(function(books) {
    crocodiles.forEach(function(crocodile) {
      let $newCrocodile = $("<li>", {
        html: `
              ${books}
          `
      });
      $crocodile_container.append($newCrocodile);
    });
  });
