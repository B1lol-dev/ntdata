export const NotFound = (): string => {
  return /*html*/ `
    <div class="min-h-screen min-w-screen flex flex-col items-center justify-center">
        <h1 class="text-7xl font-bold text-blue-600">404</h1>
        <p class="text-xl mt-4">The page you looking for is not found.</p>
        <a href="/" onclick="location.pathname = '/'"><button type="button" class="px-4 py-3 text-xl bg-blue-600 text-white rounded-md mt-5">Go to home</button></a>
    </div>
  `;
};
