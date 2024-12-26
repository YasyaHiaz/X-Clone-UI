import Image from "next/image"
import Link from "next/link"

const LeftBar = () => {
    return (
        <div className=''>
            {/* LOGO MENU BUTTON */}
            <div className=''>
                {/* LOGO */}
                <Link href="/">
                <Image src="./public/icons/logo.svg" alt="logo" width={24} height={24} />
                </Link>
            </div>
            {/* USER */}
            <div className=''></div>
        </div>
    )
}

export default LeftBar