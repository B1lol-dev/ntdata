export const CommentCard = (data: any): string => {
  return /*html*/ `
  <div class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-600 flex flex-col justify-between">
    <!-- Comment header -->
    <div class="p-4 border-b">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">
            <span>${data.email.substring(0, 1).toUpperCase()}</span>
          </div>
          <div>
            <p class="font-medium text-gray-800">Username: <span class="text-blue-600">${
              data.email.split("@")[0]
            }</span></p>
          </div>
        </div>
        <div class="text-xs text-right">
          <p class="text-gray-500">Comment ID: <span class="text-blue-600">#${
            data.id
          }</span></p>
          <p class="text-gray-500">Email: <span class="text-blue-600">${
            data.email
          }</span></p>
        </div>
      </div>
      
      <!-- Comment title -->
      <h3 class="font-semibold text-blue-600">${data.name}</h3>
    </div>
    
    <!-- Comment body -->
    <div class="p-4 bg-gray-50">
      <p class="text-gray-700 text-sm">
        ${data.body}
      </p>
    </div>
    
    <!-- Comment footer -->
    <div class="px-4 py-3 bg-white flex justify-between items-center border-t">
      <div class="flex space-x-3">
        <button class="flex items-center text-xs text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          Like
        </button>
        <button class="flex items-center text-xs text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
          Reply
        </button>
      </div>
      <div class="text-xs text-gray-500">
        <button class="text-blue-600 hover:text-blue-800">
          Report
        </button>
      </div>
    </div>
  </div>
    `;
};
