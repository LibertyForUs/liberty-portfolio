import Link from 'next/link';
import Image from 'next/image'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div style={{ textAlign: 'center' }}>
        <Image
          src="/images/liberty-logo.png"
          alt="Liberty is maxxed out"
          height={40}
          width={40} 
        />
      </div>

      <p className="text-2xl dark:text-white text-center">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-300">
          {name}
        </Link>
      </p>
    </header>
  );
}
