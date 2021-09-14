<template>
  <div class="relative h-screen flex overflow-hidden bg-white">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-4 w-4 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img class="h-5 px-1 w-auto" src="../assets/logo.svg" alt="Workflow" />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2">
                <div class="space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-white text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
                    <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-5 px-1 w-6']" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-56 border-r border-gray-200 pt-5 pb-4 bg-white">
        <div class="flex items-center flex-shrink-0 px-4">
          <img class="h-5 px-1 w-auto" src="../assets/logo.svg" alt="Workflow" />
        </div>
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="h-0 flex-1 flex flex-col overflow-y-auto">
          <!-- Navigation -->
          <nav class="px-3 mt-6">
            <div class="space-y-1">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
                <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-5 w-5']" aria-hidden="true" />
                {{ item.name }}
              </a>
            </div>
          </nav>
          <div class="h-full">
          </div>
          <!-- User account dropdown -->
          <Menu as="div" class="px-3 mt-6 relative inline-block text-left">
            <div>
              <MenuButton class="group w-full bg-white rounded-md px-2 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500">
                <span class="flex w-full justify-between items-center">
                  <span class="flex min-w-0 items-center justify-between space-x-3">
                    <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" />
                    <span class="flex-1 flex flex-col min-w-0">
                      <span class="text-gray-900 text-sm font-medium truncate">Raphael Fleckenstein</span>
                      <span class="text-gray-500 text-sm truncate">raphael@zavvy.io</span>
                    </span>
                  </span>
                  <SelectorIcon class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                </span>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notifications</a>
                  </MenuItem>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Get desktop app</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                  </MenuItem>
                </div>
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Logout</a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <!-- Main column -->
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <!-- Search header -->
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
        <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-inset focus:ring-green-500 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt1Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search-field" name="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm" placeholder="Search" type="search" />
              </div>
            </form>
          </div>
          <div class="flex items-center">
            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-offset-2 focus:ring-green-500">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View profile</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Settings</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notifications</a>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Get desktop app</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
                    </MenuItem>
                  </div>
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Logout</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <!-- Page title & actions -->
        <div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div class="flex-1 min-w-0">
            <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
              Home
            </h1>
          </div>
          <div class="mt-4 flex sm:mt-0 sm:ml-4">
            <button type="button" class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-offset-2 focus:ring-green-500 sm:order-1 sm:ml-3">
              Create
            </button>
          </div>
        </div>


        <!-- Projects list (only on smallest breakpoint) -->
        <div class="mt-10 sm:hidden">
          <div class="px-4 sm:px-6">
            <h2 class="text-gray-500 text-xs font-medium">Projects</h2>
          </div>
          <ul role="list" class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
            <li v-for="project in projects" :key="project.id">
              <a href="#" class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                <span class="flex items-center truncate space-x-3">
                  <span :class="[project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full']" aria-hidden="true" />
                  <span class="font-medium truncate text-sm leading-6">
                    {{ project.title }}
                    {{ ' ' }}
                    <span class="truncate font-normal text-gray-500">in {{ project.team }}</span>
                  </span>
                </span>
                <ChevronRightIcon class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Projects table (small breakpoint and up) -->
        <div class="hidde sm:block">
          <div class="align-middle inline-block min-w-full border-b border-gray-200">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th class="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500">
                    <span class="lg:pl-2">Project</span>
                  </th>
                  <th class="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500">
                    Members
                  </th>
                  <th class="hidden md:table-cell px-6 py-3 border-b border-gray-200 text-right text-xs font-medium text-gray-500">
                    Last updated
                  </th>
                  <th class="pr-6 py-3 border-b border-gray-200 text-right text-xs font-medium text-gray-500" />
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-100">
                <tr v-for="project in projects" :key="project.id">
                  <td class="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                    <div class="flex items-center space-x-3 lg:pl-2">
                      <div :class="[project.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full']" aria-hidden="true" />
                      <a href="#" class="truncate hover:text-gray-600">
                        <span>
                          {{ project.title }}
                          {{ ' ' }}
                          <span class="text-gray-500 font-normal">in {{ project.team }}</span>
                        </span>
                      </a>
                    </div>
                  </td>
                  <td class="px-6 py-3 text-sm text-gray-500 font-medium">
                    <div class="flex items-center space-x-2">
                      <div class="flex flex-shrink-0 -space-x-1">
                        <img v-for="member in project.members" :key="member.handle" class="max-w-none h-6 w-6 rounded-full ring-2 ring-white" :src="member.imageUrl" :alt="member.name" />
                      </div>
                      <span v-if="project.totalMembers > project.members.length" class="flex-shrink-0 text-xs leading-5 font-medium">+{{ project.totalMembers - project.members.length }}</span>
                    </div>
                  </td>
                  <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                    {{ project.lastUpdated }}
                  </td>
                  <td class="pr-6">
                    <Menu as="div" class="relative flex items-center">
                      <MenuButton class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-offset-2 focus:ring-green-500">
                        <span class="sr-only">Open options</span>
                        <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
                      </MenuButton>
                      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems class="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                          <div class="py-1">
                            <MenuItem v-slot="{ active }">
                              <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                                <PencilAltIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                Edit
                              </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                              <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                                <DuplicateIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                Duplicate
                              </a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                              <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                                <UserAddIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                Share
                              </a>
                            </MenuItem>
                          </div>
                          <div class="py-1">
                            <MenuItem v-slot="{ active }">
                              <a href="#" :class="[active ? 'bg-white text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                                <TrashIcon class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                Delete
                              </a>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </transition>
                    </Menu>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { ClockIcon, HomeIcon, InboxIcon, MenuAlt1Icon, SunIcon, UserIcon, ViewListIcon, XIcon } from '@heroicons/vue/solid'
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  MapIcon,
  PencilAltIcon,
  SearchIcon,
  SelectorIcon,
  TrashIcon,
  UserAddIcon,
} from '@heroicons/vue/solid'

const navigation = [
  { name: 'Search', href: '#', icon: SearchIcon, current: false },
  { name: 'Roadmap', href: '#', icon: MapIcon, current: true },
  { name: 'Insights', href: '#', icon: InboxIcon, current: false },
  { name: 'People', href: '#', icon: UserIcon, current: false },
  { name: 'Portal', href: '#', icon: SunIcon, current: false },
]

const projects = [
  {
    id: 1,
    title: 'Microsoft Teams',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-green-600',
  },
  {
    id: 1,
    title: 'Repeating Journeys',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-green-600',
  },
  {
    id: 1,
    title: 'German Language',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-green-600',
  },
  // More projects...
]
const pinnedProjects = projects.filter((project) => project.pinned)

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    ChevronRightIcon,
    DotsVerticalIcon,
    DuplicateIcon,
    MenuAlt1Icon,
    PencilAltIcon,
    SearchIcon,
    SelectorIcon,
    TrashIcon,
    UserAddIcon,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      navigation,
      projects,
      pinnedProjects,
      sidebarOpen,
    }
  },
}
</script>