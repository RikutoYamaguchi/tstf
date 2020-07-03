interface SplittedCidr {
  network: number[];
  bits: number;
}

const splitCidr = (cidr: string): SplittedCidr => {
  const [network, bits] = cidr.split('/');
  const networks = network.split('.');

  return {
    network: networks.map(ip => +ip),
    bits: +bits
  }
};

export { splitCidr };
