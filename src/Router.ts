import { createRouter } from "routerjs";

// pages
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/404/NotFound";
import { Comments } from "./pages/Comments/Comments";

export const Router = (root: HTMLDivElement) => {
  createRouter()
    .get("/", () => {
      root.innerHTML = Home();
    })
    .get("/comments", () => {
      root.innerHTML = Comments();
    })
    .error(404, () => {
      root.innerHTML = NotFound();
    })
    .run();
};
