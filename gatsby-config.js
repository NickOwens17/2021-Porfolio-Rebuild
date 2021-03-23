module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: `boc3oj5p`,
                dataset: `production`,
                // a token with read permissions is required
                // if you have a private dataset
                // token: process.env.SANITY_TOKEN,

                // If the Sanity GraphQL API was deployed using `--tag <name>`,
                // use `graphqlTag` to specify the tag name. Defaults to `default`.
                graphqlTag: 'default',
            },
        }
    ]
}