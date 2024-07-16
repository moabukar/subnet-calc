import ipaddress

def calculate_subnet(network, subnet_mask):
    try:
        network = ipaddress.IPv4Network(f"{network}/{subnet_mask}", strict=False)
        result = {
            "Network Address": str(network.network_address),
            "Broadcast Address": str(network.broadcast_address),
            "Subnet Mask": str(network.netmask),
            "Number of Addresses": network.num_addresses,
            "Number of Usable addresses": network.num_addresses - 2,  # Excluding network and broadcast addresses
            "Usable host range": f"{network.network_address + 1} - {network.broadcast_address - 1}"
        }
        return result
    except ValueError as e:
        return {"error": str(e)}

if __name__ == "__main__":
    network = input("Enter network address (e.g., 192.168.1.0): ")
    subnet_mask = input("Enter subnet mask (e.g., 24): ")
    result = calculate_subnet(network, subnet_mask)
    for key, value in result.items():
        print(f"{key}: {value}")
