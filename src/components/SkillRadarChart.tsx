import { useEffect, useState } from 'react';
import {
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
	Tooltip,
} from 'recharts';

interface RadarData {
	subject: string;
	A: number;
	fullMark: number;
}

interface Props {
	data: RadarData[];
	label?: string;
}

export default function SkillRadarChart({
	data,
	label = 'Proficiency',
}: Props) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setMounted(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	if (!mounted) {
		return <div className="h-72 w-full md:h-80" />;
	}

	return (
		<div className="h-full min-h-[300px] w-full md:min-h-[350px]">
			<ResponsiveContainer width="100%" height={350}>
				<RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
					<PolarGrid stroke="#5c636e" strokeOpacity={0.2} />
					<PolarAngleAxis
						dataKey="subject"
						tick={{ fill: '#98a4b5', fontSize: 12, fontWeight: 500 }}
					/>
					<PolarRadiusAxis
						angle={30}
						domain={[0, 100]}
						tick={false}
						axisLine={false}
					/>
					<Radar
						name={label}
						dataKey="A"
						stroke="#98a4b5"
						strokeWidth={2}
						fill="#98a4b5"
						fillOpacity={0.3}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: '#23252b',
							borderColor: '#5c636e',
							color: '#fff',
						}}
						itemStyle={{ color: '#98a4b5' }}
						labelStyle={{ color: '#fff' }}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}
