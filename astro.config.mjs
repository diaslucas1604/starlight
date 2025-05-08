// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Apex GO',
            description: 'Apex GO é um sistema para produtores e afiliados de produtos encapsulados.',
            social: [
                { icon: 'external', label: 'Website', href: 'https://app.apexgo.com.br/' },
            ],
            sidebar: [
                {
                    label: 'Principal',
                    items: [
                        { label: 'Visão Geral', slug: 'guides/principal' },
                    ],
                },
                {
                    label: 'Como usar',
                    items: [
                        { label: 'Como usar', slug: 'guides/como-usar' },
                    ],
                },
                {
                    label: 'API',
                    items: [
                        { label: 'API', slug: 'guides/api' },
                    ],
                },
                {
                    label: 'Afiliados',
                    items: [
                        { label: 'Afiliados', slug: 'guides/afiliados' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
            locales: {
                root: {
                    label: 'Português',
                    lang: 'pt-BR',
                },
                en: {
                    label: 'English',
                    lang: 'en',
                },
            },
        }),
    ],
    outDir: './dist',
});