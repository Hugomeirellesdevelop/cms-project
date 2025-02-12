export const configApp = {
    // app: {
    //     urlBase: '82.29.60.183',
    //     port:  '3000'
    // },
    api: {
        urlBase:  '82.29.60.183',
        port: '3001'
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