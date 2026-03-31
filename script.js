async function loadPosts() {
  const res = await fetch("https://kindness-hub.onrender.com/api/posts");

  const data = await res.json();

  const container = document.getElementById("posts");
  container.innerHTML = "";

  data.forEach(post => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <hr/>
    `;
    container.appendChild(div);
  });
}

loadPosts();