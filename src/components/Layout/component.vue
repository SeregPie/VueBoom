<script>
import MyMenu from '@/components/Menu';

export default {
	name: 'MyLayout',
	components: {
		MyMenu,
	},
};
</script>
<template>
	<!-- todo: use senec-layout -->
	<div style="display: grid; gap: 4rem; grid-template-columns: auto 1fr">
		<div style="padding: 1rem">
			<MyMenu />
		</div>
		<div style="display: flex; justify-content: center">
			<div style="flex: 1; max-width: 56rem; padding: 1rem">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
