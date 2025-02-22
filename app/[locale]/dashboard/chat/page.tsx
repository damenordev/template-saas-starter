import { APP_SIDEBAR_ITEMS } from '@/constants'
import { AppHeader, AppSidebar, ChatInterface } from '@/components'

export default function ChatPage() {
  return (
    <>
      <AppSidebar items={APP_SIDEBAR_ITEMS} />
      <main className="w-full">
        <AppHeader />
        {/* <div className="h-[calc(100vh-5rem)] max-w-4xl mx-auto flex flex-col pb-4">
          <div className="flex-1 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent hover:scrollbar-thumb-primary/20">
            <div className="flex items-start gap-1 max-w-3xl animate-in fade-in-50 duration-300">
              <span className="p-1 rounded-xl text-foreground">
                <Bot />
              </span>
              <div className="flex flex-col gap-1">
                <div className="p-1">
                  <p className="text-sm">¡Claro! Aquí tienes un cuento original:</p>
                  <p className="text-sm mt-2 font-medium">El Susurro del Bosque</p>
                  <p className="text-sm mt-2">
                    Había una vez un pequeño pueblo rodeado de un antiguo bosque. Los habitantes siempre habían
                    escuchado historias sobre voces misteriosas que susurraban entre los árboles al anochecer...
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-start gap-1 max-w-3xl ml-auto animate-in fade-in-50 duration-300">
              <div className="flex flex-col gap-1">
                <div className="bg-foreground p-3 rounded-xl rounded-tr-none text-background shadow-sm">
                  <p className="text-sm">¡Me encanta! ¿Podrías continuar con la historia?</p>
                </div>
              </div>
              <span className="p-1 bg-foreground rounded-lg text-background shadow-sm">
                <User className="size-5" />
              </span>
            </div>
          </div>

          <form className="relative w-full gap-2">
            <Input
              placeholder="Pregunta lo que quieras"
              className="w-full bg-card/50 border-primary/20 focus-visible:ring-primary/30 placeholder:text-muted-foreground/70 p-6 rounded-full shadow-sm"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-[50%] -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm rounded-full"
            >
              <Send />
            </Button>
          </form>
        </div> */}
        <ChatInterface />
      </main>
    </>
  )
}
