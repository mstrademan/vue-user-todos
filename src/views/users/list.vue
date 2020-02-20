<template>
  <div class="container">
    <table class="default-table">
		<thead>
			<tr>
				<th>ID</th>
				<th>Имя пользователя</th>
				<th>Email</th>
				<th>Город</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in paginateUsers">
				<td><router-link :to="'/users/' + user.id + '/todos'">{{ user.id }}</router-link></td>
				<td><router-link :to="'/users/' + user.id + '/todos'">{{ user.name }}</router-link></td>
				<td><a :href="'mailto:' + user.email">{{ user.email }}</a></td>
				<td><router-link :to="'/users/' + user.id + '/todos'">{{ user.address.city }}</router-link></td>
			</tr>
		</tbody>
		<nav class="theme-pagination">
			<ul>
				<li><button type="button" v-if="page != 1" @click="pageMinus()">←</button></li>
				<li v-for="pageNum in pages"><button type="button" @click="goToPage(pageNum)">{{ pageNum }}</button></li>
				<li><button type="button" v-if="page < pages.length" @click="pagePlus()">→</button></li>
			</ul>
		</nav>
    </table>
  </div>
</template>

<script>
	export default {
		name: "Users",
		data: function() {
			return {
				users: [],
				page: localStorage.getItem('users-pagination') ? localStorage.getItem('users-pagination') : 1,
				perPage: 5,
				pages: [],
			}
		},
		methods: {
			getUsers: function() {
				this.axios
					.get('https://jsonplaceholder.typicode.com/users')
					.then((res) => {
						this.users = res.data;
					})
			},
			pagination: function() {
				let pageNumber = Math.ceil(this.users.length / this.perPage);
				for (let index = 1; index <= pageNumber; index++) {
					this.pages.push(index);
				}
			},
			paginate: function(users) {
				let page = this.page;
				let perPage = this.perPage;
				let from = (page * perPage) - perPage;
				let to = (page * perPage);
				return  users.slice(from, to);
			},
			pageMinus: function() {
				this.page--;
				this.saveCurrentPage();
			},
			pagePlus: function() {
				this.page++;
				this.saveCurrentPage();
			},
			goToPage: function(pageNum) {
				this.page = pageNum
				this.saveCurrentPage();
			},
			saveCurrentPage: function() {
				localStorage.setItem('users-pagination', this.page);
			}
		},
		created() {
			this.getUsers();
		},
		watch: {
			users: function() {
				this.pagination();
			}
		},
		computed: {
			paginateUsers () {
				return this.paginate(this.users);
			}
		},
	};
</script>