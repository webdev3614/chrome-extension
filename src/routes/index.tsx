import { Outlet, RouteObject } from "react-router-dom";
import { SigninLayout } from "../layouts/siginin-layout";
import { TradeLayout } from "@/layouts/trade-layout";
import { MainLayout } from "@/layouts/main-layout";

export const routes: RouteObject[] = [
    {
        element: (
           <MainLayout>
            <Outlet/>
           </MainLayout>
        ),
        children:[
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
            },
            {
                path:"trade",
                element: (
                    <TradeLayout>
                        <Outlet/>
                    </TradeLayout>
                ),
                children: [
                    {
                        index:true,
                        lazy: async () => {
                            const { TradePage } = await import("@/pages/trade-page")
                            return {
                                Component: TradePage
                            }
                        }
                    }
                ]
            }
        ]
    }
]