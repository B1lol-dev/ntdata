import axios from "axios";
import { API_URL } from "../../constants/constants";

// components
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { UserCard } from "../../components/cards/UserCard";

export const Users = (): string => {
  setTimeout(() => {
    const users_wrapper = document.getElementById(
      "users_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/users`)
      .then((res) => {
        const { data: users } = res;

        const usersHTML = users.map((user: any) => UserCard(user)).join("");
        users_wrapper.innerHTML = usersHTML;
      })
      .catch((e) => console.error(e));
  }, 0);

  return /*html*/ `
    ${Header()}
    <main class="py-30">
        <section>
            ${Container(/*html*/ `
                <div class="grid grid-cols-4 justify-items-center gap-6" id="users_wrapper">
                    
                </div>    
            `)}
        </section>
    </main>
    `;
};
