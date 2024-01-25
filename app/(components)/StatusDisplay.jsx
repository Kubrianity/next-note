import React from 'react';

function StatusDisplay({status}) {
	return (
		<span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-slate-700 bg-button">
			{status}
		</span>
	);
}

export default StatusDisplay;
