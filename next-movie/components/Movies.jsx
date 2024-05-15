import Link from "next/link";

export default function Movies({ movies }) {
	const poster = "http://image.tmdb.org/t/p/w342";

	return (
		<>
			<div className="flex flex-wrap flex-row gap-4">
				{movies && movies.length > 0 ? (
					movies.map((movie) => (
						<div key={movie.id} className="w-[200px] text-center">
							<Link href={`/movie/${movie.id}`}>
								<img
									src={`${poster}${movie.poster_path}`}
									alt={movie.title}
									className="w-full hover:scale-105 transition-all"
								/>
							</Link>
							<h4>{movie.title}</h4>
							<span className="text-sm text-gray-500">
								{movie.release_date.split("-")[0]}
							</span>
						</div>
					))
				) : (
					<p>No movies available.</p>
				)}
			</div>
		</>
	);
}
