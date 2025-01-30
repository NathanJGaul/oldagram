const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPost({ name, username, location, avatar, post, comment, likes }) {
    return `
    <article class="post">
        <section class="poster">
            <img src="${avatar}">
            <div class="poster-info">
                <p class="poster-name">${name}</p>
                <p class="poster-local">${location}</p>
            </div>
        </section>
        <img src="${post}" class="post-img">
        <section class="user-actions">
            <button class="action-btn"><img src="./images/icon-heart.png"></button>
            <button class="action-btn"><img src="./images/icon-comment.png"></button>
            <button class="action-btn"><img src="./images/icon-dm.png"></button>
        </section>
        <section class="post-footer">
            <p class="likes bold">${likes} likes</p>
            <section class="comments">
                <p><span class="comment-user bold">${username}</span> ${comment}</p>
            </section>
        </section>
    </article>
    `;
}

const main = document.getElementById("app");

// main.innerHTML = loadPost(posts[0]);

const postsHtml = posts.reduce((pv, cv) => {return pv + renderPost(cv)}, "");

main.innerHTML = postsHtml;