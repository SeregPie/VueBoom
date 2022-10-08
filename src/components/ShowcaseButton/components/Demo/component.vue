<script>
import {SenecButton} from '@senec/vue-ui';
import {reactive} from 'vue';

export default {
	name: 'MyDemo',
	components: {
		SenecButton,
	},
	setup() {
		let test = reactive({
			appearance: 'filled',
			label: true,
			icon: false,
			disabled: false,
			click: () => {
				// todo: toast message
				console.log('button:onClick');
			},
		});
		return {test};
	},
};
</script>
<template>
	<div style="display: grid; gap: 2rem; grid-template-columns: 1fr 200px">
		<div style="align-items: center; display: flex; justify-content: center">
			<SenecButton
				:appearance="test.appearance"
				:disabled="test.disabled"
				:icon="test.icon ? '🎈' : null"
				:label="test.label ? 'this is some label' : null"
				@click="test.click()"
			/>
		</div>
		<div>
			<div style="display: grid; gap: 1rem">
				<label>
					<input
						v-model="test.label"
						type="checkbox"
					/>
					<span>label</span>
				</label>
				<label>
					<input
						v-model="test.icon"
						type="checkbox"
					/>
					<span>icon</span>
				</label>
				<label>
					<input
						v-model="test.disabled"
						type="checkbox"
					/>
					<span>disabled</span>
				</label>
				<fieldset>
					<div style="display: flex; flex-direction: column; gap: 0.5rem">
						<div>appearance</div>
						<label>
							<input
								v-model="test.appearance"
								type="radio"
								value="filled"
							/>
							<span>filled</span>
						</label>
						<label>
							<input
								v-model="test.appearance"
								type="radio"
								value="outlined"
							/>
							<span>outlined</span>
						</label>
						<label>
							<input
								v-model="test.appearance"
								type="radio"
								value="text"
							/>
							<span>text</span>
						</label>
					</div>
				</fieldset>
			</div>
		</div>
	</div>
</template>
