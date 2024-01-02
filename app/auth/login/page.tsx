import { Button } from '@/app/components/ui/button'

export default function Page() {
    return (
        <form className="p-6 rounded-lg bg-white border border-gray-300 shadow-md flex flex-col gap-3 w-80">
            <h3 className="text-xl font-bold tracking-wide">Login</h3>
            <div className="w-full">
                <label
                    className="text-sm font-semibold tracking-wide"
                    htmlFor="username"
                >
                    Email/NIP
                </label>
                <input
                    className="py-2 px-4 border border-gray-300 rounded-lg w-full"
                    type="text"
                    id="username"
                    name="username"
                />
            </div>
            <div className="w-full">
                <label
                    className="text-sm font-semibold tracking-wide"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="py-2 px-4 border border-gray-300 rounded-lg w-full"
                    type="password"
                    id="password"
                    name="password"
                />
            </div>
            <div className="w-full flex flex-row items-center gap-2">
                <input
                    className="py-2 px-4 border border-gray-300 rounded-lg"
                    type="checkbox"
                    id="remember"
                    name="remember"
                />
                <label
                    className="text-sm font-semibold tracking-wide"
                    htmlFor="remember"
                >
                    Ingat Saya
                </label>
            </div>
            <Button type="submit" className="mt-5">
                Login
            </Button>
        </form>
    )
}
