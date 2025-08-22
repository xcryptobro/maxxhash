'use client'

// import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
// import { useAccount, useBalance, useWriteContract } from 'wagmi'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
// import { ethers } from 'ethers'
// import { abi } from './abi'

export default function Home() {
  // const [qty, setQty] = useState(1)
  // const totalPrice = ethers.parseEther((0.01 * qty).toString())

  // const { address, status } = useAccount()
  // const { data: hash, isPending, writeContract } = useWriteContract()
  // const { data: balanceData } = useBalance({ address })

  // async function handleMint() {
  //   console.log('Minting', qty, 'tokens for', totalPrice.toString())
  //   writeContract({
  //     abi,
  //     address: '0x1023b74446981aCdA0f81dd14708bCA247774DA5',
  //     functionName: 'mint',
  //     value: totalPrice,
  //     args: [address, qty]
  //   })
  // }

  return (
    <div className='grid grid-rows-[auto_1fr_auto]'>
      <div className='flex flex-col justify-center items-center text-center mt-8 px-4'>
        <Link
          href='/'
          className='text-2xl hover:text-secondary px-8 text-center'
        >
          <Image src='/wordmark.png' alt='MaxxHash' width='390' height='164' />
        </Link>
        <Link
          href='/'
          className='text-2xl hover:text-secondary px-8 text-center'
        >
          <Image
            src='/miner.png'
            alt='MaxxHash Miner'
            width={200}
            height={200}
          />
        </Link>
        <p className='py-6 max-w-md'>
          MaxxHash is the first $MAXX shared mining pool protocol on Base. Each
          NFT entitles the holder to 1% of the mining rewards with automated
          airtdrops. We aim to maintain a competitive mining and staking ranking
          to best benefit our holders.
        </p>
        <a
          href='https://opensea.io/collection/maxxhash'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-primary'
        >
          Purchase on OpenSea
        </a>
      </div>
      <h2 className='text-3xl font-bold text-center mt-8'>Mining Farms</h2>
      <div className='flex flex-row justify-center items-center gap-8 mt-4 mb-8'>
        <a
          href='https://www.ethermax.tech/player/0x37F1b64Cb048283238261a4b78aC902a80DBf01e'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col justify-center items-center'
        >
          <Image src='/farm1-2.gif' alt='Farm 1' width='400' height='300' />
          Farm 1
        </a>
        <a
          href='https://www.ethermax.tech/player/0x45A38d1126BF4B2951fA453879B2f952Fc151432'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col justify-center items-center'
        >
          <Image src='/farm1-2.gif' alt='Farm 2' width='400' height='300' />
          Farm 2
        </a>
        <a
          href='https://www.ethermax.tech/player/0xDcA83ef6AcFc9a5db02b5b1E88dc53d0d87BdF69'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col justify-center items-center'
        >
          <Image src='/farm3.gif' alt='Farm 3' width='400' height='300' />
          Farm 3
        </a>
      </div>
      <h2 className='text-3xl font-bold text-center mt-8'>Staking Nodes</h2>
      <div className='flex flex-row justify-center items-center gap-8 mt-4 mb-8'>
        <Image src='/staked.png' alt='Staked' width='372' height='223' />
        <Image src='/nodes.png' alt='Nodes' width='387' height='307' />
      </div>
      <footer className='footer p-10 bg-base-200 text-base-content'>
        <aside className='items-end grid-flow-col align-bottom'>
          <div className='text-opacity-50'>
            <div className='grid grid-flow-col gap-4'>
              <a
                href='https://x.com/MaxxHash'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaXTwitter className='text-2xl' />
              </a>
              <a
                href='https://opensea.io/collection/maxxhash'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/os-logo.svg'
                  alt='OpenSea Logo'
                  width='20'
                  height='20'
                />
              </a>
            </div>
          </div>
        </aside>
      </footer>
    </div>
  )
}
