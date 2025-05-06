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
            }
        ]
    }
]