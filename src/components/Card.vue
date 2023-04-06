<script>
	import axios from 'axios'

	export default {
		name: 'Card',
		props: {
			msg: String
		},
		data: () => {
			return {
				loading: true,
				isFemale: false,
				name: '',
				phone: '',
				email: '',
				gender: '',
				picture: ''
			}
		},
		methods: {
			getUser: function(){
				this.loading = true;
				axios.get( 'https://randomuser.me/api/' ).then( response => {
					let user    = response.data.results[0];
					this.name    = user.name.first + ' ' + user.name.last;
					this.phone   = user.phone;
					this.email   = user.email;
					this.gender  = user.gender;
					this.picture = user.picture.large;
					( user.gender === 'female' ) ? this.isFemale = true : this.isFemale = false;
					this.loading = false;
				});
			}
		},
		computed: {
			backgroundAsGender0: function(){
				return { 'pink0': this.isFemale, 'blue0': !this.isFemale };
			},
			backgroundAsGender: function(){
				return { 'pink': this.isFemale, 'text-dark': this.isFemale, 'blue': !this.isFemale, 'text-light': !this.isFemale };
			},
			isLoading: function(){
				return { 'loading': this.loading, '': !this.loading };
			}
		},
		mounted(){
			this.getUser()
		}
	}
</script>

<template>
	<div class="row m-4" style="padding-top: 4rem;">
		<div class="col-md-4"></div>

		<div class="col-md-4 card p-4 text-center" :class="[ backgroundAsGender0, isLoading ]" style="max-width: 32rem;height: 400px;">
			<div class="card-top p-4">
				<img class="rounded-circle" :src="picture" alt="" />
			</div>

			<div class="card-title h4">{{ name }}</div>

			<div class="card-title h6 mt-2">{{ phone }}</div>

			<div class="card-title h6 mt-2">{{ email }}</div>

			<button :class="[ 'btn', 'mt-4', backgroundAsGender ]" @click="getUser">Randomize</button>
		</div>

		<div class="col-md-4"></div>
	</div>
</template>

<style scoped>
	.pink0 {
		background-color: rgba(255, 194, 204, .1);
	}
	.pink {
		background-color: pink;
	}
	.blue0 {
		background-color: rgba(13, 110, 253, .1);
	}
	.blue {
		background-color: #0d6efd;
	}
	.loading {
		opacity: .3;
	}
</style>