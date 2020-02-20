<template>
	<section class="padding-section">
		<div class="container">
			<router-link to="/users/" class="btn btn-danger">&larr; Back</router-link>
		  	<div class="flex-side top list list-4">
		  		<div class="left-side">
		  			<h3>{{ user.name }} -  todos</h3>
				  	<div class="post-box todos mw md" v-for="item in todos">
				  		<strong class="title">{{ item.title }}</strong>
				  		<span class="badge true" v-if="item.completed"></span>
				  		<span class="badge false" v-if="!item.completed"></span>
				  	</div>
		  		</div>
		  		<div class="right-side">
		  			<h3>User posts</h3>
				  	<div class="post-box mw md" v-for="item in posts">
				  		<strong class="title">{{ item.title }}</strong>
				  		<div class="content-side">
					  		<p>{{ item.body }}</p>
				  		</div>
				  	</div>
		  		</div>
		  	</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Todos",
		data: function() {
			return {
				todos: [],
				posts: [],
				user: []
			}
		},
		mounted () {
			let getUserId = this.$route.params.id;
			this.axios
				.get('https://jsonplaceholder.typicode.com/todos?userId=' + getUserId)
				.then((res) => {
					this.todos = res.data;
				});
			this.axios
				.get('https://jsonplaceholder.typicode.com/users?id=' + getUserId)
				.then((res) => {
					this.user = res.data[0];
				})
				.then(() => {
					console.log(this.user);
				});
			this.axios
				.get('https://jsonplaceholder.typicode.com/posts?userId=' + getUserId)
				.then((res) => {
					this.posts = res.data;
				})
		}
	};
</script>