import { ToyBuilder } from '../src/builders/toy.builder';

describe('ToyBuilder', () => {
    it('builds a Toy with all required properties set', () => {
        const toy = ToyBuilder.newBuilder()
            .setToyType('Building Blocks')
            .setAgeGroup('3-5')
            .setBrand('LEGO')
            .setMaterial('Plastic')
            .setBatteryRequired('No')
            .setEducational('Yes')
            .build();

        expect(toy.getToyType()).toBe('Building Blocks');
        expect(toy.getAgeGroup()).toBe('3-5');
        expect(toy.getBrand()).toBe('LEGO');
        expect(toy.getMaterial()).toBe('Plastic');
        expect(toy.getBatteryRequired()).toBe('No');
        expect(toy.getEducational()).toBe('Yes');
    });

    it('throws when required properties are missing', () => {
        const builder = ToyBuilder.newBuilder()
            .setToyType('Building Blocks')
            .setAgeGroup('3-5');
        // brand, material, batteryRequired, educational never set

        expect(() => builder.build()).toThrow('All required fields must be set');
    });

    it('supports fluent chaining by returning the builder from each setter', () => {
        const builder = ToyBuilder.newBuilder();

        expect(builder.setToyType('Building Blocks')).toBe(builder);
        expect(builder.setAgeGroup('3-5')).toBe(builder);
        expect(builder.setBrand('LEGO')).toBe(builder);
        expect(builder.setMaterial('Plastic')).toBe(builder);
        expect(builder.setBatteryRequired('No')).toBe(builder);
        expect(builder.setEducational('Yes')).toBe(builder);
    });
});
