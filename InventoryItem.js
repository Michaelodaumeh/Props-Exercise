function InventoryItem ({type, name, quantity= 0, price= 0})
{
	const LowStockThreshold = 5;
	const HighValueThreshold = 1000;
	const totalValue = quantity * price;
	return (
		<div>
			<h2>{name} {type}</h2>
			{
				quantity < LowStockThreshold 
				&&
				<Message>
				<p> <span>⚠️</span> Low Stock! {quantity} remained</p>
				</Message>
			}
			{
				totalValue > HighValueThreshold 
				&&
				<Message>
				<p> <span>💰</span> High Value Item! Total value: ${totalValue.toFixed(2)}</p>
				</Message>
			}
		</div>
	);
}
