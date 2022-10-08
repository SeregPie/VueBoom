<script>
import MyDemo from './components/Demo';

export default {
	name: 'MyShowcaseList',
	components: {
		MyDemo,
	},
};
</script>
<template>
	<!-- todo: use senec-section -->
	<div style="display: grid; gap: 1rem">
		<h3>list</h3>
		<MyDemo />
	</div>
</template>
