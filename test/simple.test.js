const { buildQuery } = require('../');

test('Simple Select Query', () => {
    expect(
        buildQuery("SELECT * FROM fruits WHERE seller = @name;", { "@name": "sample" }))
        .toBe("SELECT * FROM fruits WHERE seller = 'sample';");
});


test('Simple Insert Query', () => {
    expect(
        buildQuery("INSERT INTO fruits (name, color, seller, address) values(@name, @color, @seller, @address);",
            {
                "@name": "apple",
                "@color": "red",
                "@seller": "sample",
                "@address": "120 test road"
            }))
        .toBe("INSERT INTO fruits (name, color, seller, address) values('apple', 'red', 'sample', '120 test road');");
});


test('Insert Query with Different data types', () => {
    expect(
        buildQuery("INSERT INTO vegetables (name, quantity) values(@name, @quantity);",
            {
                "@name": "apple",
                "@quantity": 2
            }))
        .toBe("INSERT INTO vegetables (name, quantity) values('apple', 2);");
});




