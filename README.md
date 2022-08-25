<center>
<h1>My Personal blog</h1>

<section>
    <h3>Technologies used:</h3>
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next JS" />
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components" />
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Deployed with Vercel" />
    <img src="https://img.shields.io/badge/PRISMIC%20CMS-007aff?style=for-the-badge" alt="Integrated with Prismic CMS" />
<section>

<br />
<p>Watch it running at <a href="https://vitorsnx.vercel.app" target="_blank">vitorsnx.vercel.app</a></p>
</center>

<br />

---

## Running Locally

Clone or download this repository

Create a [Prismic](https://prismic.io) repository with the following document definition:
```
posts: {
  description: string,
  uid: string,
  title: string,
  content: string,
}
```

Add a `.env.local` file at the root of the project.

Add a `PRISMIC_REPOSITORY_NAME` environment variable with the name of the repository

Run

`yarn install`

`yarn dev`

To run test assertions, run `yarn test`