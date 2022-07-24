export function ellipseAddress(address = '', width = 5): string {
  if (!address) {
    return ''
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`
}

export function weiToEth(wei: string): number {
  return parseInt(wei) / 1000000000000000000
}
