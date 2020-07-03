interface Resource {
    name: string;
}

interface Tags {
    name: string;
}

interface Vpc extends Resource {
    cidrBlock: string;
    enableDnsSupport: boolean;
    enableDnsHostnames: boolean;
    tags: Tags;
}

interface Subnet extends Resource {
    cidrBlock: string
    vpcId: string,
    mapPublicIpOnLaunch: boolean
    availabilityZone: string
}

export {
    Tags,
    Vpc,
    Subnet
}
