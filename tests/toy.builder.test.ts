import { ToyBuilder } from '../src/builders/toy.builder';

describe('ToyBuilder', () => {
    it('builds a Toy with all required properties set', () => {
        const toy = new ToyBuilder()
            .setToyName('Building Blocks')
            .setAgeGroup('3-5')
            .setBrand('LEGO')
            .setMaterial('Plastic')
            .setColor('Multi-color')
            .build();

        expect(toy.getToyName()).toBe('Building Blocks');
        expect(toy.getAgeGroup()).toBe('3-5');
        expect(toy.getBrand()).toBe('LEGO');
        expect(toy.getMaterial()).toBe('Plastic');
        expect(toy.getColor()).toBe('Multi-color');
    });

    it('throws when required properties are missing', () => {
        const builder = new ToyBuilder()
            .setToyName('Building Blocks')
            .setAgeGroup('3-5');
        // brand, material, color never set

        expect(() => builder.build()).toThrow('All required fields must be set');
    });

    it('supports fluent chaining by returning the builder from each setter', () => {
        const builder = new ToyBuilder();

        expect(builder.setToyName('Building Blocks')).toBe(builder);
        expect(builder.setAgeGroup('3-5')).toBe(builder);
        expect(builder.setBrand('LEGO')).toBe(builder);
        expect(builder.setMaterial('Plastic')).toBe(builder);
        expect(builder.setColor('Multi-color')).toBe(builder);
    });
});
