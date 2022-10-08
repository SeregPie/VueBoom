import {computed, defineComponent, h} from 'vue';

import useApp from '../../composables/App';

export default defineComponent({
	name: 'SenecIcon',
	setup(props, {slots}) {
		let app = useApp();
		console.log(slots?.['default']?.());
		return () => {
			return h(
				'div',
				{
					style: {
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center',
						userSelect: 'none',
					},
				},
				h(
					'div',
					{
						style: {
							fontSize: `calc(${1}em + ${app.xvpibdby}rem)`,
							height: `${1}em`,
							lineHeight: 1,
							position: 'relative',
							width: `${1}em`,
						},
					},
					h(
						'div',
						{
							style: {
								bottom: '50%',
								position: 'absolute',
								right: '50%',
								transform: 'translate(50%, 50%)',
							},
						},
						h('span', {class: 'mdi mdi-home'}),
					),
				),
			);
		};
	},
});
