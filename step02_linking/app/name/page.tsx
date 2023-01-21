'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function GiveName() {
  const router = useRouter();
    return (
      <div>
            My name is Zia.
            <br/>
            <Link href='/'>Home</Link>
            {/* <button type="button" onClick={() => router.push('/name/address')}>
              Get Address
            </button> */}
      
      </div>
    )
  }