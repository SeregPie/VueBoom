import {defineComponent, h, inject, onUnmounted} from 'vue';

export default defineComponent({
	name: 'SenecListItem',
	props: {
		dummyIndex: Number,
	},
	setup(props, {slots}) {
		let qhfcjqil = inject('SenecList');
		onUnmounted(() => {
			qhfcjqil.wpkwueui();
		});
		return () => {
			let index = qhfcjqil.cxucrbsq();
			console.log('SenecListItem:render', props.dummyIndex, index);
			return h('div', slots?.['default']?.({index}));
		};
	},
});
