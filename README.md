
# ryanq.github.io

The source for my personal site, hosted at https://ryanq.github.io.

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ryanq/ryanq.github.io/deploy.yml)

## Run Locally

Here's how to run the dev server:

```bash
$ git clone https://github.com/ryanq/ryanq.github.io

$ cd ryanq.github.io
$ yarn
$ yarn run dev
```

To build and preview the site, replace `yarn run dev` with `yarn run build && yarn run preview`

## Deployment

This project is deployed through GitHub Actions. When a commit is pushed on the `main` branch, an Action will build and deploy the site.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

- `AIRTABLE_TOKEN`: a personal access token (PAT) for Airtable.
- `BASE_WISH_LIST`: the identifier for an Airtable base containing the data for the `/wish` page.

## Contributing

Contributions are welcome! However, it's my personal site and the words are mine, so I can say no to any of them.
