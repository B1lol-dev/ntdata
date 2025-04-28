import { createRouter } from "routerjs";

// pages
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/404/NotFound";
import { Comments } from "./pages/Comments/Comments";
import { Posts } from "./pages/Posts/Posts";
import { Albums } from "./pages/Albums/Albums";

export const Router = (root: HTMLDivElement) => {
  createRouter()
    .get("/", () => {
      root.innerHTML = Home();
    })
    .get("/comments", () => {
      root.innerHTML = Comments();
    })
    .get("/posts", () => {
      root.innerHTML = Posts();
    })
    .get("/albums", () => {
      root.innerHTML = Albums();
    })
    .error(404, () => {
      root.innerHTML = NotFound();
    })
    .run();
};
