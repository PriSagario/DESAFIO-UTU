export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div style={{backgroundImage: `url("./assets/img/fondoInicioUTU.jpg")`}} className="bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center">
                    <div className="w-full lg:w-5/12 px-4 ml-auto mr-auto text-center">
                    <img
                    alt="DesafioUTU"
                    src="./assets/img/logoBlancoUTU.png"
                 />
                    </div>
                </div>
            </div>
        </div>
    );
}
