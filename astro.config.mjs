// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Stack Track Review',
      social: {
        github: 'https://github.com/Banzay700/stack-track-review-doc',
      },
      sidebar: [
        {
          label: 'Code Quality',
          items: [
            { label: 'Readability & Consistency', link: 'code-quality/readability-consistency' },
            { label: 'Typescript & Linting', link: 'code-quality/typescript-safety' },
            { label: 'Structure & Organization', link: 'code-quality/code-structure-and-organization',  },
          ]
        },
        {
          label: 'Dependencies',
          autogenerate: {
            directory: 'dependencies',
          }
        },
        {
          label: 'Performance & Optimization',
          autogenerate: {
            directory: 'performance-optimization',
          }
        },
        {
          label: 'Application',
          autogenerate: {
            directory: 'application',
          }
        }
      ],
    }),
  ],
})
