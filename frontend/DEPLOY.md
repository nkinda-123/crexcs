Vercel deployment instructions

Quick CLI deploy (recommended once account is available):

1. Install Vercel CLI:

```
npm install -g vercel
```

2. From the `frontend` folder run:

```
cd frontend
vercel login
vercel --prod
```

Follow the prompts. When asked for the project root, ensure it's the current folder (the `frontend` directory).

Dashboard deploy via GitHub:

1. Push your repo to GitHub.
2. Go to https://vercel.com/new and connect your GitHub account.
3. Select your repository and set the Root Directory to `frontend`.
4. Framework Preset: `Other` — leave build & output blank.
5. Deploy.

Notes:
- The frontend already points to the Render backend (`https://crexjulie-portifolio.onrender.com`).
- The `vercel.json` file provides a static build and a SPA rewrite to `index.html`.
