'use client'
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'HappyHours', href: '/happy-hours'},
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const browserUrlPath = usePathname();

  return (
    <div className="h-16 px-2 sm:px-6 lg:px-8 bg-dark flex items-center">
      <div className="mr-4">
        <img
          className="h-8 w-auto rounded-full"
          src="/beerlo.jpg"
          alt="Your Company"
        />
      </div>
      <div className="flex space-x-4 text-kinda-white">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
          className={classNames(
            browserUrlPath === item.href ? 'bg-less-dark' : 'hover:bg-less-dark',
            'rounded-md px-3 py-2 text-sm font-medium'
          )}

          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}
