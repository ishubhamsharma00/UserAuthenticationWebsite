export default function UserProfile({ params }: any) {
    return (
        <div className="min-h-screen text-4xl text-center items-center justify-center bg-black text-white flex flex-col gap-8">
            <span>The boss is Here!!</span>
            <div className="">
                <span>This is profile page no.</span>
                <span className="p-4 bg-blue-300  text-black ">
                    {params.id}
                </span>
            </div>
        </div>
    )
}