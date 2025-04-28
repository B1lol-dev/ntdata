export const PostCard = (data: any): string => {
  return /*html*/ `
  <div class="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between">
    <!-- User info header -->
    <div class="p-4 border-b flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          <span></span>
        </div>
        <div>
          <p class="font-medium text-gray-800">Username: <span class="text-blue-600" data-user-id="${data.userId}"></span></p>
          <p class="text-xs text-gray-500">User ID: <span class="text-blue-600">${data.userId}</span></p>
        </div>
      </div>
      <div class="text-xs text-gray-500">
        Post ID: <span class="text-blue-600">#${data.id}</span>
      </div>
    </div>
    
    <!-- Post content -->
    <div class="p-4">
      <h2 class="text-xl font-bold text-gray-800 mb-2">${data.title}</h2>
      <p class="text-gray-600">
        ${data.body}
      </p>
    </div>
    
    <!-- Post footer -->
    <div class="px-4 py-3 bg-gray-50 flex justify-between items-center">
      <div class="flex space-x-4">
        <button class="flex items-center text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Like
        </button>
        <button class="flex items-center text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Comment
        </button>
      </div>
      <button class="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        Share
      </button>
    </div>
  </div>
  `;
};
