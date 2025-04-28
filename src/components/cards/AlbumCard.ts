export const AlbumCard = (data: any): string => {
  return /*html*/ `
  <div class="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between">
    <div class="h-2 bg-blue-600"></div>
    
    <!-- Card content -->
    <div class="p-5">
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <h1>:)</h1>
          </div>
          <div class="ml-3">
            <p class="text-sm text-gray-600">User ID: <span class="text-blue-600 font-medium">${data.userId}</span></p>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-600">ID: <span class="text-blue-600 font-medium">#${data.id}</span></p>
        </div>
      </div>
      
      <!-- Quote/Album content (title is the body) -->
      <div class="relative py-4">
        <div class="pl-6 pr-2">
          <div class="border-l-4 border-blue-600 pl-4 py-2">
            <p class="text-xl font-medium text-gray-800">“${data.title}”</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Card footer -->
    <div class="px-5 py-3 bg-gray-50 flex justify-between items-center">
      <div class="flex space-x-2">
        <button class="flex items-center text-sm text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Save
        </button>
        <button class="flex items-center text-sm text-gray-600 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>
      <button class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors">
        View Album
      </button>
    </div>
  </div>
  `;
};
