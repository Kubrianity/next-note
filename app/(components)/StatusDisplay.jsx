const StatusDisplay = ({status}) => {
  const statusColor = (status) => {
    let color = ''
    switch(status.toLowerCase()) {
      case "completed":
        color = "bg-green-400"
        return color;
      case "uncompleted":
        color = "bg-button" 
        return color;
    }
    return color;
  }
  return (
		<span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-slate-700 ${statusColor(status)}`}>
			{status}
		</span>
	);
}

export default StatusDisplay;
