export const configApp = {
    app: {
        urlBase: process.env.NEXT_PUBLIC_API_URL,
        port: process.env.NEXT_PUBLIC_API_PORT
    },
    api: {
        urlBase: process.env.NEXT_PUBLIC_API_URL,
        port: process.env.NEXT_PUBLIC_API_PORT
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