<script>
export default {
	name: 'MyMenu',
};
</script>
<template>
	<!-- todo: use a component -->
	<div style="display: grid; gap: 1rem">
		<div style="display: grid; gap: 0.5rem">
			<h5>general</h5>
			<RouterLink :to="{name: 'Home'}">icon</RouterLink>
			<RouterLink :to="{name: 'ShowcaseButton'}">button</RouterLink>
		</div>
		<div style="display: grid; gap: 0.5rem">
			<h5>typography</h5>
			<RouterLink :to="{name: 'Home'}">heading</RouterLink>
			<RouterLink :to="{name: 'Home'}">overline</RouterLink>
		</div>
		<div style="display: grid; gap: 0.5rem">
			<h5>data entry</h5>
			<RouterLink :to="{name: 'Home'}">auto complete</RouterLink>
		</div>
		<div style="display: grid; gap: 0.5rem">
			<h5>data display</h5>
			<RouterLink :to="{name: 'ShowcaseList'}">list</RouterLink>
			<RouterLink :to="{name: 'Home'}">description list</RouterLink>
		</div>
	</div>
</template>
