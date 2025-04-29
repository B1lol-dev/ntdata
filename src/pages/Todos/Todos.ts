import axios from "axios";
import { API_URL } from "../../constants/constants";

// components
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { TodoCard } from "../../components/cards/TodoCard";

export const Todos = (): string => {
  setTimeout(() => {
    const todos_wrapper = document.getElementById(
      "todos_wrapper"
    )! as HTMLDivElement;

    axios
      .get(`${API_URL}/todos`)
      .then((res) => {
        const { data: todos } = res;

        const todosHTML = todos.map((todo: any) => TodoCard(todo)).join("");
        todos_wrapper.innerHTML = todosHTML;
      })
      .catch((e) => console.error(e));
  }, 0);

  return /*html*/ `
    ${Header()}
    <main class="py-30">
        <section>
            ${Container(/*html*/ `
                <div class="grid grid-cols-4 justify-items-center gap-6" id="todos_wrapper">
                    
                </div>    
            `)}
        </section>
    </main>
    `;
};
