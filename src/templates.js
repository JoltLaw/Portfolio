const templates =[
    {
        render: "iframe",
        link: "https://joltlaw.github.io/PortfolioTemplate1/",
        title: "Portfolio site template 1",
        body: "Template for basic portfolio site meant to give the feeling of looking at art in a gallery."
    }
]

templates.forEach(template => {
    createPolariod(template)
});