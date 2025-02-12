import RichTextEditor from "@/components/RichTextEditor";
import { configApp } from "@/config/config";
import { ICategoria, IPost } from "@/models/definitions";
import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react";

const EditPostPage: React.FC = () => {  
    const [post, setPost] = useState<IPost | null>({  title: '',
        content: '',
        categoriaId: undefined,
        tipo: 'post'});
    const [categorias, setCategorias] = useState<ICategoria[] | null>([])
    const router = useRouter();
    const { id } = router.query;

    useEffect(()=>{
        const fetchPost = async () => {
            try {
                const urlPost = `${process.env.NEXT_PUBLIC_API_URL}${configApp.routes.posts}/${id}`;
                const response = await fetch(urlPost);
                const data = await response.json();
                console.log(data)
                setPost(data);
                // setPost({...post, updatedAt: new Date()})
                console.log({post, urlPost});
            } catch (error) {
                console.log('O seguinte erro ocorreu.', error);
            }
        }

        if(id) fetchPost();
    }, []);

    useEffect(()=>{
        const fetchCategorias = async() => {
            try {
                const urlCategorias = `${process.env.NEXT_PUBLIC_API_URL}${configApp.routes.categorias}`;
                const responseCategoria = await fetch(urlCategorias);
                const dataCategorias = await responseCategoria.json();
                setCategorias(dataCategorias)
                console.log({categorias, urlCategorias})
            } catch (error) {
                console.log('O seguinte erro ocorreu.', error);
            }
        }

        fetchCategorias()

    });

    const handleSave = async () => {
        if (!post) return;
        
        try {
            setPost({...post, updatedAt: new Date()})
            console.log({post})
            const urlSavePost = `${process.env.NEXT_PUBLIC_API_URL}${configApp.routes.posts}/${id}`
            const response = await fetch(urlSavePost, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(post) // Envia o post atualizado
            });
    
          if (response.ok) {
            alert('Post atualizado com sucesso!');
            router.push('/admin/posts');
          } else {
            console.log(response)
            alert('Erro ao atualizar o post.');
          }
        } catch (error) {
          console.error('Erro ao salvar o post:', error);
        }
    };

   
    const handlerVoltar = () => {
        router.push('/admin/posts')
    } 
   
    const handlerImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) {
            console.warn("Nenhum arquivo selecionado");
            return;
        }
        
        const file = event.target.files[0];
        try {
            setPost((prevPost)=> ({
                ...prevPost,
                image: file,
            }));
            console.log({ post, arquivo: file });
        } catch (error) {
            console.log({error})
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Editar Post</h1>

      <div className="mb-4">
        <label htmlFor="title" className="block font-medium mb-1">
          Título
        </label>
        <input
          id="title"
          type="text"
          value={post?.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          className="w-full px-3 py-2 border rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label>
            Categoria
        </label>
        <select
            id='categoriaId'
            value={post?.categoriaId}
            onChange={(e)=>setPost({...post, content: e.target.value})}
            className="border p-2 rounded-md mr-2 w-full mb-4 text-black"
        >
            {categorias?.map((categoria)=>(
                    <option
                        className="text-black" key={categoria.id} value={String(categoria.id)} 
                    >
                        {categoria.descricao}
                    </option>
                ))
            }
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block font-medium mb-1">
          Conteúdo
        </label>
        <RichTextEditor
          value={post?.content}
          onChange={(valor)=>setPost({...post, content: valor})} // Atualiza o estado do conteúdo
        />
      </div>
      <div className="mb-4">
        <label>Imagem</label>
        <div>
            <input type="file" 
            onChange={(e) => {
                if(e.target.files?.[0]) handlerImage(e)
            }}

            />
        </div>
      </div>
      <div className="flex gap-3">
        <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            Salvar
        </button>
        <button
            onClick={handlerVoltar}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
            Voltar
        </button>
      </div>      
    </div>
    )
}

export default EditPostPage;