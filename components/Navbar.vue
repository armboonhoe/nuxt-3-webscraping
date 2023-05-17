<template>
    <nav class="bg-gray-900">
        <div class="container mx-auto px-6 py-3">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                <div class="flex justify-between items-center">
                    <a class="text-white text-2xl font-bold md:text-3xl" href="#">Nuxt 3 Web Scraping</a>
                    <!-- Mobile menu button -->
                    <button class="mobile-menu-button md:hidden focus:outline-none" @click="isMenuOpen = !isMenuOpen">
                        <svg class="h-5 w-5 fill-current text-white" viewBox="0 0 24 24">
                            <path
                                d="M4.5 6.5h15a1 1 0 0 1 0 2h-15a1 1 0 0 1 0-2zM4.5 11.5h15a1 1 0 0 1 0 2h-15a1 1 0 0 1 0-2zM4.5 16.5h15a1 1 0 0 1 0 2h-15a1 1 0 0 1 0-2z" />
                        </svg>
                    </button>
                </div>
                <div :class="['mobile-menu', { 'hidden': !isMenuOpen }]" class="md:flex flex-col md:flex-row md:-mx-4">
                    <a v-for="menu in menus" :key="menu.id" :href="menu.url"
                        class="my-1 text-gray-300 hover:text-white md:mx-4 md:my-0">{{ menu.label }}</a>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isMenuOpen: false,
            menus: [
                { id: 1, url: '#', label: 'Home' },
                { id: 2, url: '#', label: 'About' },
                { id: 3, url: '#', label: 'Services' },
                { id: 4, url: '#', label: 'Contact' },
            ]
        }
    }
}
</script>
  
<style scoped>
@media (min-width: 768px) {
    .mobile-menu {
        display: none;
    }
}

.mobile-menu {
    transition: max-height 0.5s ease-in-out;
    max-height: 0;
    overflow: hidden;
}

.mobile-menu:not(.hidden) {
    max-height: 1000px;
}
</style>
  