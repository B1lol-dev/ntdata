export const UserCard = (data: any): string => {
  return /*html*/ `
  <div class="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between">
    <div class="h-2 bg-blue-600"></div>
    
    <!-- User header -->
    <div class="p-5">
        <div class="flex items-start">
        <!-- User avatar -->
        <div class="flex-shrink-0">
            <div class="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
            ${data.name.substring(0, 1).toUpperCase()}
            </div>
        </div>
        
        <!-- Basic user info -->
        <div class="ml-4 flex-1">
            <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-gray-800">${data.name}</h2>
            <span class="text-sm text-gray-500">ID: <span class="text-blue-600 font-medium">#10</span></span>
            </div>
            <p class="text-gray-600">@${data.name
              .split(" ")
              .join("_")
              .toLowerCase()}</p>
            <div class="mt-1 flex items-center text-sm text-gray-500">
            <a href="mailto:${
              data.email
            }" class="text-blue-600 hover:underline">${data.email}</a>
            </div>
        </div>
        </div>
        
        <!-- Contact info -->
        <div class="mt-4 grid grid-cols-2 gap-4">
        <div class="flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-gray-600">${data.phone}</span>
        </div>
        <div class="flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <a href="https://johndoe.com" target="_blank" class="text-blue-600 hover:underline">${
              data.website
            }</a>
        </div>
        </div>
        
        <!-- Tags for address and company -->
        <div class="mt-4 flex space-x-2">
        <span class="flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 text-nowrap">
            ${data.address.street}, ${data.address.suite}, ${data.address.city}
        </span>
        
        <span class="flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 text-nowrap">
            ${data.company.name}
        </span>
        </div>
    </div>
    
    <!-- Tabs for detailed information -->
    <div class="border-t border-gray-200">
        <div class="flex border-b">
            <button 
                    class="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 cursor-pointer"
                    onclick="this.parentElement.nextElementSibling.classList.remove('hidden'); this.parentElement.nextElementSibling.nextElementSibling.classList.add('hidden'); this.className = 'px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 cursor-pointer'; this.nextElementSibling.className = 'px-4 py-2 text-sm font-medium text-gray-600 cursor-pointer'">
                Address
            </button>
            
            <button 
                    class="px-4 py-2 text-sm font-medium text-gray-600 cursor-pointer"
                    onclick="this.parentElement.nextElementSibling.classList.add('hidden'); this.parentElement.nextElementSibling.nextElementSibling.classList.remove('hidden'); this.previousElementSibling.className = 'px-4 py-2 text-sm font-medium text-gray-600 cursor-pointer'; this.className = 'px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 cursor-pointer'">
                Company
            </button>
        </div>
        
        <!-- Address tab content -->
        <div class="p-4">
            <div class="space-y-3">
                <div>
                <h3 class="text-sm font-medium text-gray-500">Street</h3>
                <p class="text-gray-800">${data.address.street}</p>
                </div>
                <div>
                <h3 class="text-sm font-medium text-gray-500">Suite</h3>
                <p class="text-gray-800">${data.address.suite}</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                <div>
                    <h3 class="text-sm font-medium text-gray-500">City</h3>
                    <p class="text-gray-800">${data.address.city}</p>
                </div>
                <div>
                    <h3 class="text-sm font-medium text-gray-500">Zipcode</h3>
                    <p class="text-gray-800">${data.address.zipcode}</p>
                </div>
                </div>
                <div>
                <h3 class="text-sm font-medium text-gray-500">Geo Location</h3>
                <div class="flex items-center mt-1">
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 mr-2">
                    Lat: <span class="text-blue-600">${
                      data.address.geo.lat
                    }</span>
                    </span>
                    <span class="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                    Lng: <span class="text-blue-600">${
                      data.address.geo.lng
                    }</span>
                    </span>
                </div>
                </div>
            </div>
        </div>
        
        <!-- Company tab content -->
        <div class="p-4 hidden">
            <div class="space-y-3">
                <div>
                <h3 class="text-sm font-medium text-gray-500">Company Name</h3>
                <p class="text-gray-800 font-medium">${data.company.name}</p>
                </div>
                <div>
                <h3 class="text-sm font-medium text-gray-500">Catch Phrase</h3>
                <p class="text-gray-800 italic">"${
                  data.company.catchPhrase
                }"</p>
                </div>
                <div>
                <h3 class="text-sm font-medium text-gray-500">Business Services</h3>
                <p class="text-gray-800">${data.company.bs}</p>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Card footer -->
    <div class="px-5 py-3 bg-gray-50 flex justify-between items-center">
        <div class="flex space-x-2">
            <button class="flex items-center text-sm text-gray-600 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Message
            </button>
        </div>
        <button class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors">
            View Profile
        </button>
    </div>
    </div>
  `;
};
