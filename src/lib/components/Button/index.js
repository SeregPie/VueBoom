import {computed, defineComponent, h, shallowRef} from 'vue';

import SenecIcon from '../Icon';

export default defineComponent({
	name: 'SenecButton',
	props: {
		appearance: String,
		disabled: Boolean,
		icon: String,
		label: String,
	},
	setup(props) {
		let normalizedAppearanceRef = computed(() => props.appearance || 'filled');
		let normalizedLabelRef = computed(() => props.label);
		//
		let hoveredRef = shallowRef(false);
		// todo
		let colorXvpibdby = 'LightSeaGreen';
		let colorDdigdcuk = 'LavenderBlush';
		let colorAllosrjv = 'FireBrick';
		//
		let mmft = 1; // text size
		let onjj = 1 / 2; // text line padding
		return () => {
			let appearance = normalizedAppearanceRef.value;
			let label = normalizedLabelRef.value;
			let hovered = hoveredRef.value;
			let {disabled, icon} = props;
			let rootStyle = {
				borderRadius: '9999px', // use var
				cursor: 'pointer',
				transitionDuration: `${300}ms`,
				transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
				userSelect: 'none',
			};
			let rootChildren;
			switch (appearance) {
				case 'filled': {
					Object.assign(rootStyle, {
						color: colorDdigdcuk,
						transitionProperty: ['background-color'].join(', '),
					});
					if (hovered) {
						Object.assign(rootStyle, {
							backgroundColor: colorAllosrjv,
						});
					} else {
						Object.assign(rootStyle, {
							backgroundColor: colorXvpibdby,
						});
					}
					break;
				}
				case 'outlined': {
					let borderWidth = 1; // outline width
					Object.assign(rootStyle, {
						outlineOffset: `${-borderWidth}px`,
						outlineStyle: 'solid',
						outlineWidth: `${borderWidth}px`,
						transitionProperty: ['color', 'outline-color'].join(', '),
					});
					if (hovered) {
						Object.assign(rootStyle, {
							color: colorAllosrjv,
							outlineColor: colorAllosrjv,
						});
					} else {
						Object.assign(rootStyle, {
							color: colorXvpibdby,
							outlineColor: colorXvpibdby,
						});
					}
					break;
				}
				case 'text': {
					Object.assign(rootStyle, {
						transitionProperty: ['color'].join(', '),
					});
					if (hovered) {
						Object.assign(rootStyle, {
							color: colorAllosrjv,
						});
					} else {
						Object.assign(rootStyle, {
							color: colorXvpibdby,
						});
					}
					break;
				}
			}
			if (disabled) {
				Object.assign(rootStyle, {
					pointerEvents: 'none',
				});
			}
			if (label != null && icon != null) {
				Object.assign(rootStyle, {
					display: 'flex',
					padding: `${1 / 2}rem ${1}rem`,
				});
				rootChildren = [
					h(SenecIcon, () => icon),
					h(
						'div',
						{
							key: 'label',
							style: {
								fontSize: `${mmft}rem`,
								lineHeight: `${mmft + onjj}rem`,
								marginInline: `${1 / 2}rem`,
							},
						},
						label,
					),
				];
			} else if (label != null) {
				Object.assign(rootStyle, {
					fontSize: `${mmft}rem`,
					lineHeight: `${mmft + onjj}rem`,
					padding: `${1 / 2}rem ${2}rem`,
				});
				rootChildren = `${label}`;
			} else if (icon != null) {
				Object.assign(rootStyle, {
					padding: `${1 / 2}rem`,
				});
				rootChildren = h(SenecIcon, () => icon);
			}
			return h(
				'div',
				{
					key: appearance,
					style: rootStyle,
					onMouseenter() {
						hoveredRef.value = true;
					},
					onMouseleave() {
						hoveredRef.value = false;
					},
				},
				rootChildren,
			);
		};
	},
});
