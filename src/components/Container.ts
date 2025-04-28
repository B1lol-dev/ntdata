export const Container = (children: string): string => {
  return /*html*/ `
    <div class="container mx-auto max-w-[1800px] w-full px-4">
        ${children}
    </div>
    `;
};
