import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2 '>
            <Link  href="/">
                <Image 
                src={'/img/jb.png'}
                alt='logo'
                width={100}
                height={100}
                className='rounded-full border'
                />
            </Link>
            <h1>JB&apos;s PLAYGROUND</h1>
        </div>
        <div>
            <Link 
            href="http://www.trello-clone-yvsvff.vercel.app"
            className='px-5 py-5 text-sm md:text-base bg-gray-900 text-yellow-600 flex items-center rounded-full text-center'
            >
                Subscribe and Explore my Applications
            </Link>
        </div>
    </header>
  )
}

