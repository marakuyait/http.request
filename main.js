// fetch("https://randomuser.me/api/?results=10", { method: "GET" })
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => console.log(result))
//   .catch((error) => {
//     console.log(error);
//   });

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://randomuser.me/api/?results=10", { method: "GET" })
    .then((response) => response.json())
    .then((result) => {
      const users = result.results;
      showProfiles(users);
    })

    .catch((error) => {
      console.log(error);
    });
  function showProfiles(users) {
    const usersContainer = document.getElementById("profile-container");
    usersContainer.innerHTML = "";

    users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("profile-card");

      userCard.innerHTML = `
                  <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                  <div class="profile-details">
                      <h2>${user.name.first} ${user.name.last}</h2>
                      <p><strong>Email:</strong> ${user.email}</p>
                      <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                      <p><strong>Occupation:</strong> Web Developer</p>
                      <p><strong>About me:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
              `;

      usersContainer.appendChild(userCard);
    });
  }
});
