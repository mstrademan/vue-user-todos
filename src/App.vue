<template>
  <div id="app">
    <header class="main-header" id="main-header">
      <div class="container">
        <div id="nav" class="main-navigation">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/users/">Users</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>
