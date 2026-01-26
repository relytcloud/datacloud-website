interface TrangleProps {
	bgProps?: React.SVGProps<SVGSVGElement>;
}
export default function Trangle({ bgProps }: TrangleProps) {
	return (
		<>
			<svg
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				height="499"
				viewBox="0 0 710 499"
				width="710"
				xmlns="http://www.w3.org/2000/svg"
				{...bgProps}
			>
				<g clipPath="url(#clip0_17637_226)">
					<mask
						height="499"
						id="mask0_17637_226"
						maskUnits="userSpaceOnUse"
						style={{ maskType: "alpha" }}
						width="710"
						x="0"
						y="0"
					>
						<path
							d="M710 499H0L355 0L710 499ZM1.76229 498.115H708.238L355 1.59324L1.76229 498.115Z"
							fill="white"
							opacity="0.6"
						/>
					</mask>
					<g mask="url(#mask0_17637_226)">
						<g filter="url(#filter0_f_17637_226)">
							<ellipse
								cx="356.5"
								cy="344.5"
								fill="white"
								opacity="0.6"
								rx="284.5"
								ry="249.5"
							/>
						</g>
					</g>
				</g>
				<defs>
					<filter
						colorInterpolationFilters="sRGB"
						filterUnits="userSpaceOnUse"
						height="659"
						id="filter0_f_17637_226"
						width="729"
						x="-8"
						y="15"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							in="SourceGraphic"
							in2="BackgroundImageFix"
							mode="normal"
							result="shape"
						/>
						<feGaussianBlur
							result="effect1_foregroundBlur_17637_226"
							stdDeviation="40"
						/>
					</filter>
					<clipPath id="clip0_17637_226">
						<rect fill="white" height="499" width="710" />
					</clipPath>
				</defs>
			</svg>
			{/* Corner containers - 150x150px divs at each triangle vertex */}
			{/* Top vertex */}
			<div className="absolute top-[calc(50%-220px)] left-1/2 flex h-[136px] w-[136px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[rgba(9,9,11,0.0)] backdrop-blur-[1px]">
				<p className="absolute top-0 whitespace-nowrap text-[E4E4E7] opacity-80 blur-[0.5px]">
					Memory Management & Computing
				</p>
				<svg
					fill="none"
					height="67"
					viewBox="0 0 67 67"
					width="67"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M38.291 18.9629C39.935 18.963 41.5123 19.6158 42.6748 20.7783C43.8373 21.9408 44.4901 23.5181 44.4902 25.1621V28.6572C44.886 28.9042 45.2566 29.196 45.5918 29.5312C46.7542 30.6938 47.4072 32.271 47.4072 33.915C47.4071 35.559 46.7543 37.1363 45.5918 38.2988C45.2568 38.6338 44.8858 38.924 44.4902 39.1709V41.208C44.4901 42.8519 43.8371 44.4293 42.6748 45.5918C41.5123 46.7542 39.9349 47.4071 38.291 47.4072C36.647 47.4072 35.0698 46.7542 33.9072 45.5918C33.6382 45.3228 33.3972 45.0308 33.1846 44.7217C32.9721 45.0305 32.7326 45.323 32.4639 45.5918C31.3014 46.7542 29.724 47.4071 28.0801 47.4072C26.436 47.4072 24.8589 46.7542 23.6963 45.5918C22.5338 44.4293 21.881 42.8521 21.8809 41.208V39.1719C21.4849 38.9248 21.1136 38.6341 20.7783 38.2988C19.6158 37.1363 18.963 35.5591 18.9629 33.915C18.9629 32.271 19.6159 30.6938 20.7783 29.5312C21.1138 29.1958 21.4847 28.9034 21.8809 28.6562V25.1621C21.881 23.5181 22.5338 21.9408 23.6963 20.7783C24.8589 19.616 26.4361 18.9629 28.0801 18.9629C29.7241 18.963 31.3014 19.6158 32.4639 20.7783C32.7326 21.0471 32.9721 21.3396 33.1846 21.6484C33.3972 21.3395 33.6383 21.0472 33.9072 20.7783C35.0698 19.616 36.647 18.9629 38.291 18.9629ZM28.0801 21.1504C27.0164 21.1504 25.9954 21.5732 25.2432 22.3252C24.491 23.0774 24.0685 24.0984 24.0684 25.1621V27.8145C24.427 27.7502 24.7927 27.7158 25.1621 27.7158H25.8916C26.4957 27.7159 26.9854 28.2054 26.9854 28.8096C26.9851 29.4135 26.4956 29.9032 25.8916 29.9033H25.1621C24.0983 29.9034 23.0774 30.3259 22.3252 31.0781C21.5731 31.8304 21.1504 32.8513 21.1504 33.915C21.1505 34.9788 21.573 35.9998 22.3252 36.752C23.0774 37.5041 24.0984 37.9267 25.1621 37.9268C25.7663 37.9268 26.2559 38.4163 26.2559 39.0205C26.2556 39.6244 25.7661 40.1142 25.1621 40.1143C24.7927 40.1142 24.427 40.079 24.0684 40.0146V41.208C24.0685 42.2716 24.4911 43.2918 25.2432 44.0439C25.9954 44.7961 27.0163 45.2188 28.0801 45.2188C29.1438 45.2186 30.1648 44.7961 30.917 44.0439C31.6688 43.2918 32.0917 42.2714 32.0918 41.208V39.749C32.0917 38.6853 31.6691 37.6643 30.917 36.9121C30.1648 36.16 29.1438 35.7374 28.0801 35.7373C27.4759 35.7373 26.9863 35.2478 26.9863 34.6436C26.9864 34.0394 27.4759 33.5498 28.0801 33.5498C29.5555 33.5499 30.9755 34.0773 32.0918 35.0254V25.1621C32.0917 24.0984 31.6691 23.0774 30.917 22.3252C30.1648 21.573 29.1438 21.1505 28.0801 21.1504ZM38.291 21.1504C37.2273 21.1504 36.2063 21.5732 35.4541 22.3252C34.7019 23.0774 34.2794 24.0984 34.2793 25.1621V35.0244C35.3955 34.0768 36.8159 33.5498 38.291 33.5498C38.8949 33.5501 39.3846 34.0396 39.3848 34.6436C39.3848 35.2476 38.895 35.737 38.291 35.7373C37.2273 35.7373 36.2064 36.16 35.4541 36.9121C34.7019 37.6643 34.2794 38.6852 34.2793 39.749V41.208C34.2794 42.2716 34.7021 43.2918 35.4541 44.0439C36.2064 44.7961 37.2272 45.2188 38.291 45.2188C39.3547 45.2186 40.3758 44.7961 41.1279 44.0439C41.8797 43.2918 42.3026 42.2714 42.3027 41.208V40.0137C41.9437 40.0781 41.5778 40.1142 41.208 40.1143C40.604 40.1142 40.1145 39.6245 40.1143 39.0205C40.1143 38.4163 40.6038 37.9268 41.208 37.9268C42.2715 37.9267 43.2918 37.5038 44.0439 36.752C44.7961 35.9998 45.2196 34.9788 45.2197 33.915C45.2197 32.8512 44.7961 31.8304 44.0439 31.0781C43.2917 30.3261 42.2717 29.9034 41.208 29.9033H40.4785C39.8745 29.9033 39.385 29.4136 39.3848 28.8096C39.3848 28.2054 39.8743 27.7158 40.4785 27.7158H41.208C41.5777 27.7158 41.9438 27.7501 42.3027 27.8145V25.1621C42.3026 24.0984 41.8801 23.0774 41.1279 22.3252C40.3758 21.573 39.3547 21.1505 38.291 21.1504Z"
						fill="url(#paint0_linear_17624_1249)"
						opacity="0.9"
					/>
					<g filter="url(#filter0_f_17624_1249)" opacity="0.8">
						<path
							d="M63.4073 33.1852C63.4073 39.5675 61.3868 45.786 57.6353 50.9494C53.8839 56.1128 48.5942 59.956 42.5242 61.9282C36.4543 63.9005 29.9158 63.9005 23.8459 61.9282C17.7759 59.956 12.4862 56.1128 8.73477 50.9494"
							stroke="url(#paint1_linear_17624_1249)"
							strokeLinecap="round"
							strokeWidth="3.55556"
						/>
						<path
							d="M18.0739 59.3584C12.5467 56.1672 8.1716 51.3082 5.57568 45.4777C2.97977 39.6471 2.29631 33.1445 3.62326 26.9016C4.95022 20.6588 8.21947 14.9963 12.9624 10.7257C17.7054 6.45509 23.6786 3.79565 30.026 3.12852"
							stroke="url(#paint2_linear_17624_1249)"
							strokeLinecap="round"
							strokeWidth="3.55556"
						/>
						<path
							d="M18.074 7.01197C23.6012 3.82081 29.9968 2.46139 36.3441 3.12852C42.6915 3.79565 48.6647 6.4551 53.4077 10.7257C58.1507 14.9963 61.4199 20.6588 62.7469 26.9016C64.0738 33.1445 63.3903 39.6471 60.7944 45.4777"
							stroke="url(#paint3_linear_17624_1249)"
							strokeLinecap="round"
							strokeWidth="3.55556"
						/>
					</g>
					<g filter="url(#filter1_f_17624_1249)" opacity="0.8">
						<circle
							cx="33.1851"
							cy="33.4352"
							fill="url(#paint4_linear_17624_1249)"
							r="28.75"
						/>
					</g>
					<defs>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="66.3704"
							id="filter0_f_17624_1249"
							width="66.3704"
							x="-0.0001266"
							y="-4.52995e-06"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_17624_1249"
								stdDeviation="0.592593"
							/>
						</filter>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="59.5175"
							id="filter1_f_17624_1249"
							width="59.5175"
							x="3.42629"
							y="3.67641"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_17624_1249"
								stdDeviation="0.504386"
							/>
						</filter>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint0_linear_17624_1249"
							x1="33.1851"
							x2="33.1851"
							y1="18.9629"
							y2="47.4072"
						>
							<stop offset="0.455668" stopColor="white" />
							<stop offset="1" stopColor="white" stopOpacity="0.4" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint1_linear_17624_1249"
							x1="60.4443"
							x2="23.111"
							y1="48"
							y2="62.8148"
						>
							<stop stopColor="white" stopOpacity="0.9" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint2_linear_17624_1249"
							x1="10.0739"
							x2="21.3332"
							y1="50.3704"
							y2="8.88888"
						>
							<stop stopColor="white" stopOpacity="0.9" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint3_linear_17624_1249"
							x1="30.2221"
							x2="61.6851"
							y1="1.18518"
							y2="30.1852"
						>
							<stop stopColor="white" stopOpacity="0.9" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint4_linear_17624_1249"
							x1="19.0623"
							x2="48.821"
							y1="9.72904"
							y2="58.1501"
						>
							<stop stopColor="#D9D9D9" />
							<stop offset="0.864601" stopColor="#D9D9D9" stopOpacity="0" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			{/* Bottom-left vertex */}
			<div className="absolute top-[calc(50%+230px)] left-[calc(50%-340px)] flex h-[144px] w-[152px] -translate-x-1/2 -translate-y-1/2 items-center justify-center backdrop-blur-[1px]">
				<svg
					fill="none"
					height="78"
					viewBox="0 0 80 78"
					width="80"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_f_17621_6822)">
						<path
							d="M40.0056 38.46V4L69.9999 21.1692V55.7509L40.0056 38.46Z"
							fill="url(#paint0_linear_17621_6822)"
						/>
						<path
							d="M69.4998 21.459V54.8848L40.5056 38.1699V4.86133L69.4998 21.459Z"
							stroke="url(#paint1_linear_17621_6822)"
						/>
					</g>
					<path
						d="M69.4998 21.459V54.8848L40.5056 38.1699V4.86133L69.4998 21.459Z"
						stroke="url(#paint2_linear_17621_6822)"
					/>
					<g filter="url(#filter1_f_17621_6822)">
						<path
							d="M40.0056 38.46V4L10.0113 21.1692V55.7509L40.0056 38.46Z"
							fill="url(#paint3_linear_17621_6822)"
						/>
						<path
							d="M10.5115 21.459V54.8848L39.5056 38.1699V4.86133L10.5115 21.459Z"
							stroke="url(#paint4_linear_17621_6822)"
						/>
					</g>
					<path
						d="M10.5115 21.459V54.8848L39.5056 38.1699V4.86133L10.5115 21.459Z"
						stroke="url(#paint5_linear_17621_6822)"
					/>
					<g filter="url(#filter2_f_17621_6822)">
						<path
							d="M40.0057 38.4599L70 55.7507L39.9828 73.0811L10.0114 55.7507L40.0057 38.4599Z"
							fill="url(#paint6_linear_17621_6822)"
						/>
						<path
							d="M39.9831 72.5033L11.0121 55.7509L40.0068 39.0363L69.0007 55.7511L39.9831 72.5033Z"
							stroke="url(#paint7_linear_17621_6822)"
						/>
					</g>
					<path
						d="M39.9831 72.5033L11.0121 55.7509L40.0068 39.0363L69.0007 55.7511L39.9831 72.5033Z"
						stroke="url(#paint8_linear_17621_6822)"
					/>
					<path
						d="M40.0081 73.1199V47.6199"
						stroke="url(#paint9_linear_17621_6822)"
						strokeLinecap="round"
						strokeWidth="2"
					/>
					<path
						d="M47.5081 34.1199L69.5917 21.3699"
						stroke="url(#paint10_linear_17621_6822)"
						strokeLinecap="round"
						strokeWidth="2"
					/>
					<path
						d="M32.5081 34.1199L10.4244 21.3699"
						stroke="url(#paint11_linear_17621_6822)"
						strokeLinecap="round"
						strokeWidth="2"
					/>
					<defs>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="59.751"
							id="filter0_f_17621_6822"
							width="37.9944"
							x="36.0056"
							y="0"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_17621_6822"
								stdDeviation="2"
							/>
						</filter>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="59.751"
							id="filter1_f_17621_6822"
							width="37.9944"
							x="6.01123"
							y="0"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_17621_6822"
								stdDeviation="2"
							/>
						</filter>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="42.6211"
							id="filter2_f_17621_6822"
							width="67.9885"
							x="6.01147"
							y="34.46"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_17621_6822"
								stdDeviation="2"
							/>
						</filter>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint0_linear_17621_6822"
							x1="40.0056"
							x2="69.9999"
							y1="39.2734"
							y2="20.4775"
						>
							<stop stopColor="white" />
							<stop offset="0.418269" stopColor="white" stopOpacity="0.3" />
							<stop offset="0.775376" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint1_linear_17621_6822"
							x1="69.9999"
							x2="40.0056"
							y1="20.8837"
							y2="38.8672"
						>
							<stop stopColor="white" stopOpacity="0.4" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint2_linear_17621_6822"
							x1="69.9999"
							x2="40.0056"
							y1="20.8837"
							y2="38.8672"
						>
							<stop stopColor="white" stopOpacity="0.6" />
							<stop offset="0.58001" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint3_linear_17621_6822"
							x1="40.0056"
							x2="10.0113"
							y1="38.6034"
							y2="21.5221"
						>
							<stop stopColor="white" />
							<stop offset="0.443415" stopColor="white" stopOpacity="0.3" />
							<stop offset="0.731213" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint4_linear_17621_6822"
							x1="11.8435"
							x2="40.7901"
							y1="20.8275"
							y2="36.0688"
						>
							<stop offset="0.384615" stopColor="white" stopOpacity="0.3" />
							<stop offset="0.714511" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint5_linear_17621_6822"
							x1="12.3829"
							x2="40"
							y1="19.8808"
							y2="37"
						>
							<stop offset="0.165667" stopColor="white" stopOpacity="0.6" />
							<stop offset="0.714511" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint6_linear_17621_6822"
							x1="40.0758"
							x2="39.6528"
							y1="38.474"
							y2="72.3358"
						>
							<stop stopColor="white" />
							<stop offset="0.448559" stopColor="white" stopOpacity="0.3" />
							<stop offset="0.681544" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint7_linear_17621_6822"
							x1="41.5"
							x2="30.1098"
							y1="75"
							y2="53.1864"
						>
							<stop offset="0.213203" stopColor="white" stopOpacity="0.6" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint8_linear_17621_6822"
							x1="39.3899"
							x2="37.4858"
							y1="77.0097"
							y2="56.9506"
						>
							<stop offset="0.213203" stopColor="white" stopOpacity="0.6" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint9_linear_17621_6822"
							x1="40.5081"
							x2="40.5081"
							y1="49.1199"
							y2="73.1199"
						>
							<stop stopColor="#E3E3E3" stopOpacity="0" />
							<stop offset="0.54076" stopColor="#E3E3E3" stopOpacity="0.8" />
							<stop offset="1" stopColor="#E3E3E3" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint10_linear_17621_6822"
							x1="68.5428"
							x2="47.7581"
							y1="22.8029"
							y2="34.8029"
						>
							<stop stopColor="#E3E3E3" stopOpacity="0" />
							<stop offset="0.506492" stopColor="#E3E3E3" stopOpacity="0.8" />
							<stop offset="1" stopColor="#E3E3E3" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint11_linear_17621_6822"
							x1="12.0081"
							x2="33.5081"
							y1="21.6199"
							y2="34.1199"
						>
							<stop stopColor="#E3E3E3" stopOpacity="0" />
							<stop offset="0.54076" stopColor="#E3E3E3" stopOpacity="0.8" />
							<stop offset="1" stopColor="#E3E3E3" stopOpacity="0" />
						</linearGradient>
					</defs>
				</svg>
				<p className="absolute bottom-1.5 whitespace-nowrap text-[E4E4E7] opacity-80 blur-[0.5px]">
					Data LLM
				</p>
			</div>
			{/* Bottom-right vertex */}
			<div className="absolute top-[calc(50%+230px)] left-[calc(50%+340px)] flex h-[136px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center backdrop-blur-[1px]">
				{/* Content for bottom-right corner - AI-Ready Data Platform */}
				<svg
					fill="none"
					height="64"
					viewBox="0 0 77 64"
					width="77"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.8">
						<g filter="url(#filter0_f_17621_6869)">
							<path
								d="M36 8C52.0163 8 65 12.4772 65 18V50C65 55.5228 52.0163 60 36 60C19.9837 60 7 55.5228 7 50V18C7 12.4772 19.9837 8 36 8Z"
								fill="url(#paint0_linear_17621_6869)"
							/>
						</g>
						<g filter="url(#filter1_f_17621_6869)">
							<ellipse cx="36" cy="18" fill="#D9D9D9" rx="29" ry="10" />
						</g>
						<g filter="url(#filter2_f_17621_6869)">
							<path
								d="M36 19.5C43.9677 19.5 51.16 20.6143 56.3428 22.4014C58.9366 23.2958 61.0004 24.3498 62.4053 25.4951C63.814 26.6436 64.5 27.8309 64.5 29C64.5 30.1691 63.814 31.3564 62.4053 32.5049C61.0004 33.6502 58.9366 34.7042 56.3428 35.5986C51.16 37.3857 43.9677 38.5 36 38.5C28.0323 38.5 20.84 37.3857 15.6572 35.5986C13.0634 34.7042 10.9996 33.6502 9.59473 32.5049C8.18605 31.3564 7.5 30.1691 7.5 29C7.5 27.8309 8.18605 26.6436 9.59473 25.4951C10.9996 24.3498 13.0634 23.2958 15.6572 22.4014C20.84 20.6143 28.0323 19.5 36 19.5Z"
								stroke="white"
								strokeOpacity="0.8"
							/>
						</g>
						<g filter="url(#filter3_f_17621_6869)">
							<path
								d="M36 30.5C43.9677 30.5 51.16 31.6143 56.3428 33.4014C58.9366 34.2958 61.0004 35.3498 62.4053 36.4951C63.814 37.6436 64.5 38.8309 64.5 40C64.5 41.1691 63.814 42.3564 62.4053 43.5049C61.0004 44.6502 58.9366 45.7042 56.3428 46.5986C51.16 48.3857 43.9677 49.5 36 49.5C28.0323 49.5 20.84 48.3857 15.6572 46.5986C13.0634 45.7042 10.9996 44.6502 9.59473 43.5049C8.18605 42.3564 7.5 41.1691 7.5 40C7.5 38.8309 8.18605 37.6436 9.59473 36.4951C10.9996 35.3498 13.0634 34.2958 15.6572 33.4014C20.84 31.6143 28.0323 30.5 36 30.5Z"
								stroke="white"
								strokeOpacity="0.6"
							/>
						</g>
						<g filter="url(#filter4_f_17621_6869)">
							<path
								d="M36 41.5C43.9677 41.5 51.16 42.6143 56.3428 44.4014C58.9366 45.2958 61.0004 46.3498 62.4053 47.4951C63.814 48.6436 64.5 49.8309 64.5 51C64.5 52.1691 63.814 53.3564 62.4053 54.5049C61.0004 55.6502 58.9366 56.7042 56.3428 57.5986C51.16 59.3857 43.9677 60.5 36 60.5C28.0323 60.5 20.84 59.3857 15.6572 57.5986C13.0634 56.7042 10.9996 55.6502 9.59473 54.5049C8.18605 53.3564 7.5 52.1691 7.5 51C7.5 49.8309 8.18605 48.6436 9.59473 47.4951C10.9996 46.3498 13.0634 45.2958 15.6572 44.4014C20.84 42.6143 28.0323 41.5 36 41.5Z"
								stroke="white"
								strokeOpacity="0.29"
							/>
						</g>
						<path
							d="M68.0705 7.38729C68.0465 7.16692 67.8599 7 67.6374 7C67.4159 7 67.2283 7.16583 67.2032 7.3862C67.069 8.54807 66.7232 9.35319 66.1744 9.90195C65.6257 10.4507 64.8205 10.7965 63.6587 10.9307C63.4383 10.9558 63.2725 11.1424 63.2725 11.3649C63.2725 11.5875 63.4394 11.7729 63.6598 11.798C64.802 11.9279 65.6246 12.2737 66.1875 12.8257C66.7472 13.3756 67.0995 14.1796 67.2021 15.3305C67.2217 15.5564 67.4105 15.7287 67.6374 15.7287C67.8632 15.7287 68.0519 15.5553 68.0716 15.3295C68.1698 14.197 68.5221 13.3756 69.0851 12.8126C69.648 12.2497 70.4695 11.8973 71.6019 11.7991C71.8277 11.7795 72.0001 11.5907 72.0001 11.3649C72.0001 11.1391 71.8277 10.9493 71.6019 10.9296C70.451 10.8271 69.6458 10.4747 69.0971 9.91504C68.5451 9.35319 68.2003 8.52952 68.0705 7.38729Z"
							fill="url(#paint1_linear_17621_6869)"
						/>
						<path
							d="M58.9096 9.18286C58.3826 9.18286 57.931 9.56033 57.8361 10.0785C57.3124 12.9576 56.4233 14.8995 55.0694 16.2523C53.7155 17.6061 51.7747 18.4953 48.8957 19.0189C48.3775 19.1128 48 19.5655 48 20.0924C48 20.6194 48.3775 21.071 48.8957 21.1659C51.7747 21.6896 53.7166 22.5787 55.0694 23.9326C56.4233 25.2865 57.3124 27.2273 57.8361 30.1063C57.9299 30.6256 58.3826 31.002 58.9096 31.002C59.4365 31.002 59.8882 30.6245 59.9831 30.1063C60.5067 27.2273 61.3959 25.2854 62.7497 23.9326C64.1036 22.5787 66.0444 21.6896 68.9235 21.1659C69.4428 21.0721 69.8191 20.6194 69.8191 20.0924C69.8191 19.5655 69.4417 19.1138 68.9235 19.0189C66.0444 18.4953 64.1025 17.6061 62.7497 16.2523C61.3959 14.8984 60.5067 12.9576 59.9831 10.0785C59.8892 9.56033 59.4365 9.18286 58.9096 9.18286Z"
							fill="url(#paint2_linear_17621_6869)"
						/>
					</g>
					<defs>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="60"
							id="filter0_f_17621_6869"
							width="66"
							x="3"
							y="4"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_17621_6869"
								stdDeviation="2"
							/>
						</filter>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="22"
							id="filter1_f_17621_6869"
							width="60"
							x="6"
							y="7"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_17621_6869"
								stdDeviation="0.5"
							/>
						</filter>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="22"
							id="filter2_f_17621_6869"
							width="60"
							x="6"
							y="18"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_17621_6869"
								stdDeviation="0.5"
							/>
						</filter>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="22"
							id="filter3_f_17621_6869"
							width="60"
							x="6"
							y="29"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_17621_6869"
								stdDeviation="0.5"
							/>
						</filter>
						<filter
							colorInterpolationFilters="sRGB"
							filterUnits="userSpaceOnUse"
							height="22"
							id="filter4_f_17621_6869"
							width="60"
							x="6"
							y="40"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								mode="normal"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_17621_6869"
								stdDeviation="0.5"
							/>
						</filter>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint0_linear_17621_6869"
							x1="36"
							x2="36"
							y1="8"
							y2="61"
						>
							<stop stopColor="white" />
							<stop offset="0.899255" stopColor="white" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint1_linear_17621_6869"
							x1="67.6363"
							x2="67.6363"
							y1="7"
							y2="15.7287"
						>
							<stop offset="0.0999528" stopColor="#E2E2E2" />
							<stop offset="1" stopColor="#434344" />
						</linearGradient>
						<linearGradient
							gradientUnits="userSpaceOnUse"
							id="paint2_linear_17621_6869"
							x1="58.9096"
							x2="58.9096"
							y1="9.18286"
							y2="31.002"
						>
							<stop offset="0.0999528" stopColor="#E2E2E2" />
							<stop offset="1" stopColor="#434344" />
						</linearGradient>
					</defs>
				</svg>
				<p className="absolute bottom-1.5 whitespace-nowrap text-[E4E4E7] opacity-80 blur-[0.5px]">
					AI-Ready Data Platform
				</p>
			</div>
		</>
	);
}
