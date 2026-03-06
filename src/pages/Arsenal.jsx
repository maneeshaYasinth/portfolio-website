export default function Arsenal({ isDarkMode }) {
	return (
		<section
			id="arsenal"
			className={`py-32 transition-colors duration-500 ${
				isDarkMode ? 'bg-zinc-950' : 'bg-white'
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 md:px-12">
				<div id="skills" className="pt-24 border-t border-black/5">
					<div className="mb-16" data-aos="zoom-in-up" data-aos-duration="850">
						<h3 className="text-4xl md:text-6xl font-display font-extrabold uppercase italic tracking-tighter">
							Technical <span className="not-italic">Arsenal.</span>
						</h3>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
						<div className="space-y-6" data-aos="flip-left" data-aos-delay="80" data-aos-duration="850">
							<h4 className="text-xs font-mono uppercase tracking-[0.3em] text-accent font-bold pb-2 border-b border-accent/20">
								Cloud
							</h4>
							<div className="flex flex-wrap gap-2">
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									AWS
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Google Cloud
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Terraform
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									CloudFormation
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Serverless
								</span>
							</div>
						</div>

						<div className="space-y-6" data-aos="zoom-in-up" data-aos-delay="140" data-aos-duration="850">
							<h4 className="text-xs font-mono uppercase tracking-[0.3em] text-accent font-bold pb-2 border-b border-accent/20">
								Backend
							</h4>
							<div className="flex flex-wrap gap-2">
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Node.js
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Spring boot
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Python
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									PostgreSQL
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Redis
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									{/* gRPC */}
								</span>
							</div>
						</div>

						<div className="space-y-6" data-aos="flip-right" data-aos-delay="200" data-aos-duration="850">
							<h4 className="text-xs font-mono uppercase tracking-[0.3em] text-accent font-bold pb-2 border-b border-accent/20">
								Frontend
							</h4>
							<div className="flex flex-wrap gap-2">
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									React
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									TypeScript
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Next.js
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Tailwind CSS
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Framer Motion
								</span>
							</div>
						</div>

						<div className="space-y-6" data-aos="zoom-in-up" data-aos-delay="260" data-aos-duration="850">
							<h4 className="text-xs font-mono uppercase tracking-[0.3em] text-accent font-bold pb-2 border-b border-accent/20">
								DevOps
							</h4>
							<div className="flex flex-wrap gap-2">
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Docker
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Kubernetes
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									GitHub Actions
								</span>
								{/* <span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Prometheus
								</span>
								<span className="text-xs font-bold uppercase tracking-widest border border-black/10 px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-all cursor-default">
									Grafana
								</span> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
