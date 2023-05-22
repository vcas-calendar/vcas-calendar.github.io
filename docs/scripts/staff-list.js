import { LitElement, html, css } from 'lit';
import yaml from 'js-yaml';

customElements.define('staff-list', class extends LitElement {
	static styles = css`
		dl {
			text-align: center;
			padding-left: 1.5em;
		}

		dl > div {
			display: flex;
			flex-direction: column;
			position: relative;
			margin: 1.5em 0;
		}

		dl > div::before,
		dl > div::after {
			content: "";
			display: block;
			width: 3.5em;
			height: 3.5em;
			position: absolute;
			top: 0.25em;
			left: -1.5em;
			border-radius: 50%;
			overflow: hidden;
			border-style: solid;
			border-width: 0.2em;
		}

		dl > div::before {
			box-shadow: lightgrey 0 0 0 0.05em;
		}

		dl > div::after {
			background-color: whitesmoke;
			background-size: contain;
			z-index: 2;
		}

		dl > div > * {
			border: solid 0.1em whitesmoke;
			padding-left: 1.75em;
		}

		dl > div > dt {
			font-weight: bold;
			font-size: 0.8em;
			width: 15em;
			line-height: 1;
			border-bottom: none;
			border-radius: 0.5em 0.5em 0 0;
			position: relative;
			top: 0.2em;
			z-index: 1;
		}

		dt::after {
			content: "";
			width: 0;
			height: 0;
			position: absolute;
			top: 0.1em;
			left: calc(100% - 0.1em);
			border-width: 0.8em;
			border-style: none solid solid none;
			border-right-color: transparent;
		}

		dt span {
			font-size: 0.5em;
			color: whitesmoke;
		}

		dd {
			margin: 0;
			position: relative;
			width: 15em;
			border-radius: 0 0.5em 0.5em 0.5em;
		}

		dd > div {
			background: whitesmoke;
			margin: 0.1em;
			padding-left: 0.5em;
			border-radius: 0 0.5em 0.5em 0.5em;
		}

		dl > div:nth-of-type(1) {
			color: crimson;
		}

		dl > div:nth-of-type(1) > * {
			background: crimson;
		}

		dl > div:nth-of-type(1)::after {
			background-image: url("./images/photo-hisakun.jpg");
		}

		dl > div:nth-of-type(2) {
			color: purple;
		}

		dl > div:nth-of-type(2) > * {
			background: purple;
		}

		dl > div:nth-of-type(2)::after {
			background-image: url("./images/photo-sequoia.jpg");
		}

		dl > div:nth-of-type(3) {
			color: dodgerblue;
		}

		dl > div:nth-of-type(3) > * {
			background: dodgerblue;
		}

		dl > div:nth-of-type(3)::after {
			background-image: url("./images/photo-100.png");
		}

		dl > div:nth-of-type(4) {
			color: goldenrod;
		}

		dl > div:nth-of-type(4) > * {
			background: goldenrod;
		}

		dl > div:nth-of-type(4)::after {
			background-image: url("./images/photo-eddyyade.jpg");
		}

		dl > div:nth-of-type(5) {
			color: forestgreen;
		}

		dl > div:nth-of-type(5) > * {
			background: forestgreen;
		}

		dl > div:nth-of-type(5)::after {
			background-image: url("./images/photo-pio.jpg");
		}
	`;

	static properties = {
		staffs: { attribute: false },
	};

	constructor()
	{
		super();
		this.staffs = [ ];
		(async () => {
			this.staffs = yaml.load(await (await fetch('./staffs.yaml')).text());
		})();
	}

	render()
	{
		return html`<dl>${ this.staffs.map(staff => html`<div>
				<dt><span>${ staff.role }</span></dt>
				<dd><div><a rel="external" href=${ staff.url } target="_blank">${ staff.name }</a></div></dd>
		</div>`) }</dl>`;
	}
});
