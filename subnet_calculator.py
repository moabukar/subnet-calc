import ipaddress

def calculate_subnet(network, subnet_mask):
    try:
        # Ensure subnet_mask is an integer
        subnet_mask = int(subnet_mask)
        
        network = ipaddress.IPv4Network(f"{network}/{subnet_mask}", strict=False)
        result = {
            "network_address": str(network.network_address),
            "broadcast_address": str(network.broadcast_address),
            "subnet_mask": str(network.netmask),
            "number_of_addresses": network.num_addresses,
            "number_of_usable_addresses": network.num_addresses - 2,  # Excluding network and broadcast addresses
            "usable_host_range": f"{network.network_address + 1} - {network.broadcast_address - 1}"
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
