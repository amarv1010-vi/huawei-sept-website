import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:{default:'Huawei Intelligence',template:'%s | Huawei Intelligence'},description:'Source-grounded Huawei enterprise competitive intelligence for Cisco leaders.',robots:{index:true,follow:true},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>}
