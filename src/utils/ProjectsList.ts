interface Project {
    title: string;
    description: string;
    linkRepo: string;
    linkDemo?: string;
    image: string;
    tech: string[];
}

export const projects: Project[] = [
    {
        title: "Portafolio con React y Next.js",
        description: "Creación de portafolio con Next.js con SSR. Una versión de portafolio hecha con next.js y navegación entre páginas dinámicas de portafolio",
        linkRepo: "https://github.com/ecc97/portafolio",
        linkDemo: "https://portafolio-sand-gamma.vercel.app",
        image: "https://res.cloudinary.com/dtcdhb93h/image/upload/v1743803062/portafolio-next-ec-thumbnail_at09y6.webp",
        tech: ["Next.js", "TypeScript", "Tailwind", "Css modules"],
    },
    {
        title: "Galería de imagenes",
        description:
            "Creación de una galería de imagenes usando Next.js y consumiendo la API de Pexels para mostrar una galería de imágenes dinámicas y filtrables",
        linkRepo: "https://github.com/ecc97/visionPx",
        linkDemo: "https://vision-px.vercel.app",
        image: "https://res.cloudinary.com/dtcdhb93h/image/upload/v1743803061/visionPX-thumbnail_zjdvuh.webp",
        tech: ["Next.js", "TypeScript", "Tailwind", "Sass"],
    },
    {
        title: "Login/Register Auth",
        description:
            "Creación de un sistema de autenticación con nextauth y firebase, que permite a los usuarios registrarse, iniciar sesión y acceder a una página de perfil protegida",
        linkRepo: "https://github.com/ecc97/auth-basic-next-firebase",
        linkDemo: "https://auth-basic-next-firebase.vercel.app",
        image: "https://res.cloudinary.com/dtcdhb93h/image/upload/v1743803061/auth-general-basic-thumbnail_legl4s.webp",
        tech: ["Next.js", "React", "Sass", "Firebase", "NextAuth"],
    },
    {
        title: "Next.js Prisma CRUD de Notas",
        description:
            "Creación de un CRUD de notas usando Next.js, Prisma y TypeScript",
        linkRepo: "https://github.com/ecc97/nextjs-prisma-crud",
        linkDemo: "https://nextjs-prisma-crud-tan.vercel.app",
        image: "https://res.cloudinary.com/dtcdhb93h/image/upload/v1743803059/nextjsprismacrud-thumbnail_obrpst.webp",
        tech: ["Next.js", "React", "Tailwind", "Prisma", "Supabase"],
    },
    {
        title: "Api de DB",
        description:
            "Integración de una API, que obtiene una lista de personajes, usando TypeScript y permite navegación por paginación",
        linkRepo: "https://github.com/ecc97/api-db",
        linkDemo: "https://api-db-a324.netlify.app",
        image: "https://res.cloudinary.com/dtcdhb93h/image/upload/v1743803061/apidb-thumbnail_ry2090.webp",
        tech: ["TypeScript", "CSS", "JavaScript", "Api Fetch"],
    },
    {
        title: "Tienda de carrito de productos",
        description:
            "Este es un proyecto de un store de productos con carrito de compras usando NextJs y TypeScript, adicionando NextAuth y Redux",
        linkRepo: "https://github.com/ecc97/ecommerce-shop-cart",
        linkDemo: "https://ecommerce-shop-cart.vercel.app",
        image: "https://res.cloudinary.com/dtcdhb93h/image/upload/v1743803061/hubhobby-thumbnail_m9kkwj.webp",
        tech: ["Next.js", "React", "TypeScript", "NextAuth", "Redux"],
    },
    {
        title: "siekGPT",
        description:
            "Proyecto en conjunto de una aplicación web permite a los usuarios interactuar con el modelo GPT de OpenAI",
        linkRepo: "https://github.com/sebas1913/api-openai",
        linkDemo: "https://api-openai.vercel.app/",
        image: "https://res.cloudinary.com/dtcdhb93h/image/upload/v1743803060/siekGPT-thumbnail_an3ud7.webp",
        tech: ["Next.js", "TypeScript", "Prisma", "OpenAI API"],
    },
    {
        title: "System Invoicing",
        description:
            "Aplicación web para la gestión de facturas que integra autenticación, creación, listado, actualización y eliminación de facturas, junto con el registro de pagos",
        linkRepo: "https://github.com/ecc97/system-invoicing",
        linkDemo: "https://system-invoicing.vercel.app/",
        image: "https://res.cloudinary.com/dtcdhb93h/image/upload/v1743803061/invoicing-thumbnail_kmonj1.webp",
        tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    },
    {
        title: "Hostalia",
        description:
            "Aplicación web para la gestión y reservas de alojamientos que permite a los usuarios explorar alojamientos, ver detalles, buscar, filtrar y realizar reservas",
        linkRepo: "https://github.com/ecc97/hostalia",
        linkDemo: "https://hostalia.vercel.app/",
        image: "https://res.cloudinary.com/dtcdhb93h/image/upload/v1752525118/site-hostalia_jv2oce.webp",
        tech: ["React", "Next.js", "TypeScript", "Appwrite", "Tailwind"],
    }
];
