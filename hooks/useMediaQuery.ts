"use client";
import { useState, useEffect } from 'react';

function useMediaQuery(query: string): boolean {
	
	const [matches, setMatches] = useState<boolean>(() => {
		if (typeof window !== 'undefined') {
			return window.matchMedia(query).matches;
		}
		return false; 
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const mediaQuery = window.matchMedia(query);
		const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
		setMatches(mediaQuery.matches);
		mediaQuery.addEventListener('change', handler);
	
		return () => mediaQuery.removeEventListener('change', handler);
	}, [query]);

	return matches;
}

export default useMediaQuery;
