/** @url https://www.npmjs.com/package/fr-accordion */
declare module 'fr-accordion' {
	class Fraccordion {
		public destroy(): void;
		public init(): void;
		constructor(settings: {
			selector: string;
			headerSelector: string;
			headerIdPrefix?: string;
			panelSelector: string;
			panelIdPrefix?: string;
			firstPanelsOpenByDefault?: boolean;
			multiselectable?: boolean;
			readyClass?: string;
			transitionLength?: number;
		});
	}
	export default Fraccordion;
}

/** @url https://www.npmjs.com/package/fr-dialogmodal */
declare module 'fr-dialogmodal' {
	class Frdialogmodal {
		public destroy(): void;
		public init(): void;
		constructor(settings: {
			selector: string;
			modalSelector: string;
			openSelector: string;
			closeSelector: string;
			isAlert?: boolean;
			readyClass?: string;
			activeClass?: string;
		});
	}
	export default Frdialogmodal;
}

/** @url https://www.npmjs.com/package/fr-offcanvas */
declare module 'fr-offcanvas' {
	class Froffcanvas {
		public destroy(): void;
		public init(): void;
		constructor(settings: {
			selector: string;
			openSelector: string;
			closeSelector: string;
			preventClickOutside?: boolean;
			readyClass?: string;
			activeClass?: string;
		});
	}
	export default Froffcanvas;
}

/** @url https://www.npmjs.com/package/fr-tabs */
declare module 'fr-tabs' {
	class Frtabs {
		public destroy(): void;
		public init(): void;
		constructor(settings: {
			selector: string;
			tablistSelector: string;
			tabpanelSelector: string;
			tabsReadyClass?: string;
		});
	}
	export default Frtabs;
}
