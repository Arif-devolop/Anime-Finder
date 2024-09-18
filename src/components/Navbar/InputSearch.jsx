'use client'

import { MagnifyingGlass, X } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function InputSearch() {
    const searchRef = useRef()
    const router = useRouter()
    const handelSearch = (event) => {
        const value = document.getElementById('searchValue').value
        if (value === '' || value.trim() == '') return
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            const keyword = searchRef.current.value
            router.push(`/search/${keyword}`)
        }
    }
    const clearValue = () => {
        let value = document.getElementById('searchValue')
        return value.value = ''
    }
    return (
        <div className="flex">
            <input
                placeholder="Search anime..."
                className="py-1 px-2 md:px-4 lg:px-6 outline-none rounded-s-lg bg-color-secondary w-full text-color-primary"
                ref={searchRef}
                onKeyDown={handelSearch}
                id="searchValue"
                autoComplete="off"
            />
            <button className="px-1 md:p-2 bg-color-accent rounded-e-lg" onClick={handelSearch}>
                <MagnifyingGlass size={24} color="white"/>
            </button>
        </div>
    )
}