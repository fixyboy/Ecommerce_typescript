import { CakeBuilder } from '../src/builders/cake.builder';

describe('CakeBuilder', () => {

    it('builds a Cake with all required properties set', () => {
        const cake = new CakeBuilder()
            .setType('Birthday')
            .setFlavor('Chocolate')
            .setFilling('Ganache')
            .setSize(10)
            .setLayers(2)
            .setFrostingType('Buttercream')
            .setFrostingFlavor('Vanilla')
            .setDecorationType('Sprinkles')
            .setDecorationColor('Multi-color')
            .setCustomMessage('Happy Birthday')
            .setShape('Round')
            .setAllergies('Nut-Free')
            .setSpecialIngredients('Organic')
            .setPackagingType('Standard Box')
            .build();

        expect(cake.getType()).toBe('Birthday');
        expect(cake.getFlavor()).toBe('Chocolate');
        expect(cake.getLayers()).toBe(2);
        expect(cake.getShape()).toBe('Round');
    });

    it('throws when required properties are missing', () => {
        const builder = new CakeBuilder()
            .setType('Wedding')
            .setFlavor('Vanilla');
        // filling, size, layers, etc. never set

        expect(() => builder.build()).toThrow();
    });

    it('supports fluent chaining by returning the builder from each setter', () => {
        const builder = new CakeBuilder();

        expect(builder.setType('Other')).toBe(builder);
        expect(builder.setFlavor('Red Velvet')).toBe(builder);
    });
});
