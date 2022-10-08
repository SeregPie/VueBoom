import {defineComponent, h, provide} from 'vue';

export default defineComponent({
	name: 'SenecList',
	setup(props, {slots}) {
		let xngvmxpa = -1;
		let qhfcjqil = {
			cxucrbsq() {
				return ++xngvmxpa;
			},
			wpkwueui() {
				xngvmxpa = -1;
			},
		};
		provide('SenecList', qhfcjqil);
		return () => {
			qhfcjqil.wpkwueui();
			console.log('SenecList:render');
			return h(
				'div',
				{
					style: {
						display: 'grid',
						gap: `${1}rem`,
					},
				},
				slots?.['default']?.(),
			);
		};
	},
});
