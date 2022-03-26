export const shortAddr = (addr: string): string => {
  return addr.substring(0, 6) + '...' + addr.substring(addr.length - 4)
}
