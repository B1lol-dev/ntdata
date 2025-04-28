import { Container } from "./Container";

export const Header = (): string => {
  const navLinks = ["posts", "comments", "albums", "photos", "todos", "users"];

  return /*html*/ `
    <header class="w-full fixed bg-[#ffffff80] shadow-md z-10 backdrop-blur-xl">
        ${Container(/*html*/ `
            <nav class="flex items-center justify-between py-6">
                <a href="/" onclick="location.pathname = '/'">
                    <div class="flex items-center mb-4 md:mb-0">
                        <h1 class="text-2xl font-bold text-blue-600">NT Data</h1>
                    </div>
                </a>
                <ul class="flex flex-wrap gap-6">
                    ${navLinks
                      .map(
                        (link) => /*html*/ `
                        <li><a href="/${link}" onclick="location.pathname = '/${link}'" class="text-gray-700 capitalize hover:text-blue-600 transition-colors duration-200">${link}</a></li>    
                    `
                      )
                      .join("")}
                </ul>
            </nav>
        `)}
    </header>
  `;
};
