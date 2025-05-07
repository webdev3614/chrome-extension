import { Outlet, RouteObject } from "react-router-dom";
import { SigninLayout } from "../layouts/siginin-layout";

export const routes: RouteObject[] = [
    {
        element: (
           <SigninLayout>
                <Outlet/>
           </SigninLayout>
        ),
        children:[
            {
                index:true,
                lazy:async () => {
                    const {SigninPage} = await import("@/pages/signin-page")
                    return {
                        Component: SigninPage
                    }
                }
            },
            {
                path:"home",
                lazy: async () => {
                    const { HomePage } = await import("@/pages/home-page")
                    return {
                        Component: HomePage
                    }
                }
            }
        ]
    }
]