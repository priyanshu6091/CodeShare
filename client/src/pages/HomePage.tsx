import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"
// import Footer from "@/components/common/Footer";

function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-gray-900 text-white">
            <div className="my-8 flex h-full w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
                <div className="flex w-full animate-pulse justify-center sm:w-1/2 sm:pl-6">
                    <img
                        src={illustration}
                        alt="Code Sync Illustration"
                        className="mx-auto w-[220px] sm:w-[360px] border-2 border-gray-700 rounded-lg shadow-xl"
                    />
                </div>
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default HomePage
