<template>
  <div class="font-sans antialiased border rounded p-4">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-blue mr-6">
        <!-- insert logo, svg -->

        <span class="font-semibold text-xl tracking-tight">FIRM NAME</span>
      </div>

      <div class="block sm:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow">
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            <router-link to="/dashboard">Dashboard</router-link>
          </a>
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            <router-link to="/me">Me</router-link>
          </a>
        </div>
      </div>
      <a
        href="#"
        class="bg-blue-200 no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white 
        hover:border-transparent hover:text-blue hover:bg-teal-500 mt-4 sm:mt-0"
      >
        <router-link to="/logout">Logout</router-link>
      </a>
    </nav>
  </div>
</template>
