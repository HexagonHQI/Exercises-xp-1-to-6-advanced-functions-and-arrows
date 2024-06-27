(function welcomeUser(name) {
    // Create the user information element
    const userInfo = document.createElement("div");
    userInfo.classList.add("d-flex", "align-items-center", "ms-auto");
  
    // Profile picture
    const profilePic = document.createElement("img");
    profilePic.src = "https://via.placeholder.com/30"; 
    profilePic.classList.add("me-2", "rounded-circle"); 
  
    // User name text
    const userName = document.createTextNode(name);
  
    // Assemble the user info element
    userInfo.appendChild(profilePic);
    userInfo.appendChild(userName);
  
    // Add the user info element to the navbar
    const userInfoContainer = document.getElementById("user-info");
    userInfoContainer.appendChild(userInfo);
  })("John");
  