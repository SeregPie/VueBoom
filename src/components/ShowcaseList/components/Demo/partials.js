import {faker} from '@faker-js/faker';

let lastItemId = 0;

export function genItem() {
	return {
		id: ++lastItemId,
		name: faker.lorem.words(faker.datatype.number({min: 1, max: 3})),
		text: faker.lorem.sentence(faker.datatype.number({min: 3, max: 8})),
	};
}

export function genItems(count) {
	return Array.from({length: count}).map(() => genItem());
}
