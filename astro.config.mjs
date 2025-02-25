// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Stack Track Review',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Code Quality',
          autogenerate: {
            directory: 'code-quality',
          }
        },
        {
          label: 'Dependencies',
          autogenerate: {
            directory: 'dependencies',
          }
        },
        {
          label: 'Performance and Optimization',
          autogenerate: {
            directory: 'performance-optimization',
          }
        }
      ],
    }),
  ],
})
