'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import { useAccount, useBalance, useWriteContract } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ethers } from 'ethers'
import { abi } from './abi'

export default function Home() {
  const [qty, setQty] = useState(1)
  const totalPrice = ethers.parseEther((0.01 * qty).toString())

  const { address, status } = useAccount()
  const { data: hash, isPending, writeContract } = useWriteContract()
  const { data: balanceData } = useBalance({ address })

  async function handleMint() {
    console.log('Minting', qty, 'tokens for', totalPrice.toString())
    writeContract({
      abi,
      address: '0x1023b74446981aCdA0f81dd14708bCA247774DA5',
      functionName: 'mint',
      value: totalPrice,
      args: [address, qty]
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
                {isPending ? (
                  <span className='loading loading-dots loading-lg'></span>
                ) : hash ? (
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
                    {balanceData && totalPrice > balanceData?.value ? (
                      <>
                        <div role='alert' className='alert rounded-none'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            className='stroke-info h-6 w-6 shrink-0'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                            ></path>
                          </svg>
                          <span>Requires more ETH</span>
                        </div>
                        <button
                          className='btn btn-primary rounded-none'
                          disabled
                        >
                          Mint
                        </button>
                      </>
                    ) : (
                      <button
                        className='btn btn-primary rounded-none'
                        onClick={handleMint}
                      >
                        Mint
                      </button>
                    )}
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
