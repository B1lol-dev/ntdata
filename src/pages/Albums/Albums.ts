import axios from "axios";
import { API_URL } from "../../constants/constants";

// components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { AlbumCard } from "../../components/cards/AlbumCard";

export const Albums = (): string => {
  setTimeout(() => {
    const comments_wrapper = document.getElementById(
      "albumss_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/albums`)
      .then((res) => {
        const { data: albums } = res;
        console.log(albums[0]);

        const commentsHTML = albums
          .map((album: any) => AlbumCard(album))
          .join("");
        comments_wrapper.innerHTML = commentsHTML;
      })
      .catch((e) => console.error(e));
  }, 0);

  return /*html*/ `
    ${Header()}
    <main class="py-30">
        <section>
            ${Container(/*html*/ `
                <div class="grid grid-cols-4 justify-items-center gap-6" id="albumss_wrapper">
                    
                </div>    
            `)}
        </section>
    </main>
  `;
};
