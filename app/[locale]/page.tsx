import { Github, Linkedin, Star, Twitter } from 'lucide-react'
import Image from 'next/image'

import { Avatar, AvatarImage } from '@/ui/avatar'
import { Button } from '@/ui/button'
import { AppHeader } from '@/components'
import { Logo } from '@/components'
// import { db } from '@/lib/db'

const data = {
  heading: '🚀 Plantilla para el Desarrollo de Aplicaciones SaaS',
  description:
    '🌟 Una solución integral para acelerar el desarrollo de tu aplicación SaaS. Personaliza y despliega rápidamente con Next.js, Shadcn UI y Tailwind CSS. ¡Comienza hoy mismo!',
  button: {
    text: '👉 Comenzar con la Plantilla',
    url: 'https://www.shadcnblocks.com',
  },
  reviews: {
    count: 200,
    avatars: [
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-1.webp',
        alt: 'Avatar 1',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-2.webp',
        alt: 'Avatar 2',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-3.webp',
        alt: 'Avatar 3',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-4.webp',
        alt: 'Avatar 4',
      },
      {
        src: 'https://www.shadcnblocks.com/images/block/avatar-5.webp',
        alt: 'Avatar 5',
      },
    ],
  },
}

const team = [
  {
    name: 'David Forren',
    role: 'Fundador / CEO',
    bio: 'Soy un trabajador ambicioso, pero aparte de eso, soy una persona bastante simple. 💼 Me apasiona crear soluciones innovadoras para el desarrollo de SaaS.',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
  {
    name: 'Amil Evara',
    role: 'Diseñador UI/UX',
    bio: 'Soy un trabajador ambicioso, pero aparte de eso, soy una persona bastante simple. 🎨 Me encanta diseñar experiencias de usuario que sean intuitivas y atractivas.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
  {
    name: 'Ebele Egbuna',
    role: 'Consultor de Soporte',
    bio: 'Soy un trabajador ambicioso, pero aparte de eso, soy una persona bastante simple. 🤝 Estoy aquí para asegurarme de que nuestros clientes tengan la mejor experiencia posible.',
    image:
      'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
]

const features = [
  {
    emoji: '🚀',
    title: 'Integración fácil con Next.js',
    description: 'Configura tu aplicación rápidamente con una integración sencilla y directa.',
  },
  {
    emoji: '📱',
    title: 'Diseño responsivo con Tailwind CSS',
    description: 'Asegura que tu aplicación se vea bien en cualquier dispositivo con un diseño responsivo.',
  },
  {
    emoji: '🔧',
    title: 'Componentes reutilizables y personalizables',
    description: 'Utiliza componentes que puedes personalizar para adaptarlos a tus necesidades.',
  },
  {
    emoji: '📈',
    title: 'Optimización para SEO y rendimiento',
    description: 'Mejora la visibilidad de tu aplicación en los motores de búsqueda y optimiza su rendimiento.',
  },
  {
    emoji: '💡',
    title: 'Innovación constante',
    description: 'Nos mantenemos al día con las últimas tendencias y tecnologías para ofrecerte lo mejor.',
  },
  {
    emoji: '🤝',
    title: 'Soporte excepcional',
    description: 'Nuestro equipo está aquí para ayudarte en cada paso del camino.',
  },
]

export default async function HomePage() {
  // const result = await db.user.create({
  //   data: {
  //     email: 'test@test.com',
  //     name: 'Test User',
  //     password: '12345678',
  //   },
  // })

  // console.log({ result })

  return (
    <>
      <AppHeader hideSidebarTrigger />
      <main className="flex flex-col gap-10 container mx-auto">
        <section className="pt-32 text-center">
          <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl">{data.heading}</h1>
            <p className="text-balance text-muted-foreground lg:text-lg">{data.description}</p>
          </div>
          <Button asChild size="lg" className="mt-10">
            <a href={data.button.url}>{data.button.text}</a>
          </Button>
          <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="mx-4 inline-flex items-center -space-x-4">
              {data.reviews.avatars.map((avatar: { src: string; alt: string }, index: number) => (
                <Avatar key={index} className="size-14 border">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="size-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-left font-medium text-muted-foreground">from {data.reviews.count}+ reviews</p>
            </div>
          </div>
        </section>
        {/* <section className="container py-24 lg:py-32">
          <h2 className="text-3xl font-bold text-center">Características Destacadas</h2>
          <p className="mt-2 text-muted-foreground text-center">
            Descubre las características que hacen de esta plantilla la mejor opción para tu aplicación SaaS.
          </p>
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            <div className="flex flex-col items-center">
              <span className="text-6xl">🚀</span>
              <h3 className="mt-4 text-lg font-semibold">Integración fácil con Next.js</h3>
              <p className="mt-2 text-muted-foreground text-center">
                Configura tu aplicación rápidamente con una integración sencilla y directa.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl">📱</span>
              <h3 className="mt-4 text-lg font-semibold">Diseño responsivo con Tailwind CSS</h3>
              <p className="mt-2 text-muted-foreground text-center">
                Asegura que tu aplicación se vea bien en cualquier dispositivo con un diseño responsivo.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl">🔧</span>
              <h3 className="mt-4 text-lg font-semibold">Componentes reutilizables y personalizables</h3>
              <p className="mt-2 text-muted-foreground text-center">
                Utiliza componentes que puedes personalizar para adaptarlos a tus necesidades.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl">📈</span>
              <h3 className="mt-4 text-lg font-semibold">Optimización para SEO y rendimiento</h3>
              <p className="mt-2 text-muted-foreground text-center">
                Mejora la visibilidad de tu aplicación en los motores de búsqueda y optimiza su rendimiento.
              </p>
            </div>
          </div>
        </section> */}
        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 pt-40">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <span className="text-3xl">{feature.emoji}</span>
              <div className="ms-2 sm:ms-4">
                <h3 className="text-base sm:text-lg font-semibold">{feature.title}</h3>
                <p className="mt-1 text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="container py-24 lg:py-32 relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 relative">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full inline-block mb-4">Precios</span>
            <h2 className="text-4xl font-bold md:text-5xl md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Planes y Precios</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Elige el plan perfecto para tus necesidades
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <div className="group relative flex flex-col h-full p-8 bg-card/50 backdrop-blur-sm text-card-foreground rounded-2xl border border-border/50 hover:border-primary/60 hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Gratis</h3>
                <p className="text-muted-foreground">Perfecto para empezar</p>
              </div>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $0<span className="ml-1 text-lg font-normal text-muted-foreground">/mes</span>
              </div>
              <ul className="mt-8 space-y-4 flex-grow">
                {['5 proyectos', '2GB almacenamiento', 'API básica', 'Soporte comunitario'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="outline" className="mt-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">Comenzar Gratis</Button>
            </div>

            {/* Pro Plan */}
            <div className="group relative flex flex-col h-full p-8 bg-card text-card-foreground rounded-2xl border-2 border-primary shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out scale-105">
              <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">Popular</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Pro</h3>
                <p className="text-muted-foreground">Para equipos en crecimiento</p>
              </div>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $29<span className="ml-1 text-lg font-normal text-muted-foreground">/mes</span>
              </div>
              <ul className="mt-8 space-y-4 flex-grow">
                {['Proyectos ilimitados', '50GB almacenamiento', 'API avanzada', 'Soporte prioritario', 'Análisis avanzado'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8 shadow-sm hover:shadow-md transition-shadow">Comenzar con Pro</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="group relative flex flex-col h-full p-8 bg-card/50 backdrop-blur-sm text-card-foreground rounded-2xl border border-border/50 hover:border-primary/60 hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Empresa</h3>
                <p className="text-muted-foreground">Para grandes organizaciones</p>
              </div>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $99<span className="ml-1 text-lg font-normal text-muted-foreground">/mes</span>
              </div>
              <ul className="mt-8 space-y-4 flex-grow">
                {['Todo en Pro', 'Almacenamiento ilimitado', 'API personalizada', 'SLA garantizado', 'Soporte 24/7', 'Implementación dedicada'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="outline" className="mt-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">Contactar Ventas</Button>
            </div>
          </div>
        </section>

        <section className="container py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-3xl font-bold md:text-4xl md:leading-tight">Nuestro Equipo de Desarrollo</h2>
            <p className="mt-1 text-lg text-muted-foreground">
              Conoce a los expertos que han creado esta plantilla para ti
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center max-w-6xl mx-auto">
            {team.map(member => (
              <div key={member.name} className="flex flex-col max-w-80">
                <Image
                  className="rounded-xl aspect-[4/3] object-cover"
                  src={member.image}
                  alt={member.name}
                  width={320}
                  height={320}
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground my-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="icon" variant="ghost">
                    <Twitter className="size-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Github className="size-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Linkedin className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="relative flex flex-col mx-auto pt-3 pb-1">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="mt-2 text-xs text-center">© 2025 Derechos de autor. Todos los derechos reservados.</p>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" /> */}
      </footer>
      {/* <div className="fixed inset-0 -z-10 h-full min-h-screen w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:bg-gray-950 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20"></div> */}
    </>
  )
}

