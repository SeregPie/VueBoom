<script>
import MyDemo from './components/Demo';

export default {
	name: 'MyShowcaseButton',
	components: {
		MyDemo,
	},
};
</script>
<template>
	<!-- todo: use senec-section -->
	<div style="display: grid; gap: 1rem">
		<h3>button</h3>
		<MyDemo />
	</div>
</template>
