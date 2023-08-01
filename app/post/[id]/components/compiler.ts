enum Marker {
    Header1 = '#',
    Header2 = '##',
    Header3 = '###',
    OrderedList = '^\\d\\.$',
    UnorderedList = '-',
    Block = '>',
    Code = '```',
}

function compile2(markdown: string) {
    let compiled = ''


    return compiled
}


// cancel on space after/before key
// Bold	**bold text**
// Italic	*italicized text*


// TODO: fix ul and ol (duplicates)
// TODO: enum markers
// TODO: look up for markers inside lines not only at beginning

export default function compile(markdown : string) {

    // Horizontal Rule
    // ---

    // one line
    // Heading
    // # H1
    // ## H2
    // ### H3

    // cancel on empty line
    // > blockquote
    // `code`

    // Unordered List
    // - First item
    // - Second item
    // - Third item

    // Ordered List
    // 1. First item
    // 2. Second item
    // 3. Third item

    let compiled = ''

    const contentArray = markdown.split(/\r?\n/);

    for (let i = 0; i < contentArray.length; i++) {
        const l = contentArray[i].trim()

        if(l === ''){
            compiled += '<br>'
            continue
        }

        // Link
        // [title](https://www.example.com)
        // <a href="url">link text</a>

        if (l.charAt(0) === '[') {
            const split = l.substring(1, l.length - 1).split('](');

            const title = split[0].trim()
            const link = split[1].trim()

            compiled += `<a href="${link}">${title}</a>`
            continue
        }

        // Image
        // ![alt text](image.jpg)
        // '<img src="image.jpg" alt="alt text">'
        if (l.substring(0, 2) === '![') {
            const split = l.substring(2, l.length - 1).split('](');

            const title = split[0].trim()
            const link = split[1].trim()

            compiled += `<img src="${link}" alt="${title}">`
            continue
        }

        if (l.trim().split(' ')[0] === '-') {
            let list = '<ul>'

            for (let j = i; j < contentArray.length; j++) {
                const item = l.trim()

                if (l.trim().split(' ')[0] !== '-') {
                    i = j;
                    break;
                }

                list += `<li>${item.substring(1, l.length).trim()}</li>`
                // codeBlock += `<p>${j - i} ${codeLine}</p>`
            }

            list += '</ul>'

            compiled += list
            continue
        }

        if (/^\d\.$/.test(l.trim().split(' ')[0])) {
            let list = '<ol>'

            for (let j = i; j < contentArray.length; j++) {
                const item = l.trim()

                if (!/^\d\.$/.test(l.trim().split(' ')[0])) {
                    i = j;
                    break;
                }

                list += `<li>${item.substring(2, l.length).trim()}</li>`
                // codeBlock += `<p>${j - i} ${codeLine}</p>`
            }

            list += '</ol>'

            compiled += list
            continue
        }

        if (l[0] === '*' && l[l.length - 1] === '*') {
            if (l[1] === '*' && l[l.length - 2] === '*') {
                compiled += `<b>${l.substring(2, l.length - 2)}</b>`
                continue
            } else {
                compiled += `<em>${l.substring(1, l.length - 1)}</em>`
                continue
            }
        }

        if (l === '```') {
            // style="width: fit-content; backdrop-filter: brightness(0.7); border: 1px solid gray; padding: 4px"
            let codeBlock = '<div id="code">'

            for (let j = i + 1; j < contentArray.length; j++) {
                const codeLine = contentArray[j].trim()

                if (codeLine == '' || codeLine == '```') {
                    i = j;
                    break;
                }

                codeBlock += `<p>${codeLine}</p>`
                // codeBlock += `<p>${j - i} ${codeLine}</p>`
            }

            codeBlock += '</div>'

            compiled += codeBlock
            continue
        }

        if (l.trim().split(' ')[0] === '###') {
            compiled += `<h3>${l.trim().substring(3, l.length).trim()}</h3>`
            continue
        }

        if (l.trim().split(' ')[0] === '##') {
            compiled += `<h2>${l.trim().substring(2, l.length).trim()}</h2>`
            continue
        }

        if (l.trim().split(' ')[0] === '#') {
            compiled += `<h1>${l.trim().substring(1, l.length).trim()}</h1>`
            continue
        }

        if (l.trim().split(' ')[0] === '>') {
            let blockQuote = '<div id="block">'

            for (let j = i; j < contentArray.length; j++) {
                const quoteLine = contentArray[j].trim()

                if (quoteLine.trim().split(' ')[0] !== '>') {
                    i = j - 1;
                    break;
                }

                blockQuote += `<p>${quoteLine.substring(1, quoteLine.length).trim()}</p>`
            }

            blockQuote += '</div>'

            compiled += blockQuote
            continue
        }


        compiled += `<p>${l}</p>`
    }

    return compiled
}
