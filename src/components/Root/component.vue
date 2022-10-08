<script>
import MyLayout from '@/components/Layout';

export default {
	name: 'MyRoot',
	components: {
		MyLayout,
	},
};
</script>
<template>
	<MyLayout>
		<RouterView />
	</MyLayout>
</template>
