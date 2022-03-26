import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { ARBITRUM } from '../utils/constants'
import { shortAddr } from '../utils/utils'

const MintPage: NextPage = () => {
  const [mintedNFT, setMintedNFT] = useState(null)
  const [miningStatus, setMiningStatue] = useState(null)
  const [loadingState, setLoadingState] = useState(null)
  const [txError, setTxError] = useState(null)
  const [account, setAccount] = useState('')
  const [network, setNetwork] = useState('')

  const getEthereumObj = (): MetaMaskInpageProvider => {
    const ethereum = window['ethereum'] as MetaMaskInpageProvider
    if (ethereum) {
      console.log('Got the ethereum object: ', ethereum)
    } else {
      console.log('No wallet found.')
    }
    return ethereum
  }

  const isWalletConnected = async (): Promise<boolean> => {
    try {
      const ethereum = getEthereumObj()
      const accounts: string[] = await ethereum.request({
        method: 'eth_accounts',
      })
      if (accounts.length > 0) {
        if (isNetworkCorrect()) {
          console.log('Found authorized Account: ', accounts[0])
          //setAccount(accounts[0])
          return true
        } else {
          console.log('network not correct')
          return false
        }
      } else {
        console.log('No authorized account found')
      }
    } catch (error) {
      console.log('error getting accounts ', error)
    }
    return false
  }

  const connectWallet = async (): Promise<boolean> => {
    try {
      const ethereum = getEthereumObj()
      if (!ethereum) {
        console.log('Wallet not detected')
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      if (await isNetworkCorrect()) {
        console.log('Found authorized Account: ', accounts[0])
        setAccount(accounts[0])
        return true
      } else {
        console.log('network not correct')
        return false
      }
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }

    return false
  }

  const isNetworkCorrect = async (): Promise<boolean> => {
    const ethereum = getEthereumObj()
    const chainId = (await ethereum.request({
      method: 'eth_chainId',
    })) as string

    if (parseInt(chainId, 16) === ARBITRUM.RINKEBY.CHAIN_ID) {
      return true
    } else {
      alert('You are not connected to the Rinkeby Testnet!')
      return false
    }
  }
  /* 
  useEffect(() => {
    checkWalletConnected()
    checkNetwork()
  }, []) */

  return (
    <Layout title="Mint">
      <div className="flex min-h-screen flex-row content-center items-center justify-center justify-items-center">
        <div className="flex max-w-5xl flex-col justify-items-center px-10 pt-12 pb-24 font-mono">
          <h1 className="my-5 space-x-10 text-center font-mono text-4xl text-gray-100 text-shadow-3xl sm:text-5xl md:my-24 md:text-7xl">
            Smol Obits
          </h1>
          <button
            className="max-w-sm self-center bg-gray-200 px-6 py-4 text-center text-gray-900 shadow-button hover:bg-gray-100 hover:shadow-button-hover"
            onClick={connectWallet}
          >
            {Boolean(account) ? shortAddr(account) : `Connect your wallet`}
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default MintPage
