import { Outlet, RouteObject } from "react-router-dom";
import { SigninLayout } from "../layouts/siginin-layout";
import { TradeLayout } from "@/layouts/trade-layout";
import { MainLayout } from "@/layouts/main-layout";
import ChainProvider from "@/context/chain-provider/provider";
import TradeProvider from "@/context/trade-provider/provider";
import WalletProvider from "@/context/wallet-provider/provider";

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
            },
            {
                path:"trade",
                element: (
                    <TradeProvider>
                        <ChainProvider>
                            <WalletProvider>
                                <TradeLayout>
                                        <Outlet/>
                                </TradeLayout>
                            </WalletProvider>
                        </ChainProvider>
                    </TradeProvider>
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