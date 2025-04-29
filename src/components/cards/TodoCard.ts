export const TodoCard = (data: any): string => {
  return /*html*/ `
  <div class="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between">
    <!-- Card header -->
    <div class="p-4 border-b flex items-center justify-between">
        <div class="flex items-center">
        <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            :)
        </div>
        <div class="ml-3">
            <p class="text-sm text-gray-600">User ID: <span class="text-blue-600 font-medium">${
              data.userId
            }</span></p>
        </div>
        </div>
        <div>
        <p class="text-sm text-gray-600">ID: <span class="text-blue-600 font-medium">#${
          data.id
        }</span></p>
        </div>
    </div>
    
    <!-- Todo content -->
    <div class="p-4 flex items-start gap-3">
        <div class="mt-1">
        <input type="checkbox" id="todo_checkbox" class="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600" ${
          data.completed && "checked"
        }>
        </div>
        
        <!-- Todo text -->
        <div class="flex-1">
        <label for="todo_checkbox" class="block text-lg font-medium text-gray-800 decoration-gray-500 cursor-pointer ${
          data.completed && "line-through"
        }">
            ${data.title}
        </label>
        <div class="mt-2 flex items-center">
            ${
              data.completed
                ? /*html*/ `
                <span class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Completed
                </span>
                `
                : /*html*/ `
                <span class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Pending
                </span>    
            `
            }
        </div>
        </div>
    </div>
    
    <!-- Card footer -->
    <div class="px-4 py-3 bg-gray-50 flex justify-between items-center">
        <div class="flex space-x-2">
        <button class="flex items-center text-sm text-gray-600 hover:text-red-600" onclick="this.parentElement.parentElement.parentElement.parentElement.parentElement.remove()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
        </button>
        </div>
        <div>
        <button class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors" onclick="navigator.clipboard.writeText(this.parentElement.parentElement.previousElementSibling.querySelector('label').innerText)">
            Copy
        </button>
        </div>
    </div>
  </div>
  `;
};
