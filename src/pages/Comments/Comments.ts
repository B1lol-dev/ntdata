import axios from "axios";
import { API_URL } from "../../constants/constants";

// components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { CommentCard } from "../../components/cards/CommentCard";

export const Comments = (): string => {
  setTimeout(() => {
    const comments_wrapper = document.getElementById(
      "comments_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/comments`)
      .then((res) => {
        const { data: comments } = res;

        const commentsHTML = comments
          .map((comment: any) => CommentCard(comment))
          .join("");
        comments_wrapper.innerHTML = commentsHTML;
      })
      .catch((e) => console.error(e));
  }, 0);

  return /*html*/ `
    ${Header()}
    <main class="pt-30">
        <section>
            ${Container(/*html*/ `
                <div class="grid grid-cols-4 justify-items-center gap-6" id="comments_wrapper">
                    
                </div>    
            `)}
        </section>
    </main>
    `;
};
