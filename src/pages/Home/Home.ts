import axios from "axios";
import { API_URL } from "../../constants/constants";

// components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/cards/PostCard";

export const Home = (): string => {
  setTimeout(() => {
    const home_posts_wrapper = document.getElementById(
      "home_posts_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/posts`)
      .then((res) => {
        const { data: posts } = res;

        const postsHTML = posts.map((post: any) => PostCard(post)).join("");
        home_posts_wrapper.innerHTML = postsHTML;

        const userIds = document.querySelectorAll("[data-user-id]");
        userIds.forEach((userId) => {
          axios
            .get(`${API_URL}/users?id=${userId.getAttribute("data-user-id")}`)
            .then((res: any) => {
              const username: string = res.data[0].username;
              userId.textContent = username;
              userId.parentElement!.parentElement!.previousElementSibling!.children[0].textContent =
                username.substring(0, 1).toUpperCase();
            })
            .catch((err) => console.error(err));
        });
      })
      .catch((e) => console.error(e));
  }, 0);

  return /*html*/ `
    ${Header()}
    <main class="py-30">
        <section>
            ${Container(/*html*/ `
                <div class="grid grid-cols-4 justify-items-center gap-6" id="home_posts_wrapper">
                    
                </div>    
            `)}
        </section>
    </main>
  `;
};
