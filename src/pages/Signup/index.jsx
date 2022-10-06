import { Icon, input } from '../../components'

export const Signup =() => {
    return (
    <div>
         <header className="p-4 border-b border-red-300">
            <div className="container max-w-xl flex justify-center">
              <img src="/imgs/logo.svg" className="w-32 md:w-40"/>
            </div>
         </header>
         <main className="container max-w-xl p-4">
            <div className="p-4 flex space-x-4 items-center">
              <a href="/">
              <Icon name="back" className="h-6"/>
              </a>   
                <h2 className="text-xl font-bold">Crie sua conta</h2>
            </div>
            <form className="p-4 flex flex-col space-y-6">
                <input type="text"
                       name="name"
                       label="Seu nome"
                       placeholder="Digite seu nome" 
                       className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"
                       />

                    <input type="text"
                       name="username"
                       label="Seu nome de usuário"
                       placeholder="Digite um nome de usuário" 
                       className="p-3 border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"
                       />

                       <input type="password"
                       name="password"
                       label="Sua senha"
                       placeholder="Digite sua senha"
                       className="p-3 border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"
                       />

                       <input type="password"
                       name="password"
                       label="Sua senha"
                       placeholder="Digite sua senha"
                       className="p-3 border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700"
                       />
               
                <a href="/dashboard" className="w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl">
                  Criar minha conta
                </a>
            </form>
         </main>
    </div>
    )
}