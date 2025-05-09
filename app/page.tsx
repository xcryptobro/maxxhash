'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import { useAccount, useWriteContract } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ethers } from 'ethers'
import { abi } from './abi'

export default function Home() {
  const [qty, setQty] = useState(1)

  const { address, status } = useAccount()
  const { data: hash, writeContract } = useWriteContract()

  async function handleMint() {
    await writeContract({
      abi,
      address: '0x1a8bdb352f523d797dbe5969d6fd9a0935c8f4d7',
      functionName: 'mint',
      args: [ethers.parseEther('0.01'), address, qty]
    })
  }

  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
      <div className='navbar bg-content'>
        <div className='navbar-start'>
          <Link href='/' className='text-2xl hover:text-secondary px-8'>
            MaxxHash
          </Link>
        </div>
      </div>
      <div className='max-auto px-4 py-8'>
        <div className='flex flex-row'>
          <div className='flex flex-col justify-center items-center w-full'>
            <Image
              src='/miner.png'
              alt='MaxxHash Miner'
              width={400}
              height={400}
            />
          </div>
          <div className='flex flex-col justify-center items-center w-full gap-6'>
            <ConnectButton />
            {status === 'connected' && (
              <>
                {hash ? (
                  <a href={`https://basescan.org/tx/${hash}`} target='_blank'>
                    View Transaction
                  </a>
                ) : (
                  <>
                    <fieldset className='fieldset max-w-[150px]'>
                      <legend className='fieldset-legend'>
                        Quantity (3 max)
                      </legend>
                      <input
                        type='number'
                        className='input rounded-none'
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                        min={1}
                        max={3}
                      />
                    </fieldset>
                    <button
                      className='btn btn-primary rounded-none'
                      onClick={handleMint}
                    >
                      Mint
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <footer className='footer p-10 bg-base-200 text-base-content'>
        <aside className='items-end grid-flow-col align-bottom'>
          <p className='text-opacity-50'>
            <a href='https://x.com/MaxxHash'>
              <FaXTwitter className='text-2xl' />
            </a>
          </p>
        </aside>
      </footer>
    </div>
  )
}
