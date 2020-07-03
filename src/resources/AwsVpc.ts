import { Tags, Vpc } from './interface';
import { AwsSubnet } from './AwsSubnet';

interface VpcProps {
  name: string;
  cidrBlock: string;
  enableDnsSupport: boolean;
  enableDnsHostnames: boolean;
  tags: Tags;
}

interface AddSubnetProps {
  availabilityZone: string;
  cidrBlock: string;
  mapPublicIpOnLaunch: boolean;
  name: string;
  vpcId: string;
}

class AwsVpc implements Vpc {
  name: string;
  cidrBlock: string;
  enableDnsSupport: boolean;
  enableDnsHostnames: boolean;
  tags: Tags;
  subnets: AwsSubnet[];

  constructor(props: VpcProps) {
    this.name = props.name;
    this.cidrBlock = props.cidrBlock;
    this.enableDnsSupport = props.enableDnsSupport;
    this.enableDnsHostnames = props.enableDnsHostnames;
    this.tags = props.tags;
    this.subnets = [];
  }

  public addSubnet = (props: AddSubnetProps): AwsSubnet => {
    const subnet = new AwsSubnet({
      availabilityZone: props.availabilityZone,
      cidrBlock: props.cidrBlock,
      mapPublicIpOnLaunch: props.mapPublicIpOnLaunch,
      name: props.name,
      vpcId: props.vpcId,
    });
    this.subnets.push(subnet);
    return subnet;
  };
}

export { AwsVpc };
