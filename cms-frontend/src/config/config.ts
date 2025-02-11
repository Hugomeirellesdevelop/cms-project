export const configApp = {
    app: {
        urlBase: process.env.NEXT_PUBLIC_API_URL || '82.29.60.183',
        port: process.env.NEXT_PUBLIC_API_PORT || '3001'
    },
    api: {
        urlBase: process.env.NEXT_PUBLIC_API_URL || '82.29.60.183',
        port: process.env.NEXT_PUBLIC_API_PORT || '3001'
    },
    routes: {
        categorias: '/categorias',
        categoriaDefault: '/categorias/default/find',
        posts: '/posts',
        postsPorCategoria: '/posts/findAllPostsFromCategoria',
        postUploadArquivo: '/posts/upload/arquivo',
        postGetImage: '/posts/image'
    }
}