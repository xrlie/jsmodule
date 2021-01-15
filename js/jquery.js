$(function() {
    console.log('Document ready')

    $('body h1').after(`<div></div>`)
    $('body').find(`div`).addClass('list')

    $('body div').after(`
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ol>
    `)

    $('body ol li').addClass('list_item')
    
})