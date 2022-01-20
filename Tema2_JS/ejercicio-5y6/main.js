
let img = document.querySelector('#user-img');
let nameUse = document.querySelector('#name');
let ubi = document.querySelector('#ubi');
let info = document.querySelector('#info');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = document.querySelector('#user').value;
    profilGit(user);
    document.querySelector('.user-git').style.display = 'flex';
});

async function profilGit(user) {
    try {
        const resp = await fetch(`https://api.github.com/users/${user}`);
        let profile = await resp.json();
        showProfile(profile);
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

function showProfile(userGit) {
    img.src = userGit.avatar_url;
    nameUse.textContent = userGit.name;
    ubi.textContent = userGit.location;
    info.textContent = userGit.bio;
}