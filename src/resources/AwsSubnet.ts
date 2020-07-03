import { Subnet } from '@/resources/interface';

interface SubnetProps {
  availabilityZone: string;
  cidrBlock: string;
  mapPublicIpOnLaunch: boolean;
  name: string;
  vpcId: string;
}

class AwsSubnet implements Subnet {
  availabilityZone: string;
  cidrBlock: string;
  mapPublicIpOnLaunch: boolean;
  name: string;
  vpcId: string;

  constructor(props: SubnetProps) {
    this.name = props.name;
    this.availabilityZone = props.availabilityZone;
    this.cidrBlock = props.cidrBlock;
    this.mapPublicIpOnLaunch = props.mapPublicIpOnLaunch;
    this.vpcId = props.vpcId;
  }
}

export { AwsSubnet };
