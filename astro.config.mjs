// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// Published at https://riffat786.github.io/docs-as-code-starlight/
export default defineConfig({
	site: 'https://riffat786.github.io',
	base: '/docs-as-code-starlight/',
	integrations: [
		mermaid(),
		starlight({
			title: 'Docs-as-Code with Starlight',
			description: 'The same Docs-as-Code content, published with Starlight instead of Docusaurus.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Riffat786/docs-as-code-starlight' },
			],
			sidebar: [
				{ label: 'Welcome', items: [{ autogenerate: { directory: 'welcome' } }] },
				{ label: 'Markdown', items: [{ autogenerate: { directory: 'markdown' } }] },
				{ label: 'Docs-as-Code Workflow', items: [{ autogenerate: { directory: 'workflow' } }] },
				{ label: 'Static Site Generators', items: [{ autogenerate: { directory: 'static-site-generators' } }] },
				{ label: 'Portfolio', items: [{ autogenerate: { directory: 'portfolio' } }] },
			],
		}),
	],
});
