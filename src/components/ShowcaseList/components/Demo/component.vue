<script>
import {faker} from '@faker-js/faker';
import {SenecButton, SenecList, SenecListItem} from '@senec/vue-ui';
import {computed, ref, getCurrentInstance} from 'vue';

import {genItem, genItems} from './partials';

export default {
	name: 'MyDemo',
	components: {
		SenecButton,
		SenecList,
		SenecListItem,
	},
	setup() {
		let itemsRef = ref(genItems(3));
		let itemsLimit = 8;
		let addItemRef = computed(() => {
			let items = itemsRef.value;
			if (items.length < itemsLimit) {
				return () => {
					const index = faker.datatype.number({min: 0, max: items.length});
					items.splice(index, 0, genItem());
				};
			}
		});
		let addItemDisabled = computed(() => !addItemRef.value);
		let addItem = () => {
			const fn = addItemRef.value;
			if (fn) {
				fn();
			}
		};
		let removeItem = (index) => {
			let items = itemsRef.value;
			items.splice(index, 1);
		};
		return {
			addItem,
			addItemDisabled,
			items: itemsRef,
			removeItem,
		};
	},
};
</script>
<template>
	<div style="display: grid; gap: 2rem; grid-template-columns: 1fr 200px">
		<div style="align-items: center; display: flex; justify-content: center">
			<SenecList>
				<SenecListItem
					v-for="(item, i) in items"
					:key="item.id"
					:dummy-index="i"
					v-slot="{index}"
				>
					<div
						style="
							display: grid;
							gap: 1rem;
							grid-template-columns: auto 1fr auto;
						"
					>
						<div style="font-size: 2rem">{{ index + 1 }}</div>
						<div>
							<div>{{ item.name }}</div>
							<div class="senec-text-outline">{{ item.text }}</div>
						</div>
						<SenecButton
							label="remove"
							@click="removeItem(i)"
						/>
					</div>
				</SenecListItem>
			</SenecList>
		</div>
		<div>
			<div style="display: grid; gap: 1rem">
				<SenecButton
					:disabled="addItemDisabled"
					label="add item"
					@click="addItem()"
				/>
			</div>
		</div>
	</div>
</template>
