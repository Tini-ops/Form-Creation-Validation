async function fetchUserData () {

    const apiURL = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");

    try {
        const response = await fetch(apiURL);
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement('<ul>');
        users.forEach((user) => {
            const listItem = document.createElement('<ul>');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.';
    }

    document.addEventListener('DOMContentLoaded', fetchUserData);
};