import { configApp } from '@/config/config';
import { IPost } from '@/models/definitions';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const HeroLayout: React.FC<{posts: IPost[]}> = ({posts}) => {
  const router = useRouter()
  return (
    <div>
      {
        posts.map((post)=>(
          <div key={post.id} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center rounded-md gap-x-4">
            <div  className='flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 md:h-full'>
                <div className="w-full md:w-1/3 flex">
                  <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${configApp.routes.postGetImage}/${post.id}`} 
                  alt="Imagem do Post" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  width={300}
                  height={500}
                  quality={100}
                  priority
                  />
                </div>

                <div className="w-full md:w-1/3 flex flex-col justify-center text-left">
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{post.title}</h1>
                  <p className="text-lg md:text-xl mb-8">
                    <div
                      dangerouslySetInnerHTML={{__html: post.content!}}
                      className="text-lg md:text-xl mb-8"
                    >
                    </div>
                  </p>
                  <button  
                  onClick={()=>{
                    if(post.link)
                      router.push(`${configApp.api.urlBase}:${'3000'}${post.link}`)
                  }}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                      Saiba Mais
                  </button>
                </div>
            </div>
          </div>
        ))

      }

    </div>
 
  );
};

export default HeroLayout;
