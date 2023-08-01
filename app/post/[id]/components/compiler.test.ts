import {expect, test} from "@jest/globals";
import compile from "../../[id]/components/compiler";

test('link', () => {
    const content = '[title](https://www.example.com)';

    expect(compile(content))
        .toBe('<a href="https://www.example.com">title</a>');
});

test('code', () => {
    const content =
        `\`\`\`
            code1
            code2
            code3
         \`\`\``;

    const expected =
        '<div id="code"><p>code1</p><p>code2</p><p>code3</p></div>'

    expect(compile(content)).toBe(expected);
});

test('bold', () => {
    const content = '**bold**';

    expect(compile(content)).toBe('<b>bold</b>');
});

test('italic', () => {
    const content = '*italic*';

    expect(compile(content)).toBe('<em>italic</em>');
});

test('text', () => {
    const content = 'text';

    expect(compile(content)).toBe('<p>text</p>');
});


test('unordered list item', () => {
    const content = '- item';

    expect(compile(content)).toBe('<ul><li>item</li></ul>');
});
test('ordered list item', () => {
    const content = '1. item';

    expect(compile(content)).toBe('<ol><li>item</li></ol>');
});

test('image', () => {
    const content = '![alt text](image.jpg)';

    expect(compile(content))
        .toBe('<img src="image.jpg" alt="alt text">');
});

test('header 1', () => {
    const content = '# header';

    expect(compile(content))
        .toBe('<h1>header</h1>');
});

test('header 2', () => {
    const content = '## header';

    expect(compile(content))
        .toBe('<h2>header</h2>');
});

test('header 3', () => {
    const content = '### header';

    expect(compile(content))
        .toBe('<h3>header</h3>');
});

test('block quote', () => {
    const content = '> blockquote1';

    const expected = '<div id="block"><p>blockquote1</p></div>'

    expect(compile(content)).toBe(expected);
});

test('block quote 2 lines', () => {
    const content =
        `> blockquote1
         blockquote2`

    const expected =
        '<div id="block"><p>blockquote1</p></div><p>blockquote2</p>'

    expect(compile(content)).toBe(expected);
});

test('block quote empty next line', () => {
    const markdown =
        `> blockquote1
        
         blockquote2`;

    const expected =
        '<div id="block"><p>blockquote1</p></div><br><p>blockquote2</p>'

    expect(compile(markdown)).toBe(expected);
});


