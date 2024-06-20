'use client'
import React from 'react'
import { ThemeProvider } from './theme-provider'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import Navbar from './Navbar';

const queryClient = new QueryClient();

const LayOutcontainer = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Navbar />
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default LayOutcontainer